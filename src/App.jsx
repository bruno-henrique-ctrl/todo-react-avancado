import { TodoProvider } from './context/TodoContext.jsx';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
import Filters from './components/Filters.jsx';

function App() {
  return (
    <TodoProvider>
      <h1>Lista de Tarefas</h1>
      <TodoInput />
      <Filters />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
