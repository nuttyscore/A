document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formOpiniao");
  const textoInput = document.getElementById("textoOpiniao");
  const lista = document.getElementById("listaOpinioes");

  // Função para salvar opiniões no localStorage
  function salvarOpiniao(opiniao) {
    let opinioes = JSON.parse(localStorage.getItem("opinioes")) || [];
    opinioes.push(opiniao);
    localStorage.setItem("opinioes", JSON.stringify(opinioes));
  }

  // Função para carregar opiniões do localStorage e mostrar
  function carregarOpinioes() {
    lista.innerHTML = "";
    let opinioes = JSON.parse(localStorage.getItem("opinioes")) || [];
    opinioes.forEach((op) => {
      const p = document.createElement("p");
      p.textContent = op;
      lista.appendChild(p);
    });
  }

  // Envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = textoInput.value.trim();
    if (texto.length < 10) {
      alert("Por favor, escreva uma opinião com pelo menos 10 caracteres.");
      return;
    }
    salvarOpiniao(texto);
    carregarOpinioes();
    textoInput.value = "";
  });

  // Carrega opiniões ao iniciar
  carregarOpinioes();
});
