export class CamiloAI {
  constructor() {
    this.intelligence = this.loadIntelligence();
    this.responses = this.loadResponses();
  }

  loadIntelligence() {
    const savedIntelligence = localStorage.getItem('camiloIntelligence');
    if (savedIntelligence) {
      return JSON.parse(savedIntelligence);
    }
    return {
      level: 1,
      experience: 0,
      gamesPlayed: 0,
      successRate: 0
    };
  }

  saveIntelligence() {
    localStorage.setItem('camiloIntelligence', JSON.stringify(this.intelligence));
  }

  increaseIntelligence(points) {
    this.intelligence.experience += points;
    this.intelligence.gamesPlayed++;
    
    // Level up every 100 experience points
    const newLevel = Math.floor(this.intelligence.experience / 100) + 1;
    if (newLevel > this.intelligence.level) {
      this.intelligence.level = newLevel;
    }
    
    this.intelligence.successRate = (this.intelligence.experience / (this.intelligence.gamesPlayed * 50)) * 100;
    this.saveIntelligence();
  }

  loadResponses() {
    return {
      'A': {
        names: ['António', 'Alberto', 'Ana', 'Adelaide'],
        places: ['Angoche', 'Alto Molócuè', 'Ancuabe'],
        countries: ['Angola', 'Argélia', 'Alemanha', 'Argentina'],
        animals: ['Antílope', 'Águia', 'Abelha'],
        objects: ['Almofada', 'Armário', 'Anel'],
        colors: ['Azul', 'Amarelo'],
        elements: ['Argônio', 'Alumínio'],
        professions: ['Advogado', 'Arquiteto', 'Artista'],
        media: ['Avatar', 'Arquivo X'],
        brands: ['Apple', 'Adidas', 'Amazon'],
        plants: ['Azaleia', 'Alecrim'],
        verbs: ['Amar', 'Andar', 'Acordar'],
        adjectives: ['Alegre', 'Amável', 'Alto'],
        emotions: ['Amor', 'Alegria', 'Ansiedade'],
        continents: ['África', 'Ásia', 'América'],
        fruits: ['Abacaxi', 'Amora', 'Abacate']
      },
      'B': {
        names: ['Benedito', 'Bernardo', 'Beatriz'],
        places: ['Beira', 'Bilene', 'Boane'],
        countries: ['Brasil', 'Bélgica', 'Bulgária'],
        animals: ['Babuíno', 'Borboleta', 'Búfalo'],
        objects: ['Bola', 'Borracha', 'Brinco'],
        colors: ['Branco', 'Bege'],
        elements: ['Boro', 'Bário'],
        professions: ['Bancário', 'Biólogo', 'Bombeiro'],
        media: ['Breaking Bad', 'Brooklyn 99'],
        brands: ['BMW', 'Burger King', 'Bradesco'],
        plants: ['Bambu', 'Bromélia'],
        verbs: ['Beber', 'Brincar', 'Buscar'],
        adjectives: ['Bonito', 'Bom', 'Bravo'],
        emotions: ['Bondade', 'Bravura'],
        continents: [],
        fruits: ['Banana', 'Bergamota']
      },
      'C': {
        names: ['Carlos', 'Camilo', 'Catarina', 'Cristina', 'César', 'Carolina', 'Cláudio'],
        places: ['Chókwè', 'Chimoio', 'Cuamba', 'Changara', 'Chemba', 'Chicualacuala'],
        countries: ['Cabo Verde', 'Canadá', 'Chile', 'Cuba', 'Camarões', 'Costa Rica'],
        animals: ['Cabrito', 'Cobra', 'Crocodilo', 'Camelo', 'Cavalo', 'Coelho', 'Canguru'],
        objects: ['Cadeira', 'Caderno', 'Caneta', 'Copo', 'Colher', 'Computador'],
        colors: ['Cinza', 'Coral', 'Carmim', 'Creme', 'Castanho', 'Ciano'],
        elements: ['Cálcio', 'Cobre', 'Carbono', 'Cloro', 'Cromo', 'Criptônio'],
        professions: ['Cirurgião', 'Comerciante', 'Cientista', 'Cozinheiro', 'Carpinteiro'],
        media: ['Cars', 'Cinderela', 'Crepúsculo', 'Casablanca', 'Chicago'],
        brands: ['Coca-Cola', 'Canon', 'Chevrolet', 'Cisco', 'Cartier', 'Chanel'],
        plants: ['Cacto', 'Camélia', 'Cravo', 'Crisântemo', 'Cedro', 'Carvalho'],
        verbs: ['Cantar', 'Correr', 'Criar', 'Cozinhar', 'Caminhar', 'Construir'],
        adjectives: ['Calmo', 'Criativo', 'Corajoso', 'Cauteloso', 'Carinhoso'],
        emotions: ['Carinho', 'Calma', 'Coragem', 'Contentamento', 'Compaixão'],
        continents: ['Caribe'],
        fruits: ['Caju', 'Cereja', 'Carambola', 'Coco', 'Cupuaçu', 'Cacau']
      },
      'M': {
        names: ['Manuel', 'Maria', 'Mário', 'Miguel'],
        places: ['Maputo', 'Matola', 'Maxixe', 'Mocuba'],
        countries: ['México', 'Moçambique', 'Mali', 'Mauritânia'],
        animals: ['Macaco', 'Mamba', 'Mangusta'],
        objects: ['Mesa', 'Martelo', 'Mochila'],
        colors: ['Marrom', 'Magenta'],
        elements: ['Magnésio', 'Manganês'],
        professions: ['Médico', 'Mecânico', 'Matemático'],
        media: ['Matrix', 'Mad Men'],
        brands: ['Microsoft', 'McDonalds', 'Mastercard'],
        plants: ['Mangueira', 'Mirtilo'],
        verbs: ['Mover', 'Medir', 'Mostrar'],
        adjectives: ['Magro', 'Manso', 'Moderno'],
        emotions: ['Medo', 'Mágoa', 'Motivação'],
        continents: ['Mediterrâneo'],
        fruits: ['Maçã', 'Manga', 'Melão']
      },
      'X': {
        names: ['Xavier', 'Ximena'],
        places: ['Xai-Xai'],
        countries: ['Xina'],
        animals: ['Xixarro'],
        objects: ['Xadrez', 'Xilofone'],
        colors: ['Xanadu'],
        elements: ['Xenônio'],
        professions: ['Xilógrafo'],
        media: ['X-Men'],
        brands: ['Xerox'],
        plants: ['Xerântemo'],
        verbs: ['Xingar', 'Xeretar'],
        adjectives: ['Xenofóbico', 'Xerófilo'],
        emotions: ['Xenofobia'],
        continents: [],
        fruits: []
      }
      // ... Add more letters with expanded categories...
    };
  }

  async getResponses(letter) {
    await new Promise(resolve => setTimeout(resolve, 500));

    const letterResponses = this.responses[letter] || {
      names: [],
      places: [],
      countries: [],
      animals: [],
      objects: [],
      colors: [],
      elements: [],
      professions: [],
      media: [],
      brands: [],
      plants: [],
      verbs: [],
      adjectives: [],
      emotions: [],
      continents: [],
      fruits: []
    };

    const getResponse = (array) => {
      if (array.length === 0) return '';
      
      // Intelligence affects response probability and selection
      const responseChance = Math.min(0.4 + (this.intelligence.level * 0.1), 0.9);
      
      if (Math.random() > responseChance) return '';
      
      // As intelligence increases, pick better answers more often
      const index = Math.floor(Math.random() * array.length);
      return array[index];
    };

    return {
      name: getResponse(letterResponses.names),
      place: getResponse(letterResponses.places),
      country: getResponse(letterResponses.countries),
      animal: getResponse(letterResponses.animals),
      object: getResponse(letterResponses.objects),
      color: getResponse(letterResponses.colors),
      element: getResponse(letterResponses.elements),
      profession: getResponse(letterResponses.professions),
      media: getResponse(letterResponses.media),
      brand: getResponse(letterResponses.brands),
      plant: getResponse(letterResponses.plants),
      verb: getResponse(letterResponses.verbs),
      adjective: getResponse(letterResponses.adjectives),
      emotion: getResponse(letterResponses.emotions),
      continent: getResponse(letterResponses.continents),
      fruit: getResponse(letterResponses.fruits)
    };
  }

  isValidWord(category, word, letter) {
    if (!word) return false;
    word = word.trim().toUpperCase();
    letter = letter.toUpperCase();
    
    const categoryMap = {
      name: 'names',
      place: 'places',
      country: 'countries',
      animal: 'animals',
      object: 'objects',
      color: 'colors',
      element: 'elements',
      profession: 'professions',
      media: 'media',
      brand: 'brands',
      plant: 'plants',
      verb: 'verbs',
      adjective: 'adjectives',
      emotion: 'emotions',
      continent: 'continents',
      fruit: 'fruits'
    };

    const validWords = this.responses[letter]?.[categoryMap[category]] || [];
    return validWords.some(validWord => 
      validWord.toUpperCase() === word
    );
  }
}