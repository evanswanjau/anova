import React, { useEffect, useRef, useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import contactHero from '../assets/images/contact.jpg';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

/* ─────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────── */
function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
    children, className = '', delay = 0
}) => {
    const ref = useReveal();
    return (
        <div ref={ref} className={`reveal-block ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

const Contact: React.FC = () => {
    useDocumentTitle("Contact");
    const parallaxRef = useRef<HTMLDivElement>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

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
            question: "How quickly can you help during an emergency?",
            answer: "For our regular clients, we guarantee an expert will be onsite within 4 to 8 hours to get your business back up and running."
        },
        {
            question: "Do you provide custom equipment and setups?",
            answer: "Yes. Our team provides custom-built computers, servers, and office networks designed specifically for your business needs."
        },
        {
            question: "Where are you located?",
            answer: "Our headquarters is located at Paresia Centre, Ground Floor, Ngong Road | Kilimani | Opposite Uchumi Hyper, Nairobi, Kenya."
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.warn('Execute recaptcha not yet available');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const token = await executeRecaptcha('contact_form');
            console.log('reCAPTCHA token:', token);
            
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());
            
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    phone: payload.phone,
                    subject: payload.subject,
                    description: payload.description,
                    recaptchaToken: token
                })
            });

            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Failed to submit the form');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your request has been sent successfully.'
            });

            // Reset form (optional)
            form.reset();
        } catch (error: any) {
            console.error('Submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <style>{`
                .reveal-block { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .reveal-block.revealed { opacity: 1; transform: translateY(0); }
            `}</style>
            <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-nasa-black pt-[104px] pb-16 md:pb-24 relative overflow-hidden h-[60vh] flex items-center">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
                >
                    <div
                        className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${contactHero})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nasa-black via-transparent to-transparent" />
                </div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
                    <div className="max-w-4xl">
                        <Reveal>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-[2px] w-12 bg-primary"></span>
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Get In Touch</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight md:leading-none mb-8">
                                Connect with our Experts
                            </h1>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-16 md:py-24 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 shrink-0">
                        {/* Left Column: Contact Details & Map */}
                        <Reveal className="space-y-12 shrink-0">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-8 border-l-4 border-primary pl-4">
                                    Headquarters
                                </h2>
                                <div className="space-y-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                                        <div className="text-base border-l border-slate-200 pl-4 py-1 font-display">
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
                                            <a href="tel:+254103103191" className="text-slate-900 hover:text-primary transition-colors block leading-none mb-3">+254 103 103 191</a>
                                            <a href="tel:+254202427238" className="text-slate-900 hover:text-primary transition-colors block leading-none pt-1">+254 20 242 7238</a>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-normal uppercase tracking-[0.3em] text-slate-400 block mb-4">Social Network</span>
                                        <div className="flex gap-4">
                                            {/* (social links) */}
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
                            <div className="h-96 w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700 border border-slate-100 relative group overflow-hidden shrink-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.792651363805!2d36.78747347582768!3d-1.2991939356421394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109984d702e7%3A0x3b18f0c9f023bbae!2sParesia%20Centre!5e0!3m2!1sen!2ske!4v1770623885448!5m2!1sen!2ske" className="w-full h-full" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                            </div>
                        </Reveal>

                        {/* Right Column: Inquiry Form & WhatsApp CTA */}
                        <Reveal className="space-y-12 shrink-0" delay={200}>
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-8 border-l-4 border-primary pl-4">
                                    Customer Inquiry
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {submitStatus && (
                                        <div className={`p-4 text-sm font-bold ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                            {submitStatus.message}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                                            <input name="firstName" required type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="e.g. John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Name</label>
                                            <input name="lastName" required type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="e.g. Doe" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Work Email</label>
                                            <input name="email" required type="email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="john@company.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone Number</label>
                                            <input name="phone" required type="tel" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="0712345678" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Subject</label>
                                        <select name="subject" required className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm appearance-none">
                                            <option value="General Help">General Help</option>
                                            <option value="Request a Call Back">Request a Call Back</option>
                                            <option value="Business Partnership">Business Partnership</option>
                                            <option value="Technical Support">Technical Support</option>
                                            <option value="New Project Inquiry">New Project Inquiry</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Project Description</label>
                                        <textarea name="description" required rows={6} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="Tell us about your technical requirements..."></textarea>
                                    </div>
                                    <button
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white font-black py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                Processing...
                                            </>
                                        ) : (
                                            'Submit Request'
                                        )}
                                    </button>

                                    <p className="text-[10px] text-slate-400 mt-4 leading-relaxed">
                                        This site is protected by reCAPTCHA and the Google{' '}
                                        <a href="https://policies.google.com/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a> and{' '}
                                        <a href="https://policies.google.com/terms" className="underline hover:text-primary transition-colors">Terms of Service</a> apply.
                                    </p>
                                </form>
                            </div>

                            {/* 24/7 WhatsApp CTA */}
                            <div className="bg-slate-900 p-8 text-white relative overflow-hidden group shrink-0">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <svg className="w-24 h-24 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="flex size-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Available 24/7</span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Immediate<br />Support</h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-xs">
                                        Need urgent assistance? Chat with our technical team directly on WhatsApp for real-time support.
                                    </p>
                                    <a
                                        href="https://wa.me/254103446585?text=Hello%20Anova,%20I%20need%20urgent%20support."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all transform active:scale-95 shadow-xl"
                                    >
                                        Chat on WhatsApp
                                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* FAQs Preview */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <Reveal>
                        <div className="mb-16 border-b border-slate-200 pb-8">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Knowledge Base</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                                Common Questions<br />About Our Services
                            </h2>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        {faqs.map((faq, index) => (
                            <Reveal key={index} delay={index * 100}>
                                <div className="space-y-4">
                                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight flex items-start gap-3">
                                        <span className="text-primary">Q.</span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed pl-7 border-l-2 border-slate-200">
                                        {faq.answer}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal className="flex justify-end" delay={400}>
                        <a href="/faqs" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
                            Visit FAQs Page <span className="material-symbols-outlined text-sm">east</span>
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
        </>
    );
};

export default Contact;
