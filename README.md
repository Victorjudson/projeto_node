# Projeto de Imersão - Node.js com Google Gemini

Este projeto é parte de uma imersão no desenvolvimento de back-end com Node.js, com integração ao Google Gemini para processamento de dados e interações inteligentes. O sistema foi projetado para demonstrar como integrar Node.js com Google Gemini para criar uma aplicação interativa e eficiente. O banco de dados utilizado é o MongoDB, e a comunicação com a API foi testada e validada através do Postman.

## Funcionalidades

- Integração com a API do Google Gemini para processamento e análise de dados.
- CRUD de dados armazenados no MongoDB, com endpoints RESTful.
- Testes e validação das requisições com o Postman.
- A aplicação pode ser usada para interagir com o Google Gemini e processar respostas com base em consultas feitas via API.

## Tecnologias Utilizadas

- **Node.js**: Framework JavaScript para desenvolvimento do back-end.
- **MongoDB**: Banco de dados NoSQL para armazenar dados.
- **Google Gemini API**: Integração com o Google Gemini para análise e processamento de dados.
- **Postman**: Ferramenta para testar e validar as requisições API.
- **Express.js**: Framework para criação de servidores HTTP em Node.js.

## Estrutura do Projeto

```plaintext
/ ─ root directory
│
├── /config         ─ Configurações do projeto (por exemplo, conexão com MongoDB, credenciais da API)
├── /controllers    ─ Lógica para gerenciar as rotas e interação com a API do Google Gemini
├── /models         ─ Definição dos esquemas e interações com o MongoDB
├── /routes         ─ Definição das rotas da API
├── /services       ─ Serviços para fazer chamadas à API do Google Gemini e manipulação dos dados
├── /tests          ─ Testes das funcionalidades com Postman
├── server.js       ─ Arquivo principal do servidor Node.js
├── package.json    ─ Dependências do projeto
├── .env            ─ Variáveis de ambiente
