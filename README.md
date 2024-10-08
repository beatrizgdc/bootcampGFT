# ⚔️ Classificador de Nível do Herói ⚔️

Este é um projeto simples de uma interface interativa que classifica o nível de um herói com base na quantidade de experiência (XP) inserida. O usuário insere o nome do herói e a quantidade de XP, e o sistema retorna o nível correspondente, exibindo uma mensagem e uma imagem representativa do nível do herói.

## 📋 Funcionalidades

- Formulário para entrada do nome do herói e quantidade de experiência (XP).
- Classificação automática do nível do herói com base no valor de XP:
  - **Ferro**: XP menor que 1000
  - **Bronze**: XP entre 1001 e 2000
  - **Prata**: XP entre 2001 e 5000
  - **Ouro**: XP entre 5001 e 7000
  - **Platina**: XP entre 7001 e 8000
  - **Ascendente**: XP entre 8001 e 9000
  - **Imortal**: XP entre 9001 e 10000
  - **Radiante**: XP acima de 10001
- Exibição de uma imagem de fundo personalizada e de uma imagem específica do nível do herói após a classificação.
- Ocultação automática do formulário após a classificação, substituído por uma mensagem e a imagem do herói classificado.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para a estilização e layout responsivo.
- **JavaScript**: Para a lógica de classificação e manipulação do DOM.
  
## 🚀 Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/beatrizgdc/bootcampGFT.git
```

### 2. Estrutura do Projeto

- **index.html**: Contém o layout básico e o formulário de entrada.
- **styles.css**: Define a aparência e a estilização do layout.
- **script.js**: Contém a lógica JavaScript para processar a classificação do herói e manipular o DOM.
- **img**: Pasta contendo as imagens dos níveis dos heróis (ferro, bronze, prata, ouro, etc.).

### 3. Executar Localmente

1. Abra o arquivo `index.html` no seu navegador.
2. Preencha o nome do herói e insira a quantidade de experiência (XP).
3. Clique no botão "Classificar Herói".
4. O nível do herói será exibido na página com uma mensagem e uma imagem correspondente.

### 4. Adicionar Imagens

Você pode adicionar ou alterar as imagens dos níveis do herói. Basta colocar as imagens correspondentes na pasta `img/` e garantir que os caminhos corretos sejam usados no arquivo `script.js`.

Exemplo:

```javascript
imagem = 'img/ferro.webp'; // Altere este caminho conforme necessário
```

## 📂 Estrutura de Pastas

```plaintext
|-- img/
|   |-- ferro.webp
|   |-- bronze.webp
|   |-- prata.webp
|   |-- ouro.webp
|   |-- platina.webp
|   |-- ascendente.webp
|   |-- imortal.webp
|   |-- radiante.webp
|-- index.html
|-- styles.css
|-- script.js
```
a
## 🤝 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
