<html><head><base href="https://camiloduvane.github.io/CamiloDuvane/">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CWD - Camilo Wiliamo Duvane</title>
<style>
:root {
  --primary: #0066cc;
  --secondary: #ff9900;
  --dark: #333;
  --light: #f5f5f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.top-bar {
  background: var(--primary);
  color: white;
  padding: 5px 0;
}

.top-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-icons a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}

.header {
  background: white;
  padding: 15px 0;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo {
  width: 200px;
  height: auto;
}

.nav-menu {
  background: white;
  padding: 15px 0;
  position: relative;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.nav-menu ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30;
  padding: 30;
  flex-wrap: wrap;
}

.nav-menu li {
  margin: 30;
  position: relative;
}

.nav-menu a {
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s ease;
  display: block;
  border-radius: 25px;
  font-size: 15px;
}

.nav-menu a:hover {
  color: white;
  background: var(--primary);
  transform: translateY(-2px);
}

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
}

#searchInput {
  padding: 8px 15px;
  border: 2px solid var(--primary);
  border-radius: 20px;
  width: 200px;
  transition: all 0.3s ease;
}

#searchInput:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0,102,204,0.3);
  width: 220px;
}

#searchBtn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

#searchBtn:hover {
  background: var(--secondary);
  transform: translateY(-2px);
}

.slider {
  position: relative;
  height: 500px;
  overflow: hidden;
  margin-bottom: 40px;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateX(100%);
}

.slide.active {
  opacity: 1;
  transform: translateX(0);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 40px 0;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-content h3 {
  color: var(--primary);
  margin-bottom: 10px;
}

.news-content p {
  flex: 1;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: var(--secondary);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 15px;
  align-self: flex-start;
  transition: background-color 0.3s ease;
}

.news-content .btn:hover {
  background: #e68a00;
}

footer {
  background: var(--dark);
  color: white;
  padding: 50px 0;
  margin-top: 50px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 20px 0;
}

.footer-grid h4 {
  margin-bottom: 15px;
  color: var(--secondary);
}

.footer-grid ul {
  list-style: none;
}

.footer-grid a {
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
}

.footer-grid a:hover {
  color: var(--secondary);
}

.menu-toggle {
  display: none;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--dark);
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  z-index: 101;
}

/* Add to existing CSS */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
}

.modal-content {
  background-color: white;
  margin: 0 auto;
  padding: 30px;
  border-radius: 0 0 8px 8px; 
  max-width: 800px;
  max-height: 90vh; 
  overflow-y: auto; 
  padding-right: 20px; 
  position: relative;
  top: 0;
  animation: modalSlideDown 0.3s ease;
}

@keyframes modalSlideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-modal {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 24px;
  cursor: pointer;
  color: var(--dark);
  z-index: 1000;
}

.modal-content h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.modal-content p {
  margin-bottom: 15px;
  line-height: 1.8;
}

.modal-content .signature {
  font-style: italic;
  margin-top: 30px;
  color: var(--dark);
}

.courses-table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
}

.courses-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.courses-table th,
.courses-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #ddd;
}

.courses-table thead th {
  background: var(--primary);
  color: white;
  font-weight: bold;
}

.courses-table tbody tr:nth-child(even) {
  background: #f8f8f8;
}

.courses-table tbody tr:hover {
  background: #f1f1f1;
}

.student-controls {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.student-controls input,
.student-controls select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.students-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.students-table th,
.students-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.students-table th {
  background: var(--primary);
  color: white;
}

.status-paid {
  color: #00a651;
  font-weight: bold;
  background-color: rgba(0, 166, 81, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
}

.status-pending {
  color: #ff3b30;
  font-weight: bold;
  background-color: rgba(255, 59, 48, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
}

.students-table td:nth-child(4) {
  cursor: pointer;
  transition: all 0.3s ease;
}

.students-table td:nth-child(4):hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.students-table tr:nth-child(even) {
  background-color: #f8f8f8;
}

.students-table tr:hover {
  background-color: #f1f1f1;
}

@media (max-width: 576px) {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .slider {
    height: 300px;
  }
  
  .top-bar .container {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  
  .social-icons {
    margin-top: 5px;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .search-container {
    width: 100%;
    margin: 10px 0;
  }
  
  #searchInput {
    width: 100%;
  }
  
  .student-controls {
    flex-direction: column;
  }
  
  .students-table {
    display: block;
    overflow-x: auto;
  }
}

@media (min-width: 577px) and (max-width: 991px) {
  .container {
    max-width: 720px;
  }
  
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .slider {
    height: 40px;
  }
  
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 1200px;
  }
  
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .slider {
    height: 50px;
  }
  
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.logo {
  max-width: 100%;
  height: auto;
}

img {
  max-width: 100%;
  height: auto;
}

input, button {
  max-width: 100%;
}

.team-member {
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  margin-bottom: 20px;
  scroll-margin-top: 20px;
}

.team-member h4 {
  margin: 10px 0;
  color: var(--primary);
  font-style: italic;
}

.member-details {
  margin: 15px 0;
}

.social-links {
  margin: 15px 0;
}

.social-links a {
  display: inline-block;
  margin-right: 15px;
  color: var(--primary);
  text-decoration: none;
}

.social-links a:hover {
  color: var(--secondary);
}

.certifications, .courses-taught {
  margin: 20px 0;
}

.certifications ul, .courses-taught ul {
  list-style-type: disc;
  margin-left: 20px;
}

.certifications li, .courses-taught li {
  margin: 8px 0;
}

/* Scrollbar styles */
.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: var(--secondary);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

#codeCheck {
  text-align: center;
  padding: 20px;
}

#codeCheck input {
  padding: 8px;
  margin: 10px 0;
  width: 200px;
}

#searchModal .modal-content {
  width: 90%;
  max-width: 600px;
}

#searchModal ul {
  list-style: none;
  padding: 0;
}

#searchModal li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}

#searchModal li:last-child {
  border-bottom: none;
}

#searchModal h3 {
  color: var(--primary);
  margin: 15px 0 10px 0;
}
</style>
</head>
<body>

<div class="top-bar">
  <div class="container">
    <div class="contact-info">
      <span>+258 84 24 79 404</span>
      <span>camilowilliam0@gmail.com</span>
    </div>
    <div class="social-icons">
      <a href="https://facebook.com/camilowilliam.duvane"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/cwd_record/"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</div>

<header class="header">
  <div class="container">
    <svg class="logo" viewBox="0 0 200 100">
      <text x="10" y="50" fill="#0066cc" font-size="40" font-weight="bold">CWD</text>
      <text x="10" y="80" fill="#333" font-size="16">Camilo Wiliamo Duvane</text>
    </svg>
  </div>
</header>

<nav class="nav-menu">
  <div class="container">
    <button class="menu-toggle" aria-label="Toggle menu">
      <i class="fas fa-ellipsis-v"></i>
    </button>
    <ul>
      <li><a href="#home">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#cursos">Cursos</a></li>
      <li><a href="#dados">Dados</a></li>
      <li><a href="https://form.jotform.com/243013321150032" target="_blank">Inscrição</a></li>
      <li>
        <div class="search-container">
          <input type="text" id="searchInput" placeholder="Pesquisar...">
          <button type="button" id="searchBtn">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</nav>






<main class="container">
  <section class="news-grid">
    <article class="news-card">
      <svg width="100%" height="200">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" text-anchor="middle" fill="#333" font-size="24">Admissão</text>
        <text x="50%" y="80%" text-anchor="middle" fill="#666" font-size="16">2025</text>
      </svg>
      <div class="news-content">
        <h3>Processo de Admissão 2025</h3>
        <p>Informações detalhadas sobre o processo de admissão para novos estudantes. Descubra os cursos disponíveis, requisitos, Mesalidades e prazos importantes.</p>
        <a href="https://camiloduvane.github.io/CamiloDuvane/#sobre" class="btn">Saiba mais</a>
      </div>
    </article>
    
    <article class="news-card">
      <svg width="100%" height="200">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" text-anchor="middle" fill="#333" font-size="24">Pesquisa</text>
        <text x="50%" y="80%" text-anchor="middle" fill="#666" font-size="16">Inovação</text>
      </svg>
      <div class="news-content">
        <h3>Histórias e Inovação</h3>
        <p>Conheça nossos projetos inovadores e pesquisas em desenvolvimento. Participe de iniciativas que estão moldando o futuro.</p>
        <a href="https://camiloduvane.github.io/CD/" class="btn">Saiba mais</a>
      </div>
    </article>
    
    <article class="news-card">
      <svg width="100%" height="200">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" text-anchor="middle" fill="#333" font-size="24">Extensão</text>
        <text x="50%" y="80%" text-anchor="middle" fill="#666" font-size="16">Parcerias</text>
      </svg>
      <div class="news-content">
        <h3>Extensão Parcerias</h3>
        <p>Explore nossos programas de extensão e descubra como estamos impactando positivamente a comunidade através de projetos sociais.</p>
        <a href="#extensao" class="btn">Saiba mais</a>
      </div>
    </article>
  </section>
</main>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Localização</h4>
        <p>Matola, 1° do Maio rua 213</p>
        <p>Maputo, Moçambique</p>
        <p>Tel: +258 84 24 79 404</p>
        <p>Email: camilowilliam0@gmail.com</p>
      </div>
      
      <div>
        <h4>Links Rápidos</h4>
        <ul>
          <li><a href="https://camiloduvane.github.io/CD/">Biblioteca</a></li>
          <li><a href="https://camiloduvane.github.io/CWD/">Mais sobre Moçambique</a></li>
          <li><a href="https://camiloduvane.github.io/MEA/">Jogos de perguntas e respostas</a></li>
        </ul>
      </div>
      
      <div>
        <h4>Redes Sociais</h4>
        <div class="social-icons">
          <a href="https://facebook.com/camilowilliam.duvane">Facebook</a>
          <a href="https://www.instagram.com/cwd_record/">Instagram</a>
        </div>
      </div>
      
      <div>
        <h4>Newsletter</h4>
        <form>
          <input type="email" placeholder="Seu email">
          <button type="submit">Inscrever</button>
        </form>
      </div>
    </div>
  </div>
</footer>

<div id="welcomeModal" class="modal">
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <h2>🌟 Bem-vindo à minha página! 🌟</h2>
    <p>Olá! Eu sou Camilo Wiliamo Duvane e estou muito animado por você estar aqui. Esta página é um espaço pessoal onde compartilho não apenas minhas experiências e paixões, mas também busco conectar pessoas e ideias.</p>
    <p>Aqui, você encontrará uma variedade de conteúdos que refletem meus interesses e projetos atuais. Estou sempre em busca de novas parcerias e colaborações, pois acredito que juntos podemos criar algo ainda mais incrível. Se você tem uma ideia, um projeto ou simplesmente quer trocar experiências, estou aberto a conversar!</p>
    <p>Além disso, espero que você se sinta à vontade para interagir, deixar comentários e compartilhar suas opiniões. Sua participação é muito importante para mim!</p>
    <p>Obrigado por fazer parte dessa jornada. Vamos explorar, aprender e crescer juntos!</p>
    <p class="signature">Um abraço,<br>Camilo Wiliamo Duvane</p>
  </div>
</div>

<div id="coursesModal" class="modal">
  <div class="modal-content">
    <span class="close-modal" data-modal="coursesModal">&times;</span>
    <h2>Tabela de Cursos e Preços</h2>
    <div class="courses-table-wrapper">
      <table class="courses-table">
        <thead>
          <tr>
            <th>Classe</th>
            <th>Disciplinas</th>
            <th>Valor Mensal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1ª - 4ª Classe</td>
            <td>Português, Matemática, Ciências Naturais</td>
            <td>700 MZN</td>
          </tr>
          <tr>
            <td>5ª - 6ª Classe</td>
            <td>Português, Matemática, Ciências Naturais, Inglês</td>
            <td>750 MZN</td>
          </tr>
          <tr>
            <td>7ª - 9ª Classe</td>
            <td>Português, Matemática, Física, Química, Biologia, Inglês</td>
            <td>1.500 MZN</td>
          </tr>
          <tr>
            <td>10ª - 12ª Classe</td>
            <td>Português, Matemática, Ciências Naturais, Inglês</td>
            <td>2.000 MZN</td>
          </tr>
          <tr>
            <td>Preparação para Exames</td>
            <td>Português, Matemática, Física, Química, Biologia, Inglês</td>
            <td>1.500 MZN</td>
          </tr>
          <tr>
            <td>Preparação para Exames de Admissão</td>
            <td>Português, Matemática, Física, Química, Biologia, Inglês</td>
            <td>2.000 MZN</td>
          </tr>
          <tr>
            <td>Inglês</td>
            <td>Leitura, Escrita, Interpretação, Verbos</td>
            <td>2.500 MZN</td>
          </tr>
          <tr>
            <td>Informatica</td>
            <td>Básica, Intermediário, Avançado</td>
            <td>3.000 MZN</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div id="sobreModal" class="modal">
  <div class="modal-content">
    <span class="close-modal" data-modal="sobreModal">&times;</span>
    <h2>Sobre Nós</h2>
    
    <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid var(--primary);">
      <h2 style="color: var(--primary); margin-bottom: 20px; text-align: center;">Informações Bancárias</h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: var(--secondary); margin-bottom: 10px;">BCI</h3>
          <p><strong>Titular:</strong> Camilo Wiliamo Duvane</p>
          <p><strong>Nº da Conta:</strong> Em Atualização...</p>
          <p><strong>NIB:</strong> Em Atualização...</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: var(--secondary); margin-bottom: 10px;">BIM</h3>
          <p><strong>Titular:</strong> Camilo Wiliamo Duvane</p>
          <p><strong>Nº da Conta:</strong> 293331493</p>
          <p><strong>NIB:</strong> 0001000029333149357</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: var(--secondary); margin-bottom: 10px;">M-PESA</h3>
          <p><strong>Titular:</strong> Camilo Wiliamo Duvane</p>
          <p><strong>Número:</strong> 84 24 79 404</p>
        </div>
      </div>
    </div>

    <div class="team-member">
      <h3>Camilo Wiliamo Duvane</h3>
      <h4 style="color: var(--primary)">Presidente do Conselho de Administração (PCA)</h4>
      <div class="member-details">
        <p><strong>Contato:</strong> +258 84 24 79 404</p>
        <p><strong>Email:</strong> camilowilliam0@gmail.com</p>
        <div class="social-links">
          <a href="https://facebook.com/camilowilliam.duvane">Facebook</a>
          <a href="https://www.instagram.com/cwd_record/">Instagram</a>
        </div>
      </div>
      
      <div class="certifications">
        <h4>Certificações</h4>
        <ul>
          <li>Técnico Profissional em Contabilidade e Gestão - IEG</li>
          <li>Licenciatura em Contabilidade e Auditoria - USTM</li>
        </ul>
      </div>
      
      <div class="courses-taught">
        <h4>Cursos Ministrados</h4>
        <ul>
          <li>Informática (Básica, Intermediária e Avançada)</li>
          <li>Contabilidade (Básica, Geral, Financeira)</li>
          <li>AGPI (Análise e Gestão de Projectos de Investimentos)</li>
        </ul>
      </div>
    </div>

    <div class="team-member">
      <h3>A Actualizar...</h3>
      <h4 style="color: var(--primary)">Diretor Financeiro</h4>
      <div class="member-details">
        <p><strong>Contato:</strong> A Actualizar...</p>
        <p><strong>Email:</strong> A Actualizar...</p>
        <div class="social-links">
          <a href="https://facebook.com/A Actualizar...">Facebook</a>
          <a href="https://linkedin.com/A Actualizar...">LinkedIn</a>
        </div>
      </div>
      
      <div class="certifications">
        <h4>Certificações</h4>
        <ul>
          <li>A Actualizar...</li>
          <li>A Actualizar...</li>
        </ul>
      </div>
      
      <div class="courses-taught">
        <h4>Cursos Ministrados</h4>
        <ul>
          <li>A Actualizar...</li>
          <li>A Actualizar...</li>
        </ul>
      </div>
    </div>

    <div class="team-member">
      <h3>A Actualizar...</h3>
      <h4 style="color: var(--primary)">Secretária</h4>
      <div class="member-details">
        <p><strong>Contato:</strong> A Actualizar...</p>
        <p><strong>Email:</strong> A Actualizar...</p>
        <div class="social-links">
          <a href="https://facebook.com/A Actualizar">Facebook</a>
          <a href="https://instagram.com/A Actualizar">Instagram</a>
        </div>
      </div>
      
      <div class="certifications">
        <h4>Certificações</h4>
        <ul>
          <li>A Actualizar...</li>
          <li>A Actualizar...</li>
        </ul>
      </div>
      
      <div class="courses-taught">
        <h4>Cursos Ministrados</h4>
        <ul>
          <li>A Actualizar...</li>
          <li>A Actualizar...</li>
        </ul>
      </div>
    </div>

    <div class="team-member">
      <h3>A Actualizar...</h3>
      <div class="member-details">
        <p><strong>Contato:</strong> A Actualizar...</p>
        <p><strong>Email:</strong> A Actualizar...</p>
        <div class="social-links">
          <a href="https://facebook.com/A Actualizar">Facebook</a>
          <a href="https://twitter.com/A Actualizar">Twitter</a>
        </div>
      </div>

      <div class="certifications">
        <h4>Certificações</h4>
        <ul>
          <li>A Actualizar...</li>
          <li>A Actualizar...</li>
        </ul>
      </div>

      <div class="courses-taught">
        <h4>Cursos Ministrados</h4>
        <ul>
          <li>A Actualizar...</li>
          <li>A Actualizar...</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div id="extensaoModal" class="modal">
  <div class="modal-content">
    <span class="close-modal" data-modal="extensaoModal">&times;</span>
    <h2>Lista de Alunos e Pagamentos</h2>
    
    <div class="student-controls">
      <input type="text" id="studentSearch" placeholder="Procurar aluno...">
      <select id="filterStatus">
        <option value="all">Todos</option>
        <option value="paid">Em dia</option>
        <option value="pending">Em dívida</option>
      </select>
    </div>

    <div class="students-table-wrapper">
      <table class="students-table">
        <thead>
          <tr>
            <th>Nome do Aluno</th>
            <th>Classe</th>
            <th>Último Pagamento</th>
            <th>Status</th>
            <th>Valor Mensal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ana Maria</td>
            <td>Informatica</td>
            <td>15/03/2024</td>
            <td class="status-paid">Em dia</td>
            <td>3.000 MZN</td>
          </tr>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div id="dadosModal" class="modal">
  <div class="modal-content">
    <span class="close-modal" data-modal="dadosModal">&times;</span>
    <h2>Dados dos Alunos e Pagamentos</h2>
    
    <div class="student-controls">
      <input type="text" id="dadosSearch" placeholder="Procurar aluno...">
      <select id="monthFilter">
        <option value="all">Todos os Meses</option>
        <option value="01">Janeiro</option>
        <option value="02">Fevereiro</option>
        <option value="03">Março</option>
        <option value="04">Abril</option>
        <option value="05">Maio</option>
        <option value="06">Junho</option>
        <option value="07">Julho</option>
        <option value="08">Agosto</option>
        <option value="09">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>
    </div>

    <div class="students-table-wrapper">
      <table class="students-table">
        <thead>
          <tr>
            <th>Nome do Aluno</th>
            <th>Curso/Classe</th>
            <th>Mês</th>
            <th>Data Pagamento</th>
            <th>Valor Pago</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ana M. Miguel Malate</td>
            <td>Informatica</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.000 MZN</td>
            <td class="status-pending">Divida</td>
          </tr>
          <tr>
            <td>Pedro Silva</td>
            <td>12ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Carlos Cossa</td>
            <td>7ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Maria Fernanda</td>
            <td>12ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>António José</td>
            <td>9ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Isabel Santos</td>
            <td>6ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Ilidio Marcelino</td>
            <td>11ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Sofia Costa</td>
            <td>5ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Manuel Silva</td>
            <td>8ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Catarina Oliveira</td>
            <td>10ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Ricardo Santos</td>
            <td>4ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>1.800 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Mariana Costa</td>
            <td>7ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Francisco Pereira</td>
            <td>12ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Teresa Almeida</td>
            <td>6ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Joaquim Ferreira</td>
            <td>9ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Beatriz Lima</td>
            <td>11ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Daniel Martins</td>
            <td>5ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Luísa Rodrigues</td>
            <td>8ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.000 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Paulo Soares</td>
            <td>10ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>3.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
          <tr>
            <td>Marta Santos</td>
            <td>7ª Classe</td>
            <td>Outubro</td>
            <td>29/10/2024</td>
            <td>2.500 MZN</td>
            <td class="status-paid">Pago</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div id="searchModal" class="modal">
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <h2>Resultados da Pesquisa</h2>
    <h3>Formadores:</h3>
    <ul></ul>
    <h3>Alunos:</h3>
    <ul></ul>
  </div>
</div>

<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<script>
// Slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.style.transform = 'translateX(100%)';
  });
  slides[n].classList.add('active');
  slides[n].style.transform = 'translateX(0)';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navList = document.querySelector('.nav-menu ul');
  
  function checkScreenSize() {
    if (window.innerWidth > 991) {
      navList.style.display = 'flex';
      navMenu.classList.remove('active');
    } else {
      if (!navMenu.classList.contains('active')) {
        navList.style.display = 'none';
      }
    }
  }
  
  checkScreenSize();
  
  window.addEventListener('resize', checkScreenSize);
  
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
  });
  
  document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && window.innerWidth <= 991) {
      navMenu.classList.remove('active');
      navList.style.display = 'none';
    }
  });
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (!searchTerm) {
    alert('Por favor digite um nome para pesquisar');
    return;
  }

  // Get all instructors and students
  const instructors = [
    'Camilo Wiliamo Duvane',
    'João Pedro Silva',
    'Ana Maria Santos',
    'Carlos Manuel Nunes'
  ];

  const students = [
    'Ana M. Miguel Malate',
    'Pedro Silva',
    'Carlos Manuel',
    'Maria Fernanda',
    'António José',
    'Isabel Santos',
    'Pedro Miguel',
    'Sofia Costa',
    'Manuel Silva',
    'Catarina Oliveira',
    'Ricardo Santos',
    'Mariana Costa',
    'Francisco Pereira',
    'Teresa Almeida',
    'Joaquim Ferreira',
    'Beatriz Lima',
    'Daniel Martins',
    'Luísa Rodrigues',
    'Paulo Soares',
    'Marta Santos'
  ];

  // Search results
  const matchingInstructors = instructors.filter(name => 
    name.toLowerCase().includes(searchTerm)
  );
  const matchingStudents = students.filter(name => 
    name.toLowerCase().includes(searchTerm)
  );

  // Show results in modal
  const searchModal = document.getElementById('searchModal');
  
  searchModal.querySelector('ul:nth-of-type(1)').innerHTML = matchingInstructors.map(name => `<li>${name}</li>`).join('');
  searchModal.querySelector('ul:nth-of-type(2)').innerHTML = matchingStudents.map(name => `<li>${name}</li>`).join('');
  
  if (matchingInstructors.length === 0 && matchingStudents.length === 0) {
    searchModal.querySelector('.modal-content').innerHTML += '<p>Nenhum resultado encontrado.</p>';
  }
  
  searchModal.style.display = 'block';

  // Close modal functionality
  const closeBtn = searchModal.querySelector('.close-modal');
  closeBtn.onclick = () => searchModal.style.display = 'none';
  window.onclick = (e) => {
    if (e.target === searchModal) {
      searchModal.style.display = 'none';
    }
  };
});

// Add interactivity to news cards
document.querySelectorAll('.news-card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn')) {
      const link = this.querySelector('.btn').getAttribute('href');
      window.location.href = link;
    }
  });
});

// Add search on enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    document.getElementById('searchBtn').click();
  }
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const welcomeModal = document.getElementById('welcomeModal');
  const inicioLink = document.querySelector('a[href="#home"]');
  const closeModal = document.querySelector('.close-modal');
  
  // Function to show modal from top
  function showModalFromTop(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'translateY(0)';
    window.scrollTo(0, 0); 
  }

  // Event listeners for each link
  inicioLink.addEventListener('click', function(e) {
    e.preventDefault();
    showModalFromTop(welcomeModal);
  });
  
  closeModal.addEventListener('click', function() {
    welcomeModal.style.display = 'none';
    document.body.style.overflow = ''; 
  });
  
  window.addEventListener('click', function(e) {
    if (e.target === welcomeModal) {
      welcomeModal.style.display = 'none';
      document.body.style.overflow = ''; 
    }
  });
  
  const cursosLink = document.querySelector('a[href="#cursos"]');
  const coursesModal = document.getElementById('coursesModal');
  
  cursosLink.addEventListener('click', function(e) {
    e.preventDefault();
    showModalFromTop(coursesModal);
  });

  // Close modal when clicking X or outside
  document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
      document.body.style.overflow = ''; 
    });
  });

  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
      document.body.style.overflow = ''; 
    }
  });

  const sobreLink = document.querySelector('a[href="#sobre"]');
  const sobreModal = document.getElementById('sobreModal');

  sobreLink.addEventListener('click', function(e) {
    e.preventDefault();
    showModalFromTop(sobreModal);
  });

  const dadosLink = document.querySelector('a[href="#dados"]');
  const dadosModal = document.getElementById('dadosModal');

  dadosLink.addEventListener('click', function(e) {
    e.preventDefault();
    showModalFromTop(dadosModal);
  });
});

// Add student filtering functionality for dados
document.getElementById('dadosSearch').addEventListener('input', function() {
  filterDadosTable();
});

// Month filter functionality
document.getElementById('monthFilter').addEventListener('change', function() {
  filterDadosTable();
});

// Populate dados table with actual student data
function populateDadosTable() {
  const tbody = document.querySelector('#dadosModal .students-table tbody');
  tbody.innerHTML = ''; // Clear existing rows
  
  // Actual student data from the existing list
  const students = [
    {name: 'Ana Maria Malate', course: 'Informatica', months: 'Fevereiro',  data: '15/01/2024', value: '3.000 MZN', status: 'Em divida'},

  ];

  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']; // First quarter

  students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td>${student.months}</td>
      <td>${student.data}</td>
      <td>${student.value}</td>
      <td>${student.status}</td>
    `;
    tbody.appendChild(row);
  });
}

// Filter dados table based on input and selected month
function filterDadosTable() {
  const searchTerm = document.getElementById('dadosSearch').value.toLowerCase();
  const selectedMonth = document.getElementById('monthFilter').value;
  const rows = document.querySelectorAll('#dadosModal .students-table tbody tr');
  
  rows.forEach(row => {
    const studentName = row.cells[0].textContent.toLowerCase();
    const month = row.cells[2].textContent;
    const showBySearch = studentName.includes(searchTerm);
    const showByMonth = selectedMonth === 'all' || month.includes(getMonthName(selectedMonth));
    
    row.style.display = showBySearch && showByMonth ? '' : 'none';
  });
}

// Function to get month name from month number
function getMonthName(month) {
  const months = {
    '01': 'Janeiro', '02': 'Fevereiro', '03': 'Março',
    '04': 'Abril', '05': 'Maio', '06': 'Junho',
    '07': 'Julho', '08': 'Agosto', '09': 'Setembro',
    '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'
  };
  return months[month];
}

// Function to generate random date for the payment
function getRandomDate(month) {
  const day = Math.floor(Math.random() * 28) + 1;
  return `${day.toString().padStart(2, '0')}/${month}/2024`;
}
</script>

</body></html>
