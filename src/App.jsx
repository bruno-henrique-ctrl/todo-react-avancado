import { Provider } from './context/ListaContext.jsx';
import Input from './components/Input.jsx';
import Lista from './components/Lista.jsx';
import Filtro from './components/Filtro.jsx';

import './output.css';

function App() {
  return (
    <Provider>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Lista de Tarefas
          </h1>
          <Input />
          <Filtro />
          <Lista />
        </div>
      </div>
    </Provider>
  );
}

export default App;
