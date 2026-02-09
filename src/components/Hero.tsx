import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';

const Hero: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 30,
    }, [Autoplay({ delay: 5000, stopOnInteraction: false, playOnInit: true })]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const slides = [
        {
            title: "Your ICT Partner",
            highlight: "of Choice",
            subtitle: "Redefining the standard for professional ICT services and technical support across East Africa's most critical sectors.",
            image: slider1,
            cta: "View Our Services",
            vision: "Professional Services"
        },
        {
            title: "Enterprise Hardware",
            highlight: "Sourcing & Supply",
            subtitle: "State-of-the-art hardware procurement and supply chain solutions tailored for seamless enterprise scalability and performance.",
            image: slider2,
            cta: "Explore Hardware",
            vision: "Hardware Supply"
        },
        {
            title: "Unified Networking",
            highlight: "Installation & Support",
            subtitle: "Professional network installation, end-to-end ICT implementation, and expert technical support for resilient business connectivity.",
            image: slider3,
            cta: "View Solutions",
            vision: "Network Setup"
        }
    ];

    return (
        <main className="relative w-full h-[75vh] min-h-[600px] bg-black group/hero overflow-hidden">
            <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container h-full flex">
                    {slides.map((slide, index) => (
                        <div key={index} className="embla__slide flex-[0_0_100%] h-full relative overflow-hidden">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    alt={slide.title}
                                    className={`w-full h-full object-cover opacity-60 transition-transform duration-[10s] ${selectedIndex === index ? 'scale-110' : 'scale-100'}`}
                                    src={slide.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 max-w-[1440px] mx-auto z-10">
                                <div className="max-w-4xl">
                                    <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                        <span className="h-[2px] w-12 bg-primary"></span>
                                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">{slide.vision}</span>
                                    </div>

                                    <h1 className={`text-white text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 transition-all duration-1000 delay-200 ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                        {slide.title}<br />
                                        <span className="text-transparent border-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>{slide.highlight}</span>
                                    </h1>

                                    <p className={`text-gray-300 text-lg lg:text-xl font-medium max-w-2xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                        {slide.subtitle}
                                    </p>

                                    <div className={`flex flex-wrap gap-6 transition-all duration-1000 delay-500 ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                        <a className="bg-primary hover:bg-white hover:text-primary text-white text-sm font-black uppercase tracking-widest px-10 py-5 transition-all duration-300 shadow-xl shadow-primary/20 group/btn flex items-center gap-3" href="#">
                                            {slide.cta}
                                            <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">east</span>
                                        </a>
                                        <a className="border border-white/20 hover:border-white text-white text-sm font-black uppercase tracking-widest px-10 py-5 transition-all duration-300 backdrop-blur-sm" href="#">
                                            Consult an Expert
                                        </a>
                                    </div>

                                    {/* Slider Navigation Dots - Now under buttons */}
                                    <div className={`mt-12 flex gap-3 transition-all duration-1000 delay-700 ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                        {slides.map((_, dotIndex) => (
                                            <button
                                                key={dotIndex}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    emblaApi?.scrollTo(dotIndex);
                                                }}
                                                className={`h-1 transition-all duration-500 ${dotIndex === selectedIndex ? 'bg-primary w-12' : 'bg-white/20 w-6 hover:bg-white/40'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar: Single Mission Sentence */}
            <div className="absolute bottom-0 w-full border-t border-white/5 bg-black/40 backdrop-blur-xl py-8 z-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-start text-left">
                    <p className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.4em] leading-relaxed">
                        Precision <span className="text-gray-400">Infrastructure</span> &nbsp; • &nbsp; Expert <span className="text-gray-400">Hardware</span> Supply &nbsp; • &nbsp; 15+ Years of <span className="text-gray-500">Excellence</span>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Hero;
