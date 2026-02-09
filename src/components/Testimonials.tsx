import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Testimonials: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
    }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const testimonials = [
        {
            quote: "Anova's precision in network deployment solved our connectivity issues in 48 hours. Their team is truly enterprise-grade.",
            author: "David M.",
            role: "CTO, Rift Valley Logistics",
            category: "Infrastructure"
        },
        {
            quote: "The hardware supply chain they provide is unmatched. Zero lead-time delays on high-performance PC orders.",
            author: "Sarah J.",
            role: "Infrastructure Lead, TechHub",
            category: "Hardware Supply"
        },
        {
            quote: "As a banking partner, their focus on risk-free integration and 24/7 technical support has been critical to our digital transformation.",
            author: "Michael O.",
            role: "Head of IT, Financial Group",
            category: "Banking & Finance"
        },
        {
            quote: "Professionalism and expertise in telecommunications solutions that actually work for our business's long-term goals.",
            author: "Linda W.",
            role: "Operations Manager, Global Comms",
            category: "Telecommunications"
        },
        {
            quote: "Their well-trained consultants work closely with us to plan and implement custom technology that continues working into the future.",
            author: "James K.",
            role: "Director, Public Sector Agency",
            category: "Government"
        },
        {
            quote: "Seamless communications infrastructure is the backbone of our operations. Anova delivered a unified platform that exceeded our expectations.",
            author: "Robert T.",
            role: "Director, NetSystems",
            category: "Communications"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Large Decorative Text Background */}
            <div className="absolute top-1/2 left-0 w-full text-[140px] font-black text-slate-50 leading-none select-none -translate-y-1/2 pointer-events-none uppercase tracking-tighter transition-opacity duration-1000">
                Anova Communications
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs block mb-4">Success Stories</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                            Trusted by the<br />Digital Frontline
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-sm">
                            Real experiences from organizations where technology uptime isn't just a metric—it's their lifeline.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={scrollPrev}
                                className="size-14 rounded-none border border-slate-200 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-sm font-bold">west</span>
                            </button>
                            <button
                                onClick={scrollNext}
                                className="size-14 rounded-none bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-sm font-bold">east</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-7 embla overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex">
                            {testimonials.map((t, index) => (
                                <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_80%] px-4">
                                    <div className="p-12 border border-slate-100 bg-white shadow-2xl shadow-slate-200 transition-all duration-500 cursor-default h-full flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-10">
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map(s => (
                                                        <span key={s} className="material-symbols-outlined text-primary text-sm fill-current">star</span>
                                                    ))}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 border-l border-slate-200 pl-4">
                                                    {t.category}
                                                </span>
                                            </div>
                                            <p className="text-2xl font-bold text-slate-800 leading-relaxed mb-10 italic relative">
                                                <span className="absolute -top-4 -left-6 text-6xl text-primary/10 font-serif">"</span>
                                                {t.quote}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                            <div className="size-14 bg-slate-900 flex items-center justify-center text-white font-black text-sm">
                                                {t.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">{t.author}</h4>
                                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
