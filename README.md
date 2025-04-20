# 📱 Avalia Aqui - Integração Backend

Projeto desenvolvido com base no app **Avalia Aqui**, construído na Semana 11 do Módulo 1 para o curso SENAI DevIHouse turma Clamed V3. O objetivo dessa etapa é integrar as funcionalidades do frontend com um backend desenvolvido em **Node.js**, utilizando boas práticas de organização e desenvolvimento.

---

## 🧾 Descrição do Projeto

O app **Avalia Aqui** é um aplicativo mobile que permite aos usuários:

- Visualizar produtos cadastrados.
- Cadastrar novas avaliações sobre produtos.
- Explorar uma interface organizada em três telas:
  - **Home**
  - **Listagem de Produtos**
  - **Cadastro de Avaliação**

Nesta etapa, o foco está na **implementação do backend** e na **integração com o frontend**.

---

## ⚙️ Funcionalidades Implementadas

### ✅ Backend com Node.js

- Criação de um servidor Node.js com Express.
- Implementação de migrations para produtos e avaliações.
- Criação de entidades para estruturar os dados.
- Rotas implementadas:
  - `POST /products`: Cadastra novos produtos.
  - `GET /products`: Lista todos os produtos cadastrados.
  - `POST /feedbacks`: Cadastra uma nova avaliação.

---

## 📁 Estrutura do Projeto

```
backend/
├── controllers/
│   ├── productController.js
│   └── feedbackController.js
├── entities/
│   ├── Product.js
│   └── Feedback.js
├── migrations/
│   ├── create_products.js
│   └── create_feedbacks.js
├── routes/
│   ├── productRoutes.js
│   └── feedbackRoutes.js
├── .env
├── app.js
└── server.js
```

---

## 🖼️ Estrutura dos Dados

### 📦 Produto

```json
{
  "id": 1,
  "name": "Produto Exemplo",
  "category": "Categoria X",
  "brand": "Marca Y",
  "description": "Descrição completa do produto.",
  "price": 99.90,
  "image": "url-da-imagem"
}
```

### ⭐ Avaliação

```json
{
  "id": 1,
  "productId": "ID do produto selecionado",
  "name": "Nome do usuário",
  "email": "email@exemplo.com",
  "feedback": "Comentário do usuário",
  "experience": "Positiva/Negativa",
  "recommend": true
}
```

---

## 🧪 Testes com Insomnia

Utilize o **Insomnia** ou ferramenta similar para testar suas rotas.

1. **Cadastrar Produtos**  
   Enviar requisições `POST /products` com os dados do produto.

2. **Listar Produtos**  
   Requisição `GET /products` para visualizar os produtos cadastrados.

3. **Cadastrar Avaliação**  
   Enviar requisições `POST /feedbacks` com os dados da avaliação.

---

## 🔗 Integração com o Frontend

### 🗂️ Listagem de Produtos

- Utilizar `useEffect` para buscar produtos ao carregar o componente.
- Armazenar os produtos em um estado local.
- Renderizar os produtos com `FlatList`.

### 📝 Cadastro de Avaliação

- Criar formulário que envia os dados para o backend via `fetch` ou `axios`.
- Os campos enviados devem corresponder à estrutura da entidade `Feedback`.

---

## ✅ Melhorias e Boas Práticas

- Uso de variáveis de ambiente no arquivo `.env`.
- Organização modular do backend (controllers, routes, entities).
- Reutilização do repositório da Semana 11.
- Aplicação de boas práticas de código e estrutura de pastas.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize ou TypeORM
- SQLite ou PostgreSQL
- React Native
- Insomnia

---

## 📋 Requisitos

- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)
- React Native CLI ou Expo
- Insomnia ou Postman

---

## 🚀 Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/avalia-aqui.git

# Acesse a pasta do backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente no arquivo .env

# Execute as migrations
npx sequelize-cli db:migrate

# Inicie o servidor
npm start
```

No frontend (app mobile):

```bash
# Inicie o app com o Expo ou React Native CLI
npx expo start
```

---


