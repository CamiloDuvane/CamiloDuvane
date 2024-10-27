<html><head><base href="https://ustm.ac.mz">
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
  padding: 20px 0;
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
}

.nav-menu ul {
  list-style: none;
  display: none;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0;
}

.nav-menu a {
  color: var(--dark);
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: color 0.3s ease;
  display: block;
}

.nav-menu a:hover {
  color: var(--secondary);
}

.slider {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
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
  margin: 50px 0;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 20px;
}

.news-content h3 {
  color: var(--primary);
  margin-bottom: 10px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: var(--secondary);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 15px;
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

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .nav-menu ul {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
  }

  .nav-menu.active ul {
    display: flex;
  }

  .menu-toggle {
    display: block;
    color: var(--dark);
    font-size: 28px;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .menu-toggle:hover {
    background: #f5f5f5;
  }

  .menu-toggle i {
    display: block;
  }

  .nav-menu li {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }

  .nav-menu a {
    display: block;
    padding: 10px;
    width: 100%;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
</head>
<body>

<div class="top-bar">
  <div class="container">
    <div class="contact-info">
      <span>+258 84 247 9404</span>
      <span>camilowilliam0@gmail.com</span>
    </div>
    <div class="social-icons">
      <a href="https://facebook.com/camilowilliam.duvane"><i class="fab fa-facebook"></i></a>
      <a href="https://twitter.com/camilowilliam.duvane"><i class="fab fa-twitter"></i></a>
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
      <li><a href="https://ustm.ac.mz/">Início</a></li>
      <li><a href="https://ustm.ac.mz/sobre">Sobre</a></li>
      <li><a href="https://ustm.ac.mz/cursos">Cursos</a></li>
      <li><a href="https://ustm.ac.mz/pesquisa">Pesquisa</a></li>
      <li><a href="https://ustm.ac.mz/extensao">Extensão</a></li>
      <li><a href="https://ustm.ac.mz/contato">Contato</a></li>
    </ul>
  </div>
</nav>

<div class="slider">
  <div class="slide active">
    <img src="foto1.jpg" alt="Foto de Camilo Wiliamo Duvane 1" width="1200" height="500">
  </div>
  <div class="slide">
    <img src="foto2.jpg" alt="Foto de Camilo Wiliamo Duvane 2" width="1200" height="500">
  </div>
  <div class="slide">
    <img src="foto3.jpg" alt="Foto de Camilo Wiliamo Duvane 3" width="1200" height="500">
  </div>
  <div class="slide">
    <img src="foto4.jpg" alt="Foto de Camilo Wiliamo Duvane 4" width="1200" height="500">
  </div>
  <div class="slide">
    <img src="foto5.jpg" alt="Foto de Camilo Wiliamo Duvane 5" width="1200" height="500">
  </div>
  <div class="slide">
    <img src="foto6.jpg" alt="Foto de Camilo Wiliamo Duvane 6" width="1200" height="500">
  </div>
  <div class="slide">
    <img src="foto7.jpg" alt="Foto de Camilo Wiliamo Duvane 7" width="1200" height="500">
  </div>
  <div class="slide">
    <img src="foto8.jpg" alt="Foto de Camilo Wiliamo Duvane 8" width="1200" height="500">
  </div>
  <div class="slide">
    <svg width="100%" height="100%" viewBox="0 0 1200 500">
      <rect width="100%" height="100%" fill="#0066cc"/>
      <text x="50%" y="50%" fill="white" font-size="48" text-anchor="middle">Bem-vindo à CWD</text>
    </svg>
  </div>
</div>

<main class="container">
  <section class="news-grid">
    <article class="news-card">
      <svg width="100%" height="200">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" text-anchor="middle">Notícia 1</text>
      </svg>
      <div class="news-content">
        <h3>Processo de Admissão 2024</h3>
        <p>Informações sobre o processo de admissão para novos estudantes.</p>
        <a href="https://ustm.ac.mz/admissao" class="btn">Saiba mais</a>
      </div>
    </article>
    
    <article class="news-card">
      <svg width="100%" height="200">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" text-anchor="middle">Notícia 2</text>
      </svg>
      <div class="news-content">
        <h3>Pesquisa e Inovação</h3>
        <p>Descobra os projetos de pesquisa em desenvolvimento na CWD.</p>
        <a href="https://ustm.ac.mz/pesquisa" class="btn">Saiba mais</a>
      </div>
    </article>
    
    <article class="news-card">
      <svg width="100%" height="200">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" text-anchor="middle">Notícia 3</text>
      </svg>
      <div class="news-content">
        <h3>Extensão Universitária</h3>
        <p>Conheça nossos programas de extensão e impacto social.</p>
        <a href="https://ustm.ac.mz/extensao" class="btn">Saiba mais</a>
      </div>
    </article>
  </section>
</main>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Contato</h4>
        <p>Matola, 1° do Maio rua 213</p>
        <p>Maputo, Moçambique</p>
        <p>Tel: +258 84 247 9404</p>
        <p>Email: camilowilliam0@gmail.com</p>
      </div>
      
      <div>
        <h4>Links Rápidos</h4>
        <ul>
          <li><a href="https://camiloduvane.github.io/CD/">Biblioteca</a></li>
          <li><a href="https://camiloduvane.github.io/CWD/">Mais sobre Moçambique</a></li>
          <li><a href="https://camiloduvane.github.io/Matlhemele2024/">Jogos de perguntas e respostas</a></li>
        </ul>
      </div>
      
      <div>
        <h4>Redes Sociais</h4>
        <div class="social-icons">
          <a href="https://facebook.com/camilowilliam.duvane">Facebook</a>
          <a href="https://twitter.com/camilowilliam.duvane">Twitter</a>
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

// Add slide animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .slide {
    transition: transform 0.5s ease-in-out;
    transform: translateX(100%);
  }
  .slide.active {
    transform: translateX(0);
  }
`;
document.head.appendChild(styleSheet);

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

  // Close menu when window is resized above mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
    }
  });
});
</script>

</body></html>
