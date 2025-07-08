import { useState } from 'react';

const useLocalStorage = (chave, valorInicial) => {
    const [localStorageItem, setLocalStorageItem] = useState(() => {
        try {
            const item = localStorage.getItem(chave);
            return item ? JSON.parse(item) : valorInicial;
        } catch (err) {
            console.error(err);
            return valorInicial;
        }
    });

    const setValor = (valor) => {
        try {
            setLocalStorageItem(valor);
            localStorage.setItem(chave, JSON.stringify(valor));
        } catch (err) {
            console.error(err);
        }
    };

    return [localStorageItem, setValor];
}

export default useLocalStorage
