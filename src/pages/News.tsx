import React, { useEffect, useRef } from 'react';
import newsHero from '../assets/images/news-hero.jpg';

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

const News: React.FC = () => {
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

    const newsItems = [
        {
            date: "Apr 16, 2026",
            category: "Digital Security",
            title: "Companies Warned to Think Carefully Before Moving Security Systems to the Cloud",
            desc: "Genetec is urging businesses not to rush cloud adoption for physical security without first having clear rules and oversight in place."
        },
        {
            date: "Apr 15, 2026",
            category: "Payments",
            title: "New App Makes It Easier for Tourists to Pay Without Cash in Kenya",
            desc: "TouristTap, launched by Craft Silicon, lets travellers pay for goods and services across Kenya without needing physical cash or local currency."
        },
        {
            date: "Apr 15, 2026",
            category: "AI",
            title: "Intel and Origin Labs Team Up to Grow AI Skills Across Africa",
            desc: "Origin Research and Innovation Labs has signed a partnership with Intel to train more Africans in artificial intelligence and drive local tech innovation."
        },
        {
            date: "Apr 14, 2026",
            category: "Startups",
            title: "Kenyan Startup Zerobionic Picked for Qualcomm's Africa Mentorship Programme",
            desc: "Zerobionic becomes one of the few Kenyan companies selected for Qualcomm's Make in Africa programme, opening doors to global tech mentorship and funding."
        },
        {
            date: "Apr 14, 2026",
            category: "Fintech",
            title: "Africans Can Now Buy Crypto Using Mobile Money Through New Partnership",
            desc: "VALR and Onafriq have teamed up to let millions of Africans access digital assets directly from their mobile money wallets."
        },
        {
            date: "Apr 10, 2026",
            category: "Education",
            title: "Huawei Donates Internet Equipment to New Mukuru Primary School",
            desc: "Huawei has set up a fully equipped ICT classroom at Mukuru Primary School, giving students access to computers and broadband internet."
        },
        {
            date: "Apr 09, 2026",
            category: "Fintech",
            title: "Visa Celebrates Over 100 African Fintech Startups in Its Accelerator Programme",
            desc: "Visa's Africa Fintech Accelerator has now supported more than 100 startups across the continent, with 18 new companies showcased at GITEX Africa this year."
        }
    ];

    const upcomingEvents = [
        {
            date: "May 19, 2026",
            title: "East Africa ICT Summit 2026",
            location: "Nairobi, Kenya",
            type: "Keynote & Exhibition"
        },
        {
            date: "Jun 05, 2026",
            title: "Data Centre & Cloud Infrastructure Forum",
            location: "Kigali, Rwanda",
            type: "Panel & Workshop"
        }
    ];

    return (
        <>
            <style>{`
                .reveal-block { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .reveal-block.revealed { opacity: 1; transform: translateY(0); }
            `}</style>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-slate-900 py-24 relative overflow-hidden h-[50vh] flex items-center">
                    <div
                        ref={parallaxRef}
                        className="absolute inset-0 w-full h-[120%] will-change-transform"
                    >
                        <div
                            className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${newsHero})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nasa-black via-transparent to-transparent" />
                    </div>
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20 w-full text-left">
                        <div className="max-w-4xl">
                            <Reveal>
                                <SectionLabel>Insights & Updates</SectionLabel>
                                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                                    News & Events
                                </h1>
                                <p className="text-gray-300 text-xl font-medium max-w-2xl leading-relaxed">
                                    Stay updated with the latest tech news, company milestones, and upcoming industry events across East Africa.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-24">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            {/* Main News Feed */}
                            <div className="lg:col-span-8">
                                <Reveal>
                                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-12 border-l-4 border-primary pl-6">
                                        Latest News
                                    </h2>
                                </Reveal>
                                <div className="space-y-12">
                                    {newsItems.map((item, i) => (
                                        <Reveal key={i} delay={i * 100}>
                                            <article className="group cursor-pointer">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-xs font-black text-primary uppercase tracking-widest">{item.category}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors mb-4">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-500 leading-relaxed mb-6">
                                                    {item.desc}
                                                </p>
                                                <div className="w-12 h-[2px] bg-primary group-hover:w-24 transition-all"></div>
                                            </article>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar Events */}
                            <div className="lg:col-span-4">
                                <Reveal>
                                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-12 border-l-4 border-primary pl-6">
                                        Upcoming Events
                                    </h2>
                                </Reveal>
                                <div className="space-y-8">
                                    {upcomingEvents.map((event, i) => (
                                        <Reveal key={i} delay={150 + (i * 100)}>
                                            <div className="p-8 bg-gray-50 border border-gray-100 hover:border-primary transition-all group">
                                                <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">{event.date}</p>
                                                <h4 className="text-xl font-black text-slate-900 tracking-tight mb-4">{event.title}</h4>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                                        {event.location}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                        <span className="material-symbols-outlined text-sm">event</span>
                                                        {event.type}
                                                    </div>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default News;
