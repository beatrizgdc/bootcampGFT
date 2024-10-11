// Classe Herói
class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  atacar() {
      let ataque;
      // Definir o tipo de ataque com base no tipo de herói
      switch (this.tipo) {
          case 'mago':
              ataque = 'magia';
              break;
          case 'guerreiro':
              ataque = 'espada';
              break;
          case 'monge':
              ataque = 'artes marciais';
              break;
          case 'ninja':
              ataque = 'shuriken';
              break;
          default:
              ataque = 'ataque desconhecido';
      }
      // Exibir mensagem de ataque
      return `O ${this.tipo} atacou usando ${ataque}.`;
  }
}

// Função para criar o herói e exibir o resultado
function criarHeroi() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const tipo = document.getElementById('tipo').value;

  // Verificar se todos os campos foram preenchidos
  if (nome && idade && tipo) {
      // Criar um novo herói
      const heroi = new Heroi(nome, idade, tipo);

      // Exibir o ataque do herói
      document.getElementById('resultado').textContent = heroi.atacar();
  } else {
      // Mensagem de erro se algum campo não for preenchido
      document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
  }
}
