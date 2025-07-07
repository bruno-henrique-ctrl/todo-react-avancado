import { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [storedTodos, setStoredTodos] = useLocalStorage('todos', []);
    const [todos, setTodos] = useState(storedTodos);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        setStoredTodos(todos);
    }, [todos, setStoredTodos]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, filter, setFilter, filteredTodos }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodos = () => useContext(TodoContext);
