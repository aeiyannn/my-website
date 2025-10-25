export const portfolioConfig = {
    siteTitle: 'Muhammad Aeiyan Khan',
    tagline: 'I turn ideas into reality.',
    heroDescription: [
        { text: "I'm a ", highlight: false },
        { text: "Full Stack Software Engineer", highlight: true },
        { text: " with strong ", highlight: false },
        { text: "problem-solving skills", highlight: true },
        { text: ", specializing in creating exceptional digital experiences.", highlight: false },
        { text: " With expertise in both ", highlight: false },
        { text: "front-end", highlight: true },
        { text: " and ", highlight: false },
        { text: "back-end development", highlight: true },
        { text: ", I work with a diverse range of technologies, including ", highlight: false },
        { text: "web3", highlight: true },
        { text: " and traditional web applications. I enjoy solving challenging projects that drive ", highlight: false },
        { text: "innovation", highlight: true },
        { text: " and deliver high-quality results. My experience in ", highlight: false },
        { text: "leading development teams", highlight: true },
        { text: " has honed my ability to collaborate effectively and translate ideas into functional solutions. I actively seek dynamic projects where I can contribute to pushing the boundaries of technology and drive impactful ", highlight: false },
        { text: "innovation", highlight: true },
        { text: ".", highlight: false },
    ],
    aboutDescription: [
        { text: "I'm a passionate and self-driven ", highlight: false },
        { text: "Full Stack Developer", highlight: true },
        { text: " with over ", highlight: false },
        { text: "3+ years of professional experience", highlight: true },
        { text: " in modern web and mobile development. My journey began at the age of ", highlight: false },
        { text: "17", highlight: true },
        { text: ", when I first started learning to code out of pure curiosity. Since then, I’ve been dedicated to building real-world solutions and constantly evolving as a developer.", highlight: false },

        { text: " I specialize in working with ", highlight: false },
        { text: "MERN", highlight: true },
        { text: " and ", highlight: false },
        { text: "MEAN stacks", highlight: true },
        { text: ", along with frameworks like ", highlight: false },
        { text: "Next.js", highlight: true },
        { text: ", ", highlight: false },
        { text: "React Native", highlight: true },
        { text: ", and ", highlight: false },
        { text: "Nest.js", highlight: true },
        { text: ". Whether I’m developing full-stack web applications or cross-platform mobile apps, I focus on writing clean, efficient, and scalable code.", highlight: false },

        { text: " As a ", highlight: false },
        { text: "quick learner", highlight: true },
        { text: " and natural ", highlight: false },
        { text: "problem solver", highlight: true },
        { text: ", I enjoy taking on complex challenges and turning ideas into functional, high-impact products. I'm always eager to learn new technologies and stay current in this ever-changing field.", highlight: false },

        { text: " I’ve worked on projects ranging from ", highlight: false },
        { text: "enterprise-level web apps", highlight: true },
        { text: " to ", highlight: false },
        { text: "scalable mobile applications", highlight: true },
        { text: ", often collaborating with diverse teams and contributing across both front-end and back-end stacks.", highlight: false },

        { text: " Lately, I’ve been diving into emerging technologies such as ", highlight: false },
        { text: "AI automation", highlight: true },
        { text: ", ", highlight: false },
        { text: "intelligent agents", highlight: true },
        { text: ", and ", highlight: false },
        { text: "automated workflows", highlight: true },
        { text: ", aiming to stay ahead of the curve and apply innovative solutions to real-world problems.", highlight: false },

        { text: " I’m passionate about building things that matter, growing as an engineer, and contributing to projects that drive ", highlight: false },
        { text: "impactful innovation", highlight: true },
        { text: ".", highlight: false },
    ],
    experience: [
        {
            id: "zetsolTechnologies",
            companyName: "Zetsol Technologies",
            position: "MERN Stack Developer",
            from: "July 2024",
            to: "Present",
            website: "https://zetsol.ae/",
            barPosition: -10,
            barAbovePosition: 100,
            tasks: [
                {
                    text: "Worked on Sehat Kahani — Pakistan’s leading telehealth platform — implementing secure doctor-patient video consultations, digital prescriptions, and appointment scheduling.",
                    keywords: ["Sehat Kahani", "Telehealth", "Video Consultation", "Healthcare"],
                },
                {
                    text: "Developed BC App — a Ball-Committee savings platform — enabling users to create groups, track monthly payouts, automate contribution reminders, and secure wallet transactions.",
                    keywords: ["BC App", "Committee App", "Rotating Savings", "Fintech", "Digital Payments"],
                },
                {
                    text: "Built features for Neem.io including fast KYC onboarding, lending workflows, secure wallet handling, and financial user dashboards.",
                    keywords: ["Neem.io", "Fintech", "KYC", "Digital Lending", "Wallet"],
                },
                {
                    text: "Implemented RBAC-based authentication with JWT and enhanced API security and audit logging for financial compliance.",
                    keywords: ["RBAC", "JWT", "Security", "API Security"],
                },
                {
                    text: "Improved front-end experience using React and Tailwind CSS with optimized reusable component architecture.",
                    keywords: ["React", "Tailwind", "UI/UX", "Components"],
                },
                {
                    text: "Enhanced backend performance by optimizing Express APIs and MongoDB queries to support large active user groups.",
                    keywords: ["API Optimization", "MongoDB", "Scalability"],
                }
            ],
        },
        {
            id: "smit",
            companyName: "Saylani Mass IT Training (SMIT)",
            position: "Web & Mobile App Instructor",
            from: "January 2025",
            to: "Present",
            website: "https://www.saylaniwelfare.com/",
            barPosition: 80,
            barAbovePosition: 256,
            tasks: [
                {
                    text: "Teaching MERN Stack and Mobile App Development with a project-based learning approach, helping students build complete real-world applications.",
                    keywords: ["MERN Stack", "React Native", "Project-Based Learning"],
                },
                {
                    text: "Preparing curriculum, weekly assignments, and coding challenges aligned with industry standards to ensure job-readiness.",
                    keywords: ["Curriculum Design", "Industry Standards", "Assignments"],
                },
                {
                    text: "Guiding 80+ students through technical issues, code debugging sessions, and best practices for clean and maintainable code.",
                    keywords: ["Mentorship", "Debugging", "Best Practices"],
                },
                {
                    text: "Teaching modern tools including Git/GitHub, REST APIs, Tailwind CSS, and deployment workflows using Vercel & Netlify.",
                    keywords: ["GitHub", "REST APIs", "Tailwind", "Deployment"],
                },
                {
                    text: "Conducting evaluations and providing feedback to improve students’ problem-solving skills and interview preparation.",
                    keywords: ["Evaluations", "Code Review", "Career Guidance"],
                }
            ],
        }
    ],
    projectsData: [
        {
            title: "Elysium Dental & Aesthetics Clinic",
            projectType: "edac.com.pk",
            link: "https://edac.com.pk/",
            image: "/project-1.png",
            background: "/ensvision.jpg",
            description:
                "A simple and elegant website for a dental clinic, designed to be user-friendly and informative. The site is fully responsive and optimized for performance, ensuring a seamless experience for patients seeking information or appointments.",
            tech: ["Next.js", "Tailwind CSS", "Responsive Design", "Vercel"],
            github: null, // No public GitHub link for this project
        },
        {
            title: "YPredict - v1",
            projectType: "Recent Project",
            link: "https://ubiquitous-bublanina-da84ec.netlify.app/",
            image: "/img/YPredict-v1.jpg",
            background: "/project-2.png",
            description: "I led the development of a token project aimed at creating a decentralized ecosystem. My role involved overseeing the project's planning and development, including the design and implementation of the smart contract and blockchain technology for a private sale.",
            tech: ["Token", "ERC20", "Next.js", "Smart contract", "Blockchain"],
            github: "https://github.com/hktitof/Ypredict",
        },
        {
            title: "FeverTokens",
            projectType: "Recent Project",
            link: "https://www.fevertokens.io/",
            image: "/img/feverTokens.png",
            background: "/feverTokens.jpg",
            description: "I played a key role in developing an NFT marketplace project, focused on creating a decentralized platform with scalable smart contracts and blockchain technology. This platform, FeverTokens - v2, was showcased at the VivaTech2022 event in Paris, providing builders with tools to develop scalable Web3 applications.",
            tech: ["Tokenization", "ERC721", "Solidity", "Smart Contracts", "Blockchain"],
            github: null,
        },
        {
            title: "Speed Typing",
            projectType: "Recent Project",
            link: "/typing",
            image: "/typing.png",
            background: "/typing.png",
            description: "This project helps you improve your typing by tracking your progress in each round and giving you a score based on your speed and accuracy through a table of statistics.",
            tech: ["Algorithms", "Framer Motion", "Tailwind CSS", "TypeScript"],
            github: "https://github.com/hktitof/Typing",
        },
        {
            title: "User Data Puller",
            projectType: "Recent Project",
            link: "/userdatapuller",
            image: "/hackme.jpg",
            background: "/hackme.jpg",
            description: "This project shows how easily your browser can be identified and tracked. It reveals your location, IP Address, and details about your software and hardware using cookies.",
            tech: ["Cookies", "Google API", "Data collecting", "IP Address", "Location"],
            github: "https://github.com/hktitof/DataPuller",
        },
        // Add more projects here following the same object structure
    ]

};
