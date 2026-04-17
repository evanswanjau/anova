import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import JobDetails from './pages/JobDetails';
import About from './pages/About';
import Industries from './pages/Industries';
import Partners from './pages/Partners';
import News from './pages/News';
import WhatsAppWidget from './components/WhatsAppWidget';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-body">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/careers/:id" element={<JobDetails />} />
          </Routes>
          <Footer />
        </div>
        <WhatsAppWidget />
      </Router>
    </GoogleReCaptchaProvider>
  );
}

export default App;
