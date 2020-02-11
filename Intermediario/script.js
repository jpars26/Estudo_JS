// 1 Criar o balao
// 2 Estourar o balão
// 3 Carregar o jogo

var total = 0;

function criarBalao(){

  var balao = document.createElement("div")
  balao.setAttribute("class", "balao")
//Cria em locais aleatórios da tela 
  var x = Math.floor(Math.random() * 600)
  var y = Math.floor(Math.random() * 400)
//Cria uma div 
  balao.setAttribute("style", "left:" + x + "px;top:" + y + "px;")
  balao.setAttribute("onclick", "estourar(this)")
//Mostra na tela 
  document.body.appendChild(balao)
}

function estourar(objeto){
//remove da tela ao clicar 
  document.body.removeChild(objeto)
  total++
  var score = document.getElementById('total')
  score.innerHTML = "Baloes estourados: " + total;
}

function carregarJogo(){
//carrega em determinado tempo a função que a gente criou
  setInterval(criarBalao, 1000)

}
