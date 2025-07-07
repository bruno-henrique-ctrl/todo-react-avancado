import { useTodos } from '../context/TodoContext';
import { memo } from 'react';

const Filters = memo(() => {
    const { filter, setFilter } = useTodos();

    return (
        <div>
            <button disabled={filter === 'all'} onClick={() => setFilter('all')}>Todas</button>
            <button disabled={filter === 'completed'} onClick={() => setFilter('completed')}>Concluídas</button>
            <button disabled={filter === 'pending'} onClick={() => setFilter('pending')}>Pendentes</button>
        </div>
    );
});

export default Filters;
