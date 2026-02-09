import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import outsourcing from '../assets/images/outsourcing.jpg';
import support from '../assets/images/support-thin.jpg';
import networking from '../assets/images/networking.jpg';
import hardware from '../assets/images/hardware-and-software.jpg';
import cctv from '../assets/images/cctv-thin.jpg';
import accessControl from '../assets/images/access-control-thin.jpg';
import connectivity from '../assets/images/connectivity.jpg';
import telecom from '../assets/images/123163.jpg';

const Sectors: React.FC = () => {
    const sectors = [
        "Banking & Finance",
        "Telecommunications",
        "Government",
        "Communications",
        "Higher Education",
        "Manufacturing",
        "NGO Sector",
        "Mining & Energy",
        "Healthcare Systems",
        "Logistics & Transport",
        "Hospitality",
        "National Security"
    ];

    return (
        <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-baseline gap-12">
                <div className="shrink-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-2">Market Focus</span>
                    <h4 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">Industries<br />We Serve</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                    {sectors.map((sector, index) => (
                        <div key={index} className="px-6 py-3 bg-white border border-slate-100 text-xs font-black uppercase tracking-widest text-primary hover:border-primary hover:bg-primary hover:text-white transition-all cursor-default shadow-sm hover:shadow-lg hover:shadow-primary/5">
                            {sector}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Solutions: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
    }, [Autoplay({ delay: 5000, stopOnInteraction: false, playOnInit: true })]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const solutions = [
        { id: "01", category: "Managed Outsourcing", title: "ICT Outsourcing", alt: "ICT Outsourcing", img: outsourcing },
        { id: "02", category: "Technical Support", title: "ICT Support & Maintenance", alt: "ICT Support", img: support },
        { id: "03", category: "Infrastructure", title: "Networking Solutions", alt: "Networking Solutions", img: networking },
        { id: "04", category: "Supply Chain", title: "Hardware & Software Supply", alt: "Hardware Supply", img: hardware },
        { id: "05", category: "Communications", title: "Telecommunications Solutions", alt: "Telecoms", img: telecom },
        { id: "06", category: "Security", title: "CCTV & Monitoring", alt: "CCTV", img: cctv },
        { id: "07", category: "Access Systems", title: "Access Control & Time Attendance", alt: "Access Control", img: accessControl },
        { id: "08", category: "Connectivity", title: "ICT Connectivity", alt: "Connectivity", img: connectivity }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative border-b border-slate-200">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Products & Services</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
                            Technology Solutions<br />
                            <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px #000000a0' }}>Risk-Free Options</span>
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl font-medium leading-relaxed">
                            Implementing and integrating proven, state-of-the-art technologies to achieve your unique business objectives.
                        </p>
                    </div>

                    {/* Navigation & Progress Area */}
                    <div className="flex flex-col items-end gap-6">
                        <div className="flex gap-2">
                            <button
                                onClick={() => emblaApi?.scrollPrev()}
                                className="group size-14 border border-slate-200 flex items-center justify-center hover:bg-black transition-all duration-300 active:scale-95"
                            >
                                <span className="material-symbols-outlined text-slate-900 group-hover:text-white transition-colors">west</span>
                            </button>
                            <button
                                onClick={() => emblaApi?.scrollNext()}
                                className="group size-14 bg-primary flex items-center justify-center hover:bg-primary/80 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-white">east</span>
                            </button>
                        </div>

                        {/* Custom Pagination Bar */}
                        <div className="flex gap-2 h-[2px] w-64 bg-slate-200">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`flex-1 transition-all duration-500 ${index === selectedIndex ? 'bg-primary' : 'bg-transparent hover:bg-slate-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Embla Wrapper */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex -ml-4">
                        {solutions.map((item, index) => (
                            <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_24%] pl-4 py-4">
                                <div className="group relative h-[650px] bg-white overflow-hidden cursor-pointer shadow-xl shadow-slate-200">
                                    {/* ID Tag */}
                                    <div className="absolute top-8 left-8 z-30 flex items-baseline gap-1">
                                        <span className="text-primary font-black text-xs leading-none">{item.id}</span>
                                        <span className="h-[1px] w-4 bg-primary/40"></span>
                                        <span className="text-primary font-bold text-[10px] uppercase tracking-widest">{item.category}</span>
                                    </div>

                                    {/* Main Image with Zoom Effect */}
                                    <img
                                        alt={item.alt}
                                        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-110"
                                        src={item.img}
                                    />

                                    {/* Gradient & Overlay Layers */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10"></div>

                                    {/* Content Container */}
                                    <div className="absolute inset-x-0 bottom-0 p-10 z-20">
                                        <div className="flex flex-col gap-6">
                                            <div className="overflow-hidden">
                                                <h3 className="text-white text-3xl font-black leading-[1.1] tracking-tighter group-hover:-translate-y-2 transition-transform duration-500">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Interactive Section - Reveal on Hover */}
                                            <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                                                    Providing full solutions for your individual needs to advance your business’s technology environment.
                                                </p>
                                                <div className="flex items-center justify-between group/btn">
                                                    <span className="text-white text-xs font-black uppercase tracking-widest border-b border-primary/40 pb-1 group-hover/btn:border-primary group-hover/btn:text-primary transition-all">
                                                        Learn more
                                                    </span>
                                                    <div className="size-10 bg-white/10 group-hover/btn:bg-primary flex items-center justify-center transition-colors">
                                                        <span className="material-symbols-outlined text-white text-sm">north_east</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Accent Line */}
                                            <div className="h-[2px] w-8 bg-white/20 group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-slate-100 border-l-transparent group-hover:border-t-primary transition-colors"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sub-section: Sectors */}
                <Sectors />
            </div>
        </section>
    );
};

export default Solutions;
