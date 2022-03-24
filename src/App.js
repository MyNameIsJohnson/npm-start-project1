import './App.css';
import HeaderNavber from './components/HeaderNavber';
import IconNavbar from './components/IconNavbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import GraphicSection from './components/GraphicSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';
import './App.css'

function App() {
  
  return (
    <div className="App">
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
