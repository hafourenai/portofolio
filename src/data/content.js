export const personalInfo = {
  name: "Muhammad Aldi Nova",
  role: "Cyber Security Analyst",
  tagline: "Focused on Threat Detection & Web Security",
  email: "muhamadaldinova056@gmail.com",
  linkedin: "www.linkedin.com/in/muhammad-aldi-nova-4097b1286",
  github: "https://github.com/hafourenai",
  profileImage: "/images/Profile.JPG",
  cvUrl: "/certificates/CV.pdf",
};

export const skills = [
  "Threat Analysis",
  "Phishing Detection", 
  "Web Security Testing",
  "Vulnerability Assessment",
  "Python Security Scripts",
  "Risk Assessment",
  "Security Documentation",
  "OWASP Top 10"
];

export const certificates = [
  { id: 1, title: "Introduction to Cyber Security", image: "/certificates/C1.png", pdf: "/certificates/cert1.pdf" },
  { id: 2, title: "Networking Basics", image: "/certificates/C2.png", pdf: "/certificates/cert2.pdf" },
  { id: 3, title: "Belajar Dasar AI", image: "/certificates/C3.png", pdf: "/certificates/cert3.pdf" },
  { id: 4, title: "Instalasi LAN Nirkabel", image: "/certificates/C4.png", pdf: "/certificates/cert4.pdf" },
  { id: 5, title: "Cyber Security Solution Architecture", image: "/certificates/C5.png", pdf: "/certificates/cert5.pdf" },
  { id: 6, title: "Memulai Pemrograman Dengan Python", image: "/certificates/C6.png", pdf: "/certificates/cert6.pdf" },
];

export const projects = [
  {
    id: 1,
    title: "URL Phishing Detector",
    description: "An automated system for detecting phishing URLs using pattern analysis and external threat intelligence.",
    detailedDescription: "URL Phishing Detector identifies malicious URLs by analyzing URL patterns, checking domain reputation through the VirusTotal API, and validating domain ownership using WHOIS data. The system combines these methods to detect common phishing indicators and applies machine learning techniques to improve detection accuracy over time.",
    tech: ["Python", "VirusTotal API","Whois API", "Machine Learning"],
    image: "/projects/phishdect.png",
    images: [
      "/projects/phishdect.png",
      "/projects/phishdect1.png",
      "/projects/phishdect2.png",
      "/projects/phishdect3.png"
    ],
    highlights: ["Can help detect phishing URLs"],
    detailedHighlights: [
      "Real-time URL reputation analysis",
      "Automated WHOIS data extraction",
      "API integration with VirusTotal",
      "Pattern-based detection algorithm"
    ],
    year: "2025",
    teamSize: "Individual Project",
    category: "Phishing Detection",
    link: "https://cekurlmu.netlify.app/",
    github: "https://github.com/hafourenai/phishing-detector-backend"
  },
  {
    id: 2,
    title: "Love U N Vulnerability Scanner",
    description: "A Python-based tool for automated detection of common web application vulnerabilities.",
    detailedDescription: "Love U N Vulnerability Scanner performs automated security checks to identify potential vulnerabilities in web applications by analyzing common misconfigurations and attack patterns. Built with a modular design, the tool supports extensible testing modules and demonstrates fundamental vulnerability scanning and web security testing methodologies.",
    tech: ["Python", "Security Testing", "Web Analysis","Proxy Rotation"],
    image: "/projects/Test.jpeg", 
    images: [
      "/projects/Test1.png",
      "/projects/Test3.png"
    ],
    highlights: ["Tool for learning and testing"],
    detailedHighlights: [
      "Custom security test modules",
      "Automated vulnerability detection",
      "Clean and efficient Python code",
      "Learning resource for security",
      "Pluggable architecture for new tests"
    ],
    year: "2026",
    teamSize: "Individual Project",
    category: "Vulnerability Assessment",
    link: "#",
    github: "https://github.com/hafourenai/Test"
  },
  {
    id: 3,
    title: "Honey Vulnerability Scanner",
    description: "Learning about web vulnerability scanning",
    detailedDescription: "I am currently learning how to build a vulnerability scanner. At this stage, I am developing it as a single-file project, where the payloads, detection rules, attack types, logging system, and reporting mechanisms are all implemented within one file. This is my initial step in creating an amateur cybersecurity tool, primarily aimed at strengthening my logical thinking and understanding of security concepts. In the future, I plan to further refine, modularize, and expand its capabilities as my skills continue to grow.",
    tech: ["Python", "Proxy Rotation", "Tor Integration", "Network Security"],
    image: "/projects/honey.png",
    images: [
      "/projects/honey.png",
      "/projects/honey1.png"
    ],
    highlights: ["Tool for learning and testing"],
    detailedHighlights: [
      "Advanced proxy management",
      "Integration with Tor network",
      "Stealth scanning techniques",
      "Comprehensive web reconnaissance",
      "Anonymity-focused design"
    ],
    year: "2025",
    teamSize: "Individual Project",
    category: "Vulnerability Scanner",
    link: "#",
    github: "https://github.com/hafourenai/hafourenai-webscan-just4me"
  },
  {
    id: 4,
    title: "SnapTik",
    description: "Tiktok Downloader",
    detailedDescription: "SnapTik is a Tiktok downloader that allows users to download Tiktok videos and save them to their device.",
    tech: ["Vanilla JavaScript", "HTML", "CSS"],
    image: "/projects/snaptik.png",
    images: [
      "/projects/snaptik.png",
    ],
    highlights: ["Tiktok Downloader"],
    detailedHighlights: [
      "Tiktok Downloader",
    ],
    year: "2025",
    teamSize: "Individual Project",
    category: "Downloader",
    link: "https://snap-tik-hon.vercel.app/",
    github: "https://github.com/hafourenai/SnapTik-Hon"
  },
  {
    id: 5,
    title: "Hafourenai Webscan",
    description: "A web vulnerability scanner built with Python.",
    detailedDescription: "This project is an enhanced version of my previous tool, with greater use of AI to modularize and restructure the code. I expanded the payload collection and separated them into dedicated files that can be imported and executed as needed. The scanner now injects payloads individually into the target for more controlled testing. I also improved the Tor integration, which was previously unstable, and implemented more cautious request-handling especially when sending payloads to ensure safer and more controlled execution.",
    tech: ["Python", "Proxy Rotation", "Web Security","Tor Integration"],
    image: "/projects/wsjsfm.png",
    images: [
      "/projects/wsjsfm1.png",
      "/projects/wsjsfm2.png"
    ],
    highlights: ["Web Vulnerability Scanner"],
    detailedHighlights: [
      "Web Vulnerability Scanner",
    ],
    year: "2025",
    teamSize: "Individual Project",
    category: "Vulnerability Scanner",
    link: "#",
    github: "https://github.com/hafourenai/webscanjust4me"
  },
  {
    id: 6,
    title: "Belajar Seru - Hiperaktif",
    description: "An interactive learning platform for active learners.",
    detailedDescription: "Belajar Seru - Hiperaktif is an interactive learning platform designed to engage active learners through gamified content and dynamic learning experiences.",
    tech: ["Flask", "Vanilla JavaScript", "CSS"],
    image: "/projects/ha2.png",
    images: [
      "/projects/ha.png",
      "/projects/ha1.png",
      "/projects/ha3.png",
    ],
    highlights: ["Interactive Learning Platform"],
    detailedHighlights: [
      "Gamified Learning Content",
      "Dynamic Learning Experiences",
    ],
    year: "2025",
    teamSize: "Individual Project",
    category: "Learning Platform",
    link: "https://hiperaktif-production.up.railway.app/",
    github: "https://github.com/hafourenai/Hiperaktif"
  },
  {
    id: 7,
    title: "Finance Manager",
    description: "A finance management system for tracking expenses and income.",
    detailedDescription: "Learn how to make a finance management system using Laravel, PHP, MySQL, and CSS.",
    tech: ["React","Mysql", "Tailwind CSS","NodeJS"],
    image: "/projects/finance.png",
    images: [
      "/projects/finance1.png",
      "/projects/finance2.png",
      "/projects/finance3.png",
      "/projects/finance4.png"
    ],
    highlights: ["A finance management system"],
    detailedHighlights: [
      "Finance Management System",
    ],
    year: "2025",
    teamSize: "Individual Project",
    category: "Finance Management",
    link: "#",
    github: "https://github.com/hafourenai/Finance-Manager"
  }
];

export const contactInfo = {
  email: "muhamadaldinova056@gmail.com",
  linkedin: "www.linkedin.com/in/muhammad-aldi-nova",
  github: "https://github.com/hafourenai",
  location: "Depok, Jawa Barat, Indonesia"
};