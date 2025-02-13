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
        names: ['António', 'Alberto', 'Ana', 'Adelaide', 'Alexandre', 'Amanda', 'Augusto', 'Alice', 'Aline', 'Arthur', 'Andreia', 'Alan', 'Ana Clara', 'Áurea', 'Alana', 'Adriano', 'Angelo', 'Aurora', 'Anabela', 'Arnaldo', 'Aziz', 'Amélia', 'Anselmo', 'Ariel', 'Álvaro', 'Abigail', 'Afonso', 'Ayla', 'Aurélio', 'Alfredo'],
       places: ['Angoche', 'Alto Molócuè', 'Ancuabe', 'Albufeira', 'Amadora', 'Anchilo', 'Aeroporto de Maputo', 'Alto Changane', 'Ampara', 'Alto Ligonha', 'Aube', 'Aldeia de Namapa', 'Aldeia dos Rios', 'Alto Benfica', 'Ancuaze', 'Ato-Molócuè', 'Agua Boa', 'Arua', 'Aldeia de Maúa', 'Alto Zambeze', 'Aldeia de Metangula', 'Alto Lúrio', 'Aldeia de Mueda', 'Aldeia de Marrupa', 'Alto Macue', 'Aldeia de Mecula', 'Aldeia de Mandimba', 'Aldeia de Mavago', 'Alto Molumbo', 'Aldeia de Malema'],
    countries: ['Angola', 'Argélia', 'Alemanha', 'Argentina', 'Áustria', 'Austrália', 'Arábia Saudita', 'Afeganistão', 'Albânia', 'Armênia', 'Azerbaijão', 'Andorra', 'Antígua e Barbuda', 'Aruba', 'Antártica', 'Anguilla', 'Aruba', 'África do Sul', 'Albânia', 'Azerbaijão', 'Arábia Saudita', 'Andorra', 'Antilhas Holandesas', 'Argélia', 'Aruba', 'Angola', 'Azerbaijão', 'Afeganistão', 'Antígua e Barbuda'],
      animals: ['Antílope', 'Águia', 'Abelha', 'Atum', 'Arara', 'Alce', 'Anta', 'Avestruz', 'Anaconda', 'Albatroz', 'Anchova', 'Anêmona', 'Acará', 'Arraia', 'Asno', 'Axolote', 'Abutre', 'Arraia-manta', 'Arminho', 'Arraia-pintada', 'Avestruz-africano', 'Arraia-elétrica', 'Arapaima', 'Alpaca', 'Abelharuco', 'Acará-bandeira', 'Aruanã', 'Abutre-barbudo', 'Anfíbio-gigante', 'Arraia-azul'],
      objects: ['Almofada', 'Armário', 'Anel', 'Alicate', 'Avião', 'Agenda', 'Alvo', 'Ampulheta', 'Aspirador', 'Afiador', 'Abajur', 'Anzol', 'Aquecedor', 'Alicate de unha', 'Antena', 'Aparelho de som', 'Apoio de livros', 'Algema', 'Amolador', 'Adoçante', 'Aviário', 'Abafador', 'Aparador', 'Avental', 'Aquário', 'Aresta', 'Agulha', 'Apoio para pés', 'Aspirador portátil', 'Açucareiro'],
       colors: ['Azul', 'Amarelo', 'Aço', 'Arco-íris', 'Acobreado', 'Alaranjado', 'Ametista', 'Açafrão', 'Amêndoa', 'Aqua', 'Avelã', 'Amora', 'Areia', 'Açúcar queimado', 'Ameixa', 'Alba', 'Ártico', 'Acetinado', 'Azul celeste', 'Azul turquesa', 'Aveludado', 'Azeitona', 'Azul petróleo', 'Amarelo queimado', 'Alba-claro', 'Alumínio', 'Amanhecer', 'Açafrão-claro', 'Aço escovado', 'Azul oceano'],
     elements: ['Argônio', 'Alumínio', 'Átomo', 'Ácido', 'Antimônio', 'Amerício', 'Água', 'Actínio', 'Astatínio', 'Ácido sulfúrico', 'Amoníaco', 'Arsênio', 'Ácido clorídrico', 'Aço', 'Ametista', 'Ágata', 'Arseniato', 'Aluminato', 'Ácido nítrico', 'Água-marinha', 'Anidrido carbônico', 'Ácido acético', 'Amoníaco anidro', 'Arseniato de chumbo', 'Antioxidante', 'Aro metálico', 'Acetato', 'Aloína', 'Ácido cianídrico', 'Ágata verde'],
  professions: [ 'Advogado', 'Arquiteto', 'Artista', 'Agricultor', 'Astronauta', 'Antropólogo', 'Ator', 'Arqueólogo', 'Analista', 'Açougueiro', 'Agente de viagens', 'Administrador', 'Alfaiate', 'Almirante', 'Apicultor', 'Assistente social', 'Armador', 'Agente penitenciário', 'Ajudante de cozinha', 'Auditor', 'Armeiro', 'Atleta', 'Agente de segurança', 'Anestesista', 'Apresentador', 'Árbitro', 'Agente imobiliário', 'Arrumador', 'Atendente', 'Avaliador'],
        media: ['Avatar', 'Arquivo X', 'A Praça é Nossa', 'Aventuras de um Jovem', 'Amigos', 'Avenida Brasil', 'A Bela e a Fera', 'Arrow', 'A Escolha Perfeita', 'A Lenda de Tarzan', 'A Lista de Schindler', 'A Chegada', 'A Origem', 'A Fantástica Fábrica de Chocolate', 'A Mulher Invisível', 'A Múmia', 'As Aventuras de Tintim', 'A Era do Gelo', 'Aladdin', 'Aquaman', 'Ação Radical', 'A Noite do Terror', 'A Casa das Estrelas', 'A Batalha Final', 'A Mente Brilhante', 'A Maldição do Espelho', 'A Última Esperança', 'A Verdadeira História', 'A Garota do Lago', 'A Revolução dos Bichos'],
       brands: ['Apple', 'Adidas', 'Amazon', 'Audi', 'Asus', 'Acer', 'Avon', 'AOC', 'Ambev', 'Amil', 'Airbnb', 'Asics', 'Armani', 'Anker', 'Aon', 'Acerbis', 'Apollo', 'Avianca', 'Alesis', 'Amanco', 'Alelo', 'Arcor', 'Austrian Airlines', 'AOC', 'Algar', 'Aiwa', 'Akai', 'Agfa', 'Azzaro', 'Alstom'],
       plants: ['Azaleia', 'Alecrim', 'Aloe Vera', 'Alface', 'Amendoeira', 'Arroz', 'Abóbora', 'Açaí', 'Amor-perfeito', 'Arruda', 'Alfarroba', 'Araçá', 'Arnica', 'Ameixeira', 'Aipo', 'Aveia'],
        verbs: ['Amar', 'Andar', 'Acordar', 'Almoçar', 'Apagar', 'Arrumar', 'Aplaudir', 'Atacar', 'Ajudar', 'Abrandar', 'Apressar', 'Adivinhar', 'Admirar', 'Acrescentar', 'Abolir', 'Acariciar', 'Abandonar', 'Aprovar', 'Atingir', 'Acomodar', 'Adoecer', 'Acalmar', 'Anotar', 'Ajustar', 'Adoçar', 'Aguentar', 'Assinar', 'Atravessar', 'Aventurar', 'Acompanhar'],
   adjectives: ['Alegre', 'Amável', 'Alto', 'Aventureiro', 'Atenuado', 'Arrogante', 'Antigo', 'Ágil', 'Agradável', 'Atencioso', 'Ambicioso', 'Amedrontador', 'Atraente', 'Avarento', 'Aflito', 'Amargo', 'Amistoso', 'Auspicioso', 'Azedo', 'Abstrato', 'Autêntico', 'Animoso', 'Apto', 'Assustador', 'Aconchegante', 'Afável', 'Amoroso', 'Arriscado', 'Atrevido', 'Afastado'],
     emotions: ['Amor', 'Alegria', 'Ansiedade', 'Admiração', 'Arrependimento', 'Alívio', 'Apatia', 'Aflição', 'Angústia', 'Agressividade', 'Amargura', 'Apreensão', 'Anseio', 'Atordoamento', 'Adoração', 'Afeto', 'Autoconfiança', 'Amizade', 'Aversão', 'Aconchego', 'Apavoramento', 'Adrenalina', 'Ardência', 'Autopiedade', 'Ambição', 'Alienação', 'Arroubo', 'Amargor', 'Animação', 'Ansiedade extrema'],
   continents: ['África', 'Ásia', 'América do Norte', 'América do Sul', 'Antártida', 'Austrália', 'América Central', 'Euroásia', 'Subcontinente Indiano', 'Península Arábica', 'Bacia do Pacífico', 'Crescente Fértil', 'Região do Sahel', 'Escandinávia', 'Balcãs', 'Península Ibérica', 'Europa Ocidental', 'Leste Europeu', 'África Subsaariana', 'Magrebe', 'Ártico', 'Sibéria', 'Himalaia', 'Planalto Tibetano', 'América Andina', 'Região Amazônica', 'Indochina', 'Ásia Central'],
       fruits: ['Abacaxi', 'Amora', 'Abacate', 'Acerola', 'Araticum', 'Açaí', 'Ameixa', 'Anona', 'Araçá', 'Avelã', 'Alfarroba', 'Alperce', 'Araticum-do-cerrado', 'Atemoia', 'Ameixa-amarela', 'Ameixa-vermelha', 'Araticum-mirim', 'Abiu', 'Ameixa-preta', 'Azeitona', 'Avelã-brasileira', 'Açaí-vermelho', 'Araticum-liso', 'Amêndoa', 'Araticum-de-terra-firme', 'Araticum-cagão', 'Araticum-liso', 'Ameixa-japonesa', 'Acerola-do-campo', 'Araticum-mole']
          },

      'B': {
       names: ['Bruno', 'Beatriz', 'Benedito', 'Bianca', 'Bernardo', 'Brígida', 'Beto', 'Bárbara', 'Baltazar', 'Breno', 'Bruna', 'Benjamim', 'Benício', 'Benedita', 'Bryan', 'Berta', 'Benvindo', 'Bartolomeu', 'Belmira', 'Boaventura', 'Belarmino', 'Benilde', 'Bonifácio', 'Brigite', 'Benvinda', 'Baldomero', 'Bernadete', 'Baía', 'Betina', 'Bento'],
      places: ['Beira', 'Bilene', 'Boane', 'Búzi', 'Búzi-Rio', 'Bárue', 'Benguerra', 'Bela-Vista', 'Balama', 'Buzi', 'Boma', 'Borro', 'Benguela', 'Benguerua', 'Buzi-Mocuba', 'Búzi-Litoral', 'Beirinha', 'Búzi-Zambeze', 'Beira-Mar', 'Bela-Praia', 'Búzi-Central', 'Búzi-Serra', 'Búzi-Delta', 'Búzi-Monte', 'Búzi-Estuário', 'Búzi-Interior', 'Búzi-Norte', 'Búzi-Sul', 'Búzi-Moçambicano', 'Búzi-Marítimo'],
   countries: ['Brasil', 'Bélgica', 'Burundi', 'Botsuana', 'Bolívia', 'Bangladesh', 'Bulgária', 'Bielorrússia', 'Bahamas', 'Barém', 'Benim', 'Butão', 'Bermudas', 'Burquina Faso', 'Bósnia e Herzegovina', 'Belize', 'Brunei', 'Birmânia', 'Barbados', 'Burkina', 'Bolívia', 'Bermuda', 'Bielorrússia', 'Bangladesh', 'Bahrein', 'Bissau', 'Burquina Faso', 'Bora Bora', 'Boavista', 'Benim'],
     animals: ['Burro', 'Bicho-preguiça', 'Bicho-da-seda', 'Baleia', 'Bicho-carpinteiro', 'Borboleta', 'Bicho-pau', 'Bagre', 'Barata', 'Bicho-geográfico', 'Besouro', 'Bicho-do-pé', 'Bicho-de-conta', 'Bicho-da-goiaba', 'Barracuda', 'Bicho-mineiro', 'Bicho-da-cana', 'Bicho-da-maçã', 'Bicho-da-laranja', 'Bicho-do-coco', 'Bicho-da-farinha', 'Bicho-da-mandioca', 'Bicho-da-uva', 'Bicho-da-mamona', 'Bicho-da-soja', 'Bicho-da-manga', 'Bicho-da-banana', 'Bicho-da-couve', 'Bicho-da-batata'],
     objects: [ 'Bola', 'Balde', 'Borracha', 'Balança', 'Bandeira', 'Botão', 'Bancada', 'Bengala', 'Bolsa', 'Bico', 'Bandeja', 'Brinquedo', 'Banco', 'Bule', 'Bacia', 'Borracha de apagar', 'Bocal', 'Berço', 'Bomba', 'Baú', 'Broche', 'Bengaleiro', 'Borracha líquida', 'Bússola', 'Bóia', 'Barra de ferro', 'Borracha sintética', 'Bucha', 'Bexiga', 'Bafômetro'],
      colors: ['Branco', 'Bege', 'Bordô', 'Bronze', 'Burro-quando-foge', 'Berinjela', 'Borgonha', 'Banana', 'Baga', 'Bambu', 'Baleia', 'Báltico', 'Barro', 'Bermuda', 'Bico-de-pato', 'Betume', 'Bistrô', 'Baunilha', 'Baleal', 'Botânica', 'Brisa', 'Barbearia', 'Bebê', 'Brilhante', 'Borrão', 'Bicicleta', 'Bandeira', 'Borboleta', 'Bacaba', 'Boêmia'],
    elements: ['Boro', 'Berílio', 'Bário', 'Bismuto', 'Bohrônio', 'Berkélio', 'Bromo', 'Bismuto-trióxido', 'Bicarbonato', 'Benzeno', 'Benzina', 'Boro-trifluoreto', 'Boro-óxido', 'Boro-nitreto', 'Bismuto-sulfeto', 'Bromo-cloro', 'Bromo-trifluoreto', 'Benzofenona', 'Bicarbonato de sódio', 'Bicarbonato de cálcio', 'Boro-fósforo', 'Boro-alumínio', 'Bromo-xileno', 'Bromo-iodo', 'Boro-carbono', 'Boro-silício', 'Boro-bismuto', 'Boro-zinco', 'Bromo-etano', 'Boro-germânio'],
 professions: [ 'Bancário', 'Barbeiro', 'Biólogo', 'Bombeiro', 'Bibliotecário', 'Barman', 'Baterista', 'Bailarino', 'Bombeiro Civil', 'Bartender', 'Biotecnólogo', 'Borracheiro', 'Brigadista', 'Boticário', 'Boxeador', 'Biomédico', 'Bancário Digital', 'Bombeiro Militar', 'Biólogo Marinho', 'Biógrafo', 'Biólogo Ambiental', 'Boticário Homeopata', 'Borracheiro Automotivo', 'Bombeiro Industrial', 'Bancário Internacional', 'Biólogo Genético', 'Biólogo Florestal', 'Barista', 'Biólogo Microbiólogo'],
       media: ['Batman', 'Breaking Bad', 'Bambi', 'Bastardos Inglórios', 'Blade Runner', 'Bob Esponja', 'Brooklyn Nine-Nine', 'Branca de Neve', 'Bee Movie', 'Bad Boys', 'Borat', 'Bebê Rena', 'Babel', 'Big Brother', 'BoJack Horseman', 'Barbie', 'Banshee', 'Ben 10', 'Beyblade', 'Bambi 2', 'Banshee', 'Bacurau', 'Beyoncé: Life is But a Dream', 'Bíblia em Ação', 'Bling Empire', 'Big Bang Theory', 'Buffy', 'Black Mirror', 'Blue Planet', 'Blippi'],
      brands: ['BMW', 'Bic', 'Bvlgari', 'Bose', 'Burger King', 'Bershka', 'Boss', 'Brastemp', 'Bicicross', 'Beyoncé', 'Burberry', 'Baden', 'Blue Bird', 'Bicicleta Caloi', 'Ball', 'Bimbo', 'Blizzard', 'Bridgestone', 'Boca Rosa', 'Bravecto', 'Bacardi', 'Benetton', 'Banana Republic', 'Billionaire', 'Bialetti', 'Bridgestone', 'Bally', 'Bose SoundLink'],
      plants: ['Bananeira', 'Bambu', 'Beldroega', 'Borragem', 'Brócolis', 'Boca-de-lobo', 'Bico-de-papagaio', 'Bergamota', 'Benzoino', 'Balsa', 'Balança', 'Bauhinia', 'Bracatinga', 'Bocaiúva', 'Bromélia', 'Boca-de-lobo', 'Bambu-mossô', 'Beldroega-do-campo', 'Bergamot', 'Bucaré', 'Bambu-roseira', 'Bertolonia', 'Buarque', 'Bromélia-azul', 'Brisa-do-mato', 'Balsa-guaçu', 'Bermuda', 'Balança-pendente', 'Bucha-de-barriga', 'Buxus', 'Babosa'],
       verbs: ['Beber', 'Brincar', 'Bailar', 'Borrifar', 'Bater', 'Buscar', 'Burlar', 'Barbear', 'Bradar', 'Brisar', 'Baldar', 'Banhar', 'Borrifar', 'Bolinar', 'Baldar', 'Bicicrossar', 'Balançar', 'Brocar', 'Batizar', 'Bandear', 'Bancar', 'Burlar', 'Bilhar', 'Baquear', 'Borrar', 'Babear', 'Biscotar', 'Baldar-se', 'Burlar-se', 'Bancar-se'],
  adjectives: ['Bonito', 'Brilhante', 'Belo', 'Bravo', 'Bastante', 'Básico', 'Bizarro', 'Barato', 'Branco', 'Bizarro', 'Baldio', 'Banal', 'Bastardo', 'Bênção', 'Borrado', 'Bacalhau', 'Bastante', 'Brutal', 'Bajulador', 'Borratado', 'Batalhador', 'Batedor', 'Bombo', 'Balançado', 'Bastão', 'Bimbo', 'Barro', 'Básico', 'Benéfico'],
    emotions: ['Baforada', 'Beleza', 'Bem-estar', 'Barganha', 'Bem-humorado', 'Batalha', 'Bola de neve', 'Baque emocional', 'Bofetada emocional', 'Brilho no olhar', 'Boca aberta', 'Bicho-papão', 'Barulho mental', 'Bofetada de amor', 'Balanço emocional', 'Bela tristeza', 'Batalha interna', 'Batimento acelerado', 'Bicho torto', 'Bossa', 'Bate-coração', 'Banho de energia', 'Bicho-feio', 'Baldio de felicidade', 'Bate-bate', 'Bate-papo', 'Bando de alegrias', 'Brado de luta'],
  continents: [],
      fruits: ['Banana', 'Bacaba', 'Buriti', 'Bacupari', 'Bergamota', 'Biribá', 'Bromélia', 'Baru', 'Bacupari-miúdo', 'Bata', 'Batata-doce', 'Bacaba-da-amazônia', 'Buriti-vermelho', 'Babaçu', 'Baleira', 'Bacaba-de-leque', 'Baga-de-tucum', 'Baga-de-umbu', 'Bacupari-gigante', 'Bacupari-rasteiro', 'Biribá-do-mato', 'Baga-de-joá', 'Baga-de-sabugueiro', 'Baga-de-tucumanzeiro', 'Banana-roxa', 'Bacaba-paulista', 'Bacupari-das-rochas', 'Bacupari-do-cerrado']     
      },
      
      'C': {
       names: ['Carlos', 'Catarina', 'Cláudio', 'Camilo', 'Cristiano', 'Cássia', 'Célia', 'Célio', 'Catarina', 'Carlos Eduardo', 'César', 'Cláudia', 'Cristiane', 'Célio André', 'Carla', 'Carmo', 'Carmen', 'Cauã', 'Camilo', 'Clarice', 'Cristovão', 'Cássio', 'Clara', 'Catarina', 'Carlos Alberto', 'Carolina', 'Cecília', 'Cleusa', 'César Augusto', 'Cleyton', 'Cátia'],
      places: ['Cabo Delgado', 'Cazenga', 'Cuito', 'Cabo Frio', 'Carapira', 'Castelo de Vide', 'Cabo Verde', 'Camarões', 'Caldas da Rainha', 'Caldas Novas', 'Cascais', 'Campo Grande', 'Ceará', 'Cabo Polônio', 'Cabo Frio', 'Caxito', 'Canela', 'Cacimba de Dentro', 'Campos do Jordão', 'Curitiba', 'Cascavel', 'Conceição do Coité', 'Colombo', 'Cachoeira', 'Campo Mourão', 'Cuiabá', 'Cabo da Boa Esperança', 'Caconde', 'Cacoal', 'Cachoeiro de Itapemirim'],
   countries: ['Cabo Verde', 'Camarões', 'Colômbia', 'Canadá', 'Chile', 'China', 'Cingapura', 'Catar', 'Congo', 'Cazaquistão', 'Croácia', 'Czech Republic', 'Cuba', 'Costa Rica', 'Catar', 'Cabo Verde', 'Cingapura', 'Camarões', 'Czechia', 'Cozumel', 'Cabo Frio', 'Cingapura', 'Chipre', 'Catar', 'Congo-Brazzaville', 'Cazaquistão', 'Camboja', 'Cingapura'],
     animals: ['Cavalo', 'Cachorro', 'Canguru', 'Cervo', 'Cobra', 'Cacatua', 'Camarão', 'Codorna', 'Corvo', 'Cervo', 'Cachalote', 'Cacau', 'Caiçara', 'Cachorrinho', 'Cacique', 'Cavalo-marinho', 'Codorna', 'Corvo', 'Cacatua', 'Cobra Coral', 'Cachorrinho', 'Cavalinho-marinho', 'Cachorro-quente', 'Corvo', 'Cervo-de-patas-brancas', 'Cacatua', 'Cachorrão', 'Cacau', 'Cervos-de-cauda-branca'],
     objects: ['Cadeira', 'Caderno', 'Carro', 'Copo', 'Caneta', 'Camiseta', 'Cesto', 'Caixa', 'Corda', 'Canoa', 'Computador', 'Câmara', 'Cinto', 'Camiseta', 'Canivete', 'Cafeteira', 'Candelabro', 'Caderno de notas', 'Cartaz', 'Calculadora', 'Cadeira de escritório', 'Cesta', 'Canudo', 'Copo de vidro', 'Carregador', 'Caixote', 'Cachimbo', 'Cloroformo', 'Caixa de ferramentas', 'Cestinha', 'Coxinha'],
      colors: ['Cinza', 'Caramelo', 'Ciano', 'Cores pastel', 'Cobre', 'Clássico', 'Claro', 'Céu', 'Creme', 'Champagne', 'Cores quentes', 'Cores frias', 'Citrino', 'Cores vivas', 'Cores metálicas', 'Carvão', 'Canela', 'Carmesim', 'Café', 'Cavalo', 'Crespo', 'Cintilante', 'Calipso', 'Carmim', 'Ciano', 'Cores neutras', 'Ceruleu', 'Cajá'],
    elements: ['Cálcio', 'Carbono', 'Cobre', 'Cromo', 'Cloro', 'Césio', 'Cálcio', 'Cobalto', 'Cádmio', 'Cobalto', 'Cálcio', 'Cloro', 'Cobre', 'Césio', 'Cromo', 'Carbono', 'Cálcio', 'Cálcio', 'Cádmio', 'Cobalto', 'Cálcio', 'Cobalto', 'Cloro', 'Cobalto', 'Cobalto', 'Cloro', 'Carbono', 'Cálcio', 'Cromo'],
 professions: ['Cabeleireiro', 'Cientista', 'Cozinheiro', 'Carpinteiro', 'Contador', 'Caminhoneiro', 'Cartógrafo', 'Cirurgião', 'Chef', 'Cineasta', 'Consultor', 'Cortador de pedras', 'Comerciante', 'Cabeleireiro', 'Costureiro', 'Cortador de grama', 'Coletor de lixo', 'Confeiteiro', 'Cientista de dados', 'Cartógrafo', 'Consultor de vendas', 'Coreógrafo', 'Chefe de cozinha', 'Cinegrafista', 'Contador', 'Coordenador de marketing', 'Compositor', 'Costureira', 'Cuidador de animais', 'Consultor de TI'],
       media: ['Cinepolis', 'Canal Viva', 'CQC', 'Clube da Galinha', 'Cacau Show', 'Cultura', 'Cineplex', 'Câmara de Comércio', 'Canal Futura', 'Cineastas', 'Coração Valente', 'Contos de Fada', 'Cidades e Cultura', 'Cinema Novo', 'Caminhos da Mente', 'Cenas do Cotidiano', 'Cultura e Arte', 'Cidadania e Cidadãos', 'Canal Digital', 'Canal de TV', 'Cultura na Web', 'Campeões do Ano', 'Curiosidades', 'Caminhos da Paz', 'Café Cultura', 'Caminhos do Coração', 'Canal do Conhecimento', 'Clube de Cinema'],
      brands: ['Coca-Cola', 'Canon', 'Cartier', 'Colgate', 'Chevrolet', 'C&A', 'Chanel', 'Cinemark', 'Cinemagic', 'Coca-Cola', 'Clarks', 'Cacau Show', 'Café Pilão', 'Carrefour', 'Casio', 'Cinemark', 'Carolina Herrera', 'Coca-Cola', 'Cosmopolitan', 'Coca-Cola Zero', 'Crocs', 'Cinemas UCI', 'Cacharel', 'Ceccato', 'Cosméticos Natura', 'Cachoeira', 'Cargill', 'C&A Fashion'],
      plants: ['Cabeludinha', 'Cactos', 'Camarão', 'Canela', 'Capim', 'Cabelinho de milho', 'Carqueja', 'Cipreste', 'Cipó', 'Cabeludo', 'Cabeluda', 'Cabeludo de estrela', 'Cabeludo de roda', 'Camomila', 'Capuchinha', 'Cássia', 'Cabeludinho', 'Cana-de-açúcar', 'Cabeludo-de-nova', 'Cebola', 'Cipo-de-coração', 'Cucumis', 'Cabeludo de estrela', 'Cabeludo de orelha', 'Café', 'Carambola', 'Cabeludo-de-metro', 'Cabeludo-de-folha', 'Cabeludo de folha preta', 'Cabeludo das flores'],
       verbs: ['Correr', 'Comer', 'Cantar', 'Caminhar', 'Criar', 'Cortar', 'Correr atrás', 'Cair', 'Conquistar', 'Colher', 'Cuidar', 'Construir', 'Converter', 'Conectar', 'Contar', 'Cumprir', 'Convencer', 'Ceder', 'Chorar', 'Chamar', 'Cozinhar', 'Criar', 'Construir', 'Ceder', 'Caber', 'Compreender', 'Caçar', 'Chutar', 'Cair'],
  adjectives: ['Claro', 'Comum', 'Certo', 'Cauteloso', 'Criativo', 'Calmo', 'Carinhoso', 'Curioso', 'Contente', 'Caloroso', 'Cativante', 'Companheiro', 'Corajoso', 'Chato', 'Cínico', 'Cúbico', 'Comodista', 'Competente', 'Criterioso', 'Cômodo', 'Cansativo', 'Confiante', 'Correto', 'Comedido', 'Contundente', 'Cômodo', 'Curvado', 'Causador', 'Calorento'],
    emotions: ['Coragem', 'Curiosidade', 'Cansaço', 'Culpa', 'Confiança', 'Certeza', 'Carinho', 'Cuidado', 'Coração partido', 'Choro', 'Compaixão', 'Confusão', 'Comprometimento', 'Calma', 'Coração alegre', 'Compadecimento', 'Cuidado', 'Censura', 'Cautela', 'Confusão mental', 'Certeza emocional', 'Confissão', 'Culpa', 'Calar', 'Compromisso', 'Cansado de viver', 'Culpa emocional', 'Chorando por dentro', 'Coração com saudade'],
  continents: ['África', 'Ásia', 'América', 'Antártida', 'Austrália', 'Ártico', 'Canadá', 'América do Norte', 'América Latina', 'Antilhas', 'Caribe', 'América Central', 'Região Sul', 'Subcontinente Indiano', 'Asia Central', 'Sul da Ásia', 'Península Arábica', 'Oceania', 'Céus Árticos', 'Mesoamérica', 'Região Báltica', 'Ilhas do Pacífico', 'Indochina', 'Península Ibérica', 'Ásia Menor', 'Península Coreana', 'Península Malaia', 'Subcontinente Árabe', 'Cabo Verde'],
      fruits: ['Cabeludinha', 'Cacau', 'Cabeludo', 'Cabeludinha', 'Cabeludo-de-metro', 'Cabeludinho', 'Cabeludo', 'Carambola', 'Cavalo-marinho', 'Cabeludinha', 'Cabeludo-de-metro', 'Cabeludo-de-folha', 'Cabeludo de orelha', 'Cabeludo de estrela']
      },
      
      'D': {
       names: ['Daniel', 'Diana', 'David', 'Débora', 'Dário', 'Douglas', 'Danilo', 'Dalila', 'Diego', 'Dulce', 'Dimitri', 'Durval', 'Daniele', 'Davidson', 'Denise', 'Domingos', 'Danusa', 'Djalma', 'Dalton', 'Dante', 'Diana Carolina', 'Denis', 'Dalton', 'Dário Lucas', 'Délia', 'Deborah', 'Davi', 'Diana Ribeiro', 'Daniele Cristina', 'Douglas Henrique', 'Danyelle'],
      places: ['Dondo', 'Dili', 'Durban', 'Dubai', 'Dakar', 'Deserto de Atacama', 'Dourados', 'Divinópolis', 'Dallas', 'Dar es Salaam', 'Dourados', 'Dachau', 'Dili', 'Durban', 'Diadema', 'Deserto do Saara', 'Dajabón', 'Dezembro', 'Dresden', 'Distrito Federal', 'Dracena', 'Democratic Republic of Congo', 'Dourados', 'Divina Pastora', 'Divo', 'Dahomey', 'Dimbokro', 'Daza'],
   countries: ['Denmark', 'Djibouti', 'Dominican Republic', 'Dominica', 'Djibuti', 'Deutschland (Germany)', 'Czech Republic', 'Dominican Republic', 'Dahomey', 'Dahomey', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominican Republic', 'Dominica', 'Denmark', 'Djibouti', 'Dominican Republic', 'Democratic Republic of Congo', 'Dominica', 'Denmark', 'Djibouti'],
     animals: ['Doninha', 'Dromedário', 'Dragão barbudo', 'Dáguia', 'Diabo-da-tasmânia', 'Delfim', 'Doninha', 'Dragão Komodo', 'Dromedário', 'Diabo-da-tasmânia', 'Diabo-da-tasmânia', 'Dromedário', 'Diabo-da-tasmânia', 'Delfim', 'Doninha', 'Diabo da Tasmânia', 'Dromedário', 'Dragão de Komodo', 'Dromedário', 'Delfim', 'Doninha', 'Diabo-da-tasmânia', 'Delfim', 'Diabo-da-tasmânia', 'Doninha', 'Dromedário', 'Dragão de Komodo'],
     objects: ['Despertador', 'Disquete', 'Dicionário', 'Documento', 'Diploma', 'Desodorante', 'Dvd', 'Disco rígido', 'Dossie', 'Dado', 'Dúzia', 'Disco de vinil', 'Desinfetante', 'Detector de metais', 'Desenhista', 'Divisor', 'Divisória', 'Dispositivo', 'Display', 'Dimmer', 'Dobradiça', 'Documentos', 'Desenvolvedor', 'Dossie de segurança', 'Dispositivo de memória', 'Distância', 'Dispositivo de segurança'],
      colors: ['Dourado', 'Deslumbrante', 'Dáfne', 'Dália', 'Denso', 'Distinto', 'Diante', 'Degradê', 'Diamante', 'Denso', 'Dourado', 'Delfim', 'Dourado', 'Deslumbrante', 'Dégradé', 'Dahlia', 'Diamante', 'Dantone', 'Dique', 'Diurno', 'Deslumbrante', 'Dáfne', 'Dárcia', 'Damaris', 'Doce', 'Dourado', 'Dextrose'],
    elements: ['Dióxido de carbono', 'Dinitrogênio', 'Duro', 'Diamante', 'Dissulfeto', 'Dodecano', 'Dodecil', 'Dióxido de enxofre', 'Dólar', 'Dibrometo', 'Dióxido de cloro', 'Desoxirribonucleico', 'Durum', 'Dióxido de manganês', 'Dopamina', 'Dihidrogênio', 'Dodecil', 'Dopamina', 'Dissulfeto', 'Dodecano', 'Dimetil', 'Diforma', 'Desoxirribonucleico', 'Dihidrogênio', 'Diatomáceas', 'Diluído', 'Dodecano', 'Dodecil', 'Dólar'],
 professions: ['Dentista', 'Designer', 'Dançarino', 'Desenhista', 'Deputado', 'Desenvolvedor', 'Diretor', 'Delegado', 'Doutor', 'Diácono', 'Digitador', 'Designer gráfico', 'Dublador', 'Diretor de arte', 'Documentarista', 'Diretor de vendas', 'Distribuidor', 'Desenvolvedor de software', 'Doutor em ciência', 'Doutor em educação', 'Docente', 'Desenhista industrial', 'Diretor de marketing', 'Docente universitário', 'Desenhista técnico', 'Dublador', 'Desenhista 3D', 'Designer de interiores'],
       media: ['Dungeons & Dragons', 'Dawson’s Creek', 'Doctor Who', 'Dexter', 'Diário de um Banana', 'Detective Conan', 'Dá-lhe o Queijo', 'Deus Salve o Rei', 'Dumb and Dumber', 'Derrick', 'Dire Straits', 'Dr. House', 'Days of Our Lives', 'Descendants', 'Diário de Noé', 'Drácula', 'Distrito 13', 'Documentário de viagem', 'Domínio Público', 'Dois Homens e Meio', 'De Volta Para o Futuro', 'Demolidor', 'Doutor Jivago', 'Deus É Brasileiro', 'Deus nos Acuda', 'Derrick', 'Drake', 'Dungeons & Dragons', 'Dr. Phil'],
      brands: ['Dior', 'Dell', 'Disney', 'Dove', 'Durex', 'Dr. Martens', 'DHL', 'Duracell', 'Dolce & Gabbana', 'Dyson', 'DHL Express', 'Dannon', 'Duracell', 'Disneyland', 'Diesel', 'Ducati', 'Dominos', 'Desigual', 'Dyson', 'Datsun', 'Dunkin', 'Desperados', 'Del Monte', 'Ducati', 'DeWalt', 'Dove Men', 'Deezer', 'Doris'],
      plants: ['Dente-de-leão', 'Dália', 'Dente-de-leão', 'Drosófila', 'Dendrobium', 'Dracena', 'Dymondia', 'Daphne', 'Dombeya', 'Dedaleira', 'Dália', 'Dente-de-leão', 'Desmancha-pente', 'Dendrobium', 'Damiana', 'Dymondia', 'Daphne', 'Delfínio', 'Datura', 'Dendrobium', 'Dombeya', 'Damiana', 'Dymondia', 'Dália', 'Dracaena', 'Daphne', 'Dymondia'],
       verbs: ['Dançar', 'Dormir', 'Dirigir', 'Descer', 'Dizer', 'Desenhar', 'Dar', 'Desafiar', 'Desistir', 'Dividir', 'Descansar', 'Decidir', 'Descer', 'Dominar', 'Desconhecer', 'Declarar', 'Desaparecer', 'Destruir', 'Desviar', 'Defender', 'Despir', 'Desprezar', 'Dedicar', 'Desinformar', 'Despertar', 'Deter', 'Desdobrar', 'Desenvolver'],
  adjectives: ['Dificílimo', 'Doce', 'Divertido', 'Dúbio', 'Delicado', 'Destruidor', 'Dedicado', 'Dócil', 'Durável', 'Divino', 'Desolado', 'Delicioso', 'Difícil', 'Denso', 'Dramático', 'Distante', 'Desejado', 'Decente', 'Discreto', 'Dizível', 'Duro', 'Dúctil', 'Digno', 'Decisivo', 'Dedicatório', 'Dinâmico', 'Direto', 'Distorcido'],
    emotions: ['Desespero', 'Decepção', 'Desgosto', 'Desânimo', 'Desconfiança', 'Dúvida', 'Dinamismo', 'Desejo', 'Divertimento', 'Desespero', 'Dúvida', 'Desgosto', 'Dúvida existencial', 'Desânimo', 'Descontrole', 'Dilema', 'Dúvida persistente', 'Desamparo', 'Desapontamento', 'Determinação', 'Desejo de vencer', 'Desapego', 'Decepção amorosa', 'Descontrole emocional', 'Determinação inabalável', 'Dúvida existencial', 'Desejo de superação'],
  continents: [],
      fruits: ['Damasco', 'Durião', 'Dendezeiro', 'Datilheira', 'Dente-de-leão', 'Durian', 'Dacora', 'Damasceno', 'Dourado', 'Delícia', 'Dendê', 'Dragonfruit', 'Deodoro', 'Diabo-amarelo', 'Damaroa', 'Damasco de moita', 'Dossie de pêssego', 'Durian', 'Dendê', 'Damasco fresco', 'Durian', 'Dáfne', 'Dourado', 'Dáfne', 'Delícia de fruta', 'Damasco fresco']
      },
      
     'E': {
       names: ['Eduardo', 'Eliane', 'Edson', 'Elisa', 'Emanuel', 'Emília', 'Estela', 'Evandro', 'Elisa', 'Eugênio', 'Edilson', 'Emerson', 'Eliane', 'Enzo', 'Evelyn', 'Eliane Souza', 'Eron', 'Emanuelle', 'Efigênia', 'Enilda', 'Efraim', 'Evaristo', 'Elizabete', 'Ester', 'Emanuela', 'Eurico', 'Elaine', 'Enzo', 'Ezequiel', 'Edilene'],
      places: ['Espírito Santo', 'Estocolmo', 'Eusébio', 'Elvas', 'Encontro', 'Eurico', 'Eritreia', 'Estância', 'Empoli', 'Elvas', 'Eslováquia', 'Ecuador', 'Estrasburgo', 'Esmoriz', 'Evora', 'El Nido', 'Eliá', 'Eisack', 'Encontro', 'Espinho', 'Esplanada', 'Estoril', 'Evangelista', 'Embu', 'Ericeira', 'Exeter', 'Ermesinde', 'Escócia', 'Esmeralda'],
   countries: ['Egito', 'Espanha', 'Eslováquia', 'Estônia', 'EUA', 'Ecuador', 'El Salvador', 'Emirados Árabes Unidos', 'Eritreia', 'Equador', 'Eslovênia', 'Estônia', 'Espanha', 'Egito', 'Eslováquia', 'EUA', 'Eritreia', 'Estônia', 'Ecuador', 'El Salvador', 'Espanha', 'Emirados Árabes Unidos', 'El Salvador', 'Equador', 'Egito', 'Estônia', 'Emirados Árabes Unidos', 'Eslovênia'],
     animals: ['Elefante', 'Ema', 'Equidna', 'Egle', 'Emu', 'Eletrogênico', 'Eftaloceratina', 'Enguia', 'Ermite', 'Escorpião', 'Euricentro', 'Esquilo', 'Enguia elétrica', 'Esquilos', 'Elefante marinho', 'Equino', 'Euricentrus', 'Escorpião', 'Eftaloceratina', 'Eel', 'Ema', 'Euricentro', 'Enguia elétrica', 'Elefante africano', 'Equino', 'Euglenóide', 'Escorpião'],
     objects: ['Escova', 'Espelho', 'Elevador', 'Extintor', 'Escada', 'Equipamento', 'Enfeite', 'Envelope', 'Escudo', 'Esferográfica', 'Espremedor', 'Encaixe', 'Equipamento', 'Esmalte', 'Estojo', 'Embalagem', 'Escova de dentes', 'Estátua', 'Escorredor', 'Espeque', 'Envolvente', 'Esponja', 'Expositor', 'Estabilizador', 'Exame', 'Esfera', 'Exame clínico', 'Esmalte de unhas'],
      colors: ['Esmeralda', 'Ember', 'Escarlate', 'Elétrico', 'Ebony', 'Esmalte', 'Elusive', 'Euphoric', 'Eterna', 'Eclipse', 'Exótico', 'Escuro', 'Eloquente', 'Esverdeado', 'Esperança', 'Esmear', 'Eclair', 'Esmeralda intenso', 'Exuberante', 'Eclético', 'Eufórico', 'Esbranquiçado', 'Evolutivo', 'Espectral', 'Escuro profundo', 'Estilizado', 'Exótico'],
    elements: ['Ester', 'Eletromagnetismo', 'Erbium', 'Europium', 'Eritrócito', 'Ecrã', 'Enxofre', 'Escudo', 'Eclorofila', 'Elementos', 'Emissário', 'Equilíbrio', 'Etanol', 'Estanho', 'Elementos químicos', 'Elétrons', 'Éter', 'Energia', 'Enxofre', 'Enxofre', 'Eugenol', 'Elementos naturais', 'Exclusão', 'Escala', 'Eugenol', 'Eletromagnetismo', 'Esterilização'],  
 professions: ['Engenheiro', 'Educador', 'Enfermeiro', 'Eletrecista', 'Empresário', 'Estilista', 'Editor', 'Ergonomista', 'Especialista', 'Empregado', 'Empresária', 'Encanador', 'Epidemiologista', 'Economista', 'Entrevistador', 'Engenheiro mecânico', 'Estrategista', 'Editor de vídeo', 'Escritor', 'Ebanista', 'Especialista em TI', 'Editor de texto', 'Engenheiro elétrico', 'Edesista', 'Enfermeira', 'Engenheiro de software', 'Examinador'],
       media: ['E.T.', 'Exterminador do Futuro', 'Efeito Borboleta', 'Eureka', 'Elenco', 'Encontro', 'Efeito Estufa', 'Exorcista', 'Entrevista', 'Escola de Rock', 'Espanhol', 'Escudo de Ferro', 'Enigma', 'Exposição', 'Exclusivo', 'Espelho', 'Exclusiva', 'Estratégia','Esportes', 'Exclusivo', 'Escritores', 'Escândalo', 'Eletrônicos', 'Entretenimento', 'Exploradores', 'Escândalo real'],
      brands: ['Epson', 'Ebay', 'Electrolux', 'Ecko', 'EasyJet', 'Erdinger', 'Emirates', 'Eucerin', 'Etna', 'Eagle', 'Espresso', 'Eiger', 'Element', 'Energia', 'Elka', 'Exxon', 'Eckler', 'Edições', 'Eco', 'Eko', 'Eau de Parfum', 'Etna', 'Estée Lauder', 'Engie', 'Etnies', 'Eternity', 'Elgiganten', 'Eurostar'],
      plants: ['Erva-doce', 'Eucalipto', 'Espada-de-são-jorge', 'Espirradeira', 'Efevídea', 'Elderberry', 'Embaúba', 'Erva-cidreira', 'Eloi', 'Espirradeira', 'Erythrina', 'Endro', 'Erva-mate', 'Ervilha', 'Endro', 'Erva-cidreira', 'Erva-de-santa-maria', 'Eucalipto', 'Escova-de-pescoço', 'Ervilha-torta', 'Elderberry', 'Eucalipto', 'Espirradeira', 'Espinheira-santa', 'Endro', 'Espada-de-são-jorge'],
       verbs: ['Estudar', 'Esperar', 'Escutar', 'Exigir', 'Existir', 'Empurrar', 'Entender', 'Eliminar', 'Escrever', 'Entrar', 'Enxergar', 'Exibir', 'Entregar', 'Exclamar', 'Expor', 'Envolver', 'Evidenciar', 'Escolher', 'Escapar', 'Explicar', 'Examinar', 'Elevar', 'Encorajar', 'Esquecer', 'Engolir', 'Elogiar', 'Estipular'],
  adjectives: ['Enorme', 'Esforçado', 'Exótico', 'Esperançoso', 'Estiloso', 'Entusiástico', 'Eficiente', 'Emocionante', 'Elegante', 'Energético', 'Exuberante', 'Equilibrado', 'Envolvente', 'Empolgante', 'Extraordinário', 'Engraçado', 'Estudioso', 'Estável', 'Erguido', 'Esperado', 'Excessivo', 'Eloquente', 'Especial', 'Estranho', 'Encantador'],
    emotions: ['Empolgação', 'Envolvimento', 'Estresse', 'Euforia', 'Esperança', 'Encanto', 'Exaltação', 'Excesso', 'Enorme gratidão', 'Espanhol', 'Empatia', 'Equilíbrio', 'Estabilidade', 'Estímulo', 'Euforia', 'Envolvimento afetivo', 'Exaustão', 'Excesso de confiança', 'Entusiasmo', 'Exaustão', 'Equilíbrio emocional', 'Empatia', 'Euforia extrema', 'Emoção', 'Excitação'],
  continents: ['Europa', 'África', 'Ásia', 'América', 'Antártida', 'Austrália', 'Antilhas', 'América do Norte', 'América do Sul', 'Eurásia', 'Europa Central', 'Eurasia', 'Eurásia', 'Extraterreno', 'Eufrates', 'Espanha', 'Esquimó', 'Evolutiva'],
      fruits: ['Embaúba', 'Endro', 'Eucalipto', 'Erva-doce', 'Elderberry', 'Escarola', 'Escaramujo', 'Exótico', 'Eccoplant', 'Ervilha', 'Endro', 'Escorpião', 'Evolutivo', 'Exótico', 'Esterel', 'Ervilha-torta', 'Euricentro', 'Edriz', 'Elderberry', 'Exótica', 'Escovinha', 'Esméril', 'Embaúba', 'Eucalipto', 'Endro', 'Escorredor', 'Edelweiss', 'Eritrófito']
      },
      
      'F': {
       names: ['Eduardo', 'Eliane', 'Edson', 'Elisa', 'Emanuel', 'Emília', 'Estela', 'Evandro', 'Elisa', 'Eugênio', 'Edilson', 'Emerson', 'Eliane', 'Enzo', 'Evelyn', 'Eliane Souza', 'Eron', 'Emanuelle', 'Efigênia', 'Enilda', 'Efraim', 'Evaristo', 'Elizabete', 'Ester', 'Emanuela', 'Eurico', 'Elaine', 'Enzo', 'Ezequiel', 'Edilene'],
      places: ['Espírito Santo', 'Estocolmo', 'Eusébio', 'Elvas', 'Encontro', 'Eurico', 'Eritreia', 'Estância', 'Empoli', 'Elvas', 'Eslováquia', 'Ecuador', 'Estrasburgo', 'Esmoriz', 'Evora', 'El Nido', 'Eliá', 'Eisack', 'Encontro', 'Espinho', 'Esplanada', 'Estoril', 'Evangelista', 'Embu', 'Ericeira', 'Exeter', 'Ermesinde', 'Escócia', 'Esmeralda'],
   countries: ['Egito', 'Espanha', 'Eslováquia', 'Estônia', 'EUA', 'Ecuador', 'El Salvador', 'Emirados Árabes Unidos', 'Eritreia', 'Equador', 'Eslovênia', 'Estônia', 'Espanha', 'Egito', 'Eslováquia', 'EUA', 'Eritreia', 'Estônia', 'Ecuador', 'El Salvador', 'Espanha', 'Emirados Árabes Unidos', 'El Salvador', 'Equador', 'Egito', 'Estônia', 'Emirados Árabes Unidos', 'Eslovênia'],
     animals: ['Elefante', 'Ema', 'Equidna', 'Egle', 'Emu', 'Eletrogênico', 'Eftaloceratina', 'Enguia', 'Ermite', 'Escorpião', 'Euricentro', 'Esquilo', 'Enguia elétrica', 'Esquilos', 'Elefante marinho', 'Equino', 'Euricentrus', 'Escorpião', 'Eftaloceratina', 'Eel', 'Ema', 'Euricentro', 'Enguia elétrica', 'Elefante africano', 'Equino', 'Euglenóide', 'Escorpião'],
     objects: ['Escova', 'Espelho', 'Elevador', 'Extintor', 'Escada', 'Equipamento', 'Enfeite', 'Envelope', 'Escudo', 'Esferográfica', 'Espremedor', 'Encaixe', 'Equipamento', 'Esmalte', 'Estojo', 'Embalagem', 'Escova de dentes', 'Estátua', 'Escorredor', 'Espeque', 'Envolvente', 'Esponja', 'Expositor', 'Estabilizador', 'Exame', 'Esfera', 'Exame clínico', 'Esmalte de unhas'],
      colors: ['Esmeralda', 'Ember', 'Escarlate', 'Elétrico', 'Ebony', 'Esmalte', 'Elusive', 'Euphoric', 'Eterna', 'Eclipse', 'Exótico', 'Escuro', 'Eloquente', 'Esverdeado', 'Esperança', 'Esmear', 'Eclair', 'Esmeralda intenso', 'Exuberante', 'Eclético', 'Eufórico', 'Esbranquiçado', 'Evolutivo', 'Espectral', 'Escuro profundo', 'Estilizado', 'Exótico'],
    elements: ['Ester', 'Eletromagnetismo', 'Erbium', 'Europium', 'Eritrócito', 'Ecrã', 'Enxofre', 'Escudo', 'Eclorofila', 'Elementos', 'Emissário', 'Equilíbrio', 'Etanol', 'Estanho', 'Elementos químicos', 'Elétrons', 'Éter', 'Energia', 'Enxofre', 'Enxofre', 'Eugenol', 'Elementos naturais', 'Exclusão', 'Escala', 'Eugenol', 'Eletromagnetismo', 'Esterilização'],
 professions: ['Engenheiro', 'Educador', 'Enfermeiro', 'Eletrecista', 'Empresário', 'Estilista', 'Editor', 'Ergonomista', 'Especialista', 'Empregado', 'Empresária', 'Encanador', 'Epidemiologista', 'Economista', 'Entrevistador', 'Engenheiro mecânico', 'Estrategista', 'Editor de vídeo', 'Escritor', 'Ebanista', 'Especialista em TI', 'Editor de texto', 'Engenheiro elétrico', 'Edesista', 'Enfermeira', 'Engenheiro de software', 'Examinador'],
       media: ['E.T.', 'Exterminador do Futuro', 'Efeito Borboleta', 'Eureka', 'Elenco', 'Encontro', 'Efeito Estufa', 'Exorcista', 'Entrevista', 'Escola de Rock', 'Espanhol', 'Escudo de Ferro', 'Enigma', 'Exposição', 'Exclusivo', 'Espelho', 'Exclusiva', 'Estratégia', 'Esportes', 'Exclusivo', 'Escritores', 'Escândalo', 'Eletrônicos', 'Entretenimento', 'Exploradores', 'Escândalo real'],
      brands: ['Epson', 'Ebay', 'Electrolux', 'Ecko', 'EasyJet', 'Erdinger', 'Emirates', 'Eucerin', 'Etna', 'Eagle', 'Espresso', 'Eiger', 'Element', 'Energia', 'Elka', 'Exxon', 'Eckler', 'Edições', 'Eco', 'Eko', 'Eau de Parfum', 'Etna', 'Estée Lauder', 'Engie', 'Etnies', 'Eternity', 'Elgiganten', 'Eurostar'],
      plants: ['Erva-doce', 'Eucalipto', 'Espada-de-são-jorge', 'Espirradeira', 'Efevídea', 'Elderberry', 'Embaúba', 'Erva-cidreira', 'Eloi', 'Espirradeira', 'Erythrina', 'Endro', 'Erva-mate', 'Ervilha', 'Endro', 'Erva-cidreira', 'Erva-de-santa-maria', 'Eucalipto', 'Escova-de-pescoço', 'Ervilha-torta', 'Elderberry', 'Eucalipto', 'Espirradeira', 'Espinheira-santa', 'Endro', 'Espada-de-são-jorge'],
       verbs: ['Estudar', 'Esperar', 'Escutar', 'Exigir', 'Existir', 'Empurrar', 'Entender', 'Eliminar', 'Escrever', 'Entrar', 'Enxergar', 'Exibir', 'Entregar', 'Exclamar', 'Expor', 'Envolver', 'Evidenciar', 'Escolher', 'Escapar', 'Explicar', 'Examinar', 'Elevar', 'Encorajar', 'Esquecer', 'Engolir', 'Elogiar', 'Estipular'],
  adjectives: ['Enorme', 'Esforçado', 'Exótico', 'Esperançoso', 'Estiloso', 'Entusiástico', 'Eficiente', 'Emocionante', 'Elegante', 'Energético', 'Exuberante', 'Equilibrado', 'Envolvente', 'Empolgante', 'Extraordinário', 'Engraçado', 'Estudioso', 'Estável', 'Erguido', 'Esperado', 'Excessivo', 'Eloquente', 'Especial', 'Estranho', 'Encantador'],
    emotions: ['Empolgação', 'Envolvimento', 'Estresse', 'Euforia', 'Esperança', 'Encanto', 'Exaltação', 'Excesso', 'Enorme gratidão', 'Espanhol', 'Empatia', 'Equilíbrio', 'Estabilidade', 'Estímulo', 'Euforia', 'Envolvimento afetivo', 'Exaustão', 'Excesso de confiança', 'Entusiasmo', 'Exaustão', 'Equilíbrio emocional', 'Empatia', 'Euforia extrema', 'Emoção', 'Excitação'],
  continents: ['Europa', 'África', 'Ásia', 'América', 'Antártida', 'Austrália', 'Antilhas', 'América do Norte', 'América do Sul', 'Eurásia', 'Europa Central', 'Eurasia', 'Eurásia', 'Extraterreno', 'Eufrates', 'Espanha', 'Esquimó', 'Evolutiva'],
      fruits: ['Embaúba', 'Endro', 'Eucalipto', 'Erva-doce', 'Elderberry', 'Escarola', 'Escaramujo', 'Exótico', 'Eccoplant', 'Ervilha', 'Endro', 'Escorpião', 'Evolutivo', 'Exótico', 'Esterel', 'Ervilha-torta', 'Euricentro', 'Edriz', 'Elderberry', 'Exótica', 'Escovinha', 'Esméril', 'Embaúba', 'Eucalipto', 'Endro', 'Escorredor', 'Edelweiss', 'Eritrófito']
      },
            
      'G': {
      names: ['Gabriel', 'Gustavo', 'Giovana', 'Guilherme', 'Gláucia', 'Gerson', 'Graça', 'Geovane', 'Gisele', 'Gustavo Henrique', 'Gleice', 'Gilberto', 'Gustavo Costa', 'Gilmar', 'Giovanna', 'Geraldo', 'Gian', 'Glória', 'Gustavo Lima', 'Graciele', 'Gislaine', 'Geraldo Junior', 'Graziella', 'Gilvan', 'Glória Oliveira', 'Gleisson', 'Geraldo Silva', 'Guilhermina', 'Gláucio', 'Graziela'],
     places: ['Goiânia', 'Guaíba', 'Guarujá', 'Garanhuns', 'Guaratinguetá', 'Gramado', 'Guaçuí', 'Garanhuns', 'Guaíba', 'Guarapari', 'Gavião', 'Goa', 'Guiné-Bissau', 'Glenview', 'Gustavão', 'Galápagos', 'Gurupi', 'Goianésia', 'Guaíra', 'Gorizia', 'Germantown', 'Guaçuí', 'Guarulhos', 'Glen', 'Glasgow', 'Goiania', 'Granada', 'Gandhi'],
  countries: ['Gana', 'Guiné', 'Gibraltar', 'Gabon', 'Grécia', 'Gana', 'Gabon', 'Guatemala', 'Guiné-Bissau', 'Gana', 'Gambia', 'Guiné Equatorial', 'Gibraltar', 'Grécia', 'Grã-Bretanha', 'Gana', 'Gâmbia', 'Guiana', 'Guatemala', 'Geórgia', 'Groenlândia', 'Grécia', 'Gana', 'Gibraltar', 'Guiana', 'Gabon', 'Guiné-Bissau', 'Gana'],
    animals: ['Gato', 'Galinha', 'Galo', 'Gafanhoto', 'Gorila', 'Gnu', 'Guepardo', 'Grilo', 'Gato-do-mato', 'Gavião', 'Gavião-real', 'Gato-selvagem', 'Galo-de-campina', 'Gambá', 'Golfinho', 'Gato-persa', 'Guaxinim', 'Galo de rinha', 'Gorila-barrigudo', 'Gato-bengalí', 'Galo-da-serra', 'Galo-de-campina', 'Ganso', 'Galo-pedrês', 'Galo-preto', 'Galo-azul'],
    objects: ['Guitarra', 'Garfo', 'Globo', 'Garrafa', 'Galocha', 'Gravata', 'Galheteiro', 'Gaveta', 'Grampo', 'Giz', 'Globo de neve', 'Galocha de borracha', 'Garrafa térmica', 'Gala', 'Grelha', 'Glove', 'Grampeador', 'Goma', 'Giz de cera', 'Guia', 'Gaiola', 'Gaveteiro', 'Grogue', 'Gomo', 'Gravador', 'Guarda-chuva', 'Glacê', 'Gravador de voz'],
     colors: ['Grisalho', 'Gelo', 'Granada', 'Gorgonzola', 'Grape', 'Gaveta', 'Garnet', 'Germânio', 'Gravata', 'Gris', 'Geral', 'Galanga', 'Grama', 'Ginger', 'Gold', 'Graphite', 'Grapefruit', 'Gémeo', 'Galo', 'Garnet', 'Glaucous', 'Grão-de-bico', 'Gloaming', 'Grape', 'Greige', 'Givré', 'Ginga', 'Gremlin', 'Granel'],
   elements: ['Gálio', 'Gás', 'Gás hélio', 'Gálio', 'Glúten', 'Godo', 'Gás oxigênio', 'Galaxite', 'Grafeno', 'Gálio', 'Gás natural', 'Gelo', 'Gás hidrogênio', 'Gás radônio', 'Gás nobre', 'Gás carbônico', 'Gadolinita', 'Grafite', 'Gás metano', 'Gás freon', 'Gaseificação', 'Galeno', 'Galióxido', 'Gauss', 'Gás de oxigênio', 'Gavroche'],
professions: ['Geólogo', 'Ginecologista', 'Garçom', 'Governador', 'Gerente', 'Gestor', 'Gari', 'Guitarrista', 'Guia turístico', 'Ginecologista obstetra', 'Geneticista', 'Gari', 'Goleiro', 'Governo', 'Gadget', 'Guerreiro', 'Gastrônomo', 'Galegá', 'Guarda', 'Garimpeiro', 'Governança', 'Guarda-costas', 'Gestor ambiental', 'Ginecologista', 'Guerreiro', 'Garçonete', 'Gestor de TI'],
      media: ['Glee', 'Game of Thrones', 'Grimm', 'Globo Repórter', 'Guerra nas Estrelas', 'Gran Hermano', 'Giga', 'Glee', 'Globo Esporte', 'Gotham', 'Gossip Girl', 'GloboNews', 'Gilmore Girls', 'Greys Anatomy', 'GoT', 'Gremlins', 'Gritando', 'Gigante', 'Gente Que Eu Gosto', 'Gran Hermano', 'Game of Thrones', 'Glee', 'Ghost', 'Guerra', 'Guerra Fria', 'Galera do Chopp', 'Gremlins'],
     brands: ['Gucci', 'Gap', 'Gatorade', 'Gillette', 'GMC', 'Google', 'Gibson', 'Grendene', 'Gator', 'Goodyear', 'Guinness', 'GAP', 'Gatorade', 'Genuine', 'Gremlin', 'GoPro', 'Groupon', 'Guarana', 'Gibson', 'General Electric', 'Grindr', 'Gillette', 'Goodyear', 'Grendene', 'Globe', 'Giz', 'Genuine', 'Gulf', 'Gator'],
     plants: ['Girassol', 'Ginseng', 'Glicínia', 'Gladiolo', 'Guapuruvu', 'Guarapuava', 'Goiabeira', 'Goiabeira', 'Ginkgo', 'Groselha', 'Guaribá', 'Grama', 'Gavea', 'Guavira', 'Galianthe', 'Garapeira', 'Gerânio', 'Gália', 'Groselha', 'Glicínias', 'Gingo', 'Graptopetalum', 'Guaiúva', 'Gordolobo', 'Galanga', 'Gum', 'Garnet'],
      verbs: [ 'Guardar', 'Gritar', 'Ganhar', 'Gastar', 'Golpear', 'Gostar', 'Gozar', 'Girar', 'Gerar', 'Galopar', 'Guerrear', 'Gelar', 'Gozar', 'Gabar', 'Gritar', 'Gozar', 'Gravitar', 'Guerrear', 'Gover', 'Gritar', 'Galar', 'Girar', 'Grudar', 'Gozar', 'Gastar', 'Golpear', 'Gozar'],
 adjectives: ['Gentil', 'Grande', 'Gracioso', 'Gordo', 'Guerreiro', 'Gostoso', 'Glorioso', 'Glacial', 'Genuíno', 'Generoso', 'Grato', 'Gordo', 'Gemente', 'Galante', 'Glorioso', 'Gigante', 'Gente boa', 'Glutão', 'Greto', 'Gênio', 'Gordo', 'Gurude', 'Gênio', 'Gustativo', 'Grandeza', 'Gordo', 'Gergelim', 'Grosso'],
   emotions: ['Gargalhada', 'Gratidão', 'Gaiatice', 'Gosto', 'Gula', 'Guerra', 'Gênio', 'Glória', 'Geminidade', 'Guerra Fria', 'Gosto', 'Gargalhada', 'Gostoso', 'Glorioso', 'Gritar', 'Guerra', 'Generosidade', 'Gênio', 'Gente boa', 'Galante', 'Golpe', 'Guerra', 'Gritar', 'Gaba', 'Gasto', 'Gritante', 'Grosso'],
 continents: ['África', 'Antártida', 'Ásia', 'América', 'Austrália', 'Gás', 'Geração', 'Guerra', 'Geologia', 'Grécia', 'Guiné', 'Grécia', 'Grécia', 'Gibraltar', 'Gana', 'Grécia', 'Groenlândia', 'Gás carbônico', 'Ganas', 'Galápagos'],
     fruits: [ 'Goiaba', 'Graviola', 'Grapes', 'Groselha', 'Ginger', 'Goiabeira', 'Ginja', 'Graptopetalum', 'Goji berry', 'Grapefruit', 'Ginger', 'Groselha', 'Galianthe', 'Guaruba', 'Graviola', 'Groselha', 'Goiaba', 'Guapeba', 'Gingko', 'Gomphrena', 'Graptopetalum', 'Gália', 'Guarapa', 'Gava', 'Grama', 'Goiabeira', 'Graptopetalum', 'Ginja']
     },
      
      'H': {
      names: ['Henrique', 'Helena', 'Hugo', 'Heitor', 'Hilda', 'Hélio', 'Heloísa', 'Hassan', 'Humberto', 'Hannah', 'Herculano', 'Hugo Henrique', 'Hélder', 'Hermes', 'Hélia', 'Hilário', 'Haidée', 'Hassan', 'Heber', 'Hulda', 'Helder', 'Hélio', 'Haroldo', 'Hilda Maria', 'Hélio Junior', 'Hugo Costa', 'Hedda', 'Harrison', 'Hannibal'],
     places: ['Havana', 'Hamburgo', 'Holambra', 'Havai', 'Horta', 'Honduras', 'Harvard', 'Houston', 'Helsinque', 'Haiti', 'Husum', 'Helsinki', 'Harrison', 'Hollywood', 'Helsinque', 'Hong Kong', 'Hilton Head', 'Herat', 'Ho Chi Minh', 'Horrizontina', 'Huambo', 'Hague', 'Holambra', 'Huaraz', 'Hermanus', 'Helsingborg', 'Hue', 'Hainan', 'Hamburgo', 'Huanchaco', 'Hong Kong'],
  countries: ['Haiti', 'Honduras', 'Hungria', 'Honduras', 'Holanda', 'Honduras', 'Hungria', 'Hong Kong', 'Haiti', 'Habá', 'Haiti', 'Honduras', 'Holanda', 'Hungria', 'Holanda', 'Haiti', 'Hong Kong', 'Honduras', 'Honduras', 'Hungria', 'Hungria', 'Honduras', 'Honduras', 'Haiti', 'Hungria', 'Hong Kong', 'Holanda', 'Honduras', 'Hungria'],
    animals: ['Hipopótamo', 'Hiena', 'Harpia', 'Hummingbird', 'Hirondelle', 'Herring', 'Hedgehog', 'Hippopotamus', 'Hoatzin', 'Hornet', 'Harlequin', 'Harpseal', 'Horned Toad', 'Heron', 'Halibut', 'Hammerhead Shark', 'Hummingbird Hawk-moth', 'Hare', 'Hog','Hawk', 'Hyrax', 'Husky', 'Honeybee', 'Harrier', 'Horned Owl', 'Hummingbird Moth', 'Humpback Whale', 'Hyena'],
    objects: ['Halter', 'Hidrofone', 'Hélix', 'Hidratante', 'Hidropônico', 'Helicóptero', 'Hachoir', 'Higienizador', 'Harpa', 'Haste', 'Hóquei', 'Hélice', 'Hidratante', 'Hidroponia', 'Hipérbole', 'Homer', 'Hidrômetro', 'Higienização', 'Hífen', 'Hamper', 'Holograma', 'Hélice', 'Haste', 'Hérnia', 'Holograma', 'Heterogêneo', 'Hiperparâmetro', 'Hidrelétricas', 'Herculano'],
     colors: ['Hematite', 'Hibisco', 'Horizon', 'Heliotrope', 'Honey', 'Holly', 'Heliotropo', 'Havanês', 'Hex', 'Houndstooth', 'Hibiscus', 'Honeydew', 'Hydrangea', 'Hazel', 'Herb', 'Holly Green', 'Highlighter', 'Hickory', 'Hibiscus Pink', 'Hot Pink', 'Honey Yellow', 'Hemp', 'Harvard Red', 'Honey Brown', 'Hibiscus Orange', 'Hot Lava', 'Hedge', 'Hematite Grey'],
   elements: ['Hélio', 'Hidrogênio', 'Hélio', 'Hafnium', 'Hésio', 'Hidrogênio', 'Halógeno', 'Hidrogênio', 'Hafnium', 'Hélio', 'Hidrogênio', 'Hérnio', 'Hafnium', 'Hélio', 'Hidrogênio', 'Hélio', 'Hafnium', 'Helium', 'Hidrogênio', 'Hafnium', 'Hélio', 'Hidrogênio', 'Hidrogênio', 'Halógeno', 'Hidrogênio', 'Hidrogênio', 'Hidrogênio', 'Hélio'],
professions: ['Historiador', 'Higienista', 'Hoteleiro', 'Homem de Negócios', 'Hacker', 'Higienista Dental', 'Helicóptero piloto', 'Hacker de Sistemas', 'Herdador', 'Homem de vendas', 'Hipnoterapeuta', 'Higienista de Beleza', 'Horticultor', 'Habilitador', 'Hospedeiro', 'Herdeiro', 'Hoteleiro', 'Harpista', 'Hacker ético', 'Homem de marketing', 'Higienista alimentar', 'Hidrologista', 'Herborista', 'Historiador de Arte', 'Habilitado', 'Hipotecnista', 'Harmonia'],
      media: ['Hunger Games', 'House of Cards', 'Hanna', 'Heathers', 'Hercules', 'Happy Endings', 'Homeland', 'How I Met Your Mother', 'Highway to Hell', 'Horrible Bosses', 'Hot Shots', 'Honey', 'Hollywood', 'Happily Ever After', 'How to Get Away with Murder', 'Highway to Heaven', 'Heist', 'Harry Potter', 'House', 'Hall of Fame', 'Hero', 'Harry Potter and the Goblet of Fire', 'Hawaii Five-0', 'Hannah Montana', 'Hollow Man', 'Hercules', 'Hitchcock'],
     brands: ['H&M', 'Honda', 'Heineken', 'Havaianas', 'Harman Kardon', 'Hershey\'s', 'Hublot', 'Huawei', 'Hewlett-Packard', 'Harley-Davidson', 'Hitachi', 'Hugo Boss', 'Henkel', 'Häagen-Dazs', 'Hershey', 'Honeywell', 'Halliburton', 'Husqvarna', 'Hoover', 'Hobby Lobby', 'H&M', 'Harrods', 'Hewlett-Packard', 'Häagen-Dazs', 'Hershey', 'Hilton', 'Hydro', 'Harman'],
     plants: ['Hibisco', 'Heliconia', 'Hera', 'Hortelã', 'Hibisco do Egito', 'Hortênsia', 'Helicônia', 'Hoya', 'Hibisco-siciliano', 'Hérnia', 'Hortelã-pimenta', 'Heliconia', 'Hibisco Tropical', 'Hibisco vermelho', 'Hera-inglesa', 'Héliofilo', 'Hibisco-boliviano', 'Honeysuckle', 'Hena', 'Hoya Australis', 'Hortelã-pimenta', 'Hernia', 'Hera-do-mato', 'Hibisco-da-terra', 'Hedera', 'Heleconia', 'Hibisco-coral', 'Hera-verde'],
      verbs: ['Harmonizar', 'Hibernar', 'Habilitar', 'Habilitar', 'Hidratar', 'Hilar', 'Hurtar', 'Histerizar', 'Homenagear', 'Homenagear', 'Heritar', 'Harmoniar', 'Heliar', 'Herder', 'Hecatombar', 'Habitar', 'Hacer', 'Halar', 'Hibridar', 'Hugotar','Habilitar', 'Hibridar', 'Halagar', 'Hibetar', 'Hederar', 'Harmonizar', 'Horrar'],
 adjectives: ['Honesto', 'Hábil', 'Honrado', 'Hilariante', 'Hipócrita', 'Horrível', 'Horrendo', 'Horrível', 'Horrorizado', 'Horrendo', 'Helado', 'Histérico', 'Horrível', 'Harmonioso', 'Horrível', 'Hábil', 'Horrendamente', 'Hipotético', 'Heróico', 'Hilariante', 'Horrendo', 'Honroso', 'Hipócrita', 'Harmonioso', 'Hábil', 'Hipnotizado', 'Helado'],
   emotions: ['Horror', 'Horror', 'Hábito', 'Hilaridade', 'Hesitação', 'Harmonia', 'Humor', 'Honra', 'Habilidade', 'Hilariante', 'Hesitação', 'Hedonismo', 'Horror', 'Herança', 'Harmonia', 'Habilidade', 'Habilidade', 'Hesitação', 'Hesitação', 'Hilariante', 'Humor', 'Hedonismo', 'Horrendo', 'Hábito', 'Hilariante', 'Hedonismo'],
 continents: ['África', 'América', 'Antártida', 'Ásia', 'Austrália', 'Europa', 'Arábia', 'Honduras', 'Haiti', 'Hindustan', 'Hokkaido', 'Hindustão', 'Hércules', 'Hermos', 'Hidalgo', 'Habana', 'Hindustan', 'Halifax', 'Heidi', 'Hungary', 'Himalaya', 'Honduras', 'Hapuku', 'Haiti', 'Hungary', 'Hickory'],
     fruits: [ 'Hortelã', 'Hibisco', 'Hoya', 'Hacmat', 'Hubbard', 'Hass', 'Honeydew', 'Hog plum', 'Higuerilla', 'Holimbé', 'Hazelnut', 'Haki', 'Hogplum', 'Hackberry', 'Hops', 'Harrison', 'Ho Kyo', 'Hibiscus', 'Hew', 'Hoya Australis', 'Hickory', 'Hot Pepper', 'Horned Melon', 'Hubbard Squash', 'Honeyberry', 'Heirloom Tomato', 'Hyacinth Bean']
      },
            
      'I': {
      names: ['Isaac', 'Isabel', 'Isabela', 'Isaque', 'Igor', 'Ivan', 'Ivo', 'Ivone', 'Íris', 'Ítalo', 'Icaro', 'Iracema', 'Isis', 'Ian', 'Inácio', 'Idalina', 'Isaura', 'Ismael', 'Ilza', 'Irineu', 'Ivana', 'Ilídio', 'Iole', 'Ilda', 'Ingrid', 'Irenice', 'Itamar', 'Izabel', 'Idália', 'Ivete'],
     places: ['Inhambane', 'Ilha de Moçambique', 'Iapala', 'Ibanda', 'Ilhéus', 'Ibiza', 'Istambul', 'Indianápolis', 'Irkutsk', 'Iguaçu', 'Inuvik', 'Isla Mujeres', 'Ilhas Fiji', 'Ilha do Mel', 'Itapema', 'Ipiranga', 'Itaboraí', 'Iquitos', 'Ilhas Canárias', 'Irã', 'Incheon', 'Ilhabela', 'Ibiporã', 'Ibagué', 'Ibadan', 'Iguaí', 'Iguape', 'Itacoatiara', 'Ilha Grande', 'Ilhas Seychelles'],
  countries: [ 'Índia', 'Indonésia', 'Irã', 'Iraque', 'Irlanda', 'Islândia', 'Israel', 'Itália', 'Ilhas Marshall', 'Ilhas Salomão', 'Ilhas Cook', 'Ilhas Comores', 'Ilhas Faroé', 'Ilhas Fiji', 'Ilhas Malvinas', 'Ilhas Marianas', 'Ilhas Seychelles', 'Ilhas Turcas e Caicos', 'Ilhas Virgens', 'Ilhas Cocos', 'Ilhas Maurício', 'Ilhas Norfolk', 'Ilhas Pitcairn', 'Ilhas Reunião', 'Ilhas Tokelau', 'Ilhas Wallis e Futuna', 'Ilhas Christmas', 'Ilhas São Pedro e Miquelon', 'Ilhas Bouvet', 'Ilhas Heard e McDonald'],
    animals: ['Iguana', 'Íbis', 'Imperador-pinguim', 'Indri', 'Inseto-bastão', 'Isópodo', 'Íbis-vermelho', 'Íbis-branco', 'Íbis-preto', 'Íbis-sagrado',  'Íbis-de-cara-preta', 'Íbis-eremita', 'Íbis-pescador', 'Ictiossauro', 'Íbis-gigante', 'Íbis-dourado', 'Íbis-de-crista', 'Íbis-de-cauda-longa', 'Íbis-verde', 'Íbis-azul', 'Íbis-escarlate', 'Íbis-de-bico-curto', 'Íbis-pintado', 'Íbis-de-asa-larga', 'Íbis-do-himalaia', 'Íbis-marrom', 'Íbis-da-floresta', 'Íbis-do-pantanal', 'Íbis-negro', 'Íbis-rei'],
    objects: ['Ímã', 'Isqueiro', 'Instrumento', 'Impressora', 'Inalador', 'Interruptor', 'Indicador', 'Isolante', 'Inversor', 'Injeção', 'Iluminador', 'Instalador', 'Identificador', 'Impressora 3D', 'Inclinômetro', 'Infrared', 'Injeção eletrônica', 'Índice', 'Ímã de neodímio', 'Ímã de geladeira', 'Iluminária', 'Interfone', 'Interruptor de luz', 'Identidade', 'Incenso', 'Indicador de bateria', 'Ímã industrial', 'Impressora térmica', 'Ilustração', 'Inflador'],
     colors: ['Índigo', 'Íris', 'Ivory', 'Icelandic Blue', 'Iron', 'Iceberg', 'Indian Red', 'Imperial Blue', 'Infrared', 'Iridescent', 'Italian Plum', 'Ink', 'Iguana Green', 'Ice Blue', 'Illuminating Yellow', 'Inkwell', 'Ivory Black', 'Iron Gray', 'Ice Mint', 'Iceland Moss', 'Independence', 'Ibis Feather', 'Italian Ice', 'Iced Coffee', 'Ice Green', 'Island Green', 'Iron Ore', 'Ivory Rose', 'Imperial Purple', 'Invisible Blue'],
   elements: ['Ítrio', 'Índio', 'Irídio', 'Iodo', 'Íon', 'Ímã', 'Íon metálico', 'Íon não metálico', 'Íon positivo', 'Íon negativo', 'Íon monovalente', 'Íon divalente', 'Íon trivalente', 'Íon quatrivalente', 'Íon pentavalente', 'Íon hexavalente', 'Íon heptavalente', 'Íon octavalente', 'Íon poliatômico', 'Íon diatômico', 'Íon simples', 'Íon composto', 'Íon de transição', 'Íon alcalino', 'Íon alcalino-terroso', 'Íon de halogênio', 'Íon de gás nobre', 'Íon complexo', 'Íon radical', 'Íon ressonante'],
professions: ['Ilustrador', 'Impressor', 'Instrutor', 'Investigador', 'Inventor', 'Intérprete', 'Informático', 'Industrial', 'Instalador', 'Iatista', 'Inspetor', 'Imobiliário', 'Itinerante', 'Identificador', 'Inseminador', 'Iluminador', 'Ictiólogo', 'Instrumentista', 'Iconógrafo', 'Instituidor', 'Intercambista', 'Institucional', 'Indigenista', 'Instrutor de Yoga', 'Integrador', 'Investigador forense', 'Imunologista', 'Intérprete de Libras', 'Instalador de painéis solares', 'Identificador de voz'],
      media: ['Interestelar', 'Inception', 'Indiana Jones', 'It: A Coisa', 'Iron Man', 'Ilha do Medo', 'Intocáveis', 'Insurgente', 'I Am Legend', 'Independence Day', 'Ilha dos Cachorros', 'Ilha do Tesouro', 'Instinto Selvagem', 'It\'s a Wonderful Life', 'I, Robot', 'Inside Out', 'Ice Age', 'In Treatment', 'Inuyasha', 'I Know What You Did Last Summer', 'Inglourious Basterds', 'Insidious', 'Interstellar', 'Invincible', 'Inside Man', 'Instant Family', 'Icarus', 'It Takes Two', 'Inside Amy Schumer'],
     brands: ['Intel', 'IKEA', 'IBM', 'Ipanema', 'Instagram', 'Itaú', 'Isuzu', 'Iveco', 'Ironman', 'Innisfree', 'Icebreaker', 'Infinity', 'Impala', 'Isdin', 'Illamasqua', 'Indian Motorcycles', 'Icelandair', 'Inglot', 'Imaginarium', 'Icona', 'Intex', 'Inovarte', 'Inkbox', 'It Cosmetics', 'Imperial Leather', 'Ice Mountain', 'Iams', 'Indomie', 'Ibanez', 'Isotoner'],
     plants: ['Ipê', 'Imbaúba', 'Inhame', 'Indaiá', 'Ilex', 'Incenso', 'Ilustre', 'Iodina', 'Ipoméia', 'Isoetes', 'Isoloma', 'Itamo', 'Iriartea', 'Iriodendron', 'Inga', 'Ischnosiphon', 'Illecebrum', 'Iresine', 'Iochroma', 'Iriartella', 'Ischaemum', 'Ixora', 'Ixia', 'Imperata', 'Iva', 'Iresine herbstii', 'Ilex paraguariensis', 'Ipê-amarelo', 'Iris pseudacorus', 'Ipomoea purpurea'],
     fruits: ['Ingá', 'Ibacuru', 'Ilama', 'Icaco', 'Ibacaba', 'Indian Fig', 'Itauba', 'Ipecacuanha', 'Indian Gooseberry', 'Ita', 'Itaim', 'Ilomba', 'Imbé', 'Indian Jujube', 'Indian Mango', 'Ipequeno', 'Ipequeno-bravo', 'Itaíba', 'Itaiz', 'Ithaka']
     },
      
      'J': {
      names: ['João', 'José', 'Júlia', 'Joaquim', 'Jorge', 'Júnior', 'Janete', 'Jaqueline', 'Jandira', 'Janderson','Júlio', 'Josias', 'Jasmin', 'Jade', 'Jônatas', 'Josué', 'Jefferson', 'Jeferson', 'Jadir', 'Juraci', 'Jocelina', 'Jomar', 'Jocasta', 'Juvêncio', 'Jociel', 'Jaison', 'Jurandir', 'Jamile', 'Jacira', 'Joselito'],
     places: ['Jangamo', 'Jembesse', 'Joaquim Chissano', 'Johanesburgo', 'Jerusalém', 'Jamaica', 'Jacarta', 'Juiz de Fora', 'Joinville', 'João Pessoa', 'Japão', 'Jordânia', 'Jericó', 'Jacarepaguá', 'Jaguaribe', 'Jatai', 'Jaú', 'Jardim Botânico', 'Jiquiriçá', 'Jaboticabal', 'Jambeiro', 'Jaraguá', 'Jateí', 'Jauru', 'Jeremoabo', 'Jequitibá', 'Jardins', 'Jacupiranga', 'Jacundá', 'Jaguapitã'],
  countries: ['Jamaica', 'Japão', 'Jordânia'],
    animals: ['Jacaré', 'Javali', 'Jabuti', 'Jaguar', 'Jiboia', 'João-de-barro', 'Jaçanã', 'Jacu', 'Jararaca', 'Japu', 'Jundiá', 'Jacurutu', 'Jararacuçu', 'Jandaia', 'Jacu-cigano', 'Juruva', 'Japuaçu', 'Japuíra', 'Jandiá', 'Jacutingá', 'Juriti', 'Jacaré-do-pantanal', 'Jacaré-açu', 'Jiboia-arco-íris', 'Jacuruxi', 'Jacundá', 'Jararacão', 'Juruá', 'Juruviara', 'Jararacussu'],
    objects: ['Jaqueta', 'Jarro', 'Janela', 'Joystick', 'Jaleco', 'Joia', 'Jornal', 'Jóquei', 'Juta', 'Jarra', 'Jogo de xadrez', 'Jogo de cartas', 'Jaleco branco', 'Jarra térmica', 'Jarra de vidro', 'Jaula', 'Jaleco cirúrgico', 'Jóquei clube', 'Jóia rara', 'Jarro de porcelana', 'Joelho ortopédico', 'Joystick analógico', 'Jogo de tabuleiro', 'Jogo de copos', 'Jogo de chaves', 'Jarra de suco', 'Jogo de varetas', 'Jogo de cama', 'Jogo de panelas', 'Jaqueta de couro'],
     colors: [
        'Jade', 'Jambo', 'Jaspe', 'Jambo escuro', 'Jambo claro', 'Jasmim', 'Jaspe verde', 'Jaspe azul', 'Jaspe amarelo', 'Jabuticaba',
        'Jade brilhante', 'Jade opaco', 'Jade pastel', 'Jade profundo', 'Jade claro', 'Jaspe fosco', 'Jaspe intenso', 'Jaspe perolado', 'Jaspe flamejante', 'Jaspe avermelhado',
        'Jabuti metálico', 'Jabuti matte', 'Jade fluorescente', 'Jade escuro', 'Jade petróleo', 'Jade vibrante', 'Jaspe nebuloso', 'Jade acinzentado', 'Jade neon', 'Jaspe tropical'
    ],
    
    elements: [
        'Jadeíta', 'Jaspe', 'Jodeto', 'Jovite', 'Jarosita', 'Jade branco', 'Jaspe vermelho', 'Jade negro', 'Jadersonita', 'Jabutônio',
        'Jaspilito', 'Jade estelar', 'Jatobita', 'Jafita', 'Jotunita', 'Jarvanita', 'Jordessonita', 'Javalina', 'Jafersonita', 'Jalestonita',
        'Jabuticionita', 'Joradita', 'Jasminita', 'Jarranita', 'Jutaxita', 'Jupiterita', 'Jornetita', 'Jameronita', 'Jestonita', 'Jatrosita'
    ],
    
    professions: [
        'Jornalista', 'Juiz', 'Jardineiro', 'Joalheiro', 'Jornaleiro', 'Jogador', 'Jangadeiro', 'Jatista', 'Jongueiro', 'Jardineiro paisagista',
        'Juiz de futebol', 'Juiz de paz', 'Jornalista esportivo', 'Jornalista investigativo', 'Jornalista digital', 'Jornalista político', 'Jornalista cultural', 'Jornalista social', 'Jornalista de moda', 'Juiz arbitral',
        'Jatista de navio', 'Jogador de xadrez profissional', 'Jongueiro mestre', 'Jangadeiro turístico', 'Jangadeiro artesanal', 'Jatista industrial', 'Jatista de precisão', 'Joalheiro de luxo', 'Joalheiro de prata', 'Jatista naval'
    ],
    
    media: [
        'Jurassic Park', 'Jogos Vorazes', 'Jumanji', 'Joker', 'Juno', 'Jojo Rabbit', 'Jessica Jones', 'John Wick', 'Jack Reacher', 'Jane Eyre',
        'Jaspion', 'Jiraiya', 'Justiceiro', 'Jack Ryan', 'Jovens Titãs', 'Johnny Bravo', 'Just Dance', 'Jikulumessu', 'Jogo de Espiões', 'Jornada nas Estrelas',
        'Jack e a Mecânica do Coração', 'James Bond', 'Jardim Secreto', 'Jabuti e a Tartaruga', 'Juízo Final', 'Janela Indiscreta', 'Jardins Suspensos', 'Jornada do Herói', 'Jekyll e Hyde', 'John Carter'
    ],
    
    brands: [
        'Jaguar', 'JBL', 'Jeep', 'Jansport', 'John Deere', 'Joma', 'Jack Daniels', 'Jo Malone', 'Joma Sport', 'Jil Sander',
        'Jimmy Choo', 'Jockey', 'Jacquemus', 'Janssen', 'Jack & Jones', 'Joe Boxer', 'Jordan', 'Jaguar Perfumes', 'Jurlique', 'Jarden',
        'Japan Airlines', 'Jiffy', 'Jockey Underwear', 'Jensens', 'Jewel-Osco', 'Jersey Mike\'s', 'Just Dance', 'Jamieson', 'Juvéderm', 'Jenson'
    ],
    
    plants: [
        'Jatobá', 'Jasmim', 'Jacarandá', 'Jambo', 'Jatobá-do-cerrado', 'Jiboia', 'Jatobazeiro', 'Jiripoca', 'Jurema', 'Jamelão',
        'Jardineira', 'Jasmim-manga', 'Juremeira', 'Jararaca-verde', 'Jacatupé', 'Jacarandá-mimoso', 'Jambo-rosa', 'Jambolão', 'Jaca', 'Jatobá-da-mata',
        'Jarrinha', 'Jatobazeira-anã', 'Juba-de-leão', 'Jacinto', 'Jambo-vermelho', 'Jiboia-verde', 'Jiboia-dourada', 'Jiboia-rosa', 'Jiboia-de-fogo', 'Jacareúba'
    ],
    
    fruits: [
        'Jaca', 'Jabuticaba', 'Jambo', 'Jenipapo', 'Jatobá', 'Jujuba', 'Jamelão', 'Jabuticaba-branca', 'Jaca-dura', 'Jaca-mole'
    ]
    

      },
      'K': {

    names: [
        'Kelvin', 'Kátia', 'Késia', 'Kauê', 'Kauã', 'Kaio', 'Kailane', 'Kelly', 'Karina', 'Kleber',
        'Klaus', 'Kim', 'Kennedy', 'Katarina', 'Katherine', 'Karol', 'Kayane', 'Kenny', 'Kevyn', 'Kauan',
        'Keziah', 'Kristian', 'Khalil', 'Keoma', 'Kyara', 'Kaique', 'Kamila', 'Kleberson', 'Kaleb', 'Kassandra'
    ],

    places: [
        'Kilamba', 'Katembe', 'KaTembe', 'KaNyaka', 'Kilimanjaro', 'Kabinda', 'Kampala', 'Kianda', 'Kuito', 'Kwanza',
        'Kuwait', 'Kigali', 'Kisumu', 'Kitwe', 'Kalulushi', 'Kabwe', 'Kananga', 'Kisangani', 'Kunduz', 'Karachi',
        'Kolkata', 'Kathmandu', 'Kobe', 'Kyoto', 'Krakow', 'Kansas', 'Kenitra', 'Kavango', 'Kampot', 'Khartoum'
    ],

    countries: [
        'Kosovo', 'Kuwait', 'Kiribati', 'Kazajistão', 'Quênia', 'Coreia do Sul', 'Coreia do Norte'
    ],

    animals: [
        'Kakapo', 'Kiwi', 'Krill', 'Kudu', 'Kanguru', 'Komodo', 'Kookaburra', 'Krait', 'Karakul', 'Koi',
        'Kudu-maior', 'Kudu-menor', 'Karakurt', 'Koala', 'Kraken', 'Kestrel', 'Kipenzi', 'Karearea', 'Kaimanawa', 'Koi gigante',
        'Kanguru-vermelho', 'Kanguru-cinzento', 'Kanguru-antílope', 'Kiwi-marrom', 'Kiwi-pontilhado', 'Kiwi-ouro', 'Kiwi-do-sul', 'Kestrel-europeu', 'Kestrel-americano', 'Komodo-jovem'
    ],

    objects: [
        'Kit de ferramentas', 'Ketchup', 'Karatê-gi', 'Kilt', 'Kimono', 'Kombi', 'Katana', 'Kindle', 'Kettle', 'Klox',
        'Kart', 'Karaokê', 'Kopje', 'Kran', 'Karambit', 'Kobelco', 'Kukri', 'Koto', 'Kaftan', 'Kipo',
        'Kilim', 'Kriptonita', 'Kestrel-binóculo', 'Kaizen-board', 'Kiss-lock', 'Kufi', 'Kaleidoscópio', 'Karate-belt', 'Kale', 'Kicker'
    ],

    colors: [
        'Kiwi', 'Khaki', 'Krypton Green', 'Koi Orange', 'Kelly Green', 'Ketchup Red', 'Kaolin White', 'Kashmir Blue', 'Kobicha Brown', 'Kyanite Blue',
        'Kombu Green', 'Kenyan Copper', 'Kawaii Pink', 'Koala Grey', 'Kale Green', 'Kraken Black', 'Krypton Yellow', 'Kashmir Rose', 'Katana Silver', 'Karmine Red',
        'Kyoto Yellow', 'Kelp Brown', 'Kava Beige', 'Kirin Gold', 'Kuro Black', 'Koi Gold', 'Kilimanjaro Blue', 'Kisumu Violet', 'Kalahari Sand', 'Keppel Blue'
    ],

    elements: [
        'Krypton', 'Kadmio', 'Kalium', 'Kainite', 'Kryptopólis', 'Kurchatovium', 'Klatrato', 'Kyanite', 'Kaolinite', 'Kalsilite',
        'Kamacite', 'Knopite', 'Kermesite', 'Kempite', 'Karpatite', 'Keilhauite', 'Kottigite', 'Kalicinite', 'Kaersutite', 'Kasolite',
        'Kryptonite', 'Kainosite', 'Kutnohorite', 'Krokydolite', 'Kobaltoan Dolomite', 'Kobyashevite', 'Kashinite', 'Khumtite', 'Kühnite', 'Kupletskite'
    ],

    professions: [
        'Kinesiólogo', 'Kartógrafo', 'Key Account Manager', 'Kaizen Coach', 'Karatê Instructor', 'Koç de Vida', 'Karateca Profissional', 'Kinesiologista', 'Kibernético', 'Kepler Analyst',
        'Kimono Designer', 'Kart Racer', 'Kora Player', 'Kitchen Designer', 'Knitwear Designer', 'Kiteboarder', 'Koi Breeder', 'Kindergarten Teacher', 'Kettle Maker', 'Keystone Engineer',
        'Kamikaze Pilot', 'Kombi Restaurador', 'Kraft Designer', 'Kaiju Researcher', 'Kettlebell Trainer', 'Kornetista', 'Kiln Operator', 'Karmic Healer', 'Kombucha Brewer', 'Karavaneiro'
    ],

    media: [
        'Kung Fu Panda', 'Karatê Kid', 'Kim Possible', 'Kubo e as Cordas Mágicas', 'Krypton', 'Kaamelott', 'Knight Rider', 'Kenan & Kel', 'Kill Bill', 'Kick-Ass',
        'K-On!', 'Kaguya-sama: Love is War', 'King Kong', 'Kimi no Na wa', 'Kaleido Star', 'Kids Next Door', 'Kung Fu Hustle', 'Kevin Hart: Zero F***s Given', 'Kipo and the Age of Wonderbeasts', 'K-PAX',
        'Kaiji: Ultimate Survivor', 'Knives Out', 'Kingdom', 'Kill la Kill', 'Kaizoku Sentai Gokaiger', 'Knightfall', 'King of Queens', 'Kicking & Screaming', 'Kamen Rider', 'Konosuba'
    ],

    brands: [
        'Kellogg’s', 'Kenwood', 'Kappa', 'Kodak', 'Kawasaki', 'Kleenex', 'Kiko Milano', 'Kate Spade', 'Keystone', 'Kirkland',
        'Kaspersky', 'KFC', 'Kimberly-Clark', 'KLM', 'Konami', 'Krups', 'Kyocera', 'Kohler', 'Karl Lagerfeld', 'K-Swiss',
        'Kenda', 'Koenigsegg', 'Korg', 'Kraft', 'Kymco', 'Koss', 'Kingston', 'Klorane', 'Kipling', 'Kobalt'
    ],

    plants: [
        'Kalanchoe', 'Kaffir Lime', 'Kudzu', 'Khat', 'Kapok Tree', 'Kumquat Tree', 'Kenaf', 'Kundong', 'Kurrajong', 'Kakadu Plum',
        'King Protea', 'Kentucky Coffee Tree', 'Kauri Tree', 'Kohekohe', 'Kowhai', 'Karaka', 'Kelp', 'Knotgrass', 'Knautia', 'Kangaroo Paw',
        'Kidney Bean', 'Kale', 'Kohlrabi', 'Kakabeak', 'Komatsuna', 'Kibatalia', 'Kadsura', 'Krameria', 'Knautia macedonica', 'Kush'
    ],

    fruits: [
        'Kiwi', 'Kinkan', 'Kumquat', 'Kaki', 'Kaffir Lime', 'Kabosu', 'Kundong', 'Kakadu Plum', 'Kerson Fruit', 'Korlan',
        'Keitt Mango', 'Kent Mango', 'Kyoho Grape', 'Karonda', 'Kohala Longan'
    ]
      },
      'L': {

    names: [
        'Luís', 'Leonor', 'Lázaro', 'Lurdes', 'Lídia', 'Leonardo', 'Lorena', 'Lourenço', 'Luana', 'Leandro',
        'Lara', 'Lilian', 'Lucas', 'Luciana', 'Lázara', 'Luan', 'Lorenzo', 'Luísa', 'Lívia', 'Liana',
        'Lívio', 'Lisandro', 'Leila', 'Lauro', 'Lígia', 'Luciano', 'Lourival', 'Leocádia', 'Ladislau', 'Leda'
    ],

    places: [
        'Lichinga', 'Lourenço Marques', 'Limpopo', 'Luabo', 'Luanda', 'Lubango', 'Lisboa', 'Londres', 'Los Angeles', 'Lagos',
        'Lourdes', 'Lucerna', 'León', 'Lublin', 'Lusaka', 'Luxemburgo', 'Lampedusa', 'Luleå', 'Lviv', 'Lille',
        'La Paz', 'La Habana', 'La Plata', 'Las Vegas', 'Lyon', 'Liverpool', 'Lima', 'Lhasa', 'Lombok', 'Lampedusa'
    ],

    countries: [
        'Lesoto', 'Libéria', 'Líbia', 'Luxemburgo', 'Lituânia', 'Letônia', 'Laos'
    ],

    animals: [
        'Leão', 'Lobo', 'Lontra', 'Lêmure', 'Lagarto', 'Lebre', 'Lula', 'Lampreia', 'Louva-a-deus', 'Lagartixa',
        'Lobo-guará', 'Lobo-cinzento', 'Leopardo', 'Lobo-marinho', 'Lagosta', 'Lobo-do-ártico', 'Lobo-etíope', 'Lori', 'Linsang', 'Lobo-vermelho',
        'Lacraia', 'Lagartixa-da-areia', 'Lagarto-teiú', 'Lábrador', 'Lobo-da-tasmânia', 'Lóris', 'Lagosta-espinhosa', 'Lili', 'Linguado', 'Lobo-ibérico'
    ],

    objects: [
        'Lápis', 'Lente', 'Lanterna', 'Livro', 'Lousa', 'Luva', 'Lixeira', 'Lousa-branca', 'Lustre', 'Laringoscópio',
        'Lancha', 'Látex', 'Lira', 'Lacre', 'Lambreta', 'Lente de contato', 'Lousa digital', 'Lápide', 'Lima', 'Lantejoula',
        'Lança-perfume', 'Lava-louça', 'Luminária', 'Lança-chamas', 'Língua artificial', 'Lupa', 'Lousa interativa', 'Lâmina', 'Lança-térmica', 'Lança-mísseis'
    ],

    colors: [
        'Lilás', 'Laranja', 'Lavanda', 'Lime', 'Linho', 'Lápis-lazúli', 'Laranja-avermelhado', 'Laranja-salmão', 'Laranja-melão', 'Lima-claro',
        'Lavanda-claro', 'Laranja-dourado', 'Laranja-forte', 'Lima-escuro', 'Lápis-lazúli-intenso', 'Laranja-brilhante', 'Laranja-cítrico', 'Laranja-neon', 'Laranja-queimado', 'Lilás-profundo',
        'Laranja-mandarina', 'Lavanda-intenso', 'Lime-fosco', 'Lavanda-dourado', 'Laranja-limão', 'Laranja-pêssego', 'Laranja-pastel', 'Laranja-vermelho', 'Lilás-suave', 'Laranja-terra'
    ],

    elements: [
        'Lítio', 'Lutécio', 'Lácrima', 'Lantânio', 'Látex', 'Lágrima de vidro', 'Labradorita', 'Lonsdaleíta', 'Luminol', 'Lantânidos',
        'Limonita', 'Líquen', 'Léucita', 'Lecitina', 'Lepidolita', 'Lodo', 'Lágrima de dragão', 'Lantanita', 'Lonsdaleno', 'Lava',
        'Lágrima de Fênix', 'Lapislazulita', 'Luminiscente', 'Lacrimogênio', 'Líquido amniótico', 'Lodolita', 'Lágrima de anjo', 'Líquido refrigerante', 'Limo', 'Líquido iônico'
    ],

    professions: [
        'Ladrilhador', 'Locutor', 'Luthier', 'Lenhador', 'Lavrador', 'Lojista', 'Lubrificador', 'Lactarista', 'Lançador', 'Líder comunitário',
        'Limpador', 'Logístico', 'Letrista', 'Lapidador', 'Laminador', 'Laqueador', 'Lanterneiro', 'Legista', 'Leiloeiro', 'Linguista',
        'Líder de equipe', 'Linhador', 'Lactologista', 'Lava-jato', 'Luthier de violino', 'Lentescópio', 'Ladrão de cena', 'Laqueador de móveis', 'Lanterneiro de carros', 'Leitora de provas'
    ],

    media: [
        'Lost', 'La Casa de Papel', 'Lobo Mau', 'Laranja Mecânica', 'Lúcia McCartney', 'Lassie', 'Lilo & Stitch', 'La La Land', 'Lobo Solitário', 'Lobo Adolescente',
        'Liga da Justiça', 'Lendas do Amanhã', 'Lobo Guerreiro', 'Loving Vincent', 'Lupin', 'Luzes da Cidade', 'Lado a Lado', 'Lutero', 'Ligeiramente Grávidos', 'Laços de Sangue',
        'Loucuras de Dick e Jane', 'Lágrimas do Sol', 'Lobo de Wall Street', 'Luna', 'Labirinto do Fauno', 'Loucademia de Polícia', 'Loucura de Amor', 'Lembranças', 'Leões de Guerra', 'Lendas Urbanas'
    ],

    brands: [
        'Lacoste', 'Lexus', 'L’Oréal', 'Lenovo', 'Louis Vuitton', 'Lamborghini', 'Levi’s', 'Lays', 'Lindt', 'Lacoste',
        'Lego', 'Land Rover', 'Lowe’s', 'Lufthansa', 'Lacasa', 'Lifebuoy', 'Líder', 'Lambretta', 'Lacta', 'Lacambra',
        'Lipton', 'Lush', 'Lowa', 'Logitech', 'Laredo', 'Lindt & Sprüngli', 'Lava', 'Lazareth', 'Lonsdale', 'Lian Li'
    ],

    plants: [
        'Laranjeira', 'Lírio', 'Lótus', 'Louro', 'Lentilha', 'Limoeiro', 'Lavanda', 'Lótus Azul', 'Laranja Amarga', 'Lima-da-pérsia',
        'Lirio-do-brejo', 'Lupino', 'Lírio-do-vale', 'Lino', 'Lantana', 'Lótus Rosa', 'Lírio-tigre', 'Lunária', 'Líquen', 'Lótus-branca',
        'Lágrima-de-cristo', 'Louro-vermelho', 'Lírio-aranha', 'Limonete', 'Lírio-de-são-josé', 'Lírio-de-paz', 'Lírio-japonês', 'Lupulina', 'Louro-preto', 'Lantana-camara'
    ],

    fruits: [
        'Laranja', 'Limão', 'Lichia', 'Lima', 'Lulo', 'Laranja-da-baía', 'Laranja-sanguínea', 'Laranja-seleta', 'Limão-cravo', 'Limão-galego',
        'Limão-siciliano', 'Limão-taiti', 'Laranja-cara-cara', 'Laranja-do-céu', 'Laranja-melancia'
    ]

      },

      'M': {
    names: [
        'Mateus', 'Marta', 'Miguel', 'Mariana', 'Manuel', 'Maria', 'Marcos', 'Margarida', 'Moisés', 'Melissa',
        'Matilde', 'Murilo', 'Madalena', 'Márcio', 'Marília', 'Martim', 'Maurício', 'Márcia', 'Milena', 'Máximo',
        'Mauro', 'Miranda', 'Melquisedeque', 'Misael', 'Michele', 'Marcelo', 'Marcelina', 'Misael', 'Moisés', 'Micaela'
    ],

    places: [
        'Maputo', 'Matola', 'Manica', 'Mocuba', 'Marracuene', 'Mocímboa da Praia', 'Maxixe', 'Montepuez', 'Moatize', 'Mandimba',
        'Magude', 'Malema', 'Marrupa', 'Mueda', 'Massingir', 'Massinga', 'Mecubúri', 'Mocuba', 'Mocímboa', 'Milange',
        'México', 'Madri', 'Moscovo', 'Melbourne', 'Miami', 'Manchester', 'Maceió', 'Maringá', 'Mombasa', 'Monróvia'
    ],

    countries: [
        'Moçambique', 'Madagascar', 'Malawi', 'Mali', 'Marrocos', 'Mauritânia', 'Maurícia', 'México', 'Mônaco', 'Malásia'
    ],

    animals: [
        'Macaco', 'Morcego', 'Mula', 'Marreco', 'Mamute', 'Morsa', 'Mocó', 'Mico-leão-dourado', 'Mexilhão', 'Mamba',
        'Mergulhão', 'Mariposa', 'Moréia', 'Mandril', 'Manatim', 'Marlin', 'Morcego-frugívoro', 'Musaranho', 'Megalodon', 'Marmota',
        'Mocho', 'Morcego-vampiro', 'Malaclemys', 'Marabu', 'Mamba-negra', 'Marreca', 'Monocarvoeiro', 'Moxotó', 'Mula-sem-cabeça', 'Macrópode'
    ],

    objects: [
        'Mesa', 'Microfone', 'Monitor', 'Mochila', 'Máquina', 'Mala', 'Martelo', 'Mouse', 'Mictório', 'Moldura',
        'Mangueira', 'Manteigueira', 'Moinho', 'Molde', 'Móbile', 'Mastro', 'Máscara', 'Marreta', 'Marcador', 'Maleta',
        'Maçarico', 'Micro-ondas', 'Mesa de bilhar', 'Metrônomo', 'Máquina de costura', 'Mão francesa', 'Maca', 'Massa de modelar', 'Megafone', 'Malote'
    ],

    colors: [
        'Marrom', 'Magenta', 'Mostarda', 'Malva', 'Manganês', 'Marfim', 'Mel', 'Mármore', 'Menta', 'Mocassim',
        'Manganita', 'Malaquita', 'Manganês-escuro', 'Malva-rosado', 'Manganês-azulado', 'Marrom-dourado', 'Marfim-antigo', 'Mostarda-claro', 'Manganês-violeta', 'Manganês-verde',
        'Manganês-púrpura', 'Magenta-intenso', 'Mostarda-avermelhado', 'Menta-claro', 'Mocassim-escuro', 'Manganês-profundo', 'Malva-suave', 'Manganês-metálico', 'Manganês-oxido', 'Manganês-ocre'
    ],

    elements: [
        'Magnésio', 'Manganês', 'Molibdênio', 'Mercúrio', 'Moscóvio', 'Metano', 'Malaquita', 'Mica', 'Moscovita', 'Monóxido de carbono',
        'Monazita', 'Mármores', 'Magnetita', 'Muscovita', 'Metanol', 'Morganaíta', 'Mitrídate', 'Mélanito', 'Muscovita-luz', 'Malaquita-azul',
        'Monóxido de nitrogênio', 'Molybdenita', 'Mercúrio-vapor', 'Muscovita-pó', 'Magneto', 'Molibdenita', 'Monoclina', 'Margarita', 'Muscovita-pedra', 'Malaquita-verde'
    ],

    professions: [
        'Médico', 'Mecânico', 'Motorista', 'Marceneiro', 'Mestre de obras', 'Militar', 'Montador', 'Marmorista', 'Magarefe', 'Malabarista',
        'Museólogo', 'Massoterapeuta', 'Maquiador', 'Músico', 'Meteorologista', 'Matemático', 'Modelista', 'Marinheiro', 'Maître', 'Mandrilhador',
        'Motociclista', 'Metalúrgico', 'Médico-veterinário', 'Midiólogo', 'Médico-patologista', 'Merendeiro', 'Montador de andaimes', 'Mestre cervejeiro', 'Máquina-operador', 'Manipulador de alimentos'
    ],

    media: [
        'Madagascar', 'Matrix', 'Mulan', 'Malévola', 'Mandalorian', 'Mad Max', 'Monstros S.A.', 'Moana', 'Missão Impossível', 'Meu Malvado Favorito',
        'MacGyver', 'Mentes Criminosas', 'Magnum P.I.', 'Malcolm in the Middle', 'MIB - Homens de Preto', 'Mamma Mia!', 'Mulher-Maravilha', 'Mestre dos Mares', 'Monty Python', 'Minority Report',
        'Marley & Eu', 'Monstros de Fábrica', 'Mercenários', 'Motoqueiros Selvagens', 'Munique', 'Marcas da Vida', 'Meia-noite em Paris', 'Men in Black', 'Menina de Ouro', 'Milagre na Cela 7'
    ],

    brands: [
        'Mercedes-Benz', 'McDonald’s', 'Microsoft', 'Motorola', 'Maggi', 'Mizuno', 'Monster', 'Maybelline', 'Marvel', 'Montblanc',
        'Maserati', 'Mango', 'Makita', 'Mondelez', 'Mikasa', 'Mazda', 'Mini Cooper', 'Marriott', 'Milka', 'Magnum',
        'Michelin', 'Medley', 'Moncler', 'Midea', 'Mahle', 'Mormaii', 'Montana', 'Maxton', 'Mega Bloks', 'Montesa'
    ],

    plants: [
        'Mangueira', 'Mandioca', 'Maracujazeiro', 'Macieira', 'Mogno', 'Mamoeiro', 'Mandrágora', 'Manjericão', 'Mirtilo', 'Margarida',
        'Milho', 'Malva', 'Marmeleiro', 'Murta', 'Mandioqueira', 'Melancia', 'Morus', 'Mimosa', 'Maná-cubiu', 'Maranta',
        'Melaleuca', 'Mostarda', 'Maranta-variegata', 'Maçã-de-elefante', 'Maranta-vermelha', 'Mirra', 'Magnólia', 'Margaridão', 'Marrubio', 'Murta-do-campo'
    ],

    fruits: [
        'Manga', 'Maçã', 'Melancia', 'Mamão', 'Maracujá', 'Melão', 'Mirtilo', 'Morango', 'Mexerica', 'Marmelo',
        'Maçã-verde', 'Maçã-gala', 'Maçã-fuji', 'Melão-cantaloupe', 'Manga-palmer', 'Manga-tommy', 'Manga-rosa', 'Marula', 'Maçã-do-amor', 'Maçã-argentina'
    ]
      },

      'N': {
    names: [
        'Nelson', 'Natália', 'Nuno', 'Nádia', 'Nicolau', 'Neuza', 'Norberto', 'Nair', 'Norah', 'Natan',
        'Nivaldo', 'Noemi', 'Nestor', 'Nélio', 'Nereu', 'Naiara', 'Neide', 'Narciso', 'Nayana', 'Natasha',
        'Newton', 'Nicolly', 'Noronha', 'Natanael', 'Nazira', 'Neuma', 'Nereida', 'Nadson', 'Napoleão', 'Nélida'
    ],

    places: [
        'Nampula', 'Nacala', 'Namuno', 'Nhamatanda', 'Nacaroa', 'Nipepe', 'Nanjing', 'Nairobi', 'Nova Iorque', 'Nuremberg',
        'Napoles', 'Natal', 'Niamey', 'Nakuru', 'Nouakchott', 'Noumea', 'Nassau', 'Nagoya', 'Nice', 'Norfolk',
        'Nova Deli', 'New Orleans', 'Neuchâtel', 'Nizhny Novgorod', 'Nairobi', 'Nantucket', 'Nagpur', 'Newcastle', 'Niterói', 'Nanchang'
    ],

    countries: ['Namíbia', 'Nepal', 'Nicarágua', 'Noruega', 'Nova Zelândia', 'Níger', 'Nigéria', 'Nauru', 'Niue', 'Norte da Macedônia'],

    animals: [
        'Nandu', 'Narval', 'Naja', 'Necturus', 'Neon tetra', 'Niala', 'Numbat', 'Narina-trogon', 'Nautilus', 'Nectarina',
        'Nematódeo', 'Negrinho', 'Neon goby', 'Noctilio', 'Notothenia', 'Nanday parrot', 'Nyala', 'Nicator', 'Nandu-comum', 'Narceja',
        'Neritina', 'Nicaraguan slider', 'Nandus nebulosus', 'Narwal', 'Nematopalaemon', 'Neoneura', 'Notiomystis', 'Nerophis', 'Nimravidae', 'Notonecta'
    ],

   objects: [
        'Navio', 'Notebook', 'Navalha', 'Narguilé', 'Nécessaire', 'Nicho', 'Nó', 'Nanquim', 'Naipe', 'Nadadeira',
        'Nylon', 'Nutrição', 'Navalhete', 'Narguilé de vidro', 'Néon', 'Nicho de parede', 'Navete', 'Necessaire de couro', 'Naipe de copas', 'Néon azul',
        'Nadadeira de natação', 'Naveta de bordado', 'Nanquim preto', 'Navalha de barbear', 'Nicho organizador', 'Néon fluorescente', 'Narguilé árabe', 'Néon vermelho', 'Navete de costura', 'Navalha de precisão'
    ],

    colors: [
        'Néon', 'Neve', 'Níquel', 'Nacarado', 'Nogueira', 'Naval', 'Noz', 'Nebuloso', 'Névoa', 'Nardo',
        'Noturno', 'Natural', 'Noite', 'Nebuloso-escuro', 'Néon-verde', 'Nacarado-perolado', 'Névoa-azulada', 'Naval-profundo', 'Noz-escuro', 'Névoa-cinzenta',
        'Níquel-claro', 'Néon-rosa', 'Naval-claro', 'Nogueira-avermelhada', 'Noturno-azulado', 'Néon-laranja', 'Natural-acinzentado', 'Noite-azul', 'Nebuloso-intenso', 'Níquel-prateado'
    ],

    elements: [
        'Neônio', 'Níquel', 'Neodímio', 'Niobato', 'Nitrato', 'Nitrogênio', 'Nefelina', 'Natrocarbonatita', 'Natron', 'Nefrita',
        'Nesquehonita', 'Neptunita', 'Narcisita', 'Nodulito', 'Nimita', 'Nélsonita', 'Napolina', 'Neptunium', 'Nihonium', 'Neptunita-azul',
        'Níquel-ferro', 'Níquel-sulfato', 'Níquel-cobalto', 'Níquel-puro', 'Níquel-carbonato', 'Nitrato de prata', 'Nitrato de cálcio', 'Nitrato de sódio', 'Nitrato de amônio', 'Nitrato de potássio'
    ],

    professions: [
        'Nutricionista', 'Navegador', 'Neurologista', 'Numerólogo', 'Negociador', 'Nadador profissional', 'Notário', 'Narrador esportivo', 'Neonatologista', 'Naturopata',
        'Nanotecnólogo', 'Neurocirurgião', 'Necromante (ficcional)', 'Notável escritor', 'Neuropsicólogo', 'Nefrologista', 'Netweaver', 'Nostradamus moderno', 'Narcotraficante (ilegal)', 'Nutrólogo',
        'Nadador olímpico', 'Nadador sincronizado', 'Neurocientista', 'Neuropata', 'Nanobiólogo', 'Negociante de arte', 'Navalheiro', 'Neurofisiologista', 'Neuroterapeuta', 'Neuroengenheiro'
    ],

    media: [
        'Naruto', 'Nárnia', 'Nosferatu', 'Notícias Populares', 'Nova Era', 'Nikita', 'Narcos', 'New Amsterdam', 'Numb3rs', 'Nashville',
        'Noé', 'Na Mira do Crime', 'No Ritmo', 'Nip/Tuck', 'North & South', 'Nuvem Negra', 'Na Selva', 'Numa Fria', 'Ninguém Pode Saber', 'Na Sombra do Medo',
        'Noite Macabra', 'Nada a Perder', 'Na Teia da Conspiração', 'No Fim do Mundo', 'No Coração do Crime', 'Ninho de Cobras', 'Negócios Mortais', 'Nova Ordem Mundial', 'Na Trilha da Morte', 'Navio Fantasma'
    ],

    brands: [
        'Nike', 'Nestlé', 'Nintendo', 'Nokia', 'Nivea', 'Natura', 'Netflix', 'New Balance', 'Nutella', 'Nissan',
        'Nikon', 'Nescafé', 'NordVPN', 'Nextel', 'Nautica', 'Nanica', 'Nixon', 'Nutanix', 'Nova Schin', 'Nando\'s',
        'Nitecore', 'Nucleus', 'Naim', 'Netgear', 'Nerf', 'Nova Era', 'Nerium', 'Nutrição VIP', 'Nash', 'Neon'
    ],

    plants: [
        'Nogueira', 'Nenúfar', 'Nêspera', 'Narciso', 'Neem', 'Nandina', 'Nicotiana', 'Nepenthes', 'Norantea', 'Nolina',
        'Narthecium', 'Nigella', 'Nectarina', 'Nerium', 'Nymphaea', 'Nuphar', 'Nephrolepis', 'Nardus', 'Nyssa', 'Napoleonaea',
        'Nothofagus', 'Nauclea', 'Nannorrhops', 'Nolina recurvata', 'Nepeta', 'Nardostachys', 'Nuytsia', 'Nephrosperma', 'Nertera', 'Notocactus'
    ],

    fruits: [
        'Nêspera', 'Nectarina', 'Noz', 'Noz-moscada', 'Noni', 'Noz-pecã', 'Nectocorina', 'Nacional', 'Noz-de-cola', 'Noz-tropical'
    ]

      },
      'O': {

    names: [
        'Oscar', 'Olga', 'Otávio', 'Orlando', 'Odete', 'Osvaldo', 'Omar', 'Olívia', 'Onofre', 'Odair',
        'Orfeu', 'Otília', 'Otoniel', 'Osmar', 'Olegário', 'Oziel', 'Odilon', 'Oriana', 'Osni', 'Odaísa',
        'Ozório', 'Oseias', 'Orlanda', 'Olivier', 'Ornella', 'Orion', 'Oceano', 'Omarion', 'Otaviana', 'Orquídia'
    ],

    places: [
        'Ombú', 'Ovar', 'Odivelas', 'Oslo', 'Oeiras', 'Oaxaca', 'Orleans', 'Oregon', 'Okinawa', 'Ontario',
        'Omdurman', 'Oristano', 'Oviedo', 'Oujda', 'Oranjestad', 'Oran', 'Oostende', 'Odessa', 'Osh', 'Orenburg',
        'Oulu', 'Ohrid', 'Oradea', 'Omaha', 'Olinda', 'Ostrava', 'Orense', 'Oaxaca de Juárez', 'Ogun', 'Owerri'
    ],

    countries: ['Omã'],

    animals: [
        'Orangotango', 'Orca', 'Ouriço', 'Onça', 'Ovelha', 'Ocapi', 'Olho-de-boi', 'Ostraceiro', 'Ouriço-do-mar', 'Ostraceiro-negro',
        'Otária', 'Oricteropo', 'Ornitorrinco', 'Ouriço-cacheiro', 'Ostraceiro-europeu', 'Orangotango-de-bornéu', 'Ortolano', 'Ostraceiro-americano', 'Olho-de-fogo', 'Onagro',
        'Oxpecker', 'Oxyura', 'Ocypode', 'Oligodon', 'Osteoglossidae', 'Ophisops', 'Oxybelis', 'Ophthalmotilapia', 'Otocinclus', 'Osmia'
    ],

    objects: [
        'Óculos', 'Orelha', 'Ombreira', 'Organizador', 'Ovo', 'Ostra', 'Ocarina', 'Oximetro', 'Osciloscópio', 'Odômetro',
        'Oratório', 'Ombro', 'Ovo de Páscoa', 'Ofurô', 'Olivar', 'Óleo', 'Ornamento', 'Orifício', 'Opa', 'Obelisco',
        'Ovaral', 'Osmose', 'Oca', 'Ocarina de cerâmica', 'Óleo essencial', 'Ovo cozido', 'Oximetria', 'Ostentação', 'Órbita', 'Olho-mágico'
    ],

    colors: [
        'Ocre', 'Oliva', 'Ouro', 'Orquídea', 'Ombro', 'Ópalo', 'Ouro-velho', 'Olho-de-gato', 'Obsidiana', 'Onda',
        'Orvalho', 'Oceano', 'Ocre-dourado', 'Olho-de-perdiz', 'Ouro-branco', 'Ouro-amarelo', 'Orquídea-escura', 'Oliva-clara', 'Ombro-pardo', 'Óxido',
        'Opalino', 'Ocre-avermelhado', 'Ouro-rosado', 'Ouro-pálido', 'Onda-marinha', 'Olho-de-cobra', 'Orvalho-suave', 'Obsidiana-azulada', 'Oceano-claro', 'Ouro-real'
    ],

    elements: [
        'Oxigênio', 'Ósmio', 'Ortofosfato', 'Óxido de ferro', 'Óxido de zinco', 'Óxido de cálcio', 'Óxido de cobre', 'Óxido de alumínio', 'Óxido nítrico', 'Óxido de enxofre',
        'Óxido de chumbo', 'Óxido de magnésio', 'Óxido de nitrogênio', 'Óxido de prata', 'Óxido de urânio', 'Óxido de potássio', 'Óxido de lítio', 'Óxido de titânio', 'Óxido de níquel', 'Óxido de estanho',
        'Óxido de fósforo', 'Óxido de bário', 'Óxido de mercúrio', 'Óxido de boro', 'Óxido de sódio', 'Óxido de vanádio', 'Óxido de manganês', 'Óxido de molibdênio', 'Óxido de ródio', 'Óxido de bismuto'
    ],

    professions: [
        'Odontologista', 'Oculista', 'Ortodontista', 'Ortopedista', 'Oficial de Justiça', 'Oceanógrafo', 'Operador de máquinas', 'Oleiro', 'Observador de aves', 'Ornamentador',
        'Organizador de eventos', 'Ortopedista pediátrico', 'Otorrinolaringologista', 'Orientador educacional', 'Operador de áudio', 'Oficial de bordo', 'Operador de telemarketing', 'Operador de drones', 'Ortopedista esportivo', 'Operador de empilhadeira',
        'Oficial de justiça criminal', 'Operador de logística', 'Oceanógrafo ambiental', 'Oficial de imigração', 'Ortopedista cirúrgico', 'Operador de som', 'Oficial de resgate', 'Operador de rádio', 'Ornamentista de vitrine', 'Operador de transporte'
    ],

    media: [
        'O Auto da Compadecida', 'O Rei Leão', 'O Poderoso Chefão', 'Os Simpsons', 'Os Vingadores', 'O Incrível Hulk', 'O Justiceiro', 'O Mágico de Oz', 'O Senhor dos Anéis', 'O Hobbit',
        'O Chamado', 'O Exorcista', 'O Segredo', 'O Diário de Anne Frank', 'O Código da Vinci', 'O Planeta dos Macacos', 'O Último Samurai', 'O Lobo de Wall Street', 'O Grande Gatsby', 'O Destino de Júpiter',
        'O Retorno de Jedi', 'O Menino Maluquinho', 'O Casamento do Meu Melhor Amigo', 'O Inferno de Dante', 'O Profeta', 'O Preço do Amanhã', 'O Ultimato Bourne', 'O Círculo de Fogo', 'O Som do Silêncio', 'O Túnel'
    ],

    brands: [
        'Omo', 'Olivetti', 'Oracle', 'Oreo', 'Osklen', 'OnePlus', 'Oculus', 'Opel', 'Oral-B', 'Olympikus',
        'Oster', 'OtterBox', 'Onkyo', 'Oakley', 'OXXO', 'Oris', 'Omega', 'Omo Sports', 'Olay', 'Octagon',
        'Outback', 'Osram', 'Oséque', 'Omax', 'Orangina', 'Oceane', 'Otelo', 'Outhorn', 'Okanagan', 'Ovaltine'
    ],

    plants: [
        'Oliveira', 'Orquídea', 'Orelha-de-elefante', 'Orégano', 'Oxalis', 'Ombu', 'Orvalho', 'Olmo', 'Ophrys', 'Ostrya',
        'Orontium', 'Osmanthus', 'Othonna', 'Oxytropis', 'Oncidium', 'Opuntia', 'Olea', 'Ornithogalum', 'Oxalis triangularis', 'Ophiopogon',
        'Ocimum', 'Oryza', 'Oenanthe', 'Ormosia', 'Osbeckia', 'Orthosiphon', 'Oplopanax', 'Oxydendrum', 'Omalotheca', 'Oryctanthus'
    ],

    fruits: ['Oiti', 'Ombu', 'Oliva', 'Orvalho-do-campo', 'Oxicoco', 'Ovo de dragão', 'Orelha-de-onça', 'Ortanique', 'Orímbia', 'Ojo de liebre']
      },
      'P': {

    names: [
        'Pedro', 'Paula', 'Patrícia', 'Paulo', 'Priscila', 'Pablo', 'Paloma', 'Pascoal', 'Pamela', 'Plácido',
        'Pietro', 'Poliana', 'Percival', 'Pérola', 'Paixão', 'Pandora', 'Piedade', 'Penélope', 'Presciliano', 'Pompílio',
        'Porfírio', 'Petronila', 'Prospero', 'Paterno', 'Pafúncio', 'Pontes', 'Paquena', 'Portela', 'Pandolfo', 'Peixoto'
    ],

    places: [
        'Pemba', 'Pebane', 'Panda', 'Pangane', 'Patos de Minas', 'Palmares', 'Porto Alegre', 'Paris', 'Pequim', 'Pittsburgh',
        'Praga', 'Phuket', 'Porto', 'Pafos', 'Pretória', 'Perth', 'Parma', 'Punta Cana', 'Pamplona', 'Plymouth',
        'Pucallpa', 'Papeete', 'Pattaya', 'Pordenone', 'Podgorica', 'Portsmouth', 'Palawan', 'Providence', 'Patras', 'Porto-Novo'
    ],

    countries: ['Portugal', 'Paquistão', 'Palau', 'Peru', 'Polônia', 'Panamá', 'Papua-Nova Guiné', 'Paraguai'],

    animals: [
        'Panda', 'Pinguim', 'Puma', 'Papagaio', 'Paca', 'Porco', 'Peixe-palhaço', 'Pavão', 'Pombo', 'Perereca',
        'Peixe-boi', 'Pirarucu', 'Peixe-espada', 'Peixe-leão', 'Pangolim', 'Peixe-beta', 'Poodle', 'Pirarara', 'Peixe-borboleta', 'Peixe-pedra',
        'Peixe-lua', 'Peixe-voador', 'Piranha', 'Peixe-anfíbio', 'Peixe-anjo', 'Peixe-dourado', 'Peixe-serra', 'Píton', 'Peixe-serpente', 'Peixe-escorpião'
    ],

    objects: [
        'Panela', 'Pente', 'Prato', 'Papel', 'Porta', 'Prego', 'Piano', 'Pulseira', 'Parafuso', 'Painel',
        'Pá', 'Pedra', 'Pelúcia', 'Pirâmide', 'Pincel', 'Portão', 'Patins', 'Penico', 'Placa', 'Porta-retrato',
        'Porta-moedas', 'Papelão', 'Pote', 'Poltrona', 'Patinete', 'Pêndulo', 'Pipoqueira', 'Pantufa', 'Pá de lixo', 'Pen drive'
    ],

    colors: [
        'Preto', 'Púrpura', 'Prata', 'Pêssego', 'Petróleo', 'Palha', 'Pistache', 'Platina', 'Pérola', 'Pardo',
        'Pastel', 'Papoula', 'Pavão', 'Púrpura escuro', 'Prata envelhecida', 'Pardo-avermelhado', 'Pérola brilhante', 'Petróleo intenso', 'Preto fosco', 'Pérola cintilante',
        'Platina clara', 'Papoula vibrante', 'Preto profundo', 'Pêssego suave', 'Palha dourada', 'Pastel frio', 'Pérola rosada', 'Prata espelhada', 'Pistache queimado', 'Preto metálico'
    ],

    elements: [
        'Platina', 'Paládio', 'Polônio', 'Praseodímio', 'Plutônio', 'Potássio', 'Promécio', 'Protactínio', 'Palládio', 'Plumbum',
        'Prata', 'Peróxido', 'Pentóxido de fósforo', 'Parafina', 'Petróleo', 'Plastificante', 'Polietileno', 'Poliestireno', 'Policarbonato', 'Polisilício',
        'Polissulfeto', 'Polímero', 'Pectina', 'Piranose', 'Pirimidina', 'Pirrolidina', 'Piridina', 'Perclorato', 'Peróxido de hidrogênio', 'Pirenóide'
    ],

    professions: [
        'Professor', 'Psicólogo', 'Padeiro', 'Policial', 'Programador', 'Publicitário', 'Piloto', 'Pesquisador', 'Pintor', 'Pedagogo',
        'Produtor', 'Poeta', 'Pescador', 'Podólogo', 'Procurador', 'Personal Trainer', 'Perito criminal', 'Paramédico', 'Promotor de eventos', 'Palhaço',
        'Perfumista', 'Paisagista', 'Patologista', 'Pedreiro', 'Projetista', 'Pasteleiro', 'Pastor', 'Presidente', 'Profissional de marketing', 'Parapsicólogo'
    ],

    media: [
        'Peaky Blinders', 'Pocahontas', 'Piratas do Caribe', 'Pokémon', 'Pantera Negra', 'Paddington', 'Psicose', 'Pulp Fiction', 'Pânico', 'Percy Jackson',
        'Peter Pan', 'Pantera Cor-de-Rosa', 'Power Rangers', 'Pretty Woman', 'Prison Break', 'Pé Pequeno', 'Planeta dos Macacos', 'Perdidos no Espaço', 'Pateta', 'Peixonauta',
        'Polly Pocket', 'Pato Donald', 'Peter Rabbit', 'Peaky Blinders', 'Pingu', 'Puppy Dog Pals', 'Phineas e Ferb', 'Pica-Pau', 'Powerpuff Girls', 'Pânico na Floresta'
    ],

    brands: [
        'Pepsi', 'Panasonic', 'Prada', 'Puma', 'PlayStation', 'Philips', 'Polaroid', 'Pirelli', 'Pandora', 'Paco Rabanne',
        'Patagonia', 'Patek Philippe', 'PayPal', 'Pilot', 'Pintaluba', 'Peugeot', 'Primark', 'Planet Hollywood', 'Plymouth', 'Piaget',
        'Paul Mitchell', 'Pompeia', 'Pontiac', 'Piticas', 'Polishop', 'Pierre Cardin', 'Penélope', 'Patek', 'Peter England', 'Portobello'
    ],

    plants: [
        'Pau-brasil', 'Pimenteira', 'Palmeira', 'Poejo', 'Pinheiro', 'Pequi', 'Pata-de-vaca', 'Pau-ferro', 'Pau-d’alho', 'Pau-santo',
        'Pata-de-elefante', 'Pinhão-manso', 'Pimenta-do-reino', 'Pau-formiga', 'Pindaíba', 'Pitanga', 'Plumeria', 'Primavera', 'Passiflora', 'Papiro',
        'Perpétua', 'Papoula', 'Pecã', 'Pistache', 'Palma-de-cristo', 'Pândano', 'Palmeira-açaí', 'Pineberry', 'Pariparoba', 'Piper'
    ],

    fruits: [
        'Pera', 'Pitanga', 'Pêssego', 'Pinha', 'Pistache', 'Physalis', 'Patauá', 'Pequi', 'Pitangão', 'Pindaíba',
        'Pitaia', 'Puruí', 'Pupunha', 'Puxuri', 'Pindaí', 'Picanha-do-mato', 'Piquiá', 'Pitangola', 'Pecan', 'Pataua',
        'Pindaíba-do-mato', 'Pita', 'Palmeira-açaí', 'Pinda', 'Pinda-rosa', 'Pindoba', 'Pium', 'Piqui', 'Pindorama', 'Pinha-branca'
    ]


      },
      'Q': {

    names: [
        'Quirino', 'Quitéria', 'Queila', 'Quintino', 'Quésia', 'Quirina', 'Quércia', 'Quintiliano', 'Queiroz', 'Queren',
        'Quênia', 'Quixote', 'Querubina', 'Quirino Júnior', 'Quendrim', 'Quessia', 'Quinzinho', 'Quirze', 'Quim', 'Quovadis',
        'Quidel', 'Quay', 'Quesada', 'Quiana', 'Quismar', 'Quinel', 'Quirna', 'Quisara', 'Quito', 'Quistina'
    ],

    places: [
        'Quelimane', 'Quissico', 'Quirimbas', 'Quatro de Fevereiro', 'Quito', 'Quintana Roo', 'Quebec', 'Queensland', 'Quirguistão', 'Quimper',
        'Quinhamel', 'Quarteira', 'Quepos', 'Quilmes', 'Quezon City', 'Qashqadaryo', 'Qingdao', 'Quibdó', 'Quillabamba', 'Quilotoa',
        'Quorn', 'Quetta', 'Quedlinburg', 'Qinhuangdao', 'Quillacollo', 'Quy Nhơn', 'Quanzhou', 'Qamishli', 'Qarshi', 'Qaraghandy'
    ],

    countries: ['Quirguistão', 'Qatar'],

    animals: [
        'Quati', 'Quetzal', 'Quokka', 'Quelea', 'Quimera', 'Quoll', 'Quiróptero', 'Quetzal Resplandecente', 'Quilópode', 'Quebra-nozes',
        'Quati-de-cauda-anelada', 'Quati-de-nariz-branco', 'Quati-amarelo', 'Quivi', 'Quebra-ossos', 'Quiriquiri', 'Quailfinch', 'Quati-negro', 'Quero-quero', 'Quero-quero-da-patagônia',
        'Quero-quero-amarelo', 'Quero-quero-de-papo-branco', 'Quiriquiri-do-norte', 'Quiriquiri-do-sul', 'Quetzal-dourado', 'Quetzal-vermelho', 'Quivive', 'Quebra-gelo', 'Quebra-mato', 'Quebra-vento'
    ],

    objects: [
        'Quadro', 'Quimono', 'Quebra-cabeça', 'Queijo', 'Quirógrafo', 'Quintal', 'Quepe', 'Quadrante', 'Quebra-nozes', 'Querosene',
        'Quebra-luz', 'Quebra-vento', 'Químico', 'Quartzo', 'Quilômetro', 'Quatro-lados', 'Quilha', 'Quebra-mar', 'Quebra-molas', 'Quintessência',
        'Quebra-galho', 'Quebra-ossos', 'Quebrador', 'Quebranta', 'Quina', 'Quixaba', 'Quilha-longa', 'Queijeira', 'Quengueiro', 'Quentinha'
    ],

    colors: [
        'Quinacridona', 'Quartzo Rosa', 'Queimado', 'Quase Branco', 'Quente', 'Quatro-tons', 'Quirúrgico', 'Quaresma', 'Quartzito', 'Quinino',
        'Quartzo Azul', 'Quinacridona Vermelha', 'Quinacridona Rosa', 'Quinacridona Púrpura', 'Quaresma Roxo', 'Quaresma Verde', 'Quaresma Azul', 'Quartzo Cinza', 'Quintessência Verde', 'Quintessência Azul',
        'Quintessência Roxa', 'Quebranto Azul', 'Quebranto Cinza', 'Quebranto Verde', 'Quebranto Roxo', 'Quebranto Vermelho', 'Quasar Azul', 'Quasar Roxo', 'Quasar Verde', 'Quasar Vermelho'
    ],

    elements: [
        'Quartzo', 'Quinolina', 'Querosene', 'Química', 'Quinze-Carbono', 'Quimotripsina', 'Queratina', 'Quinina', 'Quinídio', 'Quassina',
        'Quinuclidina', 'Quinizarina', 'Quiralgênio', 'Quimeno', 'Quilomassa', 'Quintessência', 'Quântica', 'Quaternário', 'Quinase', 'Quina',
        'Quintozônio', 'Quiritona', 'Quilomatriz', 'Quimisso', 'Queratolítico', 'Químio', 'Quercetina', 'Quinocetona', 'Quinol', 'Quimose'
    ],

    professions: [
        'Químico', 'Quiropraxista', 'Quiltador', 'Quimiorrelator', 'Químico Ambiental', 'Químico de Alimentos', 'Químico Industrial', 'Químico Forense', 'Quiroprático', 'Quintanista',
        'Quiromante', 'Queijeiro', 'Queimador', 'Químico Pesquisador', 'Quartilista', 'Químico Formulador', 'Químico Experimental', 'Quintalista', 'Quirologista', 'Químico Nanotecnológico',
        'Químico Orgânico', 'Químico Inorgânico', 'Químico Sintético', 'Químico Analítico', 'Químico Medicinal', 'Químico Perfumista', 'Químico de Tintas', 'Químico Industrial Farmacêutico', 'Químico de Cosméticos', 'Químico Agroquímico'
    ],

    media: [
        'Queer Eye', 'Quantico', 'Quo Vadis', 'Queen', 'Quicksilver', 'Quantum Leap', 'Queen’s Gambit', 'Questão de Tempo', 'Quinta Dimensão', 'Quincy M.E.',
        'Quicksand', 'Quill', 'Quarterback', 'Quarantine', 'Quackers', 'Quagmire', 'Queen of the South', 'Queen Sugar', 'Queen’s Blade', 'Quantum of Solace',
        'Quatro Irmãos', 'Quebrando o Tabu', 'Quem quer ser um milionário?', 'Queijo e Goiabada', 'Quatro Vidas de um Cachorro', 'Quatro Casamentos e um Funeral', 'Queen Live at Wembley', 'Quase Famosos', 'Quantum Break', 'Quincy Jones: A Life in Music'
    ],

    brands: [
        'Quaker', 'Qualcomm', 'QuickSilver', 'Quiksilver', 'Quintana', 'Quintessentially', 'Quattro', 'Qatar Airways', 'Queen Helene', 'Quintessential',
        'Quilmes', 'Quintero', 'Quantum', 'Quintino', 'Quasar', 'Quid', 'QLED', 'Q-Link', 'Quattrocento', 'Quorn',
        'Qatar Foundation', 'QLab', 'Quinta do Crasto', 'Quatro Estações', 'Quina', 'Quesada', 'Qarshi', 'Quintessence', 'QuickStop', 'Quirky'
    ],

    plants: [
        'Quaresmeira', 'Quinoa', 'Quebra-pedra', 'Quixabeira', 'Quina', 'Quitoco', 'Quebra-foice', 'Quaresma', 'Quinze-réis', 'Quebra-nozes',
        'Quero-quero', 'Quinquina', 'Quinino', 'Quaresmeira Roxa', 'Quaresmeira Branca', 'Quaresmeira Rosa', 'Quebra-mato', 'Quixaba', 'Quitoco Roxo', 'Quebra-luz',
        'Quaresmeira Lilás', 'Quebra-galho', 'Quebra-ossos', 'Quentura', 'Quaresmal', 'Quinquilá', 'Quinta-feira', 'Quebra-dente', 'Quássia', 'Quiróptera'
    ],

    fruits: [
        'Quina', 'Quenepa', 'Quixaba', 'Quixabeira', 'Quebra-panela', 'Quaresma', 'Quintal', 'Quivano', 'Quivi', 'Quina-do-campo',
        'quívia', 'Quibe', 'Quassia', 'Quindim', 'Quixabeiro', 'Quebra-galho', 'Quaresmeira', 'Quaresma Roxa', 'Quaresma Branca', 'Quaresmeira Verde']

      },
      'R': {

    names: [
        'Ricardo', 'Rita', 'Rui', 'Rosa', 'Renato', 'Raquel', 'Rogério', 'Regina', 'Roberto', 'Rúben',
        'Rodrigo', 'Rafael', 'Raimundo', 'Raissa', 'Rivaldo', 'Romário', 'Rodolfo', 'Rosângela', 'Ramiro', 'Rebeca',
        'Reginaldo', 'Roxana', 'Rudá', 'Raul', 'Ronaldo', 'Renan', 'Rubens', 'Renê', 'Rufino', 'Rosália'
    ],

    places: ['Ressano Garcia', 'Ribáuè', 'Rovuma', 'Roma', 'Rio de Janeiro', 'Recife', 'Rabat', 'Roterdã', 'Richmond', 'Riga', 'Ruanda', 'Rosário', 'Riyadh', 'Reiquejavique', 'Roterdã', 'Rennes', 'Rodes', 'Roraima', 'Rajkot', 'Rimini', 'Rouen', 'Rundu', 'Rijeka', 'Rostov', 'Rovaniemi', 'Riga', 'Regensburg', 'Ravenna', 'Reus', 'Rishikesh'],
    countries: ['Ruanda', 'Rússia', 'República Dominicana', 'Romênia'],
      animals: ['Rinoceronte', 'Raposa', 'Rato', 'Raia', 'Rouxinol', 'Robalo', 'Rottweiler', 'Ram', 'Rena', 'Robalete', 'Rato-canguru', 'Rouxinol-do-Japão', 'Raposa-do-Ártico', 'Robalo-bicudo', 'Robalo-flecha', 'Robalo-pequeno', 'Ratazana', 'Rouxinol-sibérico', 'Robalo-riscado', 'Ratel', 'Roca', 'Robalo-de-bico', 'Robalo-listrado', 'Rouxinol-mirim', 'Raposa-voadora', 'Robalo-vermelho', 'Rouxinol-dourado', 'Robalo-prateado', 'Raposa-orelhuda', 'Robalo-da-tainha'],
      objects: [ 'Relógio', 'Régua', 'Rádio', 'Roteador', 'Roupa', 'Ramalhete', 'Rinque', 'Rodo', 'Régua T', 'Reator', 'Rasteira', 'Raquete', 'Rebimboca', 'Rodapé', 'Rodízio', 'Rótulo', 'Revista', 'Raspador', 'Ramal', 'Rodoanel', 'Radar', 'Rebocador', 'Ressonador', 'Régua eletrônica', 'Roupão', 'Roda-gigante', 'Raio X', 'Roldana', 'Rabo-de-cavalo', 'Riscador'],
       colors: ['Roxo', 'Rosa', 'Rubra', 'Rubi', 'Rústico', 'Rádioativo', 'Ravena', 'Renda', 'Riacho', 'Rubro-negro', 'Rústico Escuro', 'Roxo Suave', 'Roxo Profundo', 'Rosa Bebê', 'Rosa Chocante', 'Rosa Magenta', 'Roxo Metálico', 'Rosa Envelhecido', 'Roxo Lavanda', 'Roxo Ametista', 'Roxo Lilás', 'Rosa Chiclete', 'Rosa Salmão', 'Rosa Pêssego', 'Rosa Dourado', 'Roxo Neon', 'Roxo Ultra', 'Roxo Índigo', 'Rosa Coral', 'Roxo Eletric'],
     elements: ['Radônio', 'Rubídio', 'Rênio', 'Ródio', 'Rádio', 'Radical Livre', 'Resina', 'Ressonância', 'Resíduo', 'Reação', 'Reagente', 'Refração', 'Retículo', 'Radiação', 'Radioatividade', 'Radical Orgânico', 'Resíduo Químico', 'Resina Sintética', 'Resistência', 'Radioisótopo', 'Radiofármaco', 'Radiação Infravermelha', 'Ressonância Magnética', 'Ressonância Química', 'Revestimento', 'Radioelemento', 'Radioproteção', 'Radical Carbono', 'Radioquímica', 'Resina Epóxi'],
  professions: ['Radialista', 'Relojoeiro', 'Restaurador', 'Roteirista', 'Reumatologista', 'Rábula', 'Rochista', 'Revisor', 'Rangiferista', 'Radiologista', 'Reabilitador', 'Recepcionista', 'Relator', 'Rizicultor', 'Rodoviário', 'Ressonografista', 'Refrigerista', 'Regatista', 'Rábula Jurídico', 'Revendedor', 'Redator', 'Rinocerontólogo', 'Representante Comercial', 'Recreador', 'Reabilitador Social', 'Radicultor', 'Roteirizador', 'Reboquista', 'Ranchista', 'Ressonador'],
        media: ['Rambo', 'Rocky', 'Ratatouille', 'Rápidos e Furiosos', 'Rio', 'Rei Leão', 'Rick and Morty', 'Revenge', 'Reign', 'Rizzoli & Isles', 'Riverdale', 'Resgate do Soldado Ryan', 'Rebeldes', 'Romeu e Julieta', 'Resident Evil', 'Robin Hood', 'Revenge of the Sith', 'Ray', 'Rush', 'Rudolph', 'RuPaul’s Drag Race', 'Reinado Sombrio', 'Raven', 'Revenge of the Nerds', 'Raya e o Último Dragão', 'Rei Arthur', 'Rapunzel', 'Robinson Crusoé', 'Rock of Ages', 'Resgate nas Alturas'],
       brands: ['Rolex', 'Renault', 'Ray-Ban', 'Ralph Lauren', 'Razer', 'Reebok', 'Ricoh', 'Remington', 'RCA', 'Royal Caribbean', 'Ruffles', 'Rexona', 'Red Bull', 'Repsol', 'Rimmel London', 'Riachuelo', 'Rockstar Games', 'Rinnai', 'Roku', 'Royal Enfield', 'Revlon', 'Rolls-Royce', 'Roccat', 'Realme', 'Rowenta', 'Ramada', 'Rado', 'Rakuten', 'Royal Canin', 'Ryzen'],
       plants: ['Rosa', 'Rabanete', 'Rícino', 'Ramalhete', 'Raiz-forte', 'Rosa do Deserto', 'Rúcula', 'Rosa Branca', 'Rosa Vermelha', 'Rizoma', 'Rosa Silvestre', 'Ravena', 'Rosa Amarela', 'Rosa Chá', 'Rosa Negra', 'Rosa Miniatura', 'Rosa Trepadeira', 'Rosa Inglesa', 'Rosa Mosqueta', 'Rosa Damascena', 'Rosa Alba', 'Rosa Gallica', 'Rosa Centifolia', 'Rosa Bourbon', 'Rosa Rugosa', 'Rosa Banksiae', 'Rosa Polyantha', 'Rosa Pimpinellifolia', 'Rosa Canina', 'Rosa Multiflora'],
       fruits: ['Romã', 'Raspberry', 'Rambutan', 'Roxinha', 'Rubus', 'Ricinocarpos', 'Rato de Jardim', 'Rabanada', 'Ração', 'Rama-fruta', 'Rins-fruta', 'Risco-fruta', 'Rumo-fruta', 'Rubi-fruta', 'Rochinha', 'Raiz-fruta', 'Réplica-fruta', 'Ribeira-fruta', 'Reflor-fruta', 'Ressurgir-fruta']
      },
            
      'S': {
       names: ['Sérgio', 'Sandra', 'Silvia', 'Samuel', 'Sofia', 'Sebastião', 'Simone', 'Saulo', 'Selma', 'Salvador',
        'Sabrina', 'Sandro', 'Sueli', 'Sidney', 'Soraia', 'Soraya', 'Sara', 'Solange', 'Saul', 'Suelen',
        'Santiago', 'Sávio', 'Sibelle', 'Stefano', 'Selena', 'Silvano', 'Samar', 'Sérgia', 'Severino', 'Samira'
    ],

    places: [
        'Sofala', 'Songo', 'Salamanga', 'San José', 'Seul', 'Santiago', 'Sydney', 'Singapura', 'Serra Leoa', 'Sibéria',
        'Sevilha', 'Salvador', 'San Francisco', 'São Paulo', 'San Marino', 'Saragoça', 'Sucre', 'Stockholm', 'Stuttgart', 'Surate',
        'San Diego', 'San Juan', 'Shangai', 'Surabaya', 'Sumatra', 'Santiago de Cuba', 'Salerno', 'Samarcanda', 'San Antonio', 'Sibiu'
    ],

    countries: [
        'São Tomé e Príncipe', 'Suíça', 'Suécia', 'Síria', 'Sudão', 'Serra Leoa', 'Suriname', 'Senegal', 'Singapura', 'Somália'
    ],

    animals: [
        'Sapo', 'Salmão', 'Serpente', 'Sabiá', 'Suricata', 'Sardinha', 'Saci', 'Salamandra', 'Siri', 'Sanguessuga',
        'Saíra', 'Socó', 'Solha', 'Sagui', 'Sussuarana', 'Sturnus', 'Surubi', 'Saracura', 'Sargo', 'Sanhaço',
        'Sova', 'Seiche', 'Sável', 'Sardão', 'Sacarrabos', 'Salmo', 'Sapajus', 'Sturnidae', 'Sargo-comum', 'Sapo-cururu'
    ],

    objects: [
        'Sapato', 'Sabonete', 'Seringa', 'Saco', 'Selo', 'Sabão', 'Saxofone', 'Sanfona', 'Serra', 'Suporte',
        'Sutiã', 'Sabre', 'Saladeira', 'Sanfona', 'Serrote', 'Secador', 'Selo postal', 'Sonda', 'Salto', 'Sacola',
        'Scanner', 'Sacristia', 'Sax', 'Saco de dormir', 'Selim', 'Suéter', 'Sorveteira', 'Saca-rolhas', 'Silenciador', 'Semáforo'
    ],

    colors: [
        'Salmão', 'Safira', 'Seiva', 'Sépia', 'Solar', 'Sorvete', 'Siena', 'Silvestre', 'Safron', 'Sombra',
        'Sublime', 'Supernova', 'Sereno', 'Sustentável', 'Seda', 'Sereno Cinza', 'Sombra Azul', 'Sombra Rosa', 'Sombra Verde', 'Sândalo',
        'Sussurro', 'Sopro', 'Sombra Marrom', 'Sopro de Vento', 'Seda Azul', 'Sombra Pêssego', 'Sombra Vermelho', 'Solar Laranja', 'Suave Roxo', 'Sépia Claro'
    ],

    elements: [
        'Silício', 'Samário', 'Selênio', 'Sódio', 'Sulfato', 'Sulfur', 'Salitre', 'Sais minerais', 'Siderita', 'Silicato',
        'Soda cáustica', 'Solvente', 'Sódio metálico', 'Sulfonato', 'Sílica', 'Sulfeto', 'Substância pura', 'Soluto', 'Solvente orgânico', 'Sódio cloro',
        'Substância química', 'Sulfoácidos', 'Sais solúveis', 'Silício amorfo', 'Substância composta', 'Sais orgânicos', 'Soda líquida', 'Substância alcalina', 'Sílica coloidal', 'Sais de banho'
    ],

    professions: [
        'Soldador', 'Sapateiro', 'Sociólogo', 'Segurança', 'Secretário', 'Sommelier', 'Silvicultor', 'Serralheiro', 'Supervisor', 'Sanitarista',
        'Síndico', 'Sapateiro artesanal', 'Sommelier de café', 'Serigrafista', 'Subchefe de cozinha', 'Socorrista', 'Sushiman', 'Supervisor de vendas', 'Seringueiro', 'Sanitarista ambiental',
        'Supervisor de logística', 'Secretário executivo', 'Sistemologista', 'Silvicultor florestal', 'Supervisor de qualidade', 'Socorrista resgatista', 'Subgerente', 'Supervisor de produção', 'Sociólogo criminal', 'Sondador'
    ],

    media: [
        'Superman', 'Sherlock Holmes', 'Star Wars', 'Spider-Man', 'SpongeBob SquarePants', 'Shrek', 'Stranger Things', 'Smallville', 'Supernatural', 'Suicide Squad',
        'Scarface', 'Step Up', 'Silent Hill', 'Shameless', 'Saving Private Ryan', 'Seven', 'Saw', 'Sin City', 'Sonic', 'Sing',
        'Sense8', 'Super Mario Bros', 'Séries Infantis', 'Scooby-Doo', 'South Park', 'Soul', 'Speed Racer', 'Spy Kids', 'Sailor Moon', 'Supergirl'
    ],

    brands: [
        'Samsung', 'Sony', 'Starbucks', 'Suzuki', 'Santander', 'Sadia', 'Siemens', 'Subway', 'Swatch', 'Skechers',
        'Symantec', 'Shell', 'Spotify', 'Semp', 'Seara', 'Sachs', 'Schneider', 'Snapchat', 'Santander Totta', 'SanDisk',
        'Smirnoff', 'Segafredo', 'Shiseido', 'Sperry', 'Seagate', 'Salomon', 'Skeeter', 'Submarino', 'Scania', 'Stanley'
    ],

    plants: [
        'Salsa', 'Sálvia', 'Sabugueiro', 'Samambaia', 'Seringueira', 'Sucuuba', 'Sumaúma', 'Sibipiruna', 'Sete-feras', 'Sucupira',
        'Sapezal', 'Sapucaia', 'Sebo vegetal', 'Silene', 'Sequoia', 'Sanção do campo', 'Salsaparrilha', 'Sesbania', 'Sete-sangrias', 'Suculenta',
        'Salsinha', 'Sapatinho', 'Sete-ervas', 'Saracura', 'Sabiá', 'Sombreiro', 'Salgueiro', 'Sândalo', 'Sapucaia do cerrado', 'Sinfônio'
    ],

    fruits: [
        'Sapoti', 'Sicana', 'Seriguela', 'Santal', 'Spondias', 'Sorb', 'Sumaúma', 'Spondias dulcis', 'Spondias mombin', 'Spondias purpurea',
        'Sapotácea', 'Sicana odorífera', 'Sicana sphaerica', 'Santol', 'Sereguela', 'Sargo', 'Sapucaia', 'Sambucus', 'Sorbifolia', 'Sicana edulis',
        'Sorbifolium', 'Santalaceae', 'Sapindus', 'Sideroxylon', 'Sicana phasianus', 'Syzygium', 'Syzygium malaccense', 'Syzygium jambos', 'Sapota', 'Sapucaia-brava'
    ]
      },
            
      'T': {
    names: [
        'Tiago', 'Tatiana', 'Tânia', 'Tércio', 'Tadeu', 'Telma', 'Tomás', 'Tereza', 'Teodoro', 'Tarcísio',
        'Tamara', 'Tobias', 'Tamires', 'Tales', 'Tássia', 'Tainá', 'Théo', 'Tâmara', 'Tayná', 'Telmo',
        'Tarsila', 'Tito', 'Thalita', 'Tainara', 'Tavinho', 'Teodora', 'Tatiane', 'Tulio', 'Thales', 'Tarso'
    ],

    places: [
        'Tete', 'Tavene', 'Timbala', 'Tel Aviv', 'Toronto', 'Tóquio', 'Taipei', 'Tbilisi', 'Tashkent', 'Tianjin',
        'Tallinn', 'Tampa', 'Turim', 'Trípoli', 'Toulouse', 'Teresina', 'Tacuarembó', 'Tacloban', 'Taipé', 'Tanjung',
        'Tamale', 'Tabora', 'Tauranga', 'Temuco', 'Tijuana', 'Taraz', 'Trondheim', 'Tampere', 'Tours', 'Toulon'
    ],

    countries: [
        'Tailândia', 'Tanzânia', 'Tajiquistão', 'Turcomenistão', 'Turquia', 'Trinidad e Tobago', 'Tonga', 'Togo', 'Tunísia', 'Timor-Leste'
    ],

    animals: [
        'Tigre', 'Tamanduá', 'Tatu', 'Tubarão', 'Tucano', 'Tarântula', 'Tilápia', 'Tritão', 'Texugo', 'Tadorna',
        'Tentilhão', 'Tarpan', 'Tatu-canastra', 'Tamanduá-bandeira', 'Tangará', 'Tatuí', 'Toupeira', 'Tordo', 'Truta', 'Teca',
        'Tatu-galinha', 'Tatuíra', 'Taruca', 'Tuiuiú', 'Tamarugo', 'Tarambola', 'Tetra', 'Tern', 'Tigre-da-tasmânia', 'Tubarão-martelo'
    ],

    objects: [
        'Tapete', 'Tesoura', 'Televisão', 'Tambor', 'Telefone', 'Torradeira', 'Tabuleiro', 'Tubo', 'Troféu', 'Tijolo',
        'Tampa', 'Talheres', 'Travesseiro', 'Teclado', 'Termômetro', 'Torno', 'Tanque', 'Telhado', 'Torre', 'Toca-discos',
        'Tirante', 'Tripé', 'Tubo de ensaio', 'Tomada', 'Tamborete', 'Tesoura de poda', 'Teia', 'Tábua', 'Trinco', 'Torneira'
    ],

    colors: [
        'Turquesa', 'Tangerina', 'Terracota', 'Tijolo', 'Tóquio', 'Toupeira', 'Trombeta', 'Tulipa', 'Tabaco', 'Toranja',
        'Tamarindo', 'Trigo', 'Teal', 'Topázio', 'Tonalidade Terra', 'Tonalidade Vinho', 'Tundra', 'Toffee', 'Tons de Areia', 'Titânio',
        'Tangerina Claro', 'Tiziu', 'Tomate', 'Turmalina', 'Tucano', 'Tâmara', 'Tronco', 'Tremor', 'Trinco de Aço', 'Tectônico'
    ],

    elements: [
        'Tântalo', 'Telúrio', 'Tório', 'Titânio', 'Tungstênio', 'Trítio', 'Terras raras', 'Tálio', 'Tricarbonato', 'Tanato',
        'Tetraóxido', 'Termita', 'Tiossulfato', 'Tosilato', 'Tetrafluoreto', 'Trifluoreto', 'Tetracloreto', 'Trioxidato', 'Tetraborato', 'Tartárico',
        'Tetróxido de ósmio', 'Telurato', 'Trifosfato', 'Terbium', 'Tetrahidrofurano', 'Tungstato', 'Tetra-hidróxido', 'Tiossemicarbazida', 'Tetraflorometano', 'Trióxido de enxofre'
    ],

    professions: [
        'Técnico', 'Taxista', 'Topógrafo', 'Tradutor', 'Terapeuta', 'Torneiro mecânico', 'Técnico de enfermagem', 'Turismólogo', 'Tesoureiro', 'Tintureiro',
        'Tatuador', 'Técnico em informática', 'Técnico em segurança', 'Técnico em radiologia', 'Técnico agrícola', 'Técnico ambiental', 'Técnico eletrônico', 'Técnico em contabilidade', 'Treinador', 'Torrefador',
        'Técnico em edificações', 'Técnico de som', 'Técnico de laboratório', 'Técnico em telecomunicações', 'Técnico em logística', 'Técnico florestal', 'Técnico metalúrgico', 'Técnico químico', 'Técnico em mecatrônica', 'Técnico automotivo'
    ],

    media: [
        'Titanic', 'The Simpsons', 'Toy Story', 'Transformers', 'Tomb Raider', 'The Mandalorian', 'The Witcher', 'The Office', 'The Crown', 'The Boys',
        'Top Gun', 'The Last of Us', 'The Batman', 'The Lion King', 'Terminator', 'The Matrix', 'The Flash', 'Teen Titans', 'Thor', 'Twilight',
        'The Walking Dead', 'Tangled', 'The Dark Knight', 'True Detective', 'The Punisher', 'Trolls', 'Tom & Jerry', 'The Big Bang Theory', 'The Good Doctor', 'The Revenant'
    ],

    brands: [
        'Toyota', 'Tesla', 'Toshiba', 'Timberland', 'TikTok', 'Tommy Hilfiger', 'Tupperware', 'Targus', 'Tefal', 'Tissot',
        'Twitch', 'Twinings', 'Texaco', 'Triumph', 'Turkish Airlines', 'Technics', 'Tropicana', 'Thule', 'Trivago', 'Tetra Pak',
        'Tiffany & Co.', 'Tom Ford', 'Trident', 'Tonka', 'Tiger', 'Tayto', 'Trek', 'Tap Portugal', 'Toni&Guy', 'Toscana'
    ],

    plants: [
        'Tulipa', 'Tomilho', 'Tabaco', 'Tamarindo', 'Trevo', 'Tarumã', 'Teixo', 'Timbaúba', 'Trapoeraba', 'Teca',
        'Tansagem', 'Tungue', 'Tília', 'Tiririca', 'Tropaeolum', 'Tanchagem', 'Tectona', 'Timbó', 'Tamarix', 'Tamus',
        'Tremoço', 'Tabebuia', 'Tacca', 'Taboca', 'Tassel', 'Tanchagem do cerrado', 'Tamareira', 'Tiliaceae', 'Trithrinax', 'Tropaeolaceae'
    ],

    fruits: [
        'Tangerina', 'Tamarindo', 'Tomate', 'Tâmara', 'Tucumã', 'Tropicana', 'Tungue', 'Tarumã', 'Tayberry', 'Timbó',
        'Trepadeira', 'Taperebá', 'Tingui', 'Tanjal', 'Tocuma', 'Trigo-fruta', 'Taiúva', 'Tomatillo', 'Tuta', 'Tucumã-do-amazonas',
        'Tuna', 'Timbó-doce', 'Teca-fruto', 'Tamareira-francesa', 'Tomatão', 'Turi', 'Tanzânia', 'Tabebuias', 'Tingui-rendado', 'Tuna-vermelha'
    ]
      },
      
      'U': {
    names: [
        'Ulisses', 'Ubirajara', 'Ubaldo', 'Ursula', 'Uriel', 'Umberto', 'Ugo', 'Uvaldo', 'Udo', 'Ulan',
        'Urbano', 'Uanderson', 'Ubiraci', 'Udson', 'Uéliton', 'Ulano', 'Uarlei', 'Uéslei', 'Uiratan', 'Ulisses Filho'
    ],

    places: [
        'Utrecht', 'Uberaba', 'Uberlândia', 'Ulan Bator', 'Ushuaia', 'Utah', 'Umeå', 'Uppsala', 'Uyo', 'Udon Thani',
        'Ulm', 'Ubatuba', 'Unai', 'Umuarama', 'Ushiku', 'Uruaçu', 'Uruçuca', 'Uruguaiana', 'Uvira', 'Ube'
    ],

    countries: [
        'Uganda', 'Uruguai', 'Uzbequistão', 'Ucrânia', 'Emirados Árabes Unidos'
    ],

    animals: [
        'Urso', 'Uirapuru', 'Urutau', 'Urubu', 'Uacari', 'Unau', 'Uiraponga', 'Urina', 'Urutu', 'Uruçu',
        'Uíra', 'Uxi', 'Urina-branca', 'Urina-vermelha', 'Uru', 'Uru do Nordeste', 'Urina-preta', 'Urso-pardo', 'Urso-polar', 'Urutu-cruzeiro'
    ],

    objects: [
        'Ursinho de pelúcia', 'Umbrela', 'Uniforme', 'Ultrassom', 'Urinol', 'Utensílio', 'Urna', 'Uvas-passa', 'Uísque', 'Unha postiça',
        'Umidificador', 'Unha', 'Usina', 'Ultraleve', 'Ureia', 'Ultracongelador', 'Urdideira', 'Utensílio de cozinha', 'Urna eletrônica', 'Unha artificial'
    ],

    colors: [
        'Uva', 'Ultramarino', 'Umbra', 'Urze', 'Urtiga', 'Uva-púrpura', 'Ultra-violeta', 'Ultramarine blue', 'Uva-verde', 'Urucum',
        'Ultramarino Claro', 'Uva-escura', 'Uva-dourada', 'Umbra natural', 'Ultravioleta escuro'
    ],

    elements: [
        'Urânio', 'Ustênio', 'Uricato', 'Urotropina', 'Ultrafiltrado', 'Urânio enriquecido', 'Urolitíase', 'Urânio empobrecido', 'Uréia sintética', 'Urobilina'
    ],

    professions: [
        'Urologista', 'Urbanista', 'Universitário', 'Ufólogo', 'Ultrassonografista', 'Unhas designer', 'Utilitário', 'Uti Intensivista', 'Ultrassonografista veterinário', 'Urdidor'
    ],

    media: [
        'Up - Altas Aventuras', 'Uncharted', 'Ultraman', 'Ursinho Pooh', 'Umbrella Academy', 'Uma Noite no Museu', 'Undertale', 'Uncut Gems', 'Us', 'Unicorn Wars',
        'Ugly Betty', 'Unbreakable', 'Uncharted: O Filme', 'Usagi Drop', 'Utopia', 'Universal Soldier', 'Uzumaki', 'UHF', 'Under the Dome', 'Under the Skin'
    ],

    brands: [
        'Uber', 'Ubisoft', 'Unilever', 'Under Armour', 'United Airlines', 'Uniqlo', 'UOL', 'Urban Decay', 'Ultimate Ears', 'Ugg',
        'US Polo Assn.', 'United Colors of Benetton', 'Universal Studios', 'U-Haul', 'Upfield', 'Unisys', 'Usiminas', 'Ultra', 'Ultragaz', 'Unimed'
    ],

    plants: [
        'Uva', 'Urucum', 'Umbuzeiro', 'Unha-de-gato', 'Urtiga', 'Uxi', 'Uva-do-japão', 'Uvaia', 'Uxi-amarelo', 'Uvarana',
        'Uva-do-monte', 'Uva-branca', 'Ucuuba', 'Urtiga-brava', 'Urucuzeiro'
    ],

    fruits: [
        'Uva', 'Umbu', 'Uxi', 'Uvaia', 'Urucum', 'Uva-do-japão', 'Ubaia', 'Uchuva', 'Uva-branca', 'Uva-passa'
    ]
      },
  
      'V': {
    names: [
        'Vicente', 'Valdemar', 'Vagner', 'Vítor', 'Viviane', 'Valéria', 'Vinícius', 'Vanessa', 'Valentim', 'Valquíria',
        'Virgílio', 'Vanda', 'Valter', 'Violeta', 'Vilma', 'Vidal', 'Valdeci', 'Veridiana', 'Venceslau', 'Vidalina'
    ],

    places: [
        'Viena', 'Veneza', 'Valência', 'Varsóvia', 'Vancouver', 'Verona', 'Vitória', 'Vladivostok', 'Várzea Grande', 'Vilhena',
        'Viseu', 'Valparaíso', 'Volta Redonda', 'Varginha', 'Vilhena', 'Vila Nova de Gaia', 'Viedma', 'Vladikavkaz', 'Villavicencio', 'Vasto'
    ],

    countries: [
        'Vaticano', 'Vanuatu', 'Venezuela', 'Vietnã'
    ],

    animals: [
        'Vaca', 'Veado', 'Vespa', 'Víbora', 'Verdilhão', 'Vombate', 'Verme', 'Vaga-lume', 'Viralata', 'Vicunha',
        'Valencianita', 'Vison', 'Vespa asiática', 'Vespa mandarina', 'Vombate-de-nariz-peludo'
    ],

    objects: [
        'Vassoura', 'Vela', 'Ventilador', 'Varal', 'Violão', 'Vidro', 'Vuvuzela', 'Vaso', 'Varinha', 'Vestido',
        'Volante', 'Vela perfumada', 'Violino', 'Videogame', 'Variedade de plantas', 'Visor', 'Ventosa', 'Vinil', 'Vidraria', 'Válvula'
    ],

    colors: [
        'Vermelho', 'Verde', 'Violeta', 'Vermelho-escuro', 'Verde-musgo', 'Verde-oliva', 'Vinho', 'Verde-mar', 'Verde-limão', 'Verde-bandeira'
    ],

    elements: [
        'Vanádio', 'Vermiculita', 'Vitrificação', 'Vermelho de cádmio', 'Vidro de sílica', 'Vidro temperado', 'Vareta de tungstênio'
    ],

    professions: [
        'Veterinário', 'Vendedor', 'Vidraceiro', 'Vigilante', 'Violonista', 'Viticultor', 'Velejador', 'Vereador', 'Vinhateiro', 'Virologista'
    ],

    media: [
        'Vingadores', 'Velozes e Furiosos', 'V de Vingança', 'Vikings', 'Violetta', 'Veronica Mars', 'Velho Chico', 'Verdade ou Desafio', 'Vidas Secas', 'Valente'
    ],

    brands: [
        'Volkswagen', 'Visa', 'Vivo', 'Valentino', 'Vans', 'Victoria’s Secret', 'Vichy', 'Vodafone', 'Varta', 'Volvo'
    ],

    plants: [
        'Vanila', 'Violeta', 'Veludo-branco', 'Vitória-régia', 'Verônica', 'Vassourinha-de-botão', 'Verdolaga', 'Vesicária', 'Vinha', 'Visco'
    ],

    fruits: [
        'Veludo', 'Vagem', 'Vinhático', 'Vavá', 'Vassourinha', 'Velame', 'Valsa', 'Verdejo', 'Verdete', 'Vincetoxicum'
    ]
      },
  
      'W': {
    names: [
        'Wagner', 'Wellington', 'Washington', 'Wesley', 'Wilian', 'Walter', 'Wallace', 'Wendel', 'Wanda', 'Whitney',
        'Wílson', 'Wilma', 'Willy', 'Wanda', 'Walfredo', 'Wanderson', 'Winona', 'Waldir', 'Wayne', 'Warren'
    ],

    places: [
        'Washington', 'Wellington', 'Winnipeg', 'Windsor', 'Warsaw', 'Wuhan', 'Wenzhou', 'Wadi Musa', 'Waco', 'Wollongong',
        'Würzburg', 'Woking', 'Westport', 'Westminster', 'Wiesbaden', 'Whistler', 'Wodonga', 'West Palm Beach', 'Wagga Wagga', 'Wigan'
    ],

    countries: [
        'Wallis e Futuna'
    ],

    animals: [
        'Wapiti', 'Wombat', 'Wallaby', 'Wolverine', 'Weta', 'Woodpecker', 'White Shark', 'Wolf', 'Whale', 'Walrus'
    ],

    objects: [
        'Walkie-talkie', 'Webcam', 'Waffle', 'Wardrobe', 'Watch', 'Wheel', 'Window', 'Wallet', 'Wine glass', 'Wrench',
        'Whiteboard', 'Windscreen', 'Windmill', 'Whisk', 'Wig', 'Wetsuit', 'Writing pad', 'Wok', 'Wi-Fi router', 'Wax'
    ],

    colors: ['Wine', 'White', 'Wheat', 'Walnut', 'Warm gray'],

    elements: ['Water', 'Wurtzite', 'Whewellite'],

    professions: ['Web Designer', 'Web Developer', 'Writer', 'Welder', 'Watchmaker', 'Wedding Planner', 'Woodworker', 'Warehouse Worker', 'Winemaker', 'Waiter'],

    media: [
        'Wonder Woman', 'Westworld', 'Wolverine', 'Whiplash', 'Warrior', 'Walker Texas Ranger', 'White Collar', 'WALL-E', 'Wayne’s World', 'Watchmen'
    ],

    brands: [
        'Walmart', 'WhatsApp', 'Warner Bros', 'Western Digital', 'Wells Fargo', 'Wilson', 'Weber', 'Wacom', 'Wrangler', 'Whirlpool'
    ],

    plants: [
        'Willow', 'Watercress', 'Wintergreen', 'Wheatgrass', 'White Oak', 'Wattle', 'Wolfberry', 'Wisteria', 'Wild Rice', 'Wild Mint'
    ],

    fruits: [
        'Watermelon', 'Wax Apple', 'White Sapote', 'Wild Cherry', 'Wolfberry'
    ]
      },
  
      'X': {
    names: [
        'Xande', 'Xavier', 'Ximena', 'Xuxa', 'Xisto', 'Xênia', 'Xerxes', 'Xolani', 'Xênofonte', 'Xenilda',
        'Xandro', 'Xaviera', 'Xever', 'Xarles', 'Xandinho', 'Xenira', 'Xistofer', 'Xiomara', 'Xelita', 'Xeno'
    ],

    places: [
        'Xai-Xai', 'Xangai', 'Xanxerê', 'Xambrê', 'Xexéu', 'Xambioá', 'Xinguara', 'Xochimilco', 'Xirivella', 'Xinglong',
        'Xankandi', 'Xalisco', 'Xalapa', 'Xinyi', 'Xilitla', 'Xuzhou', 'Xichang', 'Xiantao', 'Xinghua', 'Xishuangbanna'
    ],

    countries: [
        'Nenhum país começa com a letra X'
    ],

    animals: [
        'Xaréu', 'Xexéu', 'Xerus', 'Xoloitzcuintli', 'Xereta', 'Xestus', 'Xiquexique', 'Xenopus', 'Xanthareel', 'Xenarthra'
    ],

    objects: [
        'Xadrez', 'Xampu', 'Xícara', 'Xilofone', 'Xale', 'Xampô', 'Xerox', 'Xisto', 'Xilogravura', 'Xarope',
        'X-Box', 'Xadrez eletrônico', 'Xerografia', 'Xiloteca', 'X-acto', 'Xenônio', 'Xampanheira', 'Xenômero', 'Xerografia', 'Xereta'
    ],

    colors: ['Xanadu', 'Xisto', 'Xangai Red'],

    elements: [
        'Xenônio', 'Xantato', 'Xilema', 'Xisto betuminoso'
    ],

    professions: [
        'Xilógrafo', 'Xamã', 'Xenobiologista', 'Xerife', 'Xenólogo', 'Xadrezista', 'Xilógrafo artístico', 'Xilofonista', 'Xenotécnico', 'Xarqueador'
    ],

    media: [
        'X-Men', 'X-Files', 'Xuxa Park', 'Xena: A Princesa Guerreira', 'Xingu', 'Xadrez Mortal', 'X-Force', 'X-Treme Sports', 'X-Factor', 'Xibalba'
    ],

    brands: [
        'Xiaomi', 'Xerox', 'Xfinity', 'Xbox', 'X-Large', 'Xerion', 'Xoom', 'XFX', 'Xetum', 'Xenon'
    ],

    plants: [
        'Xerófita', 'Xique-xique', 'Xanthosoma', 'Ximenia', 'Xanthorrhoea', 'Xeronema', 'Xerochrysum', 'Xeranthemum', 'Xyris', 'Xanthoceras'
    ],

    fruits: [
        'Ximenia', 'Xigua (melancia chinesa)', 'Xarope de bordo (derivado)', 'Xacuti (usado em pratos)', 'Xoconostle (cacto mexicano)'
    ]
      },
  
      'Y': {
    names: [
        'Yago', 'Yasmin', 'Yara', 'Yuri', 'Yohan', 'Yvonne', 'Yvette', 'Yasser', 'Yann', 'Yasmim',
        'Yelena', 'Yoana', 'Yolanda', 'Yusuf', 'Yvette', 'Yanis', 'Yolanda', 'Yanis', 'Yone', 'Ygor'
    ],

    places: [
        'Yucatán', 'Yokohama', 'Yangon', 'Yamoussoukro', 'Yalta', 'Yichang', 'Yibin', 'Yaoundé', 'Yaroslavl', 'Yellowknife',
        'Yogyakarta', 'Yichun', 'Yumen', 'Yokosuka', 'Yamagata', 'Yonkers', 'Yancheng', 'Yeosu', 'Yuzhno-Sakhalinsk', 'Yulin'
    ],

    countries: ['Iémen'],

    animals: ['Yak', 'Yorkshire Terrier', 'Yeti Crab', 'Yellowhammer', 'Yellowjacket', 'Yabby', 'Yellowfin Tuna', 'Yellow Mongoose', 'Yarkand Hare', 'Yellowtail'],

    objects: ['Yo-yo', 'Yate', 'Yin-yang', 'Yashmak', 'Yellow Pad', 'Yoga Mat', 'Yardstick', 'Yellow Tape', 'Yeti Cup', 'Yule Log'],

    colors: ['Yellow', 'Yale Blue', 'Yellow-Green'],

    elements: ['Yttrium', 'Ytterbium'],

    professions: [
        'Youtuber', 'Yoga Instructor', 'Yard Worker', 'Youth Counselor', 'Yarn Spinner', 'Yard Engineer', 'Yogurt Maker', 'Yard Supervisor', 'Youth Mentor', 'Yeast Scientist'
    ],

    media: [
        'Yellowstone', 'Yugioh', 'Yakuza', 'Young Sheldon', 'You', 'Yamada Tarou Monogatari', 'Yes Man', 'Your Name', 'Young Justice', 'Yogi Bear'
    ],

    brands: [
        'Yahoo', 'Yamaha', 'Yves Saint Laurent', 'Yakult', 'YouTube', 'Yokohama', 'YSL Beauty', 'Yeti', 'Yeo’s', 'Yellow Tail'
    ],

    plants: [
        'Ylang-Ylang', 'Yucca', 'Yellow Bell', 'Yellowwood', 'Yerba Mate', 'Yew Tree', 'Yellow Archangel', 'Yellow Buckeye', 'Yellow Poplar', 'Yam Bean'
    ],

    fruits: [
        'Yuzu', 'Yellow Passion Fruit', 'Yellow Plum', 'Yangmei', 'Yellow Cherry'
    ]
      }, 
            
      'Z': {
    names: [
        'Zacarias', 'Zélia', 'Zilda', 'Zuleica', 'Zara', 'Zé', 'Zeno', 'Zoraya', 'Zilmar', 'Zamir',
        'Zenaide', 'Zora', 'Zac', 'Zelinda', 'Zena', 'Zilma', 'Zamir', 'Zefinha', 'Zayra', 'Zeferino'
    ],

    places: [
        'Zambezia', 'Zanzibar', 'Zurique', 'Zacatecas', 'Zaragoza', 'Zhengzhou', 'Zibo', 'Zlin', 'Zanjan', 'Zwickau',
        'Zhaoqing', 'Zhuhai', 'Zabol', 'Zaria', 'Zaanstad', 'Zapopan', 'Zossen', 'Zvolen', 'Zaria', 'Zhangjiajie'
    ],

    countries: [
        'Zâmbia', 'Zimbábue'
    ],

    animals: [
        'Zebra', 'Zebu', 'Zorrilho', 'Zangão', 'Zapata Wren', 'Zebra Finch', 'Zigzag Salamander', 'Zenaida Dove', 'Zorro', 'Zander Fish'
    ],

    objects: [
        'Zíper', 'Zabumba', 'Zepelim', 'Zodíaco', 'Zirconita', 'Zunidor', 'Zorra', 'Zigue-zague', 'Zamburra', 'Zagaia'
    ],

    colors: [
        'Zaffre', 'Zebra White', 'Zomp'
    ],

    elements: [
        'Zinco', 'Zircônio'
    ],

    professions: [
        'Zoólogo', 'Zootecnista', 'Zelador', 'Zimbaleiro', 'Zangari', 'Zebrista', 'Zooterapista', 'Zumbista', 'Zimbreiro', 'Zilhador'
    ],

    media: [
        'Zorro', 'Zumbilândia', 'Zootopia', 'Z Nation', 'Zig & Sharko', 'Zenon', 'Zatch Bell', 'Zero Dark Thirty', 'Zoey 101', 'Zapped'
    ],

    brands: [
        'Zara', 'Zenfone', 'Ziploc', 'Zoom', 'ZTE', 'Zanussi', 'Zippo', 'Zildjian', 'Zymox', 'Zeiss'
    ],

    plants: [
        'Zimbro', 'Zamioculca', 'Zantedeschia', 'Ziziphus', 'Zephyranthes', 'Zedoária', 'Zingiber', 'Zostera', 'Zornia', 'Zexmenia'
    ],

    fruits: [
        'Zimbro', 'Ziziphus', 'Zitrone (limão em alemão)', 'Zhe Fruit', 'Zestar Apple'
    ]
      }
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
