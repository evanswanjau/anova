import React, { useEffect, useRef } from 'react';
import partnersHero from '../assets/images/partners-hero.jpg';

// Partner Logos
import ciscoLogo from '../assets/images/partners/cisco.png';
import microsoftLogo from '../assets/images/partners/microsoft.png';
import hpLogo from '../assets/images/partners/hp.svg';
import lenovoLogo from '../assets/images/partners/lenovo.png';
import safaricomLogo from '../assets/images/partners/safaricom.png';
import liquidLogo from '../assets/images/partners/liquid.png';
import oracleLogo from '../assets/images/partners/oracle.jpg';

// Client Logos (12 files)
import kcicLogo from '../assets/images/clients/KCIC-LOGO-01.png';
import palladiumLogo from '../assets/images/clients/Palladium_Logo.jpg';
import karenHospitalLogo from '../assets/images/clients/The-Karen-Hospital-Logo-loader.png';
import agroforestryLogo from '../assets/images/clients/World_Agroforestry_Logo_01.png';
import enafLogo from '../assets/images/clients/cropped-ENAF-Logo.png';
import fbLogo from '../assets/images/clients/facebook-default.jpg';
import gizLogo from '../assets/images/clients/gizlogo-unternehmen-de-rgb-300.jpg';
import hospitalLogo from '../assets/images/clients/hospital-logo.png';
import imgJpgLogo from '../assets/images/clients/images.jpg';
import imgPngLogo from '../assets/images/clients/images.png';
import jpLogo from '../assets/images/clients/jplogo.png';
import l1Logo from '../assets/images/clients/l1.png';

/* ─────────────────────────────────────────────
   Tiny scroll-reveal hook
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

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-4 mb-6">
        <span className="h-[2px] w-12 bg-primary" />
        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">{children}</span>
    </div>
);

const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
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

const Partners: React.FC = () => {
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

    const partners = [
        { name: "CISCO", logo: ciscoLogo, category: "Networking & Security", desc: "Gold Certified Partner for advanced networking and infrastructure security solutions." },
        { name: "HP", logo: hpLogo, category: "Computing Hardware", desc: "Enterprise platinum partner for server, storage, and workplace computing solutions." },
        { name: "MICROSOFT", logo: microsoftLogo, category: "Cloud & Productivity", desc: "Cloud solution provider specializing in Azure migration and Microsoft 365 ecosystems." },
        { name: "LENOVO", logo: lenovoLogo, category: "Infrastructure Solutions", desc: "Direct partner for data center systems and high-performance computing hardware." },
        { name: "ORACLE", logo: oracleLogo, category: "Database & Cloud", desc: "Specialized partner for database management and enterprise cloud applications." },
        { name: "SAFARICOM", logo: safaricomLogo, category: "Connectivity", desc: "Strategic ISP partner delivering dedicated fiber and enterprise mobility solutions." },
        { name: "LIQUID", logo: liquidLogo, category: "Infrastructure", desc: "High-speed terrestrial fiber and satellite connectivity solutions across Africa." }
    ];

    const clients = [
        { name: "KCIC", logo: kcicLogo },
        { name: "Palladium", logo: palladiumLogo },
        { name: "Karen Hospital", logo: karenHospitalLogo },
        { name: "World Agroforestry", logo: agroforestryLogo },
        { name: "ENAF", logo: enafLogo },
        { name: "GIZ", logo: gizLogo },
        { name: "Hospital", logo: hospitalLogo },
        { name: "Partner 8", logo: imgJpgLogo },
        { name: "Partner 9", logo: imgPngLogo },
        { name: "JP", logo: jpLogo },
        { name: "L1", logo: l1Logo },
        { name: "Internal", logo: fbLogo }
    ];

    return (
        <>
            <style>{`
                .reveal-block { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
                .reveal-block.revealed { opacity: 1; transform: translateY(0); }
            `}</style>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-nasa-black py-24 relative overflow-hidden h-[50vh] flex items-center">
                    <div
                        ref={parallaxRef}
                        className="absolute inset-0 w-full h-[120%] will-change-transform"
                    >
                        <div
                            className="absolute inset-0 opacity-50 bg-cover bg-top bg-no-repeat"
                            style={{ backgroundImage: `url(${partnersHero})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nasa-black via-transparent to-transparent" />
                    </div>
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
                        <div className="max-w-4xl">
                            <Reveal>
                                <SectionLabel>Our Ecosystem</SectionLabel>
                                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                                    Strategic Partners
                                </h1>
                                <p className="text-gray-300 text-xl font-medium max-w-2xl leading-relaxed">
                                    We collaborate with global technology leaders to deliver world-class ICT solutions tailored for the East African market.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Partners Grid */}
                <section className="py-24">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {partners.map((partner, i) => (
                                <Reveal key={i} delay={i * 100}>
                                    <div className="p-12 bg-white border border-gray-100 hover:border-primary transition-all group shadow-xl shadow-gray-200/20 h-full flex flex-col">
                                        <div className="h-16 flex items-center mb-8">
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="h-14 w-auto object-contain transition-all duration-500"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">
                                                {partner.category}
                                            </p>
                                            <p className="text-slate-500 leading-relaxed text-sm">
                                                {partner.desc}
                                            </p>
                                        </div>
                                        <div className="pt-8 mt-8 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Authorized Partner</span>
                                            <span className="material-symbols-outlined text-primary scale-0 group-hover:scale-100 transition-transform">verified</span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted Clients Section */}
                <section className="bg-slate-50 py-24 border-t border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[2px] w-12 bg-primary"></span>
                                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Track Record</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                                    Our Client Network
                                </h2>
                            </div>
                            <div className="flex items-center gap-4 text-right">
                                <div>
                                    <span className="text-slate-400 font-black text-5xl">100+</span>
                                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-tight block">Successful Deployments</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                            {clients.map((client, index) => (
                                <div key={index} className="bg-white p-12 flex items-center justify-center group hover:bg-slate-50 transition-colors">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-20 w-auto object-contain transition-all duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Become a Partner */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                        <Reveal>
                            <SectionLabel>Collaboration</SectionLabel>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8">
                                Join Our Network
                            </h2>
                            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12">
                                We are always looking to expand our ecosystem with innovative technology providers and local experts.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center px-12 py-5 bg-nasa-black text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all shadow-2xl"
                            >
                                Inquire about Partnership
                            </a>
                        </Reveal>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Partners;
