import { useLista } from '../context/ListaContext.jsx';

const ListaItem = ({ item }) => {
    const { toggleItem, deleteItem } = useLista();
    const inputId = `item-checkbox-${item.id}`;

    return (
        <li
            className={`flex items-center justify-between p-3 border rounded-md shadow-sm ${item.completed ? 'bg-gray-100 text-gray-500 line-through' : 'bg-white'
                }`}
        >
            <div className="flex items-center gap-3">
                <label
                    htmlFor={inputId}
                    className="cursor-pointer select-none flex items-center gap-2"
                >
                    <input
                        type="checkbox"
                        id={inputId}
                        checked={item.completed}
                        onChange={() => toggleItem(item.id)}
                        className="w-4 h-4 text-blue-600 accent-blue-600"
                    />
                    <span className="text-md m-2">{item.text}</span>
                </label>
            </div>
            <button
                type="button"
                onClick={() => deleteItem(item.id)}
                className="button button__red"
            >
                Excluir
            </button>
        </li>
    );
};

export default ListaItem;
