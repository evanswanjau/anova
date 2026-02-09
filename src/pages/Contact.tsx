import React, { useEffect, useRef } from 'react';
import contactHero from '../assets/images/contact.jpg';

const Contact: React.FC = () => {
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

    const faqs = [
        {
            question: "What industries do you specialize in?",
            answer: "Anova specializes in enterprise-scale infrastructure for Banking & Finance, Telecommunications, Government, Healthcare, and Logistics across East Africa."
        },
        {
            question: "How quickly can you deploy a technical team for emergency support?",
            answer: "For our contracted clients, we guarantee an on-site presence within 4 to 8 hours depending on the service level agreement and physical location."
        },
        {
            question: "Do you offer custom hardware configurations?",
            answer: "Yes. Our procurement and engineering teams work together to provide bespoke server and networking hardware tailored to your specific performance and redundancy requirements."
        },
        {
            question: "Where are your main service hubs located?",
            answer: "Our primary technical hub is located in Nairobi, Kenya, serving as the central point for our regional operations across the East African corridor."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-black py-16 md:py-24 relative overflow-hidden h-[50vh] flex items-center">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
                >
                    <div
                        className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${contactHero})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Get In Touch</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight md:leading-none mb-8">
                            Connect with the<br className="hidden md:block" />Best in ICT
                        </h1>
                    </div>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-16 md:py-24 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Inquiry Form */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-8 border-l-4 border-primary pl-4">
                                Customer Inquiry
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="e.g. John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="e.g. Doe" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Work Email</label>
                                        <input type="email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="john@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone Number</label>
                                        <input type="tel" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="0712345678" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Subject</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm appearance-none">
                                        <option>Interested in our Services</option>
                                        <option>Request a Callback</option>
                                        <option>Strategic Partnership</option>
                                        <option>Technical Support</option>
                                        <option>Project Inquiry</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Project Description</label>
                                    <textarea rows={6} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="Tell us about your technical requirements..."></textarea>
                                </div>
                                <button className="w-full bg-primary text-white font-black py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
                                    Submit Request
                                </button>
                            </form>
                        </div>

                        {/* Contact Details & Map */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-8 border-l-4 border-primary pl-4">
                                    Headquarters
                                </h2>
                                <div className="space-y-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                                        <div className="text-base border-l border-slate-200 pl-4 py-1">
                                            <span className="font-normal text-[10px] uppercase tracking-widest text-slate-400 block mb-3">Location</span>
                                            <p className="text-slate-900 leading-relaxed pt-1">
                                                Paresia Centre, Ground Floor,<br />
                                                Ngong Road | Kilimani |<br />
                                                Opposite Uchumi Hyper
                                            </p>
                                        </div>
                                        <div className="text-base border-l border-slate-200 pl-4 py-1">
                                            <span className="font-normal text-[10px] uppercase tracking-widest text-slate-400 block mb-3">Postal Address</span>
                                            <p className="text-slate-900 leading-relaxed pt-1">
                                                P.O Box 1895 - 00606,<br />
                                                Sarit Centre
                                            </p>
                                        </div>
                                        <div className="text-base border-l border-slate-200 pl-4 py-1">
                                            <span className="font-normal text-[10px] uppercase tracking-widest text-slate-400 block mb-3">Support Emails</span>
                                            <a href="mailto:info@anova.co.ke" className="text-slate-900 hover:text-primary transition-colors block leading-none pt-1 mb-3">info@anova.co.ke</a>
                                            <a href="mailto:support@anova.co.ke" className="text-slate-900 hover:text-primary transition-colors block leading-none">support@anova.co.ke</a>
                                        </div>
                                        <div className="text-base border-l border-slate-200 pl-4 py-1">
                                            <span className="font-normal text-[10px] uppercase tracking-widest text-slate-400 block mb-3">Direct Lines</span>
                                            <a href="tel:+254103446585" className="text-slate-900 hover:text-primary transition-colors block leading-none pt-1 mb-3">+254 103 446 585</a>
                                            <a href="tel:+254103103191" className="text-slate-900 hover:text-primary transition-colors block leading-none">+254 103 103 191</a>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-normal uppercase tracking-[0.3em] text-slate-400 block mb-4">Social Network</span>
                                        <div className="flex gap-4">
                                            <a className="size-12 flex items-center justify-center border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-colors group/social" href="#">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            <a className="size-12 flex items-center justify-center border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-colors group/social" href="#">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                                                </svg>
                                            </a>
                                            <a className="size-12 flex items-center justify-center border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-colors group/social" href="#">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Iframe Overlay */}
                            <div className="h-96 w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700 border border-slate-100 relative group overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.792651363805!2d36.78747347582768!3d-1.2991939356421394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109984d702e7%3A0x3b18f0c9f023bbae!2sParesia%20Centre!5e0!3m2!1sen!2ske!4v1770623885448!5m2!1sen!2ske" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Preview */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="mb-16 border-b border-slate-200 pb-8">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            Frequently Asked<br />Technical Questions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        {faqs.map((faq, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight flex items-start gap-3">
                                    <span className="text-primary">Q.</span>
                                    {faq.question}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed pl-7 border-l-2 border-slate-200">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <a href="/faqs" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
                            Visit FAQs Page <span className="material-symbols-outlined text-sm">east</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
