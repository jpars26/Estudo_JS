# Estudo_JS

    Esse arquivo foi feito para a minha melhor compreenção do assunto!!

---------------------------------BASICO DE JAVA SCRIPT ---------------------------

Os primeiros passos com JavaScript foi feita uma manipulação de variaveis, como modificar o HTML.

Primeiro passo é criar um index.html e colocar alguns botoes para ter ação no texto:

    <!DOCTYPE html>
     <html>
      <head>
       <title>Aprendendo JS</title>
       <script src="script.js"></script>
      </head>
  
    <body>
      <div id="area">Boas Vindas</div>
      
   
    <br/><br/>

      <button onclick="entrar()">Entrar</button>
    
    <!-- Segundo medoto-->
    <div id="area2">Boas Vindas</div>
      
   
    <br/><br/>

      <button onclick="entrar2('Jpars')">Entrar2</button>
    

    </body>

    </html>

Lógo após, basta criar um arquivo .js com o nome desejado e chama-lo dentro do arquivo index.html, para buscar as informações.
O botão "entrar" ao ser clicado abre o prompt e da opção de digitar um texto, que automaticamente altera o HTML da página.

   
    function entrar(){

      var area = document.getElementById('area')
      var texto = prompt('Digite o texto')

      if(texto == '' || texto == null){
        alert('Digite novamente!!')
        area.innerHTML = 'Bem Vindo '

      }else{
        area.innerHTML = 'Bem Vindo' + ' ' + texto
      }
    }

    function entrar2(nome){

      var area = document.getElementById('area2')
      var texto = prompt('Digite o sobrenome')

      area.innerHTML = nome + ' ' + texto


    }


---------------------------INTERMEDIARIO DE JAVA SCRIPT -------------------------

Foi aprendido como são utilizado os eventos de um formulário.



    <!DOCTYPE html>
    <html>
      <head>
          <title>Aprendendo JS</title>
          <script src="script.js"></script>
      </head>
      <body>
        <form method="POST" onsubmit="return false">
          <input type="text" nome="nome" onfocus="focado()" onblur="desfocado()"> <br/><br/>
          <select name="cidades" onchange="opcaoSelecionada(this)">
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Rio Preto</option>
            <option>Curitiba</option>
          </select> <br/><br/>

        <input type="submit" value="Enviar">

        </form>

      </body>
    </html>

Os eventos aprendidos foram o "onfocus" (quando clica dentro do campo de texto), "onblur"(quando sai do campo de texto) e "onchange" (mostra qual opção do formulário foi selecionada).

    function focado(){
      console.log("Campo Focado")
    }

    function desfocado(){
      console.log("Desfocou do campo")
    }

    function opcaoSelecionada(objeto){

        console.log("Cidade Selecionada: " + objeto.value)
    }


Na segunda etápa foi desenvolvido um jogo simples com a criação automatica de baloes na tela, que o objetivo é destruir os baloes clicando em cima deles e ao destruir marca uma pontuação.

    <!DOCTYPE html>
    <html>
      <head>
          <title>Aprendendo JS</title>
          <script src="script.js"></script>

          <style type="text/css">
            .balao{
              margin-top: 50px;
              width: 50px;
              height: 60px;
              background-color: black;
              border-radius: 30px;
              position: absolute;
            }
          </style>
      </head>
      <body onload="carregarJogo()">
        <h3 style= "color: brown; position: fixed;" id="total"></h3>

      </body>
    </html>

No arquivo .js são criadas as funções 

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