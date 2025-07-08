import { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.jsx';

const Context = createContext();

export const Provider = ({ children }) => {
    const [localStored, setLocalStored] = useLocalStorage('lista', []);
    const [lista, setLista] = useState(localStored);
    const [filtro, setFiltro] = useState('all');

    useEffect(() => {
        setLocalStored(lista);
    }, [lista, setLocalStored]);

    const adicionar = (text) => {
        setLista([...lista, { id: Date.now(), text, completed: false }]);
    };

    const toggleItem = (id) => {
        setLista(lista.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteItem = (id) => {
        setLista(lista.filter(todo => todo.id !== id));
    };

    const listaFiltrada = lista.filter(todo => {
        if (filtro === 'completed') return todo.completed;
        if (filtro === 'pending') return !todo.completed;
        return true;
    });

    return (
        <Context.Provider value={{ lista, adicionar, toggleItem, deleteItem, filtro, setFiltro, listaFiltrada }}>
            {children}
        </Context.Provider>
    );
}

export const useLista = () => useContext(Context);
