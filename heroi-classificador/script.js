function classificarHeroi() {
  const nome = document.getElementById('nome').value;
  const xp = parseInt(document.getElementById('xp').value);
  let nivel = '';
  let imagem = '';

  // Estrutura de decisão para determinar o nível do herói e a imagem correspondente
  if (xp <= 1000) {
    nivel = 'Ferro';
    imagem = 'img/ferro.png';
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = 'Bronze';
    imagem = 'img/bronze.png';
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = 'Prata';
    imagem = 'img/prata.png';
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = 'Ouro';
    imagem = 'img/ouro.png';
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = 'Platina';
    imagem = 'img/platina.png';
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = 'Ascendente';
    imagem = 'img/ascendente.png';
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = 'Imortal';
    imagem = 'img/imortal.png';
  } else if (xp >= 10001) {
    nivel = 'Radiante';
    imagem = 'img/radiante.png';
  }

  // Altera o título
  const titulo = document.querySelector('h1');
  titulo.textContent = `${nome} está no nível de ${nivel}.`;

  // Esconde o conteúdo principal
  const conteudoPrincipal = document.querySelector('.conteudo-principal');
  conteudoPrincipal.style.display = 'none';

  // Exibe a imagem do herói
  const imagemHeroi = document.getElementById('imagem-heroi');
  const imgTag = document.getElementById('img-heroi');
  imgTag.src = imagem;
  imagemHeroi.style.display = 'block';
}
