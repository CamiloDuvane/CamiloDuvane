import { GameState } from './gameState.js';
import { CamiloAI } from './camiloAI.js';
import { UI } from './ui.js';
import { Validator } from './validator.js';
import { db } from './firebaseConfig.js';
import { collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

class Game {
  constructor() {
    this.state = new GameState();
    this.camilo = new CamiloAI();
    this.ui = new UI();
    this.validator = new Validator(this.camilo);
    this.playerStats = {};
    this.setupEventListeners();
    this.loadPlayerStats();
  }

  setupEventListeners() {
    document.getElementById('continue-btn')?.addEventListener('click', () => {
      const playerName = document.getElementById('player-name').value.trim();
      if (playerName) {
        this.state.setPlayerName(playerName);
        this.ui.showScreen('setup-screen');
      }
    });

    document.querySelectorAll('.time-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.setTimeLimit(parseInt(btn.dataset.time));
      });
    });

    document.getElementById('start-game-btn')?.addEventListener('click', () => {
      if (this.state.timeLimit) this.startGame();
    });

    document.getElementById('play-again-btn')?.addEventListener('click', () => {
      this.ui.showScreen('setup-screen');
    });

    document.getElementById('view-history-btn')?.addEventListener('click', () => {
      this.showHistory();
      this.ui.showScreen('history-screen');
      this.showPlayerRankings();
    });

    document.getElementById('back-to-results-btn')?.addEventListener('click', () => {
      this.ui.showScreen(document.getElementById('results-screen')?.classList.contains('active') ? 'results-screen' : 'welcome-screen');
    });

    document.getElementById('show-rankings-btn')?.addEventListener('click', () => {
      this.showPlayerRankings();
    });
  }

  startGame() {
    this.state.setRandomLetter();
    this.ui.updateLetterDisplay(this.state.currentLetter);
    this.ui.clearGameInputs(); 
    this.ui.showScreen('game-screen');
    this.startTimer();
    this.getCamiloResponses();
  }

  startTimer() {
    const timerBar = document.querySelector('.timer-bar');
    const timeLeft = document.querySelector('.time-left');
    
    if (!timerBar || !timeLeft) return;
    
    let remaining = this.state.timeLimit;
    timerBar.style.width = '100%';
    timeLeft.textContent = `${remaining}s`;
    
    clearInterval(this.timer);
    
    this.timer = setInterval(() => {
      remaining--;
      timerBar.style.width = `${(remaining / this.state.timeLimit) * 100}%`;
      timeLeft.textContent = `${remaining}s`;
      
      if (remaining <= 0) this.endGame();
    }, 1000);
  }

  async getCamiloResponses() {
    this.state.camiloResponses = await this.camilo.getResponses(this.state.currentLetter);
  }

  async endGame() {
    clearInterval(this.timer);
    
    const playerResponses = Array.from(document.querySelectorAll('.game-input')).reduce((acc, input) => {
      acc[input.id] = input.value.trim();
      return acc;
    }, {});
    
    document.querySelector('.content')?.classList.add('loading');

    try {
      const results = await this.validator.validateRound(playerResponses, this.state.camiloResponses || {}, this.state.currentLetter);
      this.state.saveHistory(results);
      await this.savePlayerStats(this.state.playerName, results);
      
      document.querySelector('.content')?.classList.remove('loading');
      this.ui.showResults(results);
      this.ui.showScreen('results-screen');
      
      const { level, experience, successRate } = this.camilo.intelligence;
      document.getElementById('camilo-level')?.textContent = level;
      document.getElementById('camilo-experience')?.textContent = `${experience % 100}/100`;
      document.getElementById('camilo-success-rate')?.textContent = `${Math.round(successRate)}%`;
    } catch (error) {
      console.error('Error ending game:', error);
      this.ui.showScreen('setup-screen');
    }
  }

  async savePlayerStats(playerName, results) {
    try {
      await addDoc(collection(db, "games"), {
        name: playerName,
        date: new Date().toISOString(),
        letter: this.state.currentLetter,
        playerPoints: results.totals.player,
        camiloPoints: results.totals.camilo,
        categories: results.categories,
        timestamp: Date.now()
      });
      await this.loadPlayerStats();
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  }

  async loadPlayerStats() {
    try {
      const q = query(collection(db, "games"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      
      this.playerStats = querySnapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        if (!acc[data.name]) acc[data.name] = { gamesPlayed: 0, totalPoints: 0, bestScore: 0 };
        acc[data.name].gamesPlayed++;
        acc[data.name].totalPoints += data.playerPoints;
        acc[data.name].bestScore = Math.max(acc[data.name].bestScore, data.playerPoints);
        return acc;
      }, {});
      
      this.showPlayerRankings();
    } catch (error) {
      console.error("Error loading from Firebase:", error);
    }
  }

  async showHistory() {
    try {
      const q = query(collection(db, "games"), orderBy("timestamp", "desc"), limit(10));
      const querySnapshot = await getDocs(q);
      this.ui.showHistory(querySnapshot.docs.map(doc => doc.data()));
    } catch (error) {
      console.error("Error loading history from Firebase:", error);
    }
  }

  showPlayerRankings() {
    const rankingsDiv = document.getElementById('players-ranking');
    if (!rankingsDiv) return;

    rankingsDiv.innerHTML = Object.entries(this.playerStats)
      .map(([name, { gamesPlayed, totalPoints, bestScore }], index) => `
        <div class="player-ranking-item">
          <div>
            <span class="rank">#${index + 1}</span>
            <span class="name">${name}</span>
          </div>
          <div class="stats">
            <span>Jogos: ${gamesPlayed}</span>
            <span>Média: ${Math.round(totalPoints / gamesPlayed)} pontos</span>
            <span>Melhor: ${bestScore} pontos</span>
          </div>
        </div>
      `).join('') || '<p>Nenhum histórico disponível</p>';
  }
}

window.addEventListener('DOMContentLoaded', () => new Game());
