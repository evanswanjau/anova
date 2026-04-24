import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import servicesData from '../data/services.json';

interface Capability {
    title: string;
    description: string;
    icon: string;
    image: string;
}

interface Stat {
    label: string;
    value: string;
    percentage: number;
}

interface Subservice {
    title: string;
    description: string;
}

interface FAQ {
    question: string;
    answer: string;
}

interface Insight {
    title: string;
    time: string;
    category: string;
}

interface DeepDiveSection {
    title: string;
    content: string;
    subpoints?: string[];
    transition?: string;
}

interface Service {
    id: string;
    title: string;
    category: string;
    description: string;
    overview: string;
    icon: string;
    features: string[];
    capabilities?: Capability[];
    stats?: Stat[];
    subservices?: Subservice[];
    faqs?: FAQ[];
    specializedInsights?: Insight[];
    deepDive?: DeepDiveSection[];
}

const ServiceDetails: React.FC = () => {
    useDocumentTitle("Service Details");
    const { id } = useParams<{ id: string }>();
    const [activeFaq, setActiveFaq] = useState<number | null>(0);
    const service = (servicesData as Service[]).find(s => s.id === id);

    // Get 3 other services for the bottom hero bar
    const otherServices = (servicesData as Service[]).filter(s => s.id !== id).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen font-body antialiased text-slate-900 dark:text-slate-100">
            {/* Nav Header - Breadcrumb style */}
            <div className="bg-nasa-black/5 border-b border-gray-200 dark:border-white/10 py-4 absolute w-full z-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                        <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                        <span className="text-white">{service.title}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <header className="relative h-[85vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt={service.title}
                        className="w-full h-full object-cover grayscale-[0.2]"
                        src={service.capabilities?.[0]?.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nasa-black via-nasa-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-24 md:pb-32">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="inline-block w-3 h-[2px] bg-primary"></span>
                            <span className="text-primary uppercase tracking-widest text-[10px] font-bold">{service.category}</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter">
                            {service.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
                            {service.overview}
                        </p>
                        <a
                            href={`mailto:info@anova.co.ke?subject=Inquiry: ${service.title}`}
                            className="inline-flex items-center px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-nasa-black transition-all group"
                        >
                            Schedule Consultation
                            <span className="material-symbols-outlined ml-3 group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Hero Bar - Related Services */}
                <div className="absolute bottom-0 w-full bg-nasa-black/80 backdrop-blur-md border-t border-white/10 hidden md:block z-20">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-3 divide-x divide-white/10">
                            {otherServices.map((other) => (
                                <Link
                                    key={other.id}
                                    to={`/services/${other.id}`}
                                    className="group py-6 px-8 flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <div>
                                        <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 font-black">{other.category}</p>
                                        <h3 className="text-white font-display font-bold text-sm tracking-wide">{other.title}</h3>
                                    </div>
                                    <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform text-xl">north_east</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Content Area */}
                    <div className="lg:w-3/4">
                        {/* Deep Dive Long-form Content - Moved before Core Capabilities */}
                        {service.deepDive && service.deepDive.length > 0 && (
                            <div className="space-y-24 mb-32">
                                <div className="max-w-4xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="h-[2px] w-12 bg-primary"></span>
                                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Expert Insights</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-12 tracking-tight leading-none">
                                        Our Strategic <span className="text-slate-400">Approach</span>
                                    </h2>
                                </div>

                                {service.deepDive.map((section, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                                            <div className="md:w-1/3">
                                                <div className="sticky top-32">
                                                    <span className="text-[10px] font-black text-primary/40 mb-4 block tracking-[0.2em]">SECTION 0{idx + 1}</span>
                                                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                                                        {section.title}
                                                    </h3>
                                                    <div className="w-12 h-[1px] bg-primary/20 group-hover:w-full transition-all duration-700"></div>
                                                </div>
                                            </div>
                                            <div className="md:w-2/3">
                                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12 whitespace-pre-wrap font-light">
                                                        {section.content}
                                                    </p>
                                                    {section.subpoints && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-800/20 p-10 border border-slate-100 dark:border-white/5">
                                                            {section.subpoints.map((point, pIdx) => (
                                                                <div key={pIdx} className="flex gap-4 items-start pb-6 border-b border-slate-200 dark:border-white/5 last:border-0 md:even:border-l md:even:pl-8 md:even:border-b-0 md:odd:border-b-0">
                                                                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                                                                    <span className="text-sm font-bold text-slate-900 dark:text-slate-300 leading-snug">
                                                                        {point}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {section.transition && (
                                                        <div className="mt-12 flex items-center gap-6 group/trans">
                                                            <div className="h-[1px] w-12 bg-primary/30 group-hover/trans:w-20 transition-all duration-500"></div>
                                                            <p className="text-xs font-black uppercase tracking-widest text-primary italic">
                                                                {section.transition}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-between items-end mb-12 border-b border-gray-100 dark:border-white/5 pb-8 pt-12 border-t mt-32">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Other Services</h2>
                        </div>

                        {/* Combined Capability & Subservice Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                            {[
                                ...(service.capabilities || []),
                                ...(service.subservices || []).map(sub => ({
                                    ...sub,
                                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop' // Fallback tech/network image
                                }))
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-transparent overflow-hidden flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale-[0.2]"
                                            src={item.image}
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="w-8 h-[1px] bg-primary/40"></span>
                                            <p className="text-[10px] text-primary/60 font-black uppercase tracking-[0.3em]">
                                                {service.title}
                                            </p>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="pt-6 border-t border-gray-200 dark:border-white/10 mt-auto text-right">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                                                Anova Solutions
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ Section */}
                        {service.faqs && service.faqs.length > 0 && (
                            <div className="mb-24 pt-24 border-t border-gray-100 dark:border-white/5">
                                <div className="flex items-center gap-4 mb-12">
                                    <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Service FAQs</h2>
                                    <span className="h-[1px] flex-1 bg-gray-100 dark:bg-white/5"></span>
                                </div>
                                <div className="space-y-4">
                                    {service.faqs.map((faq, idx) => {
                                        const isOpen = activeFaq === idx;
                                        return (
                                            <div key={idx} className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 overflow-hidden transition-all">
                                                <button
                                                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                                                    className="w-full flex items-center justify-between p-6 cursor-pointer text-left focus:outline-none"
                                                >
                                                    <h4 className={`text-base font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-900 dark:text-white hover:text-primary'}`}>
                                                        {faq.question}
                                                    </h4>
                                                    <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                        expand_more
                                                    </span>
                                                </button>
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                                >
                                                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-gray-50 dark:border-white/5 pt-4">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Consulting Banner */}
                        <div className="relative bg-nasa-black overflow-hidden mb-24">
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,109,65,0.4),transparent_70%)]"></div>
                            </div>
                            <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                                <div className="max-w-xl">
                                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-none italic">Technical Advisory</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                                        Transform your legacy infrastructure today. Our senior architects provide deep-dive audits and strategic roadmaps for digital maturity.
                                    </p>
                                </div>
                                <Link
                                    to="/contact"
                                    className="whitespace-nowrap px-10 py-5 border-[1px] border-primary text-primary font-black uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-white transition-all shadow-2xl"
                                >
                                    Book Technical Audit
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:w-1/4 space-y-16">
                        {/* Related Insights */}
                        <div>
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-white/5">
                                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">Recent Insights</h3>
                            </div>
                            <div className="space-y-10">
                                {service.specializedInsights?.map((insight, i) => (
                                    <article key={i} className="group cursor-pointer">
                                        <div className="flex items-center gap-3 text-[9px] font-black text-primary mb-3 tracking-widest uppercase">
                                            <span>{insight.category}</span>
                                            <span className="w-1 h-1 bg-slate-300 dark:bg-white/20"></span>
                                            <span className="text-slate-400">{insight.time}</span>
                                        </div>
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors tracking-tight">
                                            {insight.title}
                                        </h4>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Service Levels Bar Section */}
                        <div className="bg-nasa-black p-8 text-white border-t-8 border-primary shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
                            <div className="flex items-center gap-3 mb-10">
                                <span className="w-8 h-[1px] bg-primary/40"></span>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">Technical SLA</h3>
                            </div>
                            <div className="space-y-10">
                                {service.stats?.map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[10px] font-black mb-3 tracking-widest uppercase">
                                            <span className="text-white/40">{stat.label}</span>
                                            <span className="text-primary">{stat.value}</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-[2px]">
                                            <div
                                                className="bg-primary h-full transition-all duration-1000 shadow-[0_0_10px_rgba(47,109,65,0.5)]"
                                                style={{ width: `${stat.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-12 bg-white/5 border border-white/10 text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary transition-all active:scale-[0.98]">
                                Global Performance Report
                            </button>
                        </div>

                        {/* Request a Callback Form */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 border border-gray-100 dark:border-white/5 shadow-xl">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-slate-900 dark:text-white">Request a Callback</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <select className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                                        <option>Immediate Consultation</option>
                                        <option>Technical Audit Request</option>
                                        <option>Pricing Inquiry</option>
                                    </select>
                                </div>
                                <button className="w-full bg-primary text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-nasa-black transition-all">
                                    Submit Request
                                </button>
                                <p className="text-[9px] text-slate-400 text-center uppercase tracking-widest mt-4">Typical response: &lt; 15 mins</p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            {/* Tech Stack Banner */}
            <section className="bg-slate-50 dark:bg-slate-800/30 py-24 border-t border-gray-100 dark:border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <span className="w-12 h-[1px] bg-slate-300 dark:bg-white/10"></span>
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 italic">Ecosystem Partners</h2>
                        <span className="w-12 h-[1px] bg-slate-300 dark:bg-white/10"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {['CISCO', 'HP', 'MICROSOFT', 'LENOVO', 'ORACLE', 'SAFARICOM'].map((partner) => (
                            <div key={partner} className="h-12 flex items-center justify-center font-display font-black text-xl text-slate-400 dark:text-white/20">
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;
