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

function criarDiscussao (){
  const elementoEnviado = document.getElementById('elemento-enviado');
  const listaDiscussoes = document.getElementById('lista-discussoes');
  const novaDiscussao = document.getElementById('nova-discussao');

  const input = document.getElementById('input-assunto').value;
  const textarea = document.getElementById('textarea-conteudo').value;

  console.log(input);
  console.log(textarea);

  const conteudo = document.createElement('div');
  conteudo.innerHTML =`
      <div  class="card discussoes-topicos">

        <div  id="elemento-novo">
          <img src="images/autor-coautor-cinza.svg" alt="">
          <h6 class="topicos-textos">Aguardando feedback dos autores</h6>
          <a href="#">Editar tópico</a>
        </div>

        <div class="card-body">
            <div>
              <h5 class="card-title">${input}</h5>
              <h6 class="card-subtitle">Anônimo</h6>
              <p class="card-text"> 
                ${textarea}
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
      </div>
`
listaDiscussoes.insertBefore(conteudo, listaDiscussoes.children[0])

novaDiscussao.style.display = 'none'
elementoEnviado.style.display = 'block'
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