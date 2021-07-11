/* Funcão leia mais (resumo) */
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

/* Função criar tópicos */
function criarTopico(){
  var discussoesCabecalho = document.getElementById('discussoes-cabecalho');
  var criarDiscussao = document.getElementById('criar-discussao');
  var novaDiscussao = document.getElementById('nova-discussao');

  discussoesCabecalho.style.display = 'none';
  criarDiscussao.style.display = 'none';
  novaDiscussao.style.display = 'block'

}

/* Criando nova discussão */

var selectedLevel = window.location.search;
selectedLevel = selectedLevel.replace('?', '');

console.log(selectedLevel)
function criarDiscussao (){

  const listaDiscussoes = document.getElementById('lista-discussoes');

  const input = document.getElementById('assunto');
  const textarea = document.getElementById('conteudo');
  
  const conteudo = document.createElement('div')
  conteudo.innerHTML =`
  <div id="elemento-criado"  class="card discussoes-topicos">
    <div class="card-body">
      <div>
        <h5 class="card-title assunto">${input.value}</h5>
        <h6 class="card-subtitle">Anônimo</h6>
        <p class="card-text">${textarea.value} 
        </p>
      </div>
      <div class='discussoes-rodape'>
        <div onclick="expandirInformacao('discussao-mais-informacao-1')" class="informacao">
          <img  src="images/mais-info.svg" alt="Mais informação">
          <img  src="images/mais-info.svg" alt="Mais informação">
          <img src="images/mais-info.svg" alt="Mais informação">
        </div>
        <button class="gradiente"><img class="curtir"src="images/curtir.svg" alt="Curti"></button>
        <p id="contador-curtida">###</p>
        <p> 1 resposta</p>
      </div>
    </div>
  </div>`

listaDiscussoes.insertBefore(conteudo, listaDiscussoes.children[0]) /* appendChild(conteudo, firt) */  
}


/* Função expandir mais informações das discussões */
function expandirInformacao(id){
  const informacoes = document.getElementById(id);

  if(informacoes.style.display === 'none'){
    informacoes.style.display = 'block';
    informacoes.style.opacity = 1;
  }else{
    informacoes.style.display = 'none';
    informacoes.style.opacity = 0;
  }
  
}

var cont =1;