import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import ContactUs from './Components/ContactUs/ContactUs';
import About from './Components/About/About';
import Search from './Components/Search/Search';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
            </>
          } />
          <Route path="/search" element={
            <>
              <Search />
            </>
          } />
          <Route path="/music-player" element={
            <>
              <MusicPlayer />
            </>
          } />
          <Route path="/about" element={
            <>
              <About />
            </>
          } />
          <Route path="/contact-us" element={
            <>
              <ContactUs />
            </>
          } />
          <Route path="*" element={
            <>
              <NotFound />
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
