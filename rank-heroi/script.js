function rankearHeroi(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;

  // Verifica se vitorias e derrotas são vazios, disparando um alerta
  if(!vitorias || !derrotas) {
    alert('Preencha todos os campos!');
    return; // Faz com que a função encerre
  }

  let nivel = '';
  let imagem = '';

  // Estrutura de decisão para determinar o nível
  if (vitorias < 10) {
    nivel = 'Ferro';
    imagem = 'img/ferro.png';
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
    imagem = 'img/bronze.png';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
    imagem = 'img/prata.png';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
    imagem = 'img/ouro.png';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
    imagem = 'img/platina.png';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
    imagem = 'img/ascendente.png';
  } else {
    nivel = 'Imortal';
    imagem = 'img/imortal.png';
  }

  return { saldoVitorias, nivel, imagem };
}

function calcular() {
  const vitorias = parseInt(document.getElementById('vitorias').value);
  const derrotas = parseInt(document.getElementById('derrotas').value);

  const resultado = rankearHeroi(vitorias, derrotas);

  // Altera o título
  const titulo = document.querySelector('h1');
  titulo.textContent = `O Herói tem de saldo de ⚔️ ${resultado.saldoVitorias} ⚔️ está no nível de 🏆 ${resultado.nivel} 🏆`;

  // Esconde o conteúdo principal
  const conteudoPrincipal = document.querySelector('.conteudo-principal');
  conteudoPrincipal.style.display = 'none';

  // Exibe a imagem do herói
  const imagemHeroi = document.getElementById('imagem-heroi');
  const imgTag = document.getElementById('img-heroi');
  imgTag.src = resultado.imagem;
  imagemHeroi.style.display = 'block';
}
