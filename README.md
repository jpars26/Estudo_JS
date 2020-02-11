# Estudo_JS

    Esse arquivo foi feito para a minha melhor compreenção do assunto!!



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


