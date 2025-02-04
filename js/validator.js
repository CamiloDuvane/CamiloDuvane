export class Validator {
  constructor(camiloAI) {
    this.camiloAI = camiloAI;
  }

  async validateRound(playerResponses, camiloResponses, letter) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const results = {
      categories: {},
      totals: {
        player: 0,
        camilo: 0
      }
    };

    const categories = [
      'name', 'place', 'country', 'animal', 'object', 'color', 
      'element', 'profession', 'media', 'brand', 'plant', 'verb',
      'adjective', 'emotion', 'continent', 'fruit'
    ];

    categories.forEach(category => {
      // Make sure to get the player's input, even if empty
      const playerAnswer = (playerResponses[category] || '').trim().toUpperCase();
      const camiloAnswer = (camiloResponses[category] || '').trim().toUpperCase();

      let playerPoints = 0;
      let camiloPoints = 0;

      // Only validate if there's an answer and it starts with the correct letter
      const playerValid = playerAnswer && 
                         playerAnswer.startsWith(letter) && 
                         this.camiloAI.isValidWord(category, playerAnswer, letter);
      
      const camiloValid = camiloAnswer && 
                         camiloAnswer.startsWith(letter) && 
                         this.camiloAI.isValidWord(category, camiloAnswer, letter);

      if (playerValid && camiloValid) {
        if (playerAnswer === camiloAnswer) {
          playerPoints = 5;
          camiloPoints = 5;
        } else {
          playerPoints = 10;
          camiloPoints = 10;
        }
      } else if (playerValid) {
        playerPoints = 10;
      } else if (camiloValid) {
        camiloPoints = 10;
      }

      // Always include the player's answer in results, even if invalid
      results.categories[category] = {
        player: {
          answer: playerAnswer || '-', // Show dash if empty
          points: playerPoints,
          valid: playerValid
        },
        camilo: {
          answer: camiloAnswer || '-', // Show dash if empty
          points: camiloPoints,
          valid: camiloValid
        }
      };

      results.totals.player += playerPoints;
      results.totals.camilo += camiloPoints;
    });

    this.camiloAI.increaseIntelligence(results.totals.camilo);

    return results;
  }
}