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
        <ul className="space-y-3 mt-6">
            {listaMemoria}
        </ul>
    );
};

export default Lista;
