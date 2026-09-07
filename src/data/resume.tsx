import { ResumeIcon } from "@/components/icons/ResumeIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Github, Globe, MailIcon } from "lucide-react";
import { link } from "fs";

export const RESUME_DATA = {
  name: "Soorya Prasanna Ravichandran",
  initials: "SPR",
  location: "Dallas, TX",
  locationLink: "https://www.google.com/maps/place/Dallas",
  title:
    "Senior Software Engineer",
  about:
    "Software engineer with 10+ years of experience architecting, designing, and building scalable, cloud-native data platforms and AI-driven security solutions. Expert in distributed systems, data lakes, real-time data processing, and data pipeline automation.",
  avatarUrl: "https://avatars.githubusercontent.com/u/16794616",
  personalWebsiteUrl: "https://www.sooryaprasanna.com/",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sooryaprasanna/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/sooryaprasanna",
        icon: Github,
      },
      {
        name: "Resume",
        url: "https://1drv.ms/b/c/8244473ead7cecc3/IQBKKT90JzxyS52UtSykZ0CnAelUIT1FPu-xq-T-U0w52dE?e=qGfMLM",
        icon: ResumeIcon,
      },
    ],
  },
  work: [
    {
      company: "Microsoft",
      link: "https://www.microsoft.com/en-us/security/business/siem-and-xdr/microsoft-sentinel/",
      title: "Senior Software Engineer",
      start: "Apr 2025",
      end: "Present",
      description:
        "Data Engineering → Exposure Management",
      description2:
        "Leading infrastructure scaling strategy for 10x load increase across HBase, Solr, Hadoop and Azure services to support 180k enterprise tenants, designing critical bottleneck pipelines.",
      description3:
        "Architected Global Insights to Lake initiative end-to-end, defining scalable ingestion architecture and implementing core components including label-derived applicability model and metadata dataset.",
      description4:
        "Implemented guardrails in Microsoft’s Discovery services to prevent high-blast radius blocking events, validating safety across 81 million IPs and reducing operational risk."
    },
  ],
  work1: [
    {
      company: "Goldman Sachs",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      title: "Vice President",
      start: "Jan 2021",
      end: "Apr 2025",
      description:
        "Data Lake Engineering → Lead for the firm’s enterprise Data Lake platform, overseeing core services (ingest, sandbox and simulator) to support reporting and analytics across ~160K unique datasets ingesting ~450K daily data pipelines.",
      description2:
        "Spearheaded the data & operational catalog, and built the ingest framework using HBase, Flink, HDFS, AWS S3 and Hadoop YARN.",
      description3:
        "Developed a production-like simulation test framework that preemptively caught bugs, reducing post-deployment defects by 75% and enabling first-time-right releases.",
      description4:
        "Core Data Engineering → Lead Architect for Lake to Lakehouse migration, designing and implementing ingest migration architecture to enhance performance and reduce costs.",
      description5:
        "Designed and implemented workflows to decommission 25% of Lake refiners & datastores, migrating unused data to cold storage and reducing quarterly storage costs by ~$500K.",
      description6:
        "Engineered parallel ingest pipelines for seamless migration, improved scalability, and enhanced failover reliability.",
      description7:
        "Collaborated with Snowflake Engineers to develop the Snowpark Migration Accelerator, automating refiner categorization and streamlining migration to Lakehouse.",
    },
  ],
    work2: [
    {
      company: "Goldman Sachs",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      title: "Associate Software Engineer",
      start: "Jan 2020",
      end: "Dec 2020",
      description:
        "Architected and developed key components of Data Lake, including AWS S3 Ingest service, Data Partitioner, Snowflake Ingest service, Avro-Parquet Scanner & Converter utility, ensuring high reliability and on-time delivery.",
      description2:
        "Built a Simulator tool that enabled early bug detection, fostered developer mindfulness, and improved performance tuning, resulting in an 80% increase in customer satisfaction.",
    },
    {
      company: "Goldman Sachs",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      title: "Analyst Software Engineer",
      start: "Nov 2017",
      end: "Dec 2019",
      description:
        "Contributed to the core backend metadata services for data cataloging, ingestion, and refinement in an early-stage enterprise Data Lake; migrated ingest framework from MapReduce to Flink, reducing latency by 25% and memory usage by 33%.",
      description2:
        "Built a robust testing framework, standardized for 100% releases, ensuring stable deployments and minimizing post-release firefighting."
    },
  ],
  work3:[
    {
      company: "UT Dallas",
      link: "https://cs.utdallas.edu/community/organizations/",
      title: "Curriculum Developer",
      start: "Jun 2017",
      end: "Oct 2017",
      description:
        "Led the Big Data Club as the primary instructor, designing hands-on projects, course content, and learning pathways in collaboration with the Center for CS Education & Outreach at The University of Texas at Dallas (UTD) to enhance student engagement, coding skills, and Big Data mastery, earning the CS Outreach Excellence Award for impactful contributions.",
    },
    {
      company: "Infosys",
      link: "https://www.accc.gov.au/system/files/Telstra%20Revised%20Cost%20Allocation%20Framework%20%28Public%20Version%29.pdf",
      title: "Software Engineer",
      start: "Sep 2013",
      end: "Jul 2015",
      description:
        "Developed a high-precision Emergency Alert Solution with 100% predictability, warning Australian communities of fire and flood hazards while delivering mission-critical ETL data to Telstra’s Network Decision Support Database.",
    },
    {
      company: "Infosys",
      link: "https://infy.officialbrand.store",
      title: "Software Engineer Intern",
      start: "Feb 2013",
      end: "May 2013",
      description:
        "Developed an online shopping website that markets seasonal clothes based on customer geolocation, rapidly prototyping new features to validate feasibility and user engagement.",
    },
  ],
  education: [
    {
      school: "The University of Texas at Dallas",
      degree: "Master of Science in Computer Science · Data Science Major",
      start: "2015",
      end: "2017",
    },
    {
      school: "Anna University, India",
      degree: "Bachelor of Engineering in Computer Science",
      start: "2009",
      end: "2013",
    },
  ],
  programming: [
    "Java",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Python",
  ],
  technologies: [
    "Azure",
    "AWS",
    "Flink",
    "HDFS",
    "HBase",
    "Spark",
    "MapReduce",
    "Kafka",
    "Iceberg",
    "Snowflake",
    "Apache Avro",
    "Apache Parquet",
    "Hive",
    "REST",
    "JUnit",
    "CI/CD",
    "Git",
    "Azure DevOps",
    "Maven",
    "Gradle",
    "NoSQL",
    "Bash",
    "PowerShell",
    "Pandas"
  ],
  volunteering: [
    {
      title: "Goldman Sachs - Mentor for Emerging Leaders Series",
      link: "https://www.goldmansachs.com/careers/students/programs-and-internships/americas/emerging-leaders-series",
      start: "2024",
      end: "2025",
      description:
        "Mentored sophomore students to cultivate essential industry skills that will help them become better engineers and explore opportunities at Goldman Sachs.",
    },
    {
      title: "Goldman Sachs - Mentor for BAI/HLAI Network",
      link: "https://www.goldmansachs.com/careers/life-at-goldman-sachs/training",
      start: "2021",
      end: "2025",
      description:
        "Mentored interns, junior and mid-level engineers through the Black Analyst Initiative and Hispanic/Latinx Analyst Initiative to promote diversity within Goldman Sachs.",
    },
    {
      title: "Goldman Sachs - Americas Campus Recruiting Coordinator",
      link: "https://www.goldmansachs.com/careers/",
      start: "2019",
      end: "2025",
      description:
        "Led the recruiting team to identify, source, and hired 100+ engineering talents across the U.S. and Canada, ensuring alignment with business needs for the Goldman Sachs Engineering Division.",
    },
    {
      title: "UT Dallas Scouting Team - Team Lead",
      link: "https://cs.utdallas.edu/25491/hackutd-viii-8-2021/",
      start: "2020",
      end: "2025",
      description:
        "Led engineering events and hackathons at UT Dallas in collaboration with Goldman Sachs engineers.",
    },
    {
      title: "UT Dallas - Big Data Instructor",
      link: "https://cs.utdallas.edu/community/organizations/",
      start: "2016",
      end: "2017",
      description:
        "Developed competency among 500+ students and 300+ industry professionals by conducting hands-on workshops and seminars on Big Data technologies.",
    },
  ],
  volunteering2: [
    {
      title: "UT Dallas - CS Outreach Coordinator",
      start: "Summer 2016",
      description:
        "Designed and led programming workshops for middle and high school students to foster STEM interest and informed career choices, while mentoring college students in programming, coursework, projects, and internships for industry readiness.",
    },
  ],
  projects: [
    {
      title: "Yelp Challenge",
      techStack: [
        "Java",
        "Scala",
        "PigLatin",
        "Big Data",
      ],
      description: "Prediction of Yelp Review Star Rating → Sentiment Analysis & Recommendation Model.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Yelp-Dataset-Challenge",
      },
    },
    {
      title: "Shopping Website",
      techStack: [
        "Javascript",
        "PHP",
        "CSS",
        "MySQL",
      ],
      description: "Developed scalable web application to market wide range of tech products.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Shopping-Website",
      },
    },
    {
      title: "Kaggle Challenge",
      techStack: [
        "R Programming",
        "Machine Learning",
      ],
      description: "Implemented Naive Bayes, SVM and KNN classifiers across complex multivariate dataset with 75% accuracy.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Machine-Learning-Classifiers",
      },
    },
    {
      title: "Tweets Clustering",
      techStack: [
        "Java",
        "Machine Learning",
      ],
      description: "Implemented supervised classification techniques on Twitter dataset using clustering algorithms.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Tweets-Clustering",
      },
    },
    {
      title: "Car Rental System",
      techStack: [
        "PLSQL",
        "Design",
      ],
      description: "Designed a complete database for a car rental system with all the features. Database was designed using PLSQL.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Car-Rental-System",
      },
    },
    {
      title: "Game of Craps",
      techStack: [
        "Python",
        "Machine Learning",
      ],
      description: "Coded the famous casino game 'Craps' to implement machine learning strategies to automate wager and to maximize profit.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Game-of-Craps",
      },
    },
    {
      title: "Critical Paths",
      techStack: [
        "Java",
        "Algorithms",
      ],
      description: "Implemented the critical path method (CPM) algorithm in PERT charts to schedule a set of project activities.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Critical-Paths",
      },
    },
    {
      title: "Indexed Heap",
      techStack: [
        "Java",
        "Algorithms",
      ],
      description: "Implemented Indexed Priority Queues, Prim’s Minimum Spanning Tree Algorithm, Dijkstra’s Shortest Path Algorithm along with performance comparison.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Indexed-Heap",
      },
    },
    {
      title: "Skip List",
      techStack: [
        "Java",
        "Algorithms",
      ],
      description: "Implemented the Skip List data structure and compare its performance with Tree Map data structure.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Skip-List",
      },
    },
    {
      title: "Euler Tour",
      techStack: [
        "Java",
        "Algorithms",
      ],
      description: "Implemented Hierholzer's algorithm to find an Euler tour for any given graph.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Euler-Tour",
      },
    },
    {
      title: "Taggr",
      techStack: [
        "Java",
        "Cloud Computing",
      ],
      description: "Developed an application that is capable of processing repository of videos, convert them to searchable hashtags using Optical Character Recognition (OCR).",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Taggr",
      },
    },
    {
      title: "Portfolio",
      techStack: [
        "Next.js",
        "React",
      ],
      description: "Personal webpage built using Next.js, deployed on Vercel.",
      link: {
        label: "",
        href: "https://github.com/sooryaprasanna/Portfolio",
      },
    },
  ],
} as const;