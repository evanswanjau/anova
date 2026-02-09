import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import careersData from '../data/careers.json';

const JobDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const job = careersData.find(j => j.id === id);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Anova Careers: ${job?.title}`,
                    text: job?.overview,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            handleCopyLink();
        }
    };

    if (!job) {
        return <Navigate to="/careers" replace />;
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Nav Header */}
            <div className="bg-gray-50 border-b border-gray-100 py-6">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
                    <Link to="/careers" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Careers
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{job.type}</span>
                    </div>
                </div>
            </div>

            {/* Job Title Section */}
            <section className="py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap gap-8 items-center text-slate-600">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary font-light">location_on</span>
                                <span className="font-bold uppercase tracking-widest text-xs">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary font-light">schedule</span>
                                <span className="font-bold uppercase tracking-widest text-xs">{job.type}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary font-light">work</span>
                                <span className="font-bold uppercase tracking-widest text-xs">{job.department}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 border-t border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-16">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-primary"></span>
                                    Overview
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    {job.overview}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-primary"></span>
                                    Key Responsibilities
                                </h2>
                                <ul className="space-y-6">
                                    {job.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="w-2 h-2 mt-2.5 bg-primary shrink-0"></span>
                                            <span className="text-slate-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-primary"></span>
                                    Requirements & Skills
                                </h2>
                                <ul className="space-y-6">
                                    {job.requirements.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="w-2 h-2 mt-2.5 border border-primary shrink-0"></span>
                                            <span className="text-slate-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar Application */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 p-10 bg-gray-50 border border-gray-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Interested in this role?</h3>
                                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                    Send your resume and a brief cover letter detailing your relevant experience to our hiring team.
                                </p>
                                <a
                                    href={`mailto:hr@anova.co.ke?subject=Application: ${job.title}`}
                                    className="w-full block bg-slate-900 text-white font-black py-4 uppercase tracking-[0.2em] text-sm text-center hover:bg-primary transition-all shadow-lg active:scale-95"
                                >
                                    Apply Now
                                </a>
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Share this role</p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={handleShare}
                                            title="Share Job"
                                            className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-white"
                                        >
                                            <span className="material-symbols-outlined text-lg">share</span>
                                        </button>
                                        <button
                                            onClick={handleCopyLink}
                                            title="Copy Link"
                                            className={`w-10 h-10 border flex items-center justify-center transition-all bg-white ${copied ? 'border-primary text-primary' : 'border-gray-200 hover:border-primary hover:text-primary'}`}
                                        >
                                            <span className="material-symbols-outlined text-lg">
                                                {copied ? 'check' : 'link'}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;
