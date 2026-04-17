import React, { useEffect, useRef } from 'react';
import industriesHero from '../assets/images/industries-hero.jpg';

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

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const industries = [
    {
        no: '01',
        title: 'Banking & Finance',
        icon: '⬡',
        tagline: 'Infrastructure built for zero tolerance.',
        desc: 'Financial institutions operate in an environment where a minute of downtime can cost millions and a single breach can end trust. We design systems that don\'t fail.',
        useCases: [
            'Backup internet connections that keep working even if one line goes down',
            'Secure server room builds that meet international payment card safety standards',
            'ATM network installation & ongoing maintenance',
            'Disaster recovery planning so operations continue even after a major incident',
            'Rolling out fast, reliable network connections across branch offices in Kenya and the wider region',
        ],
        stat: { value: '99.99%', label: 'Uptime delivered' },
    },
    {
        no: '02',
        title: 'Telecommunications',
        icon: '⬢',
        tagline: 'The backbone needs its own backbone.',
        desc: 'We partner with telcos and internet providers to deploy, maintain, and expand the infrastructure that keeps East Africa connected — from central exchange points to the final connection reaching homes and businesses.',
        useCases: [
            'Sourcing, delivering, and setting up core network hardware',
            'Technical support for mobile and broadcast tower infrastructure',
            'Setting up a 24/7 monitoring room that watches over your entire network',
            'Professional cable installation inside telephone exchanges and data centres',
            'On-the-ground maintenance teams and spare parts management',
        ],
        stat: { value: '500+', label: 'Sites supported' },
    },
    {
        no: '03',
        title: 'Government',
        icon: '⬟',
        tagline: 'Public service demands public reliability.',
        desc: 'Government departments carry the weight of citizen services. We bring structured technology management, long-term support contracts, and compliance-conscious delivery to the public sector.',
        useCases: [
            'Taking full ownership of a department\'s day-to-day technology operations',
            'High-speed network links connecting different government ministries to each other',
            'Safe migration of documents and data to modern systems',
            'Helpdesk and on-site support teams with guaranteed response times',
            'Server and network infrastructure for digital government services',
        ],
        stat: { value: '30+', label: 'Agencies served' },
    },
    {
        no: '04',
        title: 'Healthcare',
        icon: '⬠',
        tagline: 'Connectivity that supports patient care.',
        desc: 'Hospitals, labs, and health networks run on data. We ensure their systems stay online, their records stay secure, and their teams stay focused on what matters most.',
        useCases: [
            'Wi-Fi and wired network installation across entire hospital campuses',
            'Infrastructure support for patient record and hospital management software',
            'Medical-grade battery backup systems that protect equipment during power cuts',
            'Secure remote access so clinical staff can work safely from any location',
            'Networking that connects multiple hospital buildings or clinics into one system',
        ],
        stat: { value: '40+', label: 'Health facilities' },
    },
    {
        no: '05',
        title: 'Logistics & Supply Chain',
        icon: '⬡',
        tagline: 'Moving goods starts with moving data.',
        desc: 'Warehouses, distribution hubs, and freight operators need real-time visibility. We build the connected infrastructure that keeps goods and information flowing together.',
        useCases: [
            'Warehouse Wi-Fi and barcode scanning networks for stock tracking',
            'Technical setup for GPS and vehicle tracking systems',
            'Security cameras and electronic door access systems',
            'Server and network infrastructure for business management software',
            'Full technology outsourcing for ports and freight depots',
        ],
        stat: { value: '60+', label: 'Logistics clients' },
    },
    {
        no: '06',
        title: 'Higher Education',
        icon: '⬢',
        tagline: 'Building the minds that build the future.',
        desc: 'Universities and research institutions demand fast, reliable networks that handle thousands of students online at once. We design campus infrastructure that never slows down under pressure.',
        useCases: [
            'Campus-wide next-generation Wi-Fi that handles thousands of simultaneous users',
            'Ultra-fast network design for research and data-heavy academic work',
            'Student computer lab and classroom technology builds',
            'Server and connectivity infrastructure for online learning platforms',
            'Systems that control who can log in and what each user can access',
        ],
        stat: { value: '15+', label: 'Institutions served' },
    },
];

const crossIndustryPoints = [
    { title: 'Rapid Deployment', desc: 'Dedicated project teams that mobilise fast and execute to schedule — even on complex, multi-site programmes.' },
    { title: 'Certified Engineers', desc: 'Cisco, Microsoft, and AWS certifications on staff. Not outsourced. Your project is handled by our permanent team.' },
    { title: 'Local Knowledge', desc: 'We understand Kenya\'s connectivity realities, supplier landscape, and regulatory requirements inside and out.' },
    { title: 'Long-term SLAs', desc: 'Managed service contracts designed for the long haul — not set-and-forget. We stay accountable after go-live.' },
];
/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
const Industries: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);

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
        <>
            <style>{`
                .reveal-block { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .reveal-block.revealed { opacity: 1; transform: translateY(0); }
            `}</style>

            <div className="bg-white">

                {/* ── 1. HERO ────────────────────────────────── */}
                <section className="bg-nasa-black py-24 relative overflow-hidden h-[50vh] flex items-center">
                    <div
                        ref={parallaxRef}
                        className="absolute inset-0 w-full h-[170%] will-change-transform"
                    >
                        <div
                            className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${industriesHero})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nasa-black via-transparent to-transparent" />
                    </div>

                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
                        <div className="max-w-4xl">
                            <Reveal>
                                <SectionLabel>Market Sectors</SectionLabel>
                                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                                    Industries We Serve
                                </h1>
                                <p className="text-gray-300 text-xl font-medium max-w-2xl leading-relaxed">
                                    Providing mission-critical ICT infrastructure for the sectors that East Africa depends on most.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ── 2. INTRO NARRATIVE ─────────────────────── */}
                <section className="py-24 border-b border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <Reveal className="lg:col-span-5">
                                <SectionLabel>Our Approach</SectionLabel>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                                    No two sectors are the same. We don't treat them like they are.
                                </h2>
                            </Reveal>
                            <Reveal delay={150} className="lg:col-span-6 lg:col-start-7 pt-2">
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    A bank's network has different failure consequences than a university's. A hospital's data sensitivity is categorically different from a logistics operator's. Generic ICT solutions fail these organisations — and we've spent over a decade learning exactly why.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Anova brings sector-specific thinking to every engagement. That means understanding your compliance obligations, your operational rhythms, your user density, and your growth roadmap — before we recommend a single piece of hardware or a single line of configuration.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ── 3. INDUSTRIES GRID ─────────────────────── */}
                <section className="py-24">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-100">
                            {industries.map((ind, i) => (
                                <Reveal key={i} delay={(i % 2) * 100}>
                                    <div className="bg-white p-10 md:p-12 group hover:bg-gray-50 transition-colors h-full flex flex-col">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div>
                                                <span className="text-primary font-black text-xs tracking-widest uppercase">{ind.no}</span>
                                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-1 group-hover:text-primary transition-colors">
                                                    {ind.title}
                                                </h3>
                                                <p className="text-slate-400 font-semibold text-sm mt-1 italic">{ind.tagline}</p>
                                            </div>
                                            <span className="text-4xl text-primary/20 font-black group-hover:text-primary/40 transition-colors">{ind.icon}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-600 leading-relaxed mb-8">{ind.desc}</p>

                                        {/* Use cases */}
                                        <div className="flex-1">
                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">What we deliver</p>
                                            <ul className="space-y-2">
                                                {ind.useCases.map((uc, j) => (
                                                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                                                        <span className="text-primary font-black mt-0.5 shrink-0">→</span>
                                                        {uc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Stat footer */}
                                        <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                                            <div>
                                                <p className="text-3xl font-black text-slate-900 tracking-tighter">{ind.stat.value}</p>
                                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">{ind.stat.label}</p>
                                            </div>
                                            <span className="text-slate-200 text-2xl font-black group-hover:text-primary group-hover:translate-x-1 transition-all">→</span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 4. CROSS-INDUSTRY CAPABILITIES ────────── */}
                <section className="py-24 bg-nasa-black">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <Reveal>
                            <div className="mb-16">
                                <SectionLabel>Across Every Sector</SectionLabel>
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                                    What You Always Get
                                </h2>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                            {crossIndustryPoints.map((pt, i) => (
                                <Reveal key={i} delay={i * 80}>
                                    <div className="bg-nasa-black p-10 hover:bg-white/5 transition-colors h-full">
                                        <div className="w-10 h-1 bg-primary mb-8" />
                                        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{pt.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-sm">{pt.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 5. NOT IN THE LIST? ─────────────────────── */}
                <section className="py-24 bg-gray-50 border-b border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <Reveal>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <SectionLabel>Don't See Your Industry?</SectionLabel>
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
                                        We work across any sector that depends on reliable ICT.
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        From manufacturing and hospitality to media, retail, and NGOs — if your organisation runs on technology, we have the expertise to keep it running. Tell us about your environment and we'll tell you what's possible.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['Manufacturing', 'Hospitality', 'Media & Broadcasting', 'Retail', 'NGOs & Development', 'Real Estate', 'Insurance', 'Legal & Professional Services'].map((s, i) => (
                                        <span key={i} className="border border-gray-200 text-slate-600 text-sm font-semibold px-5 py-2.5 hover:border-primary hover:text-primary transition-colors cursor-default">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Industries;