import HeaderNavber from './components/HeaderNavber';
import IconNavbar from './components/IconNavbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import GraphicSection from './components/GraphicSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import routes from './Config/routes';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css'

function App() {
  return (
    <div className="App">
    {/* use routes for navbar */}
    { routes }
    Im a banana <Link to={'/number2'}>Second component</Link>
      <IconNavbar />
      <HeaderNavber />
      <Hero />
      <ServiceSection />
      <GraphicSection />
      <Testimonials />      
      <Footer />
    </div>
  );
}

export default App;
