import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export default function TodoInput() {
    const [text, setText] = useState('');
    const { addTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Nova tarefa..." />
            <button type="submit">Adicionar</button>
        </form>
    );
}
