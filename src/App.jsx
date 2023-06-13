import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartingPage from './pages/StartingPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={< StartingPage />} path={'/'} key={'1'} />
      </Routes>
    </div>
  );
}

export default App;
