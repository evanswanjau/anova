import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import aboutHero from '../assets/images/about-hero.jpg';
import teamImage from '../assets/images/about-info.jpg';
import presence1 from '../assets/images/about-location.jpg';

/* ─────────────────────────────────────────────
   Tiny scroll-reveal hook – no external deps
───────────────────────────────────────────── */
function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-4 mb-6">
        <span className="h-[2px] w-12 bg-primary" />
        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">{children}</span>
    </div>
);

interface RevealDivProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const Reveal: React.FC<RevealDivProps> = ({ children, className = '', delay = 0 }) => {
    const ref = useReveal();
    return (
        <div
            ref={ref}
            className={`reveal-block ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const stats = [
    { value: '10+', label: 'Years in East Africa' },
    { value: '200+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24 / 7', label: 'Support Coverage' },
];

const values = [
    {
        title: 'Integrity',
        icon: '◈',
        desc: 'We operate with total transparency and honesty in every interaction — from the first proposal to post-deployment support.',
    },
    {
        title: 'Excellence',
        icon: '◆',
        desc: "We don't settle for 'good enough'. Our engineers hold themselves to the highest technical standards on every engagement.",
    },
    {
        title: 'Reliability',
        icon: '◉',
        desc: 'Our clients depend on us for mission-critical systems. We architect for resilience and treat uptime as a non-negotiable.',
    },
    {
        title: 'Innovation',
        icon: '◇',
        desc: 'Technology never stands still. We continuously invest in emerging platforms so our clients stay ahead of the curve.',
    },
    {
        title: 'Local Expertise',
        icon: '◎',
        desc: 'We know the East African landscape — its regulations, infrastructure realities, and the ambition of its businesses.',
    },
    {
        title: 'Partnership',
        icon: '◐',
        desc: 'We don\'t do transactional work.Every client relationship is a long- term partnership oriented around their growth.',
    },
];

const services = [
    {
        id: 'ict-outsourcing',
        no: '01',
        title: 'ICT Outsourcing',
        desc: 'End-to-end management of your IT environment — monitoring, maintenance, and helpdesk — so your team stays focused on the business.',
    },
    {
        id: 'ict-support',
        no: '02',
        title: 'ICT Support',
        desc: 'Fast, professional technical support — from everyday fixes to complex issues — tailored to your business and available when you need it.',
    },
    {
        id: 'networking-solutions',
        no: '03',
        title: 'Networking Solutions',
        desc: 'Enterprise-grade office networks designed for East Africa — resilient, secure, and built to handle how your business actually works.',
    },
    {
        id: 'hardware-software-solutions',
        no: '04',
        title: 'Hardware & Software Solutions',
        desc: 'Genuine, enterprise-grade equipment and software — sourced, configured, and supported by Anova so your team has the tools they need.',
    },
    {
        id: 'telecommunications-solutions',
        no: '05',
        title: 'Telecommunications',
        desc: 'Modern, reliable business communication systems — from cloud-based phone systems to professional boardroom video conferencing.',
    },
    {
        id: 'cctv-monitoring',
        no: '06',
        title: 'CCTV & Monitoring',
        desc: 'Intelligent, always-on surveillance systems that protect your people, premises, and assets — and keep recording through power cuts.',
    },
    {
        id: 'access-control',
        no: '07',
        title: 'Access Control',
        desc: 'Control who enters your building, secure your most sensitive areas, and automate attendance tracking from a single system.',
    },
    {
        id: 'ict-connectivity',
        no: '08',
        title: 'Connectivity',
        desc: 'Dedicated, enterprise-grade internet and private data connections engineered with redundancy so your business stays online.',
    },
];

const team = [
    { name: 'James Kariuki', role: 'Chief Executive Officer', initials: 'JK' },
    { name: 'Amina Hassan', role: 'Head of Engineering', initials: 'AH' },
    { name: 'Brian Otieno', role: 'Head of Managed Services', initials: 'BO' },
    { name: 'Grace Wanjiku', role: 'Head of Cybersecurity', initials: 'GW' },
];

const differentiators = [
    'Same-day emergency response across Nairobi',
    'Bilingual support — English & Swahili',
    'Transparent fixed-fee service contracts',
    'Regional footprint across Kenya, Uganda & Tanzania',
];

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

const About: React.FC = () => {
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
            {/* Reveal animation styles — injected once */}
            <style>{`
                .reveal-block { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
                .reveal-block.revealed { opacity: 1; transform: translateY(0); }
            `}</style>

            <div className="bg-white">

                {/* ── 1. HERO ────────────────────────────────── */}
                <section className="bg-nasa-black pt-[104px] pb-16 lg:pb-24 relative overflow-hidden h-[70vh] lg:h-[60vh] flex items-center">
                    <div
                        ref={parallaxRef}
                        className="absolute inset-0 w-full h-[170%] will-change-transform"
                    >
                        <div
                            className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${aboutHero})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nasa-black via-transparent to-transparent" />
                    </div>

                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
                        <div className="max-w-4xl">
                            <Reveal>
                                <SectionLabel>Our Story</SectionLabel>
                                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-6 lg:mb-8">
                                    Empowering<br />East Africa
                                </h1>
                                <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                                    For over a decade, Anova has been the technology backbone of organisations that refuse to be held back by infrastructure limitations.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ── 2. STATS STRIP ─────────────────────────── */}
                <section className="bg-primary">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
                            {stats.map((s, i) => (
                                <div key={i} className={`py-8 md:py-10 px-4 sm:px-8 text-center ${i < 2 ? 'border-b lg:border-b-0 border-white/20' : ''}`}>
                                    <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">{s.value}</p>
                                    <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-widest mt-1 sm:mt-2 px-2">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 3. WHO WE ARE ──────────────────────────── */}
                <section className="py-16 md:py-24 lg:py-28 border-b border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div>
                                <Reveal>
                                    <SectionLabel>Who We Are</SectionLabel>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-6 lg:mb-8">
                                        East Africa's Most Trusted ICT Partner
                                    </h2>
                                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                                        Founded in Nairobi, Anova was built on a simple belief: that African businesses deserve the same calibre of technology infrastructure as any global enterprise — delivered with the context and commitment that only a local partner can provide.
                                    </p>
                                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                                        Our engineers bring deep certifications and deeper regional experience, understanding everything from last-mile connectivity challenges to compliance requirements specific to the Kenyan and East African regulatory environment.
                                    </p>
                                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 lg:mb-10">
                                        We don't just deploy and disappear. We embed ourselves in your operations, proactively managing risk, optimising performance, and scaling alongside you as your ambitions grow.
                                    </p>
                                </Reveal>

                                <Reveal delay={150}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {differentiators.map((d, i) => (
                                            <div
                                                key={i}
                                                className="bg-gray-50 border border-gray-100 p-4 sm:p-5 flex items-start gap-3 rounded-sm"
                                            >
                                                <span className="text-primary font-black text-lg leading-none mt-0.5">✓</span>
                                                <span className="text-slate-700 text-sm font-semibold leading-snug">{d}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Reveal>
                            </div>

                            <Reveal delay={200}>
                                <div className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden group">
                                    <img src={teamImage} alt="Anova Operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ── 3.5. LOCAL PRESENCE ────────────────────── */}
                <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center flex-col-reverse lg:grid">
                            <Reveal delay={150} className="order-2 lg:order-1">
                                <div className="relative aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden group">
                                    <img src={presence1} alt="Local Reach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                                </div>
                            </Reveal>
                            <Reveal className="order-1 lg:order-2">
                                <SectionLabel>Local Presence</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-6 lg:mb-8">
                                    Rooted in East Africa
                                </h2>
                                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                                    We understand the unique challenges and opportunities of operating in East Africa. Our extensive network and local expertise allow us to deliver solutions that are not just technically superior, but contextually relevant.
                                </p>
                                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                    From navigating regulatory requirements to managing cross-border logistics, our regional footprint ensures that we can support your business ambitions wherever they take you.
                                </p>
                            </Reveal>

                        </div>
                    </div>
                </section>

                {/* ── 4. MISSION & VISION ────────────────────── */}
                <section className="py-16 md:py-24 lg:py-28 bg-nasa-black border-b border-white/10">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <Reveal>
                            <SectionLabel>Purpose</SectionLabel>
                        </Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-10 lg:mt-12 items-stretch">
                            <Reveal className="h-full">
                                <div className="bg-white/5 border border-white/10 p-8 sm:p-10 lg:p-12 hover:bg-white/8 transition-colors h-full flex flex-col">
                                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-4 sm:mb-6 border-l-4 border-primary pl-4 sm:pl-6">
                                        Mission
                                    </h2>
                                    <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-medium">
                                        To provide robust ICT infrastructure and innovative managed services that enable businesses to thrive in an increasingly digital world. We strive to be the most reliable technology partner in the region.
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal className="h-full" delay={150}>
                                <div className="bg-primary/10 border border-primary/30 p-8 sm:p-10 lg:p-12 hover:bg-primary/15 transition-colors h-full flex flex-col">
                                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-4 sm:mb-6 border-l-4 border-primary pl-4 sm:pl-6">
                                        Vision
                                    </h2>
                                    <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-medium">
                                        To lead the digital transformation of East Africa by delivering world-class technology solutions with local expertise and unwavering commitment to excellence.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ── 5. VALUES ──────────────────────────────── */}
                <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <Reveal>
                            <div className="mb-10 lg:mb-16">
                                <SectionLabel>Core Values</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
                                    What Defines Us
                                </h2>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {values.map((v, i) => (
                                <Reveal key={i} delay={i * 80}>
                                    <div className="bg-white p-8 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 group hover:border-primary/30 hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                                        <div className="text-3xl text-primary mb-4 font-black">{v.icon}</div>
                                        <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight mb-2 sm:mb-3">{v.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm flex-grow">{v.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 6. SERVICES SNAPSHOT ───────────────────── */}
                <section className="py-16 md:py-24 lg:py-28 border-b border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <Reveal>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-16">
                                <div>
                                    <SectionLabel>What We Do</SectionLabel>
                                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
                                        Our Capabilities
                                    </h2>
                                </div>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary pb-1 hover:gap-5 transition-all w-fit"
                                >
                                    View All Services <span>→</span>
                                </Link>
                            </div>
                        </Reveal>

                        <div className="divide-y divide-gray-100">
                            {services.map((s, i) => (
                                <Reveal key={i} delay={i * 60}>
                                    <Link
                                        to={`/services/${s.id}`}
                                        className="py-6 sm:py-8 flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-6 items-start group hover:bg-gray-50 -mx-4 px-4 transition-colors block"
                                    >
                                        <span className="sm:col-span-1 text-primary font-black text-sm tracking-widest pt-1">{s.no}</span>
                                        <h3 className="sm:col-span-4 text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">
                                            {s.title}
                                        </h3>
                                        <p className="sm:col-span-6 text-slate-500 leading-relaxed text-sm mt-1 sm:mt-0">{s.desc}</p>
                                        <span className="hidden sm:block sm:col-span-1 text-slate-300 text-xl font-black text-right group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0">→</span>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 7. TEAM ────────────────────────────────── */}
                <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <Reveal>
                            <div className="mb-10 lg:mb-16">
                                <SectionLabel>The People</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
                                    Leadership Team
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, i) => (
                                <Reveal key={i} delay={i * 100}>
                                    <div className="group text-center">
                                        <div className="w-full aspect-square mb-6 bg-gray-100 rounded-sm overflow-hidden relative border border-gray-200">
                                            {/* Dummy silhouette placeholder until actual photos are provided */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-300">
                                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                            {/* Hover overlay with initials */}
                                            <div className="absolute inset-0 bg-nasa-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="text-white font-black text-2xl tracking-tight">{member.initials}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-black text-slate-900 text-lg tracking-tight">{member.name}</h3>
                                        <p className="text-primary text-xs font-semibold uppercase tracking-widest mt-1">{member.role}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default About;