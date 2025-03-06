<h1 align="center">API Sistema de Indicação com Ranking</h1>
<p align="center">Este projeto consiste em um sistema de cadastro com obtenção de um referencial para que possam ser feito indicações, contabilizando as indicações e gerando um ranking.</p>

<div align="center">
<img src="https://img.shields.io/static/v1?label=npm&message=10.9.0&color=CB3837&style=plastic&logo=npm"/>

<img src="https://img.shields.io/static/v1?label=NodeJS&message=22.12.0&color=5FA04E&style=plastic&logo=node.Js"/>

<img src="https://img.shields.io/static/v1?label=Docker&message=27.5.1&color=2496ED&style=flat&logo=docker"/>

<img src="https://img.shields.io/static/v1?label=TypeScript&message=5.7.3&color=3178C6&style=flat&logo=typeScript"/>

<img src="https://img.shields.io/static/v1?label=fastify&message=5.2.1&color=000&style=flat&logo=fastify"/>

<img src="https://img.shields.io/static/v1?label=Drizzle&message=0.39.3&color=C5F74F&style=flat&logo=drizzle"/>

<img src="https://img.shields.io/static/v1?label=Redis&message=5.5.0&color=FF4438&style=flat&logo=redis"/>

<img src="https://img.shields.io/static/v1?label=Postgre&message=3.4.5&color=4169E1&style=flat&logo=postgresql"/>

<img src="https://img.shields.io/static/v1?label=Zod&message=3.24.2&color=0B5CFF&style=flat&logo=zod"/>

<img src="https://img.shields.io/static/v1?label=FastifySwagger&message=9.4.2&color=0B5CFF&style=flat&logo=swagger"/>


<br />
<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=&style=flat&"/>
</div>

### 📝 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com)
<br />
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/tiagopelais/api-sistema-indicacao>

# Instale as dependências
$ npm install

# Inicialize o docker
$ docker compose up -d

# Execute o migrate dos BD
$ npm run db:migrate

# Execute a aplicação
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
### ⚙️ Configurando o Ambiente

Será necessário um arquivo .env na raiz do projeto com a configuração mínima:
```bash

PORT=3333
WEB_URL="http://localhost:3000"
POSTGRES_URL="postgresql://docker:docker@localhost:5432/connect"
REDIS_URL="redis://localhost:6379"
OPENAI_API_KEY=<Insira aqui suas credencias openAI>

```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NodeJS](https://nodejs.org/pt)
- [Docker](https://www.docker.com)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev)
- [Drizzle](https://orm.drizzle.team)
- [Redis](https://redis.io)
- [PostgreSQL](https://www.postgresql.org)
- [Zod](https://zod.dev)
- [Fastify Swagger](https://github.com/fastify/fastify-swagger)

### 🧾 Documentação da API
Para acessar a documentação da API localmente, acessar o link: [Swagger](http://localhost:3333/docs)
<br />

### 👨🏻‍💻 Autor


<img style="border-radius: 50%;" src="https://github.com/tiagopelais.png" width="100px;" alt=""/> <br />
<sub><b>Tiago Pelais</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/Tiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tiagopelais/)](https://www.linkedin.com/in/tiagopelais/) 
[![Gmail Badge](https://img.shields.io/badge/tiagopelais@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tiagopelais@gmail.com)](mailto:tiagopelais@gmail.com)





