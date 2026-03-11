import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import servicesHero from '../assets/images/networking.jpg';

const Services: React.FC = () => {
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
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-black py-16 md:py-24 relative overflow-hidden h-[50vh] flex items-center">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
                >
                    <div
                        className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${servicesHero})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Services</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight md:leading-none mb-8">
                            Enterprise ICT<br className="hidden md:block" />Solutions & Managed Services
                        </h1>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="group p-10 bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                <div className="mb-8 flex items-center justify-between">
                                    <div className="w-16 h-16 bg-white flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors font-light">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {service.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-10">
                                    {service.features.slice(0, 4).map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                                            <span className="w-1.5 h-1.5 bg-primary opacity-40"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-8 border-t border-gray-100 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Learn more</span>
                                    <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">east</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section className="py-24 bg-[#1a3d25] text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">Ready to optimize your infrastructure?</h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join the numerous organizations across East Africa that rely on Anova Communications for mission-critical ICT excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:info@anova.co.ke"
                            className="inline-block bg-white text-[#1a3d25] font-black px-12 py-4 uppercase tracking-[0.2em] text-sm hover:shadow-lg hover:bg-gray-100 transition-all active:scale-95"
                        >
                            Contact an Expert
                        </a>
                        <a
                            href="tel:+254700000000"
                            className="inline-block border border-white/20 text-white font-black px-12 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white/5 transition-all"
                        >
                            Call Us Today
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
