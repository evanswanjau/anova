import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
