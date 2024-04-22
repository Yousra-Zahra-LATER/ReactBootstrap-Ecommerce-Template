
import './App.css';
import Footer from './component/Footer/Footer';
import AboutSection from './component/Home/AboutSection';
import BlogSection from './component/Home/BlogSection';
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
        <Footer />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/explore" element={<BlogSection />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;