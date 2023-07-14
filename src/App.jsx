import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import './App.css'
import Contant from './Pages/Contant';

// import OffcanvasExample from './Component/OffcanvasExample';

function App() {
  return (
    
      <div>
        {/* <OffcanvasExample /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contant" element={<Contant />} />
        </Routes>
      </div>
    
  );
}

export default App;
