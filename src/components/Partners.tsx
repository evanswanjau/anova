import React from 'react';
import ciscoLogo from '../assets/images/cisco.png';
import microsoftLogo from '../assets/images/microsoft.png';
import hpLogo from '../assets/images/hp.svg';
import lenovoLogo from '../assets/images/lenovo.png';
import safaricomLogo from '../assets/images/safaricom.png';
import liquidLogo from '../assets/images/liquid.png';
import oracleLogo from '../assets/images/oracle.jpg';

const Partners: React.FC = () => {
    const partners = [
        { name: "Cisco", logo: ciscoLogo },
        { name: "Microsoft", logo: microsoftLogo },
        { name: "HP", logo: hpLogo },
        { name: "Lenovo", logo: lenovoLogo },
        { name: "Oracle", logo: oracleLogo },
        { name: "Safaricom", logo: safaricomLogo },
        { name: "Liquid Intelligent", logo: liquidLogo }
    ];

    return (
        <section className="bg-white py-20 border-t border-gray-200">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <h3 className="text-xl font-bold mb-10 text-slate-900 border-l-4 border-primary pl-4">Strategic Global Partners</h3>
                <div className="flex flex-wrap justify-between items-center gap-12 grayscale opacity-50 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="h-12 w-auto flex items-center justify-center filter grayscale transition-all duration-500 hover:grayscale-0">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-full w-auto object-contain max-w-[140px]"
                            />
                        </div>
                    ))}
                </div>
                <div className="text-right mt-12">
                    <a className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-primary flex items-center justify-end gap-2 transition-all" href="#">
                        View Partner Ecosystem <span className="material-symbols-outlined text-base text-primary">add_circle</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Partners;
