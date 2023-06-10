import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PrintPage from './pages/PrintPage';
import ArchitecturePage from './pages/ArchitecturePage';
import ExpositionTourPage from './pages/ExpositionTourPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={< PrintPage />} path={'/print'} key={'1'} />
        <Route element={< ArchitecturePage />} path={'/architecture'} key={'2'} />
        <Route element={< ExpositionTourPage />} path={'/map'} key={'3'} />
      </Routes>
      {/* <PrintPage /> */}
    </div>
  );
}

export default App;
