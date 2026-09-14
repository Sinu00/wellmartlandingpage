import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { Footer, WhatsAppFab } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Furniture from './pages/Furniture';
import Electronics from './pages/Electronics';
import Emi from './pages/Emi';
import Offers from './pages/Offers';
import WinnersClub from './pages/WinnersClub';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/emi" element={<Emi />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/winners-club" element={<WinnersClub />} />
      </Routes>
      <Footer />
      <WhatsAppFab />
    </HashRouter>
  );
}
