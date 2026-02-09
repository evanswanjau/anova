import React from 'react';
import logoWhite from '../assets/images/logo-white.png';

const Footer: React.FC = () => {
    return (
        <>
            {/* Newsletter Section */}
            <section className="relative h-96 overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <img
                        alt="Circuit board close up"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_gH5j_1hTREJq8NyHAGei8SGc9yPlIK9AjgKYcUqnJJjQGk6NZv98F5xPS8yS4WCF9y3jaGlsXxClLuCjXzU71d1g6s9He0dujEW2EUnvjm71wR7iCN1VDtV4Ida9rM7MqetsHHd-KoOWMIIvD5MF98fMqvh8wfwHkmmN9Tq75f7ljgSNk6LzMtSiSfM26rGkmz9_GU9Zp6dp0oytCJ507zD5UfkO-7zjmgSEq6WhczBqgI5NPrX7m_MXRGYTZgNW63LkURbjUhg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Streamline your<br />IT operations
                        </h2>
                        <p className="text-gray-200 text-lg mb-8 max-w-lg">
                            Subscribe to our technical newsletter. Stay updated on the latest vulnerabilities, patches, and technology trends that impact your business.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md">
                            <input
                                className="flex-1 bg-white/10 border border-gray-500 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/20"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <button
                                className="bg-primary text-white font-bold px-6 py-3 hover:bg-primary/90 transition-colors uppercase tracking-wide"
                                type="button"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 mt-4">We respect your privacy. No spam.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                        <div className="mb-8 md:mb-0">
                            <div className="h-10 mb-6">
                                <img src={logoWhite} alt="Anova Logo" className="h-full w-auto object-contain" />
                            </div>
                            <p className="text-gray-400 text-sm max-w-xs mb-6">
                                Empowering businesses through robust ICT infrastructure and innovative managed services.
                            </p>
                            <a className="text-primary font-bold text-sm flex items-center hover:underline" href="#">
                                Contact Us <span className="material-symbols-outlined ml-1 text-xs rounded-full bg-primary text-white p-0.5">arrow_forward</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-sm">
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Services</h4>
                                <ul className="space-y-2 text-gray-500">
                                    <li><a className="hover:text-white transition-colors" href="#">ICT Outsourcing</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Cloud Solutions</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Cybersecurity</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Consulting</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Company</h4>
                                <ul className="space-y-2 text-gray-500">
                                    <li><a className="hover:text-white transition-colors" href="#">About Anova</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Partners</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Newsroom</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Resources</h4>
                                <ul className="space-y-2 text-gray-500">
                                    <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Whitepapers</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Support Portal</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-gray-200">Social</h4>
                                <div className="flex space-x-4">
                                    <a className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-none" href="#">
                                        <span className="text-xs font-bold">FB</span>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-none" href="#">
                                        <span className="text-xs font-bold">X</span>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-none" href="#">
                                        <span className="text-xs font-bold">IN</span>
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
                            © 2026 Anova ICT Solutions. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
