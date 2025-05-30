const loginForm = document.getElementById("loginForm") as HTMLFormElement;

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault(); // previne reload da página

  const nome = document.querySelector(".user-name")?.textContent;
  const senha = (loginForm.querySelector("input[name='senha']") as HTMLInputElement).value;

  if (nome && senha) {
    try {
      const res = await fetch("/back end/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `nome=${encodeURIComponent(nome)}&senha=${encodeURIComponent(senha)}`
      });

      const data = await res.json();

      if (data.status === "ok") {
        alert("Login ok!");
        window.location.href = '/frontend/html/tela_inical.html';
      } else {
        alert(data.mensagem);
      }
    } catch (error) {
      alert("Erro na comunicação com o servidor.");
      console.error(error);
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
