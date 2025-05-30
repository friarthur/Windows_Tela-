function atualizarRelogio() {
    var agora = new Date();
    var hora = agora.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    var data = agora.toLocaleDateString('pt-BR');
    var horaElement = document.querySelector('.time');
    var dataElement = document.querySelector('.date');
    if (horaElement && dataElement) {
        horaElement.textContent = hora;
        dataElement.textContent = data;
    }
}
// Atualiza agora e a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);
var startButton = document.querySelector('.start-button');
var startMenu = document.getElementById('startMenu');
if (startButton && startMenu) {
    startButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Impede que o clique vá para o documento
        var isOpen = startMenu.style.display === 'block';
        startMenu.style.display = isOpen ? 'none' : 'block';
    });
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (e) {
        var target = e.target;
        var isClickInside = startMenu.contains(target) || startButton.contains(target);
        if (!isClickInside) {
            startMenu.style.display = 'none';
        }
    });
}
