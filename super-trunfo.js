var carta1 = {
    nome: "Daniel Hartmann",
    imagem:
      "https://i.pinimg.com/564x/b0/0c/e6/b00ce60c04742ec1c63260740db3b541.jpg",
    atributos: {
      Sanidade: 7,
      Força: 3,
      Ocultismo: 7,
      Inteligência: 6
    }
  };
  
var carta2 = {
    nome: "Thiago Fritz",
    imagem:
      "https://i.pinimg.com/236x/a1/95/af/a195af7a5723fa867fe7dd403fff312d.jpg",
    atributos: {
      Sanidade: 8,
      Força: 4,
      Ocultismo: 6,
      Inteligência: 5
    }
  };
  
var carta3 = {
    nome: "Alexsander Kothe",
    imagem:
      "https://i.pinimg.com/564x/ff/a1/3a/ffa13a98bbabc6d21ca9440e61180371.jpg",
    atributos: {
      Sanidade: 5,
      Força: 2,
      Ocultismo: 5,
      Inteligência: 7
    }
  };
  
var carta4 = {
    nome: "Cristopher Cohen",
    imagem:
      "https://i.pinimg.com/564x/6e/a7/8d/6ea78dc966c50b6d4e374d616e59dccd.jpg",
    atributos: {
      Sanidade: 5,
      Força: 10,
      Ocultismo: 3,
      Inteligência: 6
    }
  };
  
var carta5 = {
    nome: "Arthur Cervero",
    imagem:
      "https://i.pinimg.com/564x/76/0c/e2/760ce2c6c9155fb722cf446fecc9e8a8.jpg",
    atributos: {
      Sanidade: 6,
      Força: 6,
      Ocultismo: 8,
      Inteligência: 3
    }
  };
  
var carta6 = {
    nome: "Cristopher Cohen",
    imagem:
      "https://i.pinimg.com/564x/6e/a7/8d/6ea78dc966c50b6d4e374d616e59dccd.jpg",
    atributos: {
      Sanidade: 5,
      Força: 10,
      Ocultismo: 3,
      Inteligência: 6
    }
  };
  
var carta7 = {
    nome: "Cesar Cohen (Kaiser)",
    imagem:
      "https://i.pinimg.com/564x/9a/1b/04/9a1b04e6822d0b01810e6a6119172acf.jpg",
    atributos: {
      Sanidade: 8,
      Força: 2,
      Ocultismo: 7,
      Inteligência: 8
    }
  };
  
var carta8 = {
    nome: "Elizabeth Webber (Liz)",
    imagem:
      "https://i.pinimg.com/564x/60/1e/f9/601ef9c32f06cb13566686fb95b7e221.jpg",
    atributos: {
      Sanidade: 9,
      Força: 7,
      Ocultismo: 5,
      Inteligência: 10
    }
  };
  
var carta9 = {
    nome: "Joui Jouki",
    imagem:
      "https://i.pinimg.com/564x/c0/71/2b/c0712b6a1d33b7ecf77487ded264fd0b.jpg",
    atributos: {
      Sanidade: 8,
      Força: 7,
      Ocultismo: 10,
      Inteligência: 6
    }
  };
  
var carta10 = {
    nome: "Erin Parker",
    imagem:
      "https://i.pinimg.com/564x/0a/e9/8f/0ae98f05e647e06a3335ce72f95a755c.jpg",
    atributos: {
      Sanidade: 2,
      Força: 4,
      Ocultismo: 4,
      Inteligência: 9
    }
  };
  
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];

  let cartaMaquina;
  let cartaJogador;

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = parseInt(Math.random() * 10);
    cartaJogador = cartas[numeroCartaJogador];

    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 10);
    }

    document.getElementById("sortear_carta").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
}

function obtemAtiriburtoSelecionado() {
  let radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  let atributoSelecionado = obtemAtiriburtoSelecionado();
  let divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado ="<p class='resultado-final'>Você venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado ="<p class='resultado-final'>Você perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  
  divResultado.innerHTML = htmlResultado;
  exibirCartaMaquina();

  document.getElementById("btnJogar").desabled = true;
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    let cartaImagem = "<div id='img' class='carta-imagem'></div>";

  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

  let tagHtml = "<div id='opcoes' class='carta-status'>";

  let opcoesTexto = "";
  for(var atributo in cartaJogador.atributos) {
    opcoesTexto += 
      "<input type='radio' name='atributo' value='" + 
      atributo + 
      "'>" + 
      atributo + 
      " " + 
      cartaJogador.atributos[atributo] + 
      "<br>" ;
  }

  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + cartaImagem + tagHtml + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  let cartaImagem = "<div id='img' class='carta-imagem'></div>";

  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

  let tagHtml = "<div id='opcoes' class='carta-status'>"; 

  let opcoesTexto = "";
  for(var atributo in cartaMaquina.atributos) {
    opcoesTexto += 
      "<input type='radio' name='atributo' value='" + 
      atributo + 
      "'>" + 
      atributo + 
      " " + 
      cartaMaquina.atributos[atributo] + 
      "<br>" ;
  }

  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + cartaImagem + tagHtml + opcoesTexto + "</div>";
}