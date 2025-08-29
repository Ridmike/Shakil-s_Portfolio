export const PERSONAL_INFO = {
  name: "Shakil Ridmike",
  title: "Mobile Application Developer",
  email: "ridmikew@gmail.com",
  phone: "+94-766368845",
  location: "Malabe, Sri Lanka",
  github: "https://github.com/ridmike",
  linkedin: "https://linkedin.com/in/ridmike",
  about: "As a Computer Science undergraduate, I have a strong passion for mobile application development, specializing in Flutter and React Native. My experience spans designing intuitive user interfaces, analyzing system requirements, and delivering innovative solutions. Beyond technical skills, I thrive in collaborative environments, working effectively within teams using agile methodologies. I am also familiar with web development, frontend technologies, and backend integration. Adaptable and eager to learn, I am looking for an internship opportunity where I can apply my expertise, enhance my problem-solving abilities, and contribute to impactful software solutions."
};

export const PROJECTS = [
  {
    id: "traveleon",
    title: "Traveleon",
    year: "2025",
    description: "A comprehensive digital platform tailored for solo tourists visiting Sri Lanka, addressing key challenges such as fragmented travel information, navigation issues, and safety concerns.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Firebase", "TensorFlow.js", "Figma", "Google Maps API"],
    features: [
      "Real-time data integration",
      "Certified tour guide connections",
      "Transport updates",
      "AI-powered landmark recognition",
      "Personalized recommendations",
      "Safety alerts and emergency contacts"
    ],
    role: "Full-Stack Developer & Project Manager",
    responsibilities: [
      "Spearheaded the entire development process from design to deployment",
      "Created intuitive user interfaces using React Native and Figma",
      "Integrated AI/ML models for landmark recognition",
      "Implemented Firebase services for authentication and real-time data"
    ]
  },
  {
    id: "tidydoc",
    title: "TidyDoc",
    year: "2025",
    description: "A modern, React Native-based mobile app designed to help busy professionals manage daily tasks efficiently through an intuitive and visually appealing interface.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "TypeScript", "Expo", "Axios", "JWT", "Zustand"],
    features: [
      "Complete task management (CRUD operations)",
      "Secure user authentication",
      "Real-time updates",
      "Offline capabilities",
      "Task categorization",
      "Progress tracking"
    ],
    role: "Full-Stack Developer",
    responsibilities: [
      "Designed and implemented the entire app interface",
      "Integrated REST APIs for all CRUD operations",
      "Developed secure authentication flow using JWT",
      "Managed application state using Zustand"
    ]
  },
  {
    id: "greenride",
    title: "Green Ride",
    year: "2024",
    description: "An innovative Flutter-based mobile app designed for NSBM Green University students and staff, simplifying transportation and promoting eco-friendly practices.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Flutter", "Firebase", "Firestore", "Google Maps API", "Figma"],
    features: [
      "Public transportation schedules",
      "Route planning",
      "Carpooling system",
      "Real-time bus tracking",
      "Environmental impact tracking",
      "User rating system"
    ],
    role: "UI/UX Designer & Project Lead",
    responsibilities: [
      "Led overall project development",
      "Designed user interfaces for transport and carpooling features",
      "Integrated Firebase Firestore for real-time data management",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    id: "medsync",
    title: "Medsync",
    year: "2023",
    description: "A comprehensive Medical Information Management System (MIMS) integrated with QR code identification to modernize patient data management in public healthcare systems.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["PyQt5", "Firebase Realtime Database", "OpenCV", "Bootstrap", "PHP"],
    features: [
      "QR code patient identification",
      "Digital medical records",
      "Secure data encryption",
      "Real-time data synchronization",
      "Multi-user access control",
      "Automated report generation"
    ],
    role: "Full-Stack Developer & QA Analyst",
    responsibilities: [
      "Developed Student Account Creation Module",
      "Conducted critical analysis of test strategy",
      "Created comprehensive functional test plan",
      "Implemented QR code scanning functionality"
    ]
  }
];

export const SKILLS = {
  technical: [
    { name: "React Native", level: 75, category: "Intermediate" },
    { name: "Flutter", level: 75, category: "Intermediate" },
    { name: "React.js", level: 70, category: "Intermediate" },
    { name: "Firebase", level: 80, category: "Intermediate" },
    { name: "TypeScript", level: 50, category: "Beginner" },
    { name: "Python", level: 45, category: "Beginner" },
    { name: "JavaScript", level: 60, category: "Beginner" },
    { name: "SQL", level: 70, category: "Intermediate" }
  ],
  soft: [
    { name: "Communication", icon: "MessageCircle" },
    { name: "Teamwork", icon: "Users" },
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Time Management", icon: "Clock" },
    { name: "Leadership", icon: "Crown" },
    { name: "Critical Thinking", icon: "Brain" }
  ]
};

export const EDUCATION = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "NSBM Green University",
    period: "2022 - Present",
    description: "Affiliated with the University of Plymouth, UK. Developing a strong foundation in mobile application development, software engineering principles, and problem-solving."
  }
];

export const MILESTONES = [
  {
    title: "BSc (Hons) Computer Science",
    subtitle: "NSBM Green University • 2022 - Present",
    color: "primary"
  },
  {
    title: "Mobile Development Specialization",
    subtitle: "Flutter & React Native Focus • 2023",
    color: "secondary"
  },
  {
    title: "AI/ML Integration",
    subtitle: "TensorFlow.js & Firebase • 2024",
    color: "accent"
  }
];
