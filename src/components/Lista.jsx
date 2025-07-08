import { useMemo } from 'react';
import { useLista } from '../context/ListaContext.jsx';
import ListaItem from './ListaItem.jsx';

const Lista = () => {
    const { listaFiltrada } = useLista();

    const listaMemoria = useMemo(() => {
        if (!Array.isArray(listaFiltrada)) return [];
        return listaFiltrada.map(item => <ListaItem key={item.id} item={item} />);
    }, [listaFiltrada]);

    return (
        <ul className="w-full px-4 mt-6 space-y-3 max-w-full sm:max-w-2xl sm:mx-auto">
            {listaMemoria}
        </ul>
    );
};

export default Lista;
