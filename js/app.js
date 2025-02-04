import { GameState } from './gameState.js';
import { CamiloAI } from './camiloAI.js';
import { UI } from './ui.js';
import { Validator } from './validator.js';

class Game {
  constructor() {
    this.state = new GameState();
    this.camilo = new CamiloAI();
    this.ui = new UI();
    this.validator = new Validator(this.camilo);
    this.playerStats = this.loadPlayerStats();
    
    this.showTopPlayers();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Welcome Screen
    document.getElementById('continue-btn').addEventListener('click', () => {
      const playerName = document.getElementById('player-name').value.trim();
      if (playerName) {
        this.state.setPlayerName(playerName);
        this.ui.showScreen('setup-screen');
      }
    });

    // Setup Screen
    const timeButtons = document.querySelectorAll('.time-btn');
    timeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        timeButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.setTimeLimit(parseInt(btn.dataset.time));
      });
    });

    document.getElementById('start-game-btn').addEventListener('click', () => {
      if (this.state.timeLimit) {
        this.startGame();
      }
    });

    // Results Screen
    document.getElementById('play-again-btn')?.addEventListener('click', () => {
      this.ui.showScreen('setup-screen');
    });

    document.getElementById('view-history-btn')?.addEventListener('click', () => {
      this.ui.showHistory(this.state.gameHistory);
      this.ui.showScreen('history-screen');
    });

    // Add new event listener for view ranking button in welcome screen
    document.getElementById('view-ranking-btn')?.addEventListener('click', () => {
      this.ui.showScreen('history-screen');
      this.showPlayerRankings();
    });

    // Back to welcome screen from history/ranking
    document.getElementById('back-to-results-btn')?.addEventListener('click', () => {
      // If we came from results screen
      if (document.getElementById('results-screen').classList.contains('active')) {
        this.ui.showScreen('results-screen');
      } else {
        // If we came from welcome screen
        this.ui.showScreen('welcome-screen');
      }
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
    
    if (this.timer) {
      clearInterval(this.timer);
    }
    
    this.timer = setInterval(() => {
      remaining--;
      const percentage = (remaining / this.state.timeLimit) * 100;
      timerBar.style.width = `${percentage}%`;
      timeLeft.textContent = `${remaining}s`;
      
      if (remaining <= 0) {
        this.endGame();
      }
    }, 1000);
  }

  async getCamiloResponses() {
    this.state.camiloResponses = await this.camilo.getResponses(this.state.currentLetter);
  }

  async endGame() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    
    // Collect all inputs from the form
    const playerResponses = {
      name: document.getElementById('name')?.value || '',
      place: document.getElementById('place')?.value || '',
      country: document.getElementById('country')?.value || '',
      animal: document.getElementById('animal')?.value || '',
      object: document.getElementById('object')?.value || '',
      color: document.getElementById('color')?.value || '',
      element: document.getElementById('element')?.value || '',
      profession: document.getElementById('profession')?.value || '',
      media: document.getElementById('media')?.value || '',
      brand: document.getElementById('brand')?.value || '',
      plant: document.getElementById('plant')?.value || '',
      verb: document.getElementById('verb')?.value || '',
      adjective: document.getElementById('adjective')?.value || '',
      emotion: document.getElementById('emotion')?.value || '',
      continent: document.getElementById('continent')?.value || '',
      fruit: document.getElementById('fruit')?.value || ''
    };

    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.classList.add('loading');
    }

    try {
      const results = await this.validator.validateRound(
        playerResponses,
        this.state.camiloResponses || {},
        this.state.currentLetter
      );

      this.state.saveHistory(results); 
      this.savePlayerStats(this.state.playerName, results);
      
      if (contentElement) {
        contentElement.classList.remove('loading');
      }

      this.ui.showResults(results);
      this.ui.showScreen('results-screen');

      // Update intelligence display
      const intelligence = this.camilo.intelligence;
      const levelElement = document.getElementById('camilo-level');
      const experienceElement = document.getElementById('camilo-experience');
      const successRateElement = document.getElementById('camilo-success-rate');

      if (levelElement) {
        levelElement.textContent = intelligence.level;
      }
      if (experienceElement) {
        experienceElement.textContent = `${intelligence.experience % 100}/100`;
      }
      if (successRateElement) {
        successRateElement.textContent = `${Math.round(intelligence.successRate)}%`;
      }
    } catch (error) {
      console.error('Error ending game:', error);
      this.ui.showScreen('setup-screen');
    }
  }

  loadPlayerStats() {
    const stats = localStorage.getItem('playerStats');
    return stats ? JSON.parse(stats) : {};
  }

  savePlayerStats(playerName, results) {
    if (!this.playerStats[playerName]) {
      this.playerStats[playerName] = {
        gamesPlayed: 0,
        totalPoints: 0,
        averagePoints: 0,
        bestScore: 0
      };
    }

    const stats = this.playerStats[playerName];
    const playerPoints = results.totals.player;

    stats.gamesPlayed++;
    stats.totalPoints += playerPoints;
    stats.averagePoints = Math.round(stats.totalPoints / stats.gamesPlayed);
    stats.bestScore = Math.max(stats.bestScore, playerPoints);

    localStorage.setItem('playerStats', JSON.stringify(this.playerStats));
  }

  showTopPlayers() {
    const topPlayersList = document.getElementById('top-players-list');
    if (!topPlayersList) return;

    // Convert player stats to array and sort by average points
    const rankings = Object.entries(this.playerStats)
      .map(([name, stats]) => ({ name, ...stats }))
      .sort((a, b) => b.averagePoints - a.averagePoints);

    // Get top 3 players
    const topPlayers = rankings.slice(0, 3);

    topPlayersList.innerHTML = topPlayers.length ? 
      topPlayers.map((player, index) => `
        <div class="top-player-item">
          <div>
            <span class="position">#${index + 1}</span>
            <span class="name">${player.name}</span>
          </div>
          <div class="stats">
            <span>Média: ${player.averagePoints} pontos</span>
          </div>
        </div>
      `).join('') 
      : '<p>Ainda não há jogadores registrados</p>';
  }

  showPlayerRankings() {
    const rankingsDiv = document.getElementById('players-ranking');
    if (!rankingsDiv) return;

    // Convert player stats to array and sort by average points
    const rankings = Object.entries(this.playerStats)
      .map(([name, stats]) => ({ name, ...stats }))
      .sort((a, b) => b.averagePoints - a.averagePoints);

    rankingsDiv.innerHTML = rankings.length ? rankings.map((player, index) => `
      <div class="player-ranking-item">
        <div>
          <span class="rank">#${index + 1}</span>
          <span class="name">${player.name}</span>
        </div>
        <div class="stats">
          <span>Jogos: ${player.gamesPlayed}</span>
          <span>Média: ${player.averagePoints} pontos</span>
          <span>Melhor: ${player.bestScore} pontos</span>
        </div>
      </div>
    `).join('') : '<p>Nenhum histórico de jogadores disponível</p>';
  }
}

// Start the game when the page loads
window.addEventListener('DOMContentLoaded', () => {
  new Game();
});