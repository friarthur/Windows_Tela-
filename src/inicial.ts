function atualizarRelogio(): void {
  const agora = new Date();

  const hora = agora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const data = agora.toLocaleDateString('pt-BR');

  const horaElement = document.querySelector('.time');
  const dataElement = document.querySelector('.date');

  if (horaElement && dataElement) {
    horaElement.textContent = hora;
    dataElement.textContent = data;
  }
}

// Atualiza agora e a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);


const startButton = document.querySelector('.start-button');
const startMenu = document.getElementById('startMenu');

if (startButton && startMenu) {
  startButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique vá para o documento
    const isOpen = startMenu.style.display === 'block';
    startMenu.style.display = isOpen ? 'none' : 'block';
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const isClickInside = startMenu.contains(target) || startButton.contains(target);
    if (!isClickInside) {
      startMenu.style.display = 'none';
    }
  });
}

