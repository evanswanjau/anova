import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Insights from '../components/Insights';
import Process from '../components/Process';
import Spotlight from '../components/Spotlight';
import Solutions from '../components/Solutions';
import ServiceHighlight from '../components/ServiceHighlight';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';

function Home() {
    useDocumentTitle("Anova - Your ICT Partner");
    return (
        <>
            <Hero />
            <Metrics />
            <Insights />
            <Process />
            <Spotlight />
            <Solutions />
            <ServiceHighlight />
            <Testimonials />
            <Partners />
        </>
    );
}

export default Home;
