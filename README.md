# 🛡️ Aplicação de Utilitários para Heróis 🛡️

Este repositório contém três funcionalidades interativas voltadas para heróis de aventuras. Cada serviço permite classificar, calcular e simular ações de heróis com base em diferentes parâmetros. O projeto inclui um **index.html** com botões para acessar cada uma das funcionalidades, disponível em: [https://beatrizgdc.github.io/bootcampGFT/index](https://beatrizgdc.github.io/bootcampGFT/index).

## 📋 Funcionalidades

### 1️⃣ **Classificador de Nível do Herói**

Neste serviço, o usuário insere o nome do herói e a quantidade de experiência (XP), e o sistema retorna o nível correspondente ao XP informado. Além disso, uma imagem representando o nível é exibida e o formulário é ocultado após a classificação.

- **Classificação de Níveis**:
  - **Ferro**: XP menor que 1000
  - **Bronze**: XP entre 1001 e 2000
  - **Prata**: XP entre 2001 e 5000
  - **Ouro**: XP entre 5001 e 7000
  - **Platina**: XP entre 7001 e 8000
  - **Ascendente**: XP entre 8001 e 9000
  - **Imortal**: XP entre 9001 e 10000
  - **Radiante**: XP acima de 10001

- **Mensagem exibida**: "O herói {nome} está no nível {nível}".
- **Imagem correspondente ao nível**: A imagem é exibida conforme o nível classificado.

### 2️⃣ **Calculadora de Partidas Rankeadas**

Este serviço permite que o usuário insira o número de vitórias e derrotas de um herói em partidas ranqueadas. O sistema calcula o saldo de vitórias (vitórias - derrotas) e exibe o nível correspondente às vitórias.

- **Classificação de Níveis**:
  - **Ferro**: Menos de 10 vitórias
  - **Bronze**: Entre 11 e 20 vitórias
  - **Prata**: Entre 21 e 50 vitórias
  - **Ouro**: Entre 51 e 80 vitórias
  - **Diamante**: Entre 81 e 90 vitórias
  - **Lendário**: Entre 91 e 100 vitórias
  - **Imortal**: 101 vitórias ou mais

- **Mensagem exibida**: "O Herói tem um saldo de **{saldoVitorias}** e está no nível de **{nivel}**".

### 3️⃣ **Classe de Herói com Ataques**

Este serviço simula um herói em uma aventura. O usuário pode criar heróis com nome, idade e tipo (guerreiro, mago, monge ou ninja). Cada herói tem um método de ataque específico com uma descrição personalizada dependendo do seu tipo.

- **Tipos de Ataques**:
  - **Mago**: "usou magia"
  - **Guerreiro**: "usou espada"
  - **Monge**: "usou artes marciais"
  - **Ninja**: "usou shuriken"

- **Mensagem exibida**: "O {tipo} atacou usando {ataque}", onde o ataque é específico de cada tipo de herói.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura da página e interações.
- **CSS**: Estilização e layout responsivo.
- **JavaScript**: Lógica de classificação, cálculo e ações dos heróis.
  
## 🚀 Como Usar

### 1. Acesse o Projeto

O projeto está disponível online através deste link: [https://beatrizgdc.github.io/bootcampGFT/index](https://beatrizgdc.github.io/bootcampGFT/index).

### 2. Escolha um Serviço

Na página inicial, você verá botões para acessar as três funcionalidades:

- **Classificar Nível de Herói**
- **Calculadora de Partidas Rankeadas**
- **Classe de Herói com Ataques**

### 3. Utilize a Funcionalidade Desejada

Preencha os formulários com as informações solicitadas e veja o resultado diretamente na página, seja na forma de mensagens ou imagens.

## 📂 Estrutura de Pastas

```plaintext
|-- img/
|   |-- (Imagens dos heróis e seus níveis)
|-- index.html
|-- styles.css
|-- script.js
```

## 🤝 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.