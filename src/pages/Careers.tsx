import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import careersData from '../data/careers.json';
import careersHero from '../assets/images/careers.jpg';
import teamImage from '../assets/images/slider1.jpg';

const Careers: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const jobs = careersData || [];

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

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-black py-16 md:py-24 relative overflow-hidden h-[50vh] flex items-center">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform"
                >
                    <div
                        className="absolute inset-0 opacity-50 bg-cover bg-[center_15%] bg-no-repeat"
                        style={{ backgroundImage: `url(${careersHero})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Join Our Team</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight md:leading-none mb-8">
                            Build the Future of<br className="hidden md:block" />ICT in East Africa
                        </h1>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Excellence drives everything we do. We're looking for the best.
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                At Anova Communications, we don't just provide ICT services; we architect the digital backbone for the region's most critical sectors. From financial ecosystems to government infrastructure, our work matters.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-6 py-2 bg-gray-50 border border-gray-100 text-slate-700 text-sm font-bold uppercase tracking-wider">Excellence</span>
                                <span className="px-6 py-2 bg-gray-50 border border-gray-100 text-slate-700 text-sm font-bold uppercase tracking-wider">Hard Work</span>
                                <span className="px-6 py-2 bg-gray-50 border border-gray-100 text-slate-700 text-sm font-bold uppercase tracking-wider">Innovation</span>
                            </div>
                        </div>
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={teamImage}
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border-[20px] border-white/10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs List */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-[2px] w-12 bg-primary"></span>
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Current Openings</span>
                            </div>
                            <p className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Find your next challenge.
                            </p>
                        </div>
                        <div className="text-slate-500 text-sm font-medium">
                            Showing {jobs.length} open positions
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {jobs.map((job) => (
                            <Link
                                key={job.id}
                                to={`/careers/${job.id}`}
                                className="group relative bg-white border border-gray-100 p-8 md:p-10 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 block"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1">
                                                {job.department}
                                            </span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                {job.type}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3">
                                            {job.title}
                                        </h3>
                                        <p className="text-slate-500 line-clamp-2 max-w-2xl">
                                            {job.overview}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right hidden md:block">
                                            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Location</div>
                                            <div className="text-sm font-bold text-slate-900">{job.location}</div>
                                        </div>
                                        <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary transition-all rounded-none">
                                            <span className="material-symbols-outlined font-light">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {jobs.length === 0 && (
                        <div className="text-center py-20 border-2 border-dashed border-gray-100">
                            <p className="text-slate-400 font-medium italic">No open positions at the moment. Check back soon.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-24 bg-[#1a3d25] text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Don't see a perfect fit?</h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        We're always looking for exceptional talent. If you have a passion for high-impact ICT solutions, email our HR team at <a href="mailto:hr@anova.co.ke" className="text-white hover:underline font-bold underline-offset-4 decoration-primary">hr@anova.co.ke</a> and we'll keep you in mind for future roles.
                    </p>
                    <a
                        href="mailto:hr@anova.co.ke"
                        className="inline-block bg-white text-[#1a3d25] font-black px-12 py-4 uppercase tracking-[0.2em] text-sm hover:shadow-lg hover:bg-gray-100 transition-all active:scale-95"
                    >
                        Send Us Your CV
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Careers;
