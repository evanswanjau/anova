import React, { useEffect, useState, useRef } from 'react';

const Metrics: React.FC = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const stats = [
        { target: 99.9, label: "Network Uptime %", suffix: "%" },
        { target: 15, label: "Response Time", suffix: "m" },
        { target: 200, label: "Projects Completed", suffix: "+" },
        { target: 500, label: "Infrastructure Assets", suffix: "+" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const durations = [2000, 1500, 2500, 2000];
        const frameDuration = 1000 / 60;

        const intervals = stats.map((stat, index) => {
            const totalFrames = durations[index] / frameDuration;
            let frame = 0;

            return setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const currentCount = Math.min(stat.target, stat.target * progress);

                setCounts(prev => {
                    const next = [...prev];
                    next[index] = currentCount;
                    return next;
                });

                if (frame === totalFrames) clearInterval(intervals[index]);
            }, frameDuration);
        });

        return () => intervals.forEach(clearInterval);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-2 tabular-nums">
                                {index === 0 ? counts[index].toFixed(1) : Math.floor(counts[index])}
                                <span className="text-primary">{stat.suffix}</span>
                            </div>
                            <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1 group-hover:text-primary transition-colors">
                                {stat.label}
                            </div>
                            <div className="h-0.5 w-8 bg-slate-100 mt-4 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
