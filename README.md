# ✅ Lista de Tarefas com React + Tailwind CSS

Projeto desenvolvido para praticar os conceitos de **React**, incluindo:

- `useState`
- `useEffect`
- `Context API`
- Hooks personalizados
- Memoização com `useMemo` e `React.memo`
- Estilização com **Tailwind CSS**

---

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6+)
- HTML + CSS (via Tailwind)
- [Vite](https://vitejs.dev/) – ambiente de desenvolvimento rápido
- `localStorage` – persistência de dados no navegador

---

## 🧩 Funcionalidades

- ✅ Adicionar uma nova tarefa
- ✅ Marcar tarefa como concluída
- ✅ Remover tarefas
- ✅ Filtrar por:
  - Todas
  - Concluídas
  - Pendentes
- ✅ Salvar tarefas no navegador (mesmo após fechar a página)
- ✅ Interface leve e responsiva com Tailwind CSS

---

## 🛠️ Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instalar as dependências

- npm install

### 3. Rodar o projeto

- npm run dev

## 🎨 Estilização com Tailwind CSS

Este projeto utiliza o Tailwind CSS para estilização.

Tailwind já está configurado com Vite e pode ser encontrado nos arquivos:

- tailwind.config.js – configuração de tema e cores

- postcss.config.js – integração com o build do Vite

- src/output.css ou src/index.css – inclui:

Exemplo de uso no React:

<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Adicionar
</button>

## 📁 Estrutura de Pastas (resumida)

src/
├── components/ # Componentes React (Input, Lista, Filtros, etc.)
├── context/ # Context API (ListaContext)
├── App.jsx
├── main.jsx
├── output.css # Estilos com Tailwind

## 💾 Persistência de Dados

As tarefas são armazenadas no localStorage, garantindo que permaneçam salvas mesmo após recarregar a página ou fechar o navegador.

## 📦 Build para produção

- npm run build
