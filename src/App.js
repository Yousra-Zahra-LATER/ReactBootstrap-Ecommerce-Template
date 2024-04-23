
import './App.css';
import Footer from './component/Footer/Footer';
import AboutSection from './component/Home/AboutSection';
import BlogSection from './component/Home/BlogSection';
import FAQ from './component/Home/FAQ';
import Home from './component/Home/Home';
import Reviews from './component/Home/Reviews';
import NAV from './component/Nav/Nav';

function App() {
  return (

      <div className="App">
        <NAV /> 
        <Home/>
        <Footer />
      </div>

  );
}

export default App;