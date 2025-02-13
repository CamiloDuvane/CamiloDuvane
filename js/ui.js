export class UI {
  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
  }

  updateLetterDisplay(letter) {
    document.querySelectorAll('.current-letter').forEach(el => {
      el.textContent = letter;
    });
  }

  showResults(results) {
    const tbody = document.querySelector('#results-table tbody');
    tbody.innerHTML = '';

    const categories = Object.entries(results.categories);
    
    categories.forEach(([category, data]) => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td>${this.capitalize(category)}</td>
        <td class="${data.player.valid ? 'correct' : 'incorrect'}">${data.player.answer || '-'}</td>
        <td class="${data.camilo.valid ? 'correct' : 'incorrect'}">${data.camilo.answer || '-'}</td>
        <td>${data.player.points}</td>
        <td>${data.camilo.points}</td>
      `;
      
      tbody.appendChild(row);
    });

    document.getElementById('player-total').textContent = results.totals.player;
    document.getElementById('camilo-total').textContent = results.totals.camilo;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  clearGameInputs() {
    const categories = [
      'name', 'place', 'country', 'animal', 'object', 'color', 
      'element', 'profession', 'media', 'brand', 'plant', 'verb',
      'adjective', 'emotion', 'continent', 'fruit'
    ];
    
    categories.forEach(category => {
      const input = document.getElementById(category);
      if (input) input.value = '';
    });
  }

  showHistory(history) {
    const historyContent = document.querySelector('#history-content');
    if (!historyContent) return;

    historyContent.innerHTML = history.length ? `
      <div class="history-controls">
        <button id="download-history" class="btn secondary">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="margin-right: 8px;">
            <path d="M8 12l-4-4h2.5V3h3v5H12L8 12z"/>
            <path d="M14 13v1H2v-1h12z"/>
          </svg>
          Baixar Histórico
        </button>
      </div>
      ${history.map(game => `
        <div class="history-item">
          <div class="history-header">
            <span>Data: ${new Date(game.date).toLocaleDateString()}</span>
            <span>Letra: ${game.letter}</span>
            <span>Jogador: ${game.playerName}</span>
          </div>
          <div class="history-scores">
            <span>Seus pontos: ${game.totals.player}</span>
            <span>Pontos do Camilo: ${game.totals.camilo}</span>
          </div>
        </div>
      `).join('')}` : '<p class="no-history">Nenhum histórico disponível</p>';

    // Add download button listener
    const downloadBtn = document.getElementById('download-history');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => this.downloadHistory(history));
    }
  }

  downloadHistory(history) {
    if (!history.length) return;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text('HISTÓRICO DE JOGOS - NOME TERRA MOÇAMBIQUE', 14, 20);
    doc.setFontSize(12);
    doc.text(new Date().toLocaleDateString(), 14, 30);

    let yPosition = 40;
    const pageHeight = doc.internal.pageSize.height;

    history.forEach((game, index) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 60) {
        doc.addPage();
        yPosition = 20;
      }

      // Game header
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text(`Jogo ${index + 1}: ${new Date(game.date).toLocaleDateString()} - Letra: ${game.letter}`, 14, yPosition);
      doc.setFont(undefined, 'normal');
      yPosition += 10;
      doc.text(`Jogador: ${game.playerName}`, 14, yPosition);
      yPosition += 10;

      // Create table data for this game
      const tableData = Object.entries(game.categories).map(([category, data]) => [
        this.capitalize(category),
        data.player.answer,
        data.player.points,
        data.camilo.answer,
        data.camilo.points
      ]);

      // Add table
      doc.autoTable({
        startY: yPosition,
        head: [['Categoria', 'Sua Resposta', 'Seus Pontos', 'Resposta Camilo', 'Pontos Camilo']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [0, 121, 107] },
        margin: { left: 14 }
      });

      // Update position after table
      yPosition = doc.lastAutoTable.finalY + 20;

      // Add totals
      doc.text(`Total: Você ${game.totals.player} | Camilo ${game.totals.camilo}`, 14, yPosition);
      yPosition += 20;
    });

    // Save the PDF
    doc.save(`nome-terra-historico-${new Date().toISOString().split('T')[0]}.pdf`);
  }
}