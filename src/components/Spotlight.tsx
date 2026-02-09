import React from 'react';

const Spotlight: React.FC = () => {
    return (
        <section className="bg-black py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <img
                    className="w-full h-full object-cover blur-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxAf0dVNDPcDS4SLBh29V-1SWmG6Va9B70hlpmp1hCttDdVD2m7SO1xDMgb8RCwH39cZxqLYRAoabFJILRmOunis6b6YzbYkvVdf6a3T_L2SjgfiJc1YySKkW7KXR2UcYxK_CwxXpLMQseUDWd-ogBa68CUtYNxuqngo2oOEP6OiAbFMcuRhqLCp0e6ZhJdCsm1DgroEcXcZhSQ2Oa3lwDLC2inw3XZEuFHdVx7kzOFbnfBX-Rf9cFPXJHkBqtw6K076zirXNsCiE"
                />
            </div>
            <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl font-bold text-white mb-6">Project Spotlight</h2>
                    <p className="text-xl text-gray-300 font-medium mb-8">
                        A new standard for remote connectivity — Anova engineers deploy a fully redundant fiber network for East Africa's largest logistics hub.
                    </p>
                    <a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-white transition-colors" href="#">
                        View Case Study <span className="bg-primary text-white rounded-none p-0.5"><span className="material-symbols-outlined text-sm block">arrow_forward</span></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
