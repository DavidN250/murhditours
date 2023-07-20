import { Routes, Route,BrowserRouter } from 'react-router-dom'
import { Header} from "./components";
import Home from './pages/Home';
import Service from './pages/ServicesPage';
import Contacts from './pages/ContactPage';
import About from './pages/AboutPage';
import Team from './pages/TeamPage';
import Gallery from './pages/GalleryPage';
import ContactHeader from './components/ContactHeader';


function App() {
  return (
    <BrowserRouter>
     <ContactHeader/>
      <Header/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
