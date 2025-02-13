export class GameState {
  constructor() {
    this.playerName = '';
    this.timeLimit = 0;
    this.currentLetter = '';
    this.camiloResponses = null;
    this.gameHistory = this.loadHistory();
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

  loadHistory() {
    const history = localStorage.getItem('gameHistory');
    return history ? JSON.parse(history) : [];
  }

  saveHistory(results) {
    this.gameHistory.unshift({
      date: new Date().toISOString(),
      letter: this.currentLetter,
      playerName: this.playerName,
      ...results
    });
    // Keep only last 10 games
    if (this.gameHistory.length > 10) {
      this.gameHistory.pop();
    }
    localStorage.setItem('gameHistory', JSON.stringify(this.gameHistory));
  }
}