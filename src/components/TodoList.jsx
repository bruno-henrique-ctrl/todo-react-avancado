import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
import { useMemo } from 'react';

export default function TodoList() {
    const { filteredTodos } = useTodos();

    const memoizedList = useMemo(() => {
        return filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);
    }, [filteredTodos]);

    return <ul>{memoizedList}</ul>;
}
