import { useState } from 'react';
import { useLista } from '../context/ListaContext.jsx';

const Input = () => {
    const [texto, setTexto] = useState('');
    const { adicionar } = useLista();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!texto.trim()) return;
        adicionar(texto);
        setTexto('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mt-6 w-full px-4 max-w-full sm:max-w-2xl mx-auto">
            <input
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="Nova tarefa"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="button button__active"
            >
                Adicionar
            </button>
        </form>
    );
}

export default Input