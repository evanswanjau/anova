export interface SearchItem {
    id: string;
    title: string;
    description: string;
    category: string;
    type: 'page' | 'service' | 'job';
    path: string;
    keywords: string[];
}

export const searchIndex: SearchItem[] = [
    // Pages
    {
        id: 'home',
        title: 'Home',
        description: 'Anova ICT Solutions - East Africa\'s Trusted Technology Partner.',
        category: 'Navigation',
        type: 'page',
        path: '/',
        keywords: ['anova', 'home', 'main', 'ict outsourcing', 'managed services']
    },
    {
        id: 'about',
        title: 'About Us',
        description: 'Learn about Anova\'s mission, vision, and the leadership team driving digital transformation in East Africa.',
        category: 'Navigation',
        type: 'page',
        path: '/about',
        keywords: ['about', 'story', 'mission', 'vision', 'team', 'leadership', 'james kariuki', 'amina hassan']
    },
    {
        id: 'services',
        title: 'Our Services',
        description: 'Explore our range of ICT services from managed IT to cybersecurity and infrastructure solutions.',
        category: 'Navigation',
        type: 'page',
        path: '/services',
        keywords: ['services', 'solutions', 'capabilities', 'it support', 'networking']
    },
    {
        id: 'industries',
        title: 'Industries',
        description: 'Specialized ICT infrastructure solutions for banking, healthcare, government, and more.',
        category: 'Navigation',
        type: 'page',
        path: '/industries',
        keywords: ['industries', 'sectors', 'banking', 'healthcare', 'telecommunications', 'logistics', 'government']
    },
    {
        id: 'news',
        title: 'News & Events',
        description: 'Stay updated with the latest tech news, company milestones, and upcoming industry events.',
        category: 'Navigation',
        type: 'page',
        path: '/news',
        keywords: ['news', 'events', 'blog', 'updates', 'insights', 'summit']
    },
    {
        id: 'partners',
        title: 'Partners',
        description: 'Anova\'s strategic ecosystem of global technology leaders including Cisco, HP, and Microsoft.',
        category: 'Navigation',
        type: 'page',
        path: '/partners',
        keywords: ['partners', 'vendors', 'cisco', 'hp', 'microsoft', 'lenovo', 'oracle', 'safaricom']
    },
    {
        id: 'careers',
        title: 'Careers',
        description: 'Join Anova and help build the digital future of East Africa. View our current job openings.',
        category: 'Navigation',
        type: 'page',
        path: '/careers',
        keywords: ['careers', 'jobs', 'hiring', 'work at anova', 'opportunities']
    },
    {
        id: 'contact',
        title: 'Contact Us',
        description: 'Get in touch with Anova for expert ICT consultations and support services.',
        category: 'Navigation',
        type: 'page',
        path: '/contact',
        keywords: ['contact', 'support', 'consultation', 'nairobi', 'office', 'phone', 'email']
    },
    
    // Services (Extracted from services.json)
    {
        id: 'ict-outsourcing',
        title: 'ICT Outsourcing',
        description: 'Hand over your entire IT function to Anova and get back to running your business.',
        category: 'Managed Services',
        type: 'service',
        path: '/services/ict-outsourcing',
        keywords: ['outsourcing', 'managed it', 'itil', 'it department', 'sla']
    },
    {
        id: 'ict-support',
        title: 'ICT Support',
        description: 'Fast, professional technical support tailored to your business.',
        category: 'Technical Services',
        type: 'service',
        path: '/services/ict-support',
        keywords: ['support', 'helpdesk', 'troubleshooting', 'maintenance', 'on-site']
    },
    {
        id: 'networking-solutions',
        title: 'Networking Solutions',
        description: 'Enterprise-grade office networks designed for East Africa.',
        category: 'Infrastructure',
        type: 'service',
        path: '/services/networking-solutions',
        keywords: ['networking', 'wifi', 'sd-wan', 'connectivity', 'router', 'firewall']
    },
    {
        id: 'hardware-software-solutions',
        title: 'Hardware & Software Solutions',
        description: 'Genuine, enterprise-grade equipment and software sourced and supported by Anova.',
        category: 'Technology Supply',
        type: 'service',
        path: '/services/hardware-software-solutions',
        keywords: ['hardware', 'software', 'procurement', 'laptops', 'servers', 'licensing', 'microsoft']
    },
    {
        id: 'telecommunications-solutions',
        title: 'Telecommunications Solutions',
        description: 'Modern, reliable business communication systems, cloud PBX and VoIP.',
        category: 'Communications',
        type: 'service',
        path: '/services/telecommunications-solutions',
        keywords: ['telecom', 'voip', 'pbx', 'video conferencing', 'teams', 'zoom']
    },
    {
        id: 'cctv-monitoring',
        title: 'CCTV & Monitoring',
        description: 'Intelligent, always-on surveillance systems that protect your premises.',
        category: 'Security',
        type: 'service',
        path: '/services/cctv-monitoring',
        keywords: ['cctv', 'security', 'surveillance', 'monitoring', 'cameras', 'ai']
    },
    {
        id: 'access-control',
        title: 'Access Control',
        description: 'Control who enters your building and automate attendance tracking.',
        category: 'Security',
        type: 'service',
        path: '/services/access-control',
        keywords: ['access control', 'biometrics', 'fingerprint', 'attendance', 'security']
    },
    {
        id: 'cybersecurity-solutions',
        title: 'Cybersecurity Solutions',
        description: 'End-to-end security to protect your business from digital threats.',
        category: 'Security',
        type: 'service',
        path: '/services/cybersecurity-solutions',
        keywords: ['cybersecurity', 'protection', 'firewall', 'antivirus', 'threat detection', 'encryption']
    },
    {
        id: 'cloud-solutions',
        title: 'Cloud Solutions',
        description: 'Transform your business with scalable, secure cloud infrastructure.',
        category: 'Cloud Services',
        type: 'service',
        path: '/services/cloud-solutions',
        keywords: ['cloud', 'aws', 'azure', 'migration', 'hosting', 'saas']
    },
    {
        id: 'business-continuity',
        title: 'Business Continuity',
        description: 'Protect your data and ensure operations continue during any disruption.',
        category: 'Managed Services',
        type: 'service',
        path: '/services/business-continuity',
        keywords: ['backup', 'disaster recovery', 'dr', 'continuity', 'resilience']
    }
];
