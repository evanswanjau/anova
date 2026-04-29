import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import logoWhite from '../assets/images/logo-white.png';
import ctaBg from '../assets/images/cta-bg.jpg'

const Footer: React.FC = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        type: 'Call Back'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.warn('Execute recaptcha not yet available');
            return;
        }

        setIsSubmitting(true);

        try {
            const token = await executeRecaptcha('footer_cta');

            const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/cta`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', phone: '', type: 'Call Back' });
                // Reset success message after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                console.error('CTA submission failed');
            }
        } catch (error) {
            console.error('Error submitting CTA:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Enquiry/CTA Section */}
            <section className="relative py-20 overflow-hidden flex items-center min-h-[480px]">

                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        alt="Circuit board close up"
                        className="w-full h-full object-cover"
                        src={ctaBg}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061d11] via-[#061d11]/85 to-[#061d11]/40" />
                </div>

                {/* Subtle horizontal rule */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/[0.06]" />

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left — copy */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-6 h-0.5 bg-primary" />
                                <span className="text-[10px] tracking-[3px] uppercase text-primary font-semibold">
                                    Get in touch
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter leading-[1.1] mb-5">
                                Ready to transform your{' '}
                                <span className="text-primary">digital</span>{' '}
                                landscape?
                            </h2>
                            <p className="text-white/55 text-[15px] leading-relaxed mb-8 max-w-sm">
                                Whether you need a quick call back or have a specific product
                                enquiry, our team is ready to assist.
                            </p>
                            <div className="flex items-center gap-5">
                                {['24hr response', 'Expert team', 'No obligation'].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        <span className="text-[11px] tracking-wide text-white/40">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — form */}
                        <div>
                            <div className="border border-white/[0.08] bg-white/[0.03] p-7">
                                {isSuccess ? (
                                    <div className="bg-primary/10 border border-primary/25 p-8 text-center">
                                        <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4">
                                            <span className="material-symbols-outlined text-primary text-xl">
                                                check
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">
                                            Request Received!
                                        </h3>
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            Thank you. One of our experts will get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[10px] tracking-[1.5px] uppercase text-white/60 font-semibold mb-1.5">
                                                    Full Name
                                                </label>
                                                <input
                                                    required
                                                    className="w-full bg-white/[0.06] border border-white/70 text-white placeholder-white/45 px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:bg-primary/[0.06] transition-all"
                                                    placeholder="Brian Kamau"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] tracking-[1.5px] uppercase text-white/60 font-semibold mb-1.5">
                                                    Phone Number
                                                </label>
                                                <input
                                                    required
                                                    className="w-full bg-white/[0.06] border border-white/70 text-white placeholder-white/45 px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:bg-primary/[0.06] transition-all"
                                                    placeholder="+254 7XX XXX XXX"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] tracking-[1.5px] uppercase text-white/40 font-semibold mb-1.5">
                                                Request Type
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="w-full bg-nasa-black border border-white/10 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer pr-10"
                                                    value={formData.type}
                                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                >
                                                    <option value="Call Back">Request Call Back</option>
                                                    <option value="Product Enquiry">Product Enquiry</option>
                                                    <option value="Technical Support">Technical Support</option>
                                                </select>
                                                {/* Custom chevron */}
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                                        <path d="M1 1l4 4 4-4" stroke="#2f6d41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className={`w-full mt-2 bg-primary text-white font-black px-6 py-4 text-[11px] tracking-[2.5px] uppercase flex items-center justify-center gap-3 transition-all
                                    ${isSubmitting
                                                    ? 'opacity-70 cursor-not-allowed'
                                                    : 'hover:bg-primary/90 active:scale-[0.99]'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Request
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                                <p className="text-[10px] text-white/30 mt-4 leading-relaxed text-center">
                                    This site is protected by reCAPTCHA and the Google{' '}
                                    <a href="https://policies.google.com/privacy" className="underline hover:text-white transition-colors">Privacy Policy</a> and{' '}
                                    <a href="https://policies.google.com/terms" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-nasa-black text-white pt-16 pb-8 border-t border-gray-800">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                        <div className="mb-8 md:mb-0">
                            <div className="h-10 mb-6">
                                <img src={logoWhite} alt="Anova Logo" className="h-full w-auto object-contain" />
                            </div>
                            <p className="text-gray-400 text-sm max-w-xs mb-6">
                                Empowering businesses through robust ICT infrastructure and innovative managed services.
                            </p>
                            <Link className="text-primary font-bold text-sm flex items-center hover:underline" to="/contact">
                                Contact Us <span className="material-symbols-outlined ml-1 text-xs rounded-full bg-primary text-white p-0.5">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-sm">
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Services</h4>
                                <ul className="space-y-2 text-gray-500">
                                    <li><Link className="hover:text-white transition-colors" to="/services/ict-outsourcing">ICT Outsourcing</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/services/ict-support">Technical Support</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/services/networking-solutions">Infrastructure</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/services">View All Services</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Company</h4>
                                <ul className="space-y-2 text-gray-500">
                                    <li><Link className="hover:text-white transition-colors" to="/about">About Anova</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/careers">Careers</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/partners">Partners</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/news">Newsroom</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Explore</h4>
                                <ul className="space-y-2 text-gray-500">
                                    <li><Link className="hover:text-white transition-colors" to="/industries">Industries</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/contact">Contact Us</Link></li>
                                    <li><Link className="hover:text-white transition-colors" to="/">Home</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Social</h4>
                                <div className="flex space-x-4">
                                    <a className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-none group/social" href="#">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-none group/social" href="#">
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                                        </svg>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-none group/social" href="#">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a className="hover:text-white" href="#">Privacy Policy</a>
                            <a className="hover:text-white" href="#">Terms of Service</a>
                            <a className="hover:text-white" href="#">Sitemap</a>
                        </div>
                        <div>
                            © 2026 Anova Communications Ltd. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;
