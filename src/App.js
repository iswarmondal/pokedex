import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <>
      <main className='min-h-screen bg-slate-100 dark:bg-slate-800 overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/pokemon' element={<Pokemon pokemonData={
            {
              "abilities": [
                {
                "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
                },
                {
                "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
                },
                "is_hidden": true,
                "slot": 3
                }
                ],
            }
          } />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
