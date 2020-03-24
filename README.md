# OMNISTACK 11.0
Projeto da semana Omnistack 11

## Configuração

### Ferramentas

- Chocolatey
- NodeJS LTS
- Insomnia
- SQLite
- Knex
- SQLite3
- Crypto
- CORS

### Dependências

- Express
- Nodemon


## Guia

### Métodos HTTP

- GET: buscar informação no backend
- POST: criar uma informação no backend
- PUT: atualizar uma informação no backend
- DELETE: deletar uma informação no backend

### Tipos de parâmetros

- Query Params: parâmetros nomeados e enviados na rota após o símbolo '?' (filtros, paginação)
- Route Params: parâmetros utilizados para identificar recursos como o 'id' de um usuário
- Request Body: corpo da requisição, utilizado para criar ou alterar recursos

### Banco de dados

- SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (Relacional)
- NoSQL: MongoDB, CouchDB, etc (Não relacional)
- Query Builder: Knex


### Migrations de Knex

- Para executar o pacote knex:          ```npx knex init```
- Para criar migrations:                ```npx knex migrate:make nome_da_migration```
- Para listar migrations executadas:    ```npx migrate:status```
- Para executar migrations:             ```npx knex migrate:latest```
- Para desfazer ultima migration:       ```npx knex migrate:rollback```

### Entidades

- ONG
- Casos (incident)

### Funcionalidades

- Login de ONG
- Logout de ONG
- Cadastro de ONG
- Cadastrar novos casos
- Listar casos especificos de uma ONG
- Deletar casos
- Listar todos os casos
- Entrar em contato com a ONG