import { memo } from 'react';
import { useLista } from '../context/ListaContext.jsx';

const Filtro = memo(() => {
    const { filtro, setFiltro } = useLista();

    return (
        <div className="flex gap-2 mt-4 justify-center">
            <button
                type='button'
                onClick={() => setFiltro('all')}
                disabled={filtro === 'all'}
                className={`button ${filtro === 'all' ? 'button__active' : 'button__inative'
                    } ${filtro === 'all' ? 'disabled' : ''}`}
            >
                Todas
            </button>
            <button
                type='button'
                onClick={() => setFiltro('completed')}
                disabled={filtro === 'completed'}
                className={`button ${filtro === 'completed' ? 'button__active' : 'button__inative'
                    } ${filtro === 'completed' ? 'disabled' : ''}`}
            >
                Concluídas
            </button>
            <button
                type='button'
                onClick={() => setFiltro('pending')}
                disabled={filtro === 'pending'}
                className={`button ${filtro === 'pending' ? 'button__active' : 'button__inative'
                    } ${filtro === 'pending' ? 'disabled' : ''}`}
            >
                Pendentes
            </button>
        </div>
    );
});

export default Filtro;
