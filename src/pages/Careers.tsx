import React, { useEffect, useRef } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import careersData from '../data/careers.json';
import careersHero from '../assets/images/careers.jpg';
import teamImage from '../assets/images/slider1.jpg';

/* ─────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────── */
function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
    children, className = '', delay = 0
}) => {
    const ref = useReveal();
    return (
        <div ref={ref} className={`reveal-block ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-4 mb-6">
        <span className="h-[2px] w-12 bg-primary" />
        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">{children}</span>
    </div>
);

const Careers: React.FC = () => {
    useDocumentTitle("Careers");
    const parallaxRef = useRef<HTMLDivElement>(null);
    const jobs = careersData || [];

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <style>{`
                .reveal-block { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .reveal-block.revealed { opacity: 1; transform: translateY(0); }
            `}</style>

            {/* Hero Section */}
            <section className="bg-nasa-black pt-[104px] pb-24 relative overflow-hidden h-[60vh] flex items-center">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 w-full h-[170%] will-change-transform"
                >
                    <div
                        className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${careersHero})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nasa-black via-transparent to-transparent" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
                    <div className="max-w-4xl">
                        <Reveal>
                            <SectionLabel>Join Our Team</SectionLabel>
                            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                                Build the Future<br className="hidden md:block" /> with Us
                            </h1>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Excellence drives everything we do. We're looking for the best.
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                At Anova Communications, we don't just provide ICT services; we architect the digital backbone for the region's most critical sectors. From financial ecosystems to government infrastructure, our work matters.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-6 py-2 bg-gray-50 border border-gray-100 text-slate-700 text-sm font-bold uppercase tracking-wider">Excellence</span>
                                <span className="px-6 py-2 bg-gray-50 border border-gray-100 text-slate-700 text-sm font-bold uppercase tracking-wider">Hard Work</span>
                                <span className="px-6 py-2 bg-gray-50 border border-gray-100 text-slate-700 text-sm font-bold uppercase tracking-wider">Innovation</span>
                            </div>
                        </Reveal>
                        <Reveal delay={200} className="relative aspect-video overflow-hidden">
                            <img
                                src={teamImage}
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border-[20px] border-white/10" />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Jobs List */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <Reveal className="max-w-2xl">
                            <SectionLabel>Current Openings</SectionLabel>
                            <p className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Find your next challenge.
                            </p>
                        </Reveal>
                        <Reveal delay={200} className="text-slate-500 text-sm font-medium">
                            Showing {jobs.length} open positions
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {jobs.map((job, idx) => (
                            <Reveal key={job.id} delay={idx * 50}>
                                <Link
                                    to={`/careers/${job.id}`}
                                    className="group relative bg-white border border-gray-100 p-8 md:p-10 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 block"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1">
                                                    {job.department}
                                                </span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                    {job.type}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3">
                                                {job.title}
                                            </h3>
                                            <p className="text-slate-500 line-clamp-2 max-w-2xl">
                                                {job.overview}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-right hidden md:block">
                                                <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Location</div>
                                                <div className="text-sm font-bold text-slate-900">{job.location}</div>
                                            </div>
                                            <div className="w-12 h-12 bg-nasa-black text-white flex items-center justify-center group-hover:bg-primary transition-all rounded-none">
                                                <span className="material-symbols-outlined font-light">arrow_forward</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    {jobs.length === 0 && (
                        <div className="text-center py-20 border-2 border-dashed border-gray-100">
                            <p className="text-slate-400 font-medium italic">No open positions at the moment. Check back soon.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-24 bg-nasa-black text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Don't see a perfect fit?</h2>
                        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                            We're always looking for exceptional talent. If you have a passion for high-impact ICT solutions, email our HR team at <a href="mailto:hr@anova.co.ke" className="text-white hover:underline font-bold underline-offset-4 decoration-primary">hr@anova.co.ke</a> and we'll keep you in mind for future roles.
                        </p>
                        <a
                            href="mailto:hr@anova.co.ke"
                            className="inline-block bg-white text-nasa-black font-black px-12 py-4 uppercase tracking-[0.2em] text-sm hover:shadow-lg hover:bg-gray-100 transition-all active:scale-95"
                        >
                            Send Us Your CV
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Careers;
