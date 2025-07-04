function mostrarConteudo(id) {
  var conteudo = document.getElementById(id);
  if (conteudo.style.display === "none") {
    conteudo.style.display = "block";
  } else {
    conteudo.style.display = "none";
  }
}
