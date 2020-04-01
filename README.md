# Be the Hero
Be the Hero é um aplicativo para  cadastro de ONGs que podem cadastrar e listar casos para que pessoas realizem apoio financeiro aos casos cadastrados. É um projeto realizado junto a maratona da Rocketseat na semana Omnistack 11

## Configuração

### Ferramentas

- Chocolatey
- NodeJS LTS
- React
- React Native
- Insomnia
- Expo

### Dependências

Em backend:

- express
- nodemon
- knex
- sqlite3
- crypto
- cors
- celebrate - joi com express
- jest
- cross-env

Em frontend:

- react
- react-dom
- react-icons (Feather Icons)
- react-scripts
- react-router-dom
- axios (Cliente HTTP)

Para mobile

- expo-cli
- expo
- react-navigation/native
- react-navigation/stack
- expo-constants
- axios
- intl

## Backend

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

## REACT

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
- Utiliza uma variável array com um valor e uma função de alternar estado.

**Exemplo do uso de estado:**
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

## React Native

- Para começar um projeto com expo: ```init expo mobile```

### Estrutura mobile

- O React Native não possui a mesmas tags de html, portanto usamos ```div```
- Qualquer tipo de ```container``` ira utilizar a tag ```View```
- A tag ```Text``` é utilizada para qualquer tipo de texto
- A parte de estilização é diferente, é utilizado uma class chamado ```StyleSheet```
- Todos os elementos do React Native já possuem ```display: flex``` por padrão
- Variáveis utilizam *CamelCase*
- Não existe herança de estilos, estilização por elemento

### Pacotes para instalar

- ```expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view```
- ```yarn add @react-navigation/native```
- ```yarn add @react-navigation/stack```
- ```expo install expo-constants```
- ```expo install expo-mail-composer```
- ```yarn add intl```

## Funcionalidades avançadas

### Validação backend

- ```yarn add celebrate```
- ```yarn add jest -D```
- Inicializar jest: ```npx jest --init```

### TDD (Test Driven Development)
Desenvolvimento baseado em testes

### Jest
Framework para testes

- Testes unitários
- Testes de integration

#### Teste de integration

Para realizar requisições com os testes de integration é necessario ter:

- Para ambiente de teste: ```yarn add cros-env```
- Para requisições no db: ```yarn add supertest -D```

### Deploy

- Heroku (plano gratuito para testes de desenvolvimento)
- Digital Ocean (produção)
- AWS, Google Cloud Platform e Azure (aplicação grande)
- Netlify para React (aplicação pequena e média)
- Gerar APK pelo expo (React Native)

## Extras

Para estudar:
- Redux
- Padrões de código: ESLint, Prettier
- Autenticação JWT
- Styled Components
