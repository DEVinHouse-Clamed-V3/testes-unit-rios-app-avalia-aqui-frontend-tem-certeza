# 📱 Avalia Aqui

Aplicativo desenvolvido para a disciplina de desenvolvimento mobile do curso **SENAI DevInHouse - Clamed V3**.  
O projeto simula um sistema de avaliação de produtos com interface moderna e navegação fluida.

---

## 🧾 Descrição do Projeto

O **Avalia Aqui** é um app mobile desenvolvido em **React Native**, que permite ao usuário:

- 📋 **Visualizar uma lista de jogos disponíveis**
- ⭐ **Cadastrar avaliações personalizadas sobre cada jogo**
- 🔄 **Filtrar jogos na listagem**
- ✅ **Enviar feedback com experiência, comentário e recomendação**

A interface é dividida em **3 telas principais**:
- 🏠 **Tela Principal** – Apresentação e botão para iniciar
- 🎮 **Lista de Jogos** – Catálogo dos jogos disponíveis
- 📝 **Cadastrar Feedback** – Formulário para avaliação do usuário

---

## 🚀 Tecnologias Utilizadas

- **React Native**
- **TypeScript**
- **Expo**
- **React Navigation**
- **Axios**
- **React Native Paper**
- **Lottie Animations**
- **Jest** + **Testing Library** para testes automatizados

---

## 🧪 Testes Automatizados

O projeto conta com testes implementados para garantir qualidade e funcionamento das funcionalidades principais:

- ✔️ **Teste da tela principal** (navegação para listagem)
- ✔️ **Teste da lista de jogos** (mock de API, filtragem por nome)
- ✔️ **Teste do formulário de feedback** (validação de campos e envio)

> Os testes utilizam **Jest** e **@testing-library/react-native**, com mocks de `axios` e navegação.

---

## 🗂️ Estrutura do Projeto

```
/screens
  ├── TelaPrincipal.tsx
  ├── ListaJogos.tsx
  └── CadastrarFeedBack.tsx

/tests
  ├── TelaPrincipal.test.tsx
  ├── Intro-test.test.tsx
  └── CadastrarFeedBack.test.tsx
```

---

## 🛠️ Como executar

1. Clone o repositório  
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npx expo start
   ```

4. Rode os testes:
   ```bash
   npm test
   ```

---

## 📌 Observações

- As chamadas para a API usam `process.env.EXPO_PUBLIC_API_URL`, por isso certifique-se de definir essa variável corretamente no `.env`:
  ```
  EXPO_PUBLIC_API_URL=http://localhost:3000
  ```

- Para simular a API local, você pode utilizar ferramentas como **JSON Server** ou seu backend Express.

---


