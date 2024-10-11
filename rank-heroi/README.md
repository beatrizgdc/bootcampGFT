# 2️⃣ Calculadora de Partidas Rankeadas

Este é um projeto simples de uma calculadora de partidas rankeadas. O jogador insere a quantidade de vitórias e derrotas, e o sistema retorna o saldo das partidas e o nível correspondente baseado na quantidade de vitórias. 

## 📋 Funcionalidades

- Formulário para entrada da quantidade de vitórias e derrotas.
- Cálculo do saldo de partidas baseado em: `saldo = vitórias - derrotas`.
- Classificação automática do jogador com base no número de vitórias:
  - **Ferro**: Menos de 10 vitórias
  - **Bronze**: Entre 11 e 20 vitórias
  - **Prata**: Entre 21 e 50 vitórias
  - **Ouro**: Entre 51 e 80 vitórias
  - **Diamante**: Entre 81 e 90 vitórias
  - **Lendário**: Entre 91 e 100 vitórias
  - **Imortal**: 101 vitórias ou mais
- Exibição de uma mensagem final com o saldo de vitórias e o nível correspondente.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para a estilização e layout responsivo.
- **JavaScript**: Para a lógica de cálculo do saldo, classificação e manipulação do DOM.

## 🚀 Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/beatrizgdc/bootcampGFT.git
```

### 2. Estrutura do Projeto

- **index.html**: Contém o layout básico e o formulário de entrada para vitórias e derrotas.
- **styles.css**: Define a aparência e a estilização do layout.
- **script.js**: Contém a lógica JavaScript para processar o saldo das partidas e manipular o DOM.

### 3. Executar Localmente

1. Abra o arquivo `index.html` no seu navegador.
2. Preencha a quantidade de vitórias e derrotas.
3. Clique no botão "Calcular Saldo".
4. O saldo e o nível do jogador serão exibidos na página.

### 4. Ajustes no Projeto

Caso queira modificar a lógica de cálculo ou as faixas de vitórias para definir o nível, basta editar o arquivo `script.js`, na função responsável pela lógica de classificação.

Exemplo de função:

```javascript
function classificarHeroi(vitorias) {
  if (vitorias < 10) return 'Ferro';
  if (vitorias <= 20) return 'Bronze';
  if (vitorias <= 50) return 'Prata';
  if (vitorias <= 80) return 'Ouro';
  if (vitorias <= 90) return 'Diamante';
  if (vitorias <= 100) return 'Lendário';
  return 'Imortal';
}
```

## 🤝 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.