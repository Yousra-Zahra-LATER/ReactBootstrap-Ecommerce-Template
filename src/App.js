
import './App.css';
import Footer from './component/Footer/Footer';
import Barre from './component/Home/Barre';
import FAQ from './component/Home/FAQ';
import Home from './component/Home/Home';
import Reviews from './component/Home/Reviews';
import NAV from './component/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NAV /> 
        <Home/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/explore" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;