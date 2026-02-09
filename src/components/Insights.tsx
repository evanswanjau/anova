import React from 'react';

const Insights: React.FC = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900">Insights</h2>
                    <a className="text-sm font-bold uppercase tracking-widest text-primary hover:text-black flex items-center gap-1" href="#">
                        View More Insights <span className="material-symbols-outlined text-base">add_circle</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
                    <div className="lg:col-span-2 row-span-2 relative group overflow-hidden bg-gray-100 h-[500px]">
                        <img
                            alt="Security Insight"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDGZUnfUDeuWLRvPPxhE7CGoGd0G2M2YVP9H6N9lYybp9yYS1_hMmLUydHwizRvo4fygtP5tyGBj8M7V144BmWGD0gcZ5_vHeonCDEVhn510MzocWmCIYMcc2lesTk30l7ng2Mvqu_W4-CeOzZKJs9II8gI7x8bVie77G_71QWf7_kL6cBqVxHmrBOOoaEM5BBIDaM_VTa8lG5JZZjHBPF_2iU5VznuTh76xlSZahPEvIXdN_BNUo9WLZjt3s_F3l1zwfalu_OP50"
                        />
                        <div className="absolute inset-0 gradient-overlay-b"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1">Architectural Review</span>
                                <span className="text-gray-300 text-xs font-mono uppercase">Reference 402</span>
                            </div>
                            <h3 className="text-white text-3xl font-bold leading-tight mb-2 group-hover:underline decoration-1 underline-offset-8">
                                Advanced Surveillance Integration for National Banks
                            </h3>
                            <p className="text-gray-200 text-sm font-medium line-clamp-2">
                                System-level implementation of centralized monitoring across 45 nodes.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-2 h-[242px] relative group overflow-hidden bg-gray-100">
                        <img
                            alt="Connectivity"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsePeuTnshFDy-IZq8M-xzJvkKrSzo-kS69lrD21dxhSzdjMPAxES_D0hmZ5Pea1I9EGGL3KNJdWTgUbN7cb-z-gQfkZO_huuuNVxFzYkgJqY9EETTFjYrbQ4E4Pd4eWvV5Fm9TnZq_OPgArUqaDdJOaivGclI7TrIbKfdWxiivIAuIlIXwcSt-kZsYmipjuoA_rtloAJTEyTfbCjt2yUt2Ttw_pct5wtBsfPRiw6TR8fl1ySu3EjzAdlC_ssxyOIX3BOI6jRxj3A"
                        />
                        <div className="absolute inset-0 gradient-overlay-b"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-gray-400"></span> Protocol Analysis
                                </span>
                                <span className="text-gray-300 text-[10px] font-mono uppercase">v.2.04</span>
                            </div>
                            <h3 className="text-white text-xl font-bold leading-tight group-hover:underline decoration-1 underline-offset-8">
                                High-Bandwidth Satellite Links Deployed
                            </h3>
                        </div>
                    </div>
                    <div className="h-[242px] relative group overflow-hidden bg-gray-100">
                        <img
                            alt="Support"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMyIDTR2Ba4XEWW6IXowRZu4eFVeNZpM2GHWR-R0xJupfC-KSrkF2war6nvrp0Sb27drmKrBiHC4pAqY62viQzc8v_TuRXL7cPeIvwmtOVal0TjIF1yAsAQbg1Zio_SW8Rlkm892gC7QEX0-juktYXI53e8JlcuI0CjqcCz-LSBKb5ivwLNAYpengXfh1Ugg2CUum4vTCmSgITzVS30-bEcpBue9dBwc-FypjYI7ZohiHZ6HjymNbA9KhjDX4DsD18BDbs5MPzg-Q"
                        />
                        <div className="absolute inset-0 gradient-overlay-b"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-white text-lg font-bold leading-tight group-hover:underline decoration-1 underline-offset-8">
                                Systems Performance: Q3 Benchmark Report
                            </h3>
                        </div>
                    </div>
                    <div className="h-[242px] relative group overflow-hidden bg-gray-100">
                        <img
                            alt="Hardware"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLyXwgHx8ALaVbRg1BQxoYtmHC0V-uuQ98HHG0m5_Lb-rotf563QL8qdo2FNtIIjPVF5C6_ug94wlIYf44HNlsO0GFF2E_ginK14RgIROmrAmzkj62On9FgHepLY02hVz2lqp0kuWdBWKuCNRWgEV4Jq_Zz_tKz5E8RIxyV3JXZ-bdpp0rhhF07iCp0qz3X_jJKd4yx57cLr1kEJTlWhyKzHNgx9ta0qhReNrI4WqKt866D0SAT-x8jMX_ZoX9XBcDKLb0ZmtvWIg"
                        />
                        <div className="absolute inset-0 gradient-overlay-b"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-white text-lg font-bold leading-tight group-hover:underline decoration-1 underline-offset-8">
                                Enterprise Hardware Implementation Standards
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-gray-200 pt-8">
                    <div className="flex gap-4 items-start group cursor-pointer">
                        <div className="size-20 bg-gray-100 shrink-0 overflow-hidden">
                            <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo0axF4yrPx7ymw10U8k7YhIBVogawxP7kiOAd1DdUe0GczR1lWw2yCsQAAzvjP-8CCXYM1YnH_t63fQp5C9qEzAw8kIyKxHGJT8pDla4DESHb7WaT1fzmZYuxPu6tjgXsC-LMUkJfe7HHgwYPKMDJP9CC7vU-noBRRv8p1M8dTcYj8PrZOKTg4xNitbDkSOwtfLnxfHWIejuszffHdJVfwVJwofRuDaYwAHBEej-hDjrzxvJ3fyMOE3nHI4ct-kWmay8Dw7SO3-g"
                                alt="Cisco Partnership"
                            />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Strategic Integration</span>
                            <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">Partnership with Cisco Meraki Expansion</h4>
                            <span className="text-[10px] text-gray-400 mt-2 block flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">schedule</span> 2 hrs ago</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start group cursor-pointer">
                        <div className="size-20 bg-gray-100 shrink-0 overflow-hidden">
                            <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDqv3QrIdnld39AJgttqgB-gdnVXtbCfQK8sLyxmK4Q3TxSsxCq9yFhcPJPE7g8U0EpBDzc7mGqdcQPtyfS6reeURmsCOjRKa2mh3y33rmn6XmYOVq6uOPPUPXeaKj_MNIlhyGELcHvUNID_Em0S3MEiPMQP9fibTgEQYxxHXDnraasE20zBgOsrFZOrZJNjq8_oc7MVKA9ByYSy4hSp1slsc2nTuK2W7b6Z9KvmggN20dWZr-99Ss1f8t1ORrGR5cXubHAqoxygI"
                                alt="Biometric Systems"
                            />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Systems Engineering</span>
                            <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">Advanced Biometric Access Control Protocols</h4>
                            <span className="text-[10px] text-gray-400 mt-2 block flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">schedule</span> 1 day ago</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start group cursor-pointer">
                        <div className="size-20 bg-gray-100 shrink-0 overflow-hidden">
                            <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEx4GERt2xhrxMXpW4HsZ9WiqWK0Ij-VZnA3gUhgJUPfIJTPJRky4pTqNbIcBZMSDv6lCLLl90dJ_inP4mFQXAhnKAn9KkqNc4QFzWcFMe0Z2SCO07dgc_F1rCxbDz8fEmgzVLJT4l40bZss3KlyAVz7jeRa8eLrtmeR9m0Re2WHNKlUaWCmV79jNl8R_nOh-_6vg71Fb2jzdLMwYfE34hehWVdpod3OFm9LzwG6cDNsiPnh8AMLBxjwAF6Ylui8u_Eyh8g6b6nYA"
                                alt="Data Center"
                            />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Technical Brief</span>
                            <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">The Nexus of Data Center Thermal Dynamics</h4>
                            <span className="text-[10px] text-gray-400 mt-2 block flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">schedule</span> 3 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
