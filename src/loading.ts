function redirecionarParaPaginaInicial(): void {
  setTimeout(() => {
    window.location.href = "/frontend/html/tela_inical.html";
  }, 10000); // 10 segundos
}

redirecionarParaPaginaInicial();
