import React from 'react';

const Process: React.FC = () => {
    const steps = [
        {
            id: "01",
            title: "Plan",
            subtitle: "Strategic Consultation",
            desc: "Expert IT consultants work closely with you to design a custom technology infrastructure tailored to your unique requirements.",
            icon: "event_note"
        },
        {
            id: "02",
            title: "Implement",
            subtitle: "Professional Deployment",
            desc: "Integration of proven, state-of-the-art technologies including network hardware and enterprise computing with zero risk.",
            icon: "settings_suggest"
        },
        {
            id: "03",
            title: "Support",
            subtitle: "Managed Excellence",
            desc: "Continuous technical support and daily maintenance of IT infrastructure to tackle your competitive business environment.",
            icon: "support_agent"
        }
    ];

    return (
        <section className="py-24 bg-zinc-50 overflow-hidden border-b border-slate-200">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16 mb-24">
                    <div className="max-w-2xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs block mb-4">Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                            Plan. Implement.<br />Support.
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                        Our workflow ensures a technology infrastructure that works today and continues working for your business into the future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative flex flex-col">
                            {/* Background Number */}
                            <div className="absolute -bottom-16 -right-4 text-[240px] font-black text-slate-200/40 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700 z-0">
                                {index + 1}
                            </div>

                            {/* Step Header */}
                            <div className="flex items-center gap-6 mb-8 relative z-10">
                                <div className="size-16 bg-white border border-slate-200 flex items-center justify-center relative group-hover:bg-slate-950 group-hover:border-slate-950 transition-all duration-500 shadow-xl shadow-slate-200/50">
                                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">
                                        {step.icon}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase leading-none mb-1">
                                        {step.title}
                                    </h3>
                                    <span className="text-primary font-bold text-[10px] uppercase tracking-widest block">{step.subtitle}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium relative z-10">
                                {step.desc}
                            </p>

                            {/* Accent Line */}
                            <div className="h-1 w-12 bg-slate-200 group-hover:w-full group-hover:bg-primary transition-all duration-700 relative z-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
