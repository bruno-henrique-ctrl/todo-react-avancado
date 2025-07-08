import { useLista } from '../context/ListaContext.jsx';

const ListaItem = ({ item }) => {
    const { toggleItem, deleteItem } = useLista();
    const inputId = `item-checkbox-${item.id}`;

    return (
        <li
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-md shadow-sm ${item.completed ? 'bg-gray-100 text-gray-500 line-through' : 'bg-white'
                }`}
        >
            <div className="flex items-center gap-3 w-full">
                <input
                    type="checkbox"
                    id={inputId}
                    checked={item.completed}
                    onChange={() => toggleItem(item.id)}
                    className="mt-1 w-4 h-4 accent-blue-600 shrink-0"
                />
                <label
                    htmlFor={inputId}
                    className="cursor-pointer select-text w-full"
                >
                    <span className="block text-base break-words">
                        {item.text}
                    </span>
                </label>
            </div>

            <button
                type="button"
                onClick={() => deleteItem(item.id)}
                className="self-end sm:self-auto bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
            >
                Excluir
            </button>
        </li>
    );
};

export default ListaItem;
