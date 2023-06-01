import './App.css';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Traning from './Pages/Traning/Traning';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Traning' element={<Traning />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
