import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Insights from './components/Insights';
import Process from './components/Process';
import Spotlight from './components/Spotlight';
import Solutions from './components/Solutions';
import ServiceHighlight from './components/ServiceHighlight';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Metrics />
      <Insights />
      <Process />
      <Spotlight />
      <Solutions />
      <ServiceHighlight />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
