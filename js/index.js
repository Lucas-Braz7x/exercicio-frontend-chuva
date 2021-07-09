function leiaMais() {
  var verMais = document.getElementById("ver-mais");
  var lerMais = document.getElementById("leia-mais");

  if (verMais.style.display === "none") {
    verMais.style.display = "inline";
    lerMais.style.display = "none";
  } else {
    verMais.style.display = "none";
    lerMais.style.display = "block";
    lerMais.style.opacity = 1;
  }
}