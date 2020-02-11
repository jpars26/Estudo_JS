

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
