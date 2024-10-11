# 3️⃣ Escrevendo as classes de um Jogo

Este projeto tem como objetivo criar uma classe genérica para representar um herói em uma aventura. Cada herói terá propriedades básicas e um método para simular um ataque, com uma descrição do ataque que varia de acordo com o tipo do herói.

## 📋 Funcionalidades

- Criação de uma classe `Heroi` com as seguintes propriedades:
  - **nome**: Nome do herói.
  - **idade**: Idade do herói.
  - **tipo**: Classe do herói, podendo ser guerreiro, mago, monge ou ninja.
- Método `atacar` que exibe uma mensagem de ataque personalizada para cada tipo de herói:
  - **Mago**: "usou magia"
  - **Guerreiro**: "usou espada"
  - **Monge**: "usou artes marciais"
  - **Ninja**: "usou shuriken"
  
## 🛠️ Tecnologias Utilizadas

- **JavaScript**: Para implementar as classes, métodos e manipular o comportamento dos heróis.

## 🚀 Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/beatrizgdc/bootcampGFT.git
```

### 2. Estrutura do Projeto

- **index.html**: Contém o layout básico para interagir com a aplicação (opcional).
- **script.js**: Contém a implementação da classe `Heroi` e do método `atacar`.

### 3. Executar o Código

No arquivo `script.js`, você encontrará a definição da classe e a lógica para exibir o ataque de acordo com o tipo de herói.

Exemplo de código:

```javascript
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'realizou um ataque indefinido';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
const heroi1 = new Heroi('Aragorn', 87, 'guerreiro');
heroi1.atacar(); // O guerreiro atacou usando espada

const heroi2 = new Heroi('Gandalf', 2019, 'mago');
heroi2.atacar(); // O mago atacou usando magia
```

### 4. Testar Localmente

1. Abra o arquivo `index.html` no navegador para interagir com a aplicação (caso tenha uma interface visual).
2. Caso esteja testando diretamente no console, abra o navegador e execute o código JavaScript para criar heróis e chamar o método `atacar`.

## 🤝 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.