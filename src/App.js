import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <>
      <div className='min-h-screen bg-slate-100 dark:bg-slate-800'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/pokemon' element={<Pokemon />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
