/**
 * Centralized Portfolio Data for V Varshini
 * Information Science & Engineering Student — GM University, Karnataka, India
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  status: 'In Development' | 'Prototype Ready' | 'Concept';
  githubUrl: string;
  liveDemoAvailable?: boolean;
  highlights: string[];
  demoType: 'shopsmart' | 'adaptive' | 'resume';
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  type: 'Hackathon' | 'Award' | 'Internship' | 'National Selection';
  description: string;
  significance: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  periodOrYear: string;
  grade: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: 'Hands-on Experience' | 'Currently Learning / Exploring';
    highlight?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "V Varshini",
  preferredName: "Varshini",
  initials: "VV",
  monogramAlt: "CAM",
  role: "Information Science & Engineering Student",
  university: "GM University",
  universityLocation: "Karnataka, India",
  semester: "Fifth Semester (3rd Year)",
  cgpa: "7.54 / 10",
  brandStatement: "Dream big, think creatively, and work hard",
  headline: "Building ideas into intelligent digital experiences.",
  heroSupportingText: "I'm an Information Science and Engineering student exploring AI, software development, and data-driven solutions. I enjoy turning ideas into practical projects, learning new technologies, and exploring innovative ways to solve real-world problems.",
  
  aboutStory: [
    "I am an engineering student interested in the intersection of software development, AI, and real-world innovation. I enjoy exploring project ideas, participating in hackathons, learning programming, and developing solutions that could eventually become useful products.",
    "My interests include AI-powered applications, web development, data analytics, intelligent recommendation systems, and technology entrepreneurship.",
    "My long-term goal is to strengthen my technical skills, gain hands-on experience, contribute to meaningful projects, and explore opportunities to build technology-driven products."
  ],

  highlights: [
    { title: "Information Science & Engineering", desc: "GM University, Karnataka — 5th Semester" },
    { title: "AI & Data Science Enthusiast", desc: "Exploring ML pipelines & intelligent recommenders" },
    { title: "Project-Based Learner", desc: "Translating course theory into functional prototypes" },
    { title: "Hackathon Competitor", desc: "SIH 2025, Hacksagon 2026 national finalist" },
    { title: "Aspiring Tech Entrepreneur", desc: "Curious about user needs & product viability" }
  ],

  contact: {
    email: "varshini7039@gmail.com",
    github: "https://github.com/varshini7039-cmyk",
    githubUsername: "varshini7039-cmyk",
    linkedin: "https://linkedin.com/in/varshini-am",
    location: "Karnataka, India",
    availability: "Available for Summer 2025/2026 Internships & Collaborative Hackathons"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "shopsmart-ai",
    title: "ShopSmart AI",
    category: "AI & E-Commerce",
    shortDesc: "An AI-assisted shopping application concept focused on making product discovery and shopping decisions more convenient through intelligent assistance and a user-friendly interface.",
    fullDesc: "ShopSmart AI rethinks how consumers interact with online catalogs. Instead of sorting through hundreds of confusing search filters, users can converse with an intelligent assistant that understands context, budget limits, and specific use-cases to deliver tailored recommendations.",
    problemStatement: "Online shopping platforms present consumers with overwhelming lists of options, sponsored clutter, and fragmented customer reviews that make informed product selection stressful and time-consuming.",
    solution: "Designed an AI-assisted catalog query system that parses natural language buyer queries, extracts key preferences (budget, use case, durability), and recommends top matching items with instant pros/cons breakdowns.",
    technologies: ["Python", "React", "AI Recommender Concepts", "JavaScript", "REST APIs", "Tailwind CSS"],
    status: "In Development",
    githubUrl: "https://github.com/varshini7039-cmyk/ai-shopping-assistent",
    liveDemoAvailable: true,
    highlights: [
      "Natural language buyer intent parsing",
      "Dynamic side-by-side feature comparison engine",
      "Smart trade-off evaluator (cost vs feature utility)"
    ],
    demoType: "shopsmart"
  },
  {
    id: "adaptive-learning",
    title: "Adaptive Learning for Neurodivergence",
    category: "Accessibility & EdTech",
    shortDesc: "A web-based learning platform designed to support students with ADHD and dyslexia by providing personalized learning experiences, simplified content, and adaptive learning modes to improve focus, reading, and understanding.",
    fullDesc: "Standard digital curricula and LMS dashboards are rarely structured for neurodivergent learners. This project delivers an adaptive interface with dyslexic-friendly typography modes, reading focus rulers, visual pacing, and AI text simplification.",
    problemStatement: "Students diagnosed with ADHD and dyslexia face steep cognitive friction when reading dense textbook blocks and navigating distracting visual layouts on standard learning portals.",
    solution: "Built a personalized web platform that offers dynamic reading modes: high-contrast dyslexia typography toggle, bionic reading accents, adjustable line-focus ruler, and instant bulleted concept summaries.",
    technologies: ["React", "JavaScript", "Accessibility Guidelines (WCAG)", "CSS Modules", "Educational UX"],
    status: "Concept",
    githubUrl: "https://github.com/varshini7039-cmyk",
    liveDemoAvailable: true,
    highlights: [
      "Dyslexia font toggle & bionic contrast emphasis",
      "Interactive focus reading ruler to reduce sensory fatigue",
      "Chunked visual pacing for students with ADHD"
    ],
    demoType: "adaptive"
  },
  {
    id: "resume-enhancer",
    title: "AI-Powered Resume Enhancer",
    category: "Career AI & Tools",
    shortDesc: "Developed an AI-based tool that analyzes resumes, suggests improvements, optimizes keywords, and enhances resume quality to match job descriptions and improve ATS compatibility.",
    fullDesc: "Job seekers frequently miss out on interview opportunities because their resumes lack the specific domain vocabulary expected by Applicant Tracking Systems (ATS). Resume Enhancer analyzes resume text against target job descriptions.",
    problemStatement: "Early-career students often miss out on hiring screens because their resumes lack industry-standard technical keywords or contain formatting elements that ATS software misinterprets.",
    solution: "Developed an analytical tool that extracts technical competencies from user resumes, calculates ATS match percentages against target job descriptions, identifies skill gaps, and recommends bullet-point enhancements.",
    technologies: ["Python", "NLP Fundamentals", "React", "Keyword Scoring Algorithm", "JSON Schema"],
    status: "Prototype Ready",
    githubUrl: "https://github.com/varshini7039-cmyk",
    liveDemoAvailable: true,
    highlights: [
      "Targeted job description keyword gap analyzer",
      "ATS compatibility score calculation",
      "Action-verb bullet point suggestion helper"
    ],
    demoType: "resume"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    description: "Core programming languages used for algorithmic problem solving and scripting.",
    skills: [
      { name: "Python", level: "Hands-on Experience", highlight: "Data scripting, basic ML models, and backend logic" },
      { name: "C Fundamentals", level: "Hands-on Experience", highlight: "Memory concepts, pointers, and foundational data structures" }
    ]
  },
  {
    name: "Web Development",
    description: "Building responsive, modern user interfaces and client-side applications.",
    skills: [
      { name: "HTML & Semantic Markup", level: "Hands-on Experience", highlight: "Accessible document structure & standards" },
      { name: "CSS & Tailwind", level: "Hands-on Experience", highlight: "Responsive grids, flexbox, and modern themes" },
      { name: "JavaScript (ES6+)", level: "Hands-on Experience", highlight: "DOM manipulation, asynchronous fetch, and modular code" },
      { name: "React Fundamentals", level: "Hands-on Experience", highlight: "Hooks, state management, and component architecture" }
    ]
  },
  {
    name: "Database Systems",
    description: "Structuring, querying, and managing relational databases.",
    skills: [
      { name: "MySQL", level: "Hands-on Experience", highlight: "Table schemas, foreign keys, and relational joins" },
      { name: "SQL Queries", level: "Hands-on Experience", highlight: "Data manipulation, filtering, and aggregation queries" },
      { name: "Database Management Fundamentals", level: "Hands-on Experience", highlight: "Normalization, ER diagrams, and integrity constraints" }
    ]
  },
  {
    name: "AI & Data Science",
    description: "Key concepts and tools being actively studied and applied in projects.",
    skills: [
      { name: "Machine Learning Fundamentals", level: "Currently Learning / Exploring", highlight: "Supervised classification, regression, and model evaluation" },
      { name: "Data Science Fundamentals", level: "Currently Learning / Exploring", highlight: "Data cleaning, exploratory data analysis, and metrics" },
      { name: "AI-Powered Application Concepts", level: "Currently Learning / Exploring", highlight: "Prompt workflows, API integration, and assistive agents" },
      { name: "Recommendation System Concepts", level: "Currently Learning / Exploring", highlight: "Content-based filtering and collaborative recommendation logic" }
    ]
  },
  {
    name: "Tools & Professional Skills",
    description: "Engineering workflows, collaborative tools, and communication practices.",
    skills: [
      { name: "Git & GitHub", level: "Hands-on Experience", highlight: "Version control, branching, repository management" },
      { name: "Networking Fundamentals", level: "Hands-on Experience", highlight: "TCP/IP layers, HTTP requests, client-server model" },
      { name: "Algorithmic Problem-Solving", level: "Hands-on Experience", highlight: "Analytical thinking and procedural debugging" },
      { name: "Technical Documentation", level: "Hands-on Experience", highlight: "Clear READMEs, architecture summaries, and flowcharts" },
      { name: "Project Planning & Presentations", level: "Hands-on Experience", highlight: "Hackathon pitches, milestones, and slide deck delivery" }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "gmu-innovation-week",
    title: "First Place — Innovation Week 2026",
    organization: "GM University, Karnataka",
    year: "2026",
    type: "Award",
    description: "Secured first prize across university-wide engineering teams for an innovative technological concept addressing real-world problem sets.",
    significance: "Selected among dozens of department teams by academic and industry judges."
  },
  {
    id: "iiitm-hacksagon",
    title: "National Level Selection — IIITM Hacksagon 2026",
    organization: "Indian Institute of Information Technology and Management (IIITM)",
    year: "2026",
    type: "National Selection",
    description: "Selected to compete at the prestigious national-level hackathon at IIITM, pitching software solutions alongside top student developers across the country.",
    significance: "Rigorous national screening process evaluating technical viability and concept originality."
  },
  {
    id: "hfc-internship",
    title: "Intern — Happy Folks Club (HFC)",
    organization: "Happy Folks Club",
    year: "2025 – 2026",
    type: "Internship",
    description: "Contributed to technology projects and collaborative team workflows, gaining hands-on software development exposure and agile team dynamics.",
    significance: "Practical workplace experience collaborating with team leads on real initiatives."
  },
  {
    id: "sih-2025",
    title: "Internal Smart India Hackathon (SIH) 2025",
    organization: "Ministry of Education / GM University Internal Selection",
    year: "2025",
    type: "Hackathon",
    description: "Participated in the university internal round of Smart India Hackathon 2025, architecting digital solutions to solve national civic and industrial problem statements.",
    significance: "Intensive 24-hour collaborative sprint in software development and team coordination."
  }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: "be-ise",
    degree: "Bachelor of Engineering",
    field: "Information Science and Engineering",
    institution: "GM University",
    location: "Karnataka, India",
    periodOrYear: "2023 – 2027 (Currently in 5th Semester)",
    grade: "7.54 CGPA",
    highlights: [
      "Core Coursework: Data Structures, Database Systems, Computer Networks, Operating Systems, Software Engineering",
      "Active participant in technical symposiums, hackathons, and department initiatives",
      "Focused on applied AI, data-driven systems, and web technologies"
    ]
  },
  {
    id: "pu-vidya-chetana",
    degree: "Pre-University (Class 12 / Higher Secondary)",
    field: "Science Stream (PCMB / PCMC)",
    institution: "Vidya Chetana PU College",
    location: "Karnataka, India",
    periodOrYear: "Graduated 2024",
    grade: "87%",
    highlights: [
      "Rigorous pre-engineering foundation in Mathematics, Physics, and analytical logic",
      "Consistent academic performance securing 87% in board examinations"
    ]
  },
  {
    id: "kv-mankhurd",
    degree: "Secondary School Examination (Class 10 / CBSE)",
    field: "General Secondary Curriculum",
    institution: "Kendriya Vidyalaya Mankhurd",
    location: "Mumbai, Maharashtra, India",
    periodOrYear: "Graduated 2022",
    grade: "72%",
    highlights: [
      "National CBSE curriculum with emphasis on science, mathematics, and co-curricular activities",
      "Developed early passion for computers, technology, and science fairs"
    ]
  }
];

export const BEYOND_CODING = [
  {
    title: "Exploring Startup Opportunities",
    description: "Fascinated by how small teams with focused technology can create products that solve real-world pain points. I enjoy analyzing business models and product-market fit.",
    category: "Entrepreneurship"
  },
  {
    title: "Following AI & Emerging Technologies",
    description: "Continuously reading technical blogs, research highlights, and developer updates to understand how frontier models and agentic workflows are reshaping engineering.",
    category: "Technology"
  },
  {
    title: "Participating in Hackathons & Tech Events",
    description: "Thriving under time constraints, brainstorming novel solutions with teammates, and learning rapid prototyping under hackathon pressure.",
    category: "Competitions"
  },
  {
    title: "Building a Personal Technology Brand",
    description: "Sharing learning journeys, documenting technical project milestones, and cultivating a transparent personal brand centered on steady growth and curiosity.",
    category: "Personal Brand"
  },
  {
    title: "Creative Visual Design & Digital Content",
    description: "Appreciating aesthetics, thoughtful typography, color harmonies, and intuitive user experiences that make complex technical tools feel human and delightful.",
    category: "Design"
  },
  {
    title: "Learning Through Hands-On Experimentation",
    description: "Believing that true technical intuition comes from writing code, breaking things, reading compiler logs, and iterating until the system actually works.",
    category: "Learning"
  }
];

export const CAREER_GOALS = [
  {
    title: "Hands-on Industry Internships",
    description: "Seeking practical software engineering and data science internships where I can contribute to production codebases and learn industry best practices."
  },
  {
    title: "Applied AI & Data Science Projects",
    description: "Deepening my grasp of machine learning pipelines, evaluation metrics, and real-world recommendation systems that deliver tangible utility."
  },
  {
    title: "Full-Stack Development Mastery",
    description: "Bridging frontend ergonomics with reliable backend APIs, structured database schemas, and clean state architecture."
  },
  {
    title: "Open-Source Contributions",
    description: "Collaborating with broader developer communities, studying mature codebases, and contributing documentation and bug fixes."
  },
  {
    title: "Hackathons & Innovation Challenges",
    description: "Testing new technical stacks under pressure, solving complex societal problem statements, and networking with fellow engineers."
  },
  {
    title: "Building Products with Startup Potential",
    description: "Exploring practical venture concepts that combine AI efficiency with human-centered product design to build sustainable technology products."
  }
];
