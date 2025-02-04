import { collection, addDoc, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

export class GameState {
  constructor(db) {
    this.db = db;
    this.playerName = '';
    this.timeLimit = 0;
    this.currentLetter = '';
    this.camiloResponses = null;
    this.gameHistory = [];
    this.loadHistory();
  }

  setPlayerName(name) {
    this.playerName = name;
  }

  setTimeLimit(seconds) {
    this.timeLimit = seconds;
  }

  setRandomLetter() {
    // Removed letters with few word options and kept those with more possibilities
    const letters = 'ABCDEFGHIJLMNOPQRSTUVXZ';
    
    // Get previously used letters from last 3 games to avoid repetition
    const recentLetters = this.gameHistory
      .slice(0, 3)
      .map(game => game.letter);
    
    // Filter out recently used letters
    const availableLetters = letters
      .split('')
      .filter(letter => !recentLetters.includes(letter));
    
    // If all letters were recently used, use the full set
    const letterPool = availableLetters.length > 0 ? availableLetters : letters.split('');
    
    // Select random letter from available pool
    this.currentLetter = letterPool[Math.floor(Math.random() * letterPool.length)];
  }

  async loadHistory() {
    try {
      const q = query(
        collection(this.db, "gameHistory"), 
        orderBy("date", "desc"),
        limit(10)
      );
      
      const querySnapshot = await getDocs(q);
      this.gameHistory = [];
      querySnapshot.forEach((doc) => {
        this.gameHistory.push(doc.data());
      });
    } catch (error) {
      console.error("Error loading history:", error);
      this.gameHistory = [];
    }
  }

  async saveHistory(results) {
    try {
      const gameData = {
        date: new Date().toISOString(),
        letter: this.currentLetter,
        playerName: this.playerName,
        ...results
      };

      await addDoc(collection(this.db, "gameHistory"), gameData);
      this.gameHistory.unshift(gameData);
      
      // Keep only last 10 games in memory
      if (this.gameHistory.length > 10) {
        this.gameHistory.pop();
      }
    } catch (error) {
      console.error("Error saving history:", error);
    }
  }
}