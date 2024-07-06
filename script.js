// Função de cadastro.
function cadastrar() {
    let nome = document.getElementById("nome").value;
    let dataNascimento = new Date(document.getElementById("dataNascimento").value);
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
  
    if (nome === '' || dataNascimento === '' || email === '' || senha === '' || confirmarSenha === '') {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
  
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    if (idade < 18) {
        alert("Você deve ter pelo menos 18 anos para se cadastrar.");
        return;
    }
  
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }
  
    localStorage.setItem('nome', nome);
    localStorage.setItem('dataNascimento', dataNascimento);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('confirmarSenha', confirmarSenha);
  
    alert("Cadastro realizado com sucesso!");
    exibirLogin();
  }
  
  //Area do Login
  let contador = 0;
  let tentativas = 3;
  function autenticar() {
    let storedEmail = localStorage.getItem('email');
    let storedSenha = localStorage.getItem('senha');
  
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
  
    if (loginEmail === storedEmail && loginSenha === storedSenha) {
        alert("Login bem-sucedido!");
        document.getElementById("login").style.display = "none";
          exibirJogo();
    } else {
      contador++;
    if (contador >= tentativas) {
        document.getElementById('alertMessage').style.display = 'block';
    } else {
        alert("As informações de login não são válidas.");
    }
  }
  return false;
  }
  //Recuperação de senhas
  document.addEventListener('DOMContentLoaded', function () {
  var recuperarSenhaBtn = document.getElementById('recuperarSenha');
      if (recuperarSenhaBtn) {
          recuperarSenhaBtn.addEventListener('click', reload);
      }
  
      function reload() {
          var emailSalvo = localStorage.getItem('email');
          var senhaSalva = localStorage.getItem('senha');
  
          alert("Email cadastrado: " + emailSalvo + "\n Senha cadastrada: " + senhaSalva);
      }
  });
  
  
  function exibirLogin() {
      document.getElementById("cadastro").style.display = "none";
      document.getElementById("login").style.display = "block";
  }
  // Tela Inicial
  function exibirJogo() {
      document.getElementById("login").style.display = "none";
      document.getElementById("jogo").style.display = "block";
      document.getElementById("avatarInfo").style.display = "block";
      // document.getElementById("").style.display = "block";
  }
  //Escolhas de personagens e armas
  function atualizarOpcoesArma() {
  var classeSelecionada = document.getElementById("escolhaClasse").value;
  var opcoesArma = document.getElementById("ferramentaBatalha");
  
  opcoesArma.innerHTML = "";
  
  switch (classeSelecionada) {
      case "Paladino":
          adicionarOpcaoArma(opcoesArma, "Lança e Escudo");
          adicionarOpcaoArma(opcoesArma, "Escudo e Adaga");
          break;
      case "Atirador":
          adicionarOpcaoArma(opcoesArma, "Arma");
          adicionarOpcaoArma(opcoesArma, "Besta");
          break;
      case "Guerreiro":
          adicionarOpcaoArma(opcoesArma, "Espada e Escudo");
          adicionarOpcaoArma(opcoesArma, "Lança");
          break;
      case "Bárbaro":
          adicionarOpcaoArma(opcoesArma, "Machado");
          adicionarOpcaoArma(opcoesArma, "Marreta");
          break;
      case "Arqueiro":
          adicionarOpcaoArma(opcoesArma, "Arco e Flechas");
          break;
  }
  }
  
  function adicionarOpcaoArma(select, arma) {
  var option = document.createElement("option");
  option.text = arma;
  select.add(option);
  }
  //Pontos de classes
  function distribuirPontosClasse() {
      let classeSelecionada = document.getElementById("escolhaClasse").value;
          pontosClasse = {
          Vida: 100,
          Mana: 50,
          VelocidadeAtaque: 1.0,
      };
      switch (classeSelecionada) {
          case "Paladino":
              pontosClasse = {
                  Vida: 120,
                  Mana: 50,
                  VelocidadeAtaque: 1.0,
                  Forca: 20,
                  Velocidade: 10,
              };
              break;
          case "Atirador":
              pontosClasse = {
                  Vida: 100,
                  Mana: 50,
                  VelocidadeAtaque: 1.5,
                  Forca: 15,
                  Velocidade: 12,
              };
              break;
          case "Guerreiro":
              pontosClasse = {
                  Vida: 150,
                  Mana: 30,
                  VelocidadeAtaque: 1.0,
                  Forca: 25,
                  Velocidade: 8,
              };
              break;
          case "Bárbaro":
              pontosClasse = {
                  Vida: 180,
                  Mana: 20,
                  VelocidadeAtaque: 0.8,
                  Forca: 30,
                  Velocidade: 6,
              };
              break;
          case "Arqueiro":
              pontosClasse = {
                  Vida: 90,
                  Mana: 70,
                  VelocidadeAtaque: 2.0,
                  Forca: 10,
                  Velocidade: 15,
              };
              break;
          default:
              pontosClasse = {};
      }
      if (Object.keys(pontosClasse).length === 0) {
          alert("Por favor, preencha as informações da classe antes de prosseguir.");
          return;
      }
      document.getElementById("classeInfo").style.display = "none";
      document.getElementById("montariaInfo").style.display = "block";
  }
  // Pontos de montaria
  function distribuirPontosMontaria() {
  const montariaSelecionada = document.getElementById("escolhaMontaria").value;
  
      const pontosPadrao = {
      Velocidade: 5,
      TempoDescanso: 10,
      };
  
  switch (montariaSelecionada) {
  case "Panda":
      pontosMontaria = {
          Velocidade: 8,
          TempoDescanso: 12,
          Carisma: 15,
      };
      break;
  case "Cavalo":
      pontosMontaria = {
          Velocidade: 10,
          TempoDescanso: 8,
          Forca: 20,
      };
      break;
  case "Tigre":
      pontosMontaria = {
          Velocidade: 12,
          TempoDescanso: 10,
          Agilidade: 18,
      };
      break;
  case "Dragão":
      pontosMontaria = {
          Velocidade: 15,
          TempoDescanso: 5,
          Poder: 25,
      };
      break;
  case "Mamute":
      pontosMontaria = {
          Velocidade: 6,
          TempoDescanso: 15,
          Resistencia: 30,
      };
      break;
  default:
      pontosMontaria = pontosPadrao;
  }
  
  
  exibirResultado();
  }
  // Resultador
  function exibirResultado() {
      let resultado = `Informações do Avatar:\n`;
      resultado += "Cor de Cabelo: " + document.getElementById("corCabelo").value + "\n";
      resultado += "Cor de Pele: " + document.getElementById("corPele").value + "\n";
      resultado += "Cor dos Olhos: " + document.getElementById("corOlhos").value + "\n";
  
      resultado += "\nInformações da Classe:\n";
      resultado += "Classe: " + document.getElementById("escolhaClasse").value + "\n";
      resultado += "Ferramenta de Batalha: " + document.getElementById("ferramentaBatalha").value + "\n";
      for (let atributo in pontosClasse) {
          resultado += atributo + ": " + pontosClasse[atributo] + "\n";
      }
  
      resultado += "\nInformações da Montaria:\n";
      resultado += "Montaria: " + document.getElementById("escolhaMontaria").value + "\n";
      for (let atributo in pontosMontaria) {
          resultado += atributo + ": " + pontosMontaria[atributo] + "\n";
      }
  
      document.getElementById("montariaInfo").style.display = "none";
      document.getElementById("resultadoInfo").style.display = "block";
      document.getElementById("resultado").innerText = resultado;
  }
  function mostrarInformacoes() {
  document.getElementById("avatarInfo").style.display = "none";
  document.getElementById("classeInfo").style.display = "block";
  }
  
  //salvar dados/recuperação de login
  document.addEventListener('DOMContentLoaded', function () {
      var nomeSalvo = localStorage.getItem('nome');
      var emailSalvo = localStorage.getItem('email');
      var senhaSalva = localStorage.getItem('senha');
  
      if (nomeSalvo && emailSalvo && senhaSalva) {
          var infoElement = document.getElementById('info');
          if (infoElement) {
              infoElement.style.display = 'flex';
          }
      }
      var recuperarBtn = document.getElementById('recuperar');
      if (recuperarBtn) {
          recuperarBtn.addEventListener('click', recuperar);
      }
      function recuperar(){
          document.getElementById('infoLogin').innerHTML = `
          Nome: ${nomeSalvo}<br>
          Email: ${emailSalvo}<br>
          Senha: ${senhaSalva}<br>
          `;
      }
  });
  //alerta de cadastro criado
  function exibirMensagemCadastroExistente() {
      let infoDiv = document.getElementById('info');
      infoDiv.style.display = 'block';
      document.getElementById("recuperar").onclick = function() {
          exibirLogin();
      };
  }