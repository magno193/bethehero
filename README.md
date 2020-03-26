# OMNISTACK 11.0
Projeto da semana Omnistack 11

## Configuração

### Ferramentas

- Chocolatey
- NodeJS LTS
- React
- React Native
- Insomnia

### Dependências

Em backend:

- express
- nodemon
- knex
- sqlite3
- crypto
- cors

Em frontend:

- react
- react-dom
- react-icons (Feather Icons)
- react-scripts
- react-router-dom
- axios (Cliente HTTP)

## Guia de Backend

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

- Para executar o pacote knex: ```npx knex init```
- Para criar migrations: ```npx knex migrate:make nome_da_migration```
- Para listar migrations executadas: ```npx migrate:status```
- Para executar migrations: ```npx knex migrate:latest```
- Para desfazer ultima migration: ```npx knex migrate:rollback```

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

## Conceitos do REACT

### Componente

- Um componente é uma função javascript que retorna HTML.

### JSX

- JSX é a integração de HTML dentro do javascript.

### Propriedade

- Similar ao conceito de atributo de HTML, que possui a mesma sintaxe (como ```id```, ```name``` etc.).
- Propriedades são atributos que são passados para os componentes.

### Estado

- É uma informação que é mantida por um componente.
- Utilizado para refletir estados de lógica que mudam para exibir na interface.
- Utiliza uma variável array com um valor e uma função de alternar estado. Exemplo do uso de estado:

```javascript
  let [counter, setCounter] = useState(0); // retorna [valor, funcaoDeAtualizacao]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
```

## React Native (à atualizar)