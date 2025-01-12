# Meteora_Monorepo

Este projeto é um exemplo prático de um sistema de BFF (backend for frontend). A Meteora é uma loja de roupas, calçados e acessórios, encontrada na web. Já o lado do servidor, é feita uma dedicação específica às demandas do frontend.

## 🔨 Funcionalidades do projeto

A aplicação permite:

- Cadastrar novos dados via Supabase.
- Integração do Backend com o Frontend via GraphQL.

  ## Ferramentas utilizadas
[![My Skills](https://skillicons.dev/icons?i=ts,nestjs,docker,prisma,supabase,react,graphql,apollo,npm,vite)](https://skillicons.dev)


## ✔️ Técnicas e tecnologias utilizadas

As principais tecnologias e técnicas aplicadas no projeto são:

- **Supabase**: Backend para autenticação e armazenamento dos dados de usuários e transações.
- **React com TypeScript**: Criação da interface de usuário e lógica do aplicativo.
- **NPM Workspace**: ferramenta que permite gerenciar vários repositórios de pacotes dentro de um único repositório;
- **Docker**: permite a criação, teste, implantação, atualização e gerenciamento de aplicações em contêineres;
- **NestJS**: framework de código aberto para o desenvolvimento de aplicações back-end em Node.js;
- **GraphQL**: linguagem de consulta de dados e ambiente de execução para interfaces de programação de aplicações (APIs). Com ela, a pesquisa torna-se mais direta ao ponto, entregando apenas o que foi solicitado;
- **Apollo Client**: biblioteca de gerenciamento de estado para JavaScript;
- **Prisma**: ORM que facilita a interação entre o código de uma aplicação e os dados de um banco de dados relacional;

## 📁 Acesso ao projeto

Você pode clonar o projeto com o comando:``git clone https://github.com/BrenonSAraujo/meteora_monorepo.git``.

## 🛠️ Abrir e rodar o projeto

Para rodar o projeto localmente, siga os passos:

1. Instale as dependências do projeto:

   ```bash
   docker compose up -build
   ```

2. Configure o [Supabase](https://supabase.com/dashboard/projects) e crie um arquivo `.env` com as chaves de acesso:

   ```plaintext
   DATABASE_URL=your_database_supabase_url
   DIRECT_URL=your_direct_supabase_key
   ```

3. Execute o projeto:
   ```bash
   docker compose up -d
   ```

Existem duas rotas que compôem este monorepo, especificadas no arquivo `docker-compose.yml`
```plaintext
FrontEnd: http://localhost:5173/
Backend: http://localhost:3000/
   ```

