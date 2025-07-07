import { useTodos } from '../context/TodoContext';

export default function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo } = useTodos();

    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
        </li>
    );
}
