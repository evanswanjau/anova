import React from 'react';
import serverImage from '../assets/images/126817.jpg';

const ServiceHighlight: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white shadow-xl">
                    <div className="p-12 flex flex-col justify-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Highlight</span>
                        <h2 className="text-3xl font-bold mb-4">Precision Server Deployment</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Experience unparalleled reliability with our custom-configured server solutions. From racking to cooling, we handle every aspect of your data center infrastructure with military-grade precision.
                        </p>
                        <a className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all" href="#">
                            Browse Image Archive <span className="material-symbols-outlined text-sm bg-primary text-white rounded-none">add</span>
                        </a>
                    </div>
                    <div className="h-[400px] md:h-auto bg-black relative">
                        <img
                            className="absolute inset-0 w-full h-full object-cover opacity-100"
                            src={serverImage}
                        />
                        <button className="absolute top-4 right-4 bg-white/20 p-2 text-white hover:bg-white/40 transition">
                            <span className="material-symbols-outlined">download</span>
                        </button>
                        <button className="absolute bottom-4 right-4 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:text-primary">
                            View Image <span className="material-symbols-outlined text-sm bg-primary rounded-none">add</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHighlight;
