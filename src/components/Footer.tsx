import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';

const Footer: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        type: 'Call Back'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', phone: '', type: 'Call Back' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <>
            {/* Enquiry/CTA Section */}
            <section className="relative py-20 overflow-hidden flex items-center min-h-[400px]">
                <div className="absolute inset-0">
                    <img
                        alt="Circuit board close up"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_gH5j_1hTREJq8NyHAGei8SGc9yPlIK9AjgKYcUqnJJjQGk6NZv98F5xPS8yS4WCF9y3jaGlsXxClLuCjXzU71d1g6s9He0dujEW2EUnvjm71wR7iCN1VDtV4Ida9rM7MqetsHHd-KoOWMIIvD5MF98fMqvh8wfwHkmmN9Tq75f7ljgSNk6LzMtSiSfM26rGkmz9_GU9Zp6dp0oytCJ507zD5UfkO-7zjmgSEq6WhczBqgI5NPrX7m_MXRGYTZgNW63LkURbjUhg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-nasa-black via-nasa-black/80 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                            Ready to transform your<br />digital landscape?
                        </h2>
                        <p className="text-gray-200 text-lg mb-10 max-w-lg">
                            Whether you need a quick call back or have a specific product enquiry, our team is ready to assist.
                        </p>
                        
                        {isSuccess ? (
                            <div className="bg-primary/20 border border-primary/50 p-8 max-w-md backdrop-blur-sm">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">check_circle</span>
                                <h3 className="text-white font-bold text-xl mb-2">Request Received!</h3>
                                <p className="text-gray-200">Thank you. One of our experts will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                                <div className="space-y-4 col-span-2 md:col-span-1">
                                    <input
                                        required
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-4 focus:outline-none focus:border-primary focus:bg-white/20 transition-all"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                    <input
                                        required
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-4 focus:outline-none focus:border-primary focus:bg-white/20 transition-all"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-4 col-span-2 md:col-span-1">
                                    <select
                                        className="w-full bg-nasa-black border border-white/20 text-white px-4 py-4 focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                                        value={formData.type}
                                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                                    >
                                        <option value="Call Back">Request Call Back</option>
                                        <option value="Product Enquiry">Product Enquiry</option>
                                        <option value="Technical Support">Technical Support</option>
                                    </select>
                                    <button
                                        disabled={isSubmitting}
                                        className={`w-full bg-primary text-white font-black px-6 py-4 hover:bg-primary/90 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        type="submit"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Request'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
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
