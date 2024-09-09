import { ResumeIcon } from "@/components/icons/ResumeIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Github, Globe, MailIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Soorya Prasanna Ravichandran",
  initials: "SPR",
  location: "Dallas, TX",
  locationLink: "https://www.google.com/maps/place/Dallas",
  title:
    "Software Engineer",
  about:
    "Highly skilled software developer with 10+ years of experience in designing, developing, leading and maintaining data-intensive distributed systems and enterprise applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/16794616",
  personalWebsiteUrl: "https://www.sooryaprasanna.com/",
  contact: {
    social: [
      {
        name: "Email",
        url: "https://iamsoorya.blogspot.com/p/connect.html",
        icon: MailIcon,
      },
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
        url: "https://drive.google.com/file/d/13bz8deeEcQ6Mog-6oSPAT1B4fpBis409/view",
        icon: ResumeIcon,
      },
      {
        name: "Portfolio",
        url: "https://iamsoorya.blogspot.com/",
        icon: Globe,
      },
    ],
  },
  work: [
    {
      company: "Goldman Sachs · Core Data Engineering",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      title: "Vice President → Lead Software Engineer",
      start: "2021",
      end: "Present",
      description:
        "Data Lake → Lead for firm enterprise Data Lake platform - ingest, sandbox, simulator services. Overseeing 160K unique datasets ingesting 180K pipelines per day for reporting & analytics use cases.",
      description2:
        "Lakehouse → Designing and building the components for next generation of data platform built on cloud-native Lakehouse architecture. Leading the migration effort from Lake to Lakehouse to cut down capital cost by identifying refiners to migrate to cloud. Building pipelines for ingestions, demising refiners and moving unused data to cold storage.",
    },
    {
      company: "",
      link: "",
      title: "Associate Software Engineer",
      start: "2020",
      end: "2021",
      description:
        "Designed and Developed various components of Data Lake → AWS S3 Ingestions, Data Partitioner, Snowflake Ingestions, Simulator environment for performance tuning and error reduction.",
      description2: "",
    },
    {
      company: "",
      link: "",
      title: "Analyst Software Engineer",
      start: "2017",
      end: "2020",
      description:
        "Contributed to the core backend metadata services for data cataloging, governance, and refinement for early stage enterprise Data Lake platform. Migrated ingest framework from MapReduce to Apache Flink.",
      description2: "",
    },
    {
      company: "The University of Texas at Dallas",
      link: "https://cs.utdallas.edu/community/organizations/",
      title: "Big Data Instructor",
      start: "2016",
      end: "2017",
      description:
        "Developed competency among 500+ students and 300+ industry professionals by conducting hands-on workshops and seminars on Big Data technologies.",
      description2: "",
    },
    {
      company: "Infosys Limited",
      link: "https://www.accc.gov.au/system/files/Telstra%20Revised%20Cost%20Allocation%20Framework%20%28Public%20Version%29.pdf",
      title: "Software Engineer",
      start: "2013",
      end: "2015",
      description:
        "Developed, optimized and delivered processed extracts on a Data Warehouse ETL platform → Network Decision Support Database for Telstra Corporation, Australia.",
      description2: "",
    },
    {
      company: "",
      link: "",
      title: "Software Engineer Intern",
      start: "Feb 2013",
      end: "May 2013",
      description:
        "Developed Online Shopping Cart that markets seasonal clothes to customers based on their geolocation. Rapidly prototyped new capabilities to ensure feasibility of the project.",
      description2: "",
    },
  ],
  education: [
    {
      school: "University of Texas at Dallas",
      degree: "Master of Science in Computer Science · Data Science Major",
      start: "2015",
      end: "2017",
    },
    {
      school: "Anna University",
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
    "C++",
  ],
  technologies: [
    "AWS",
    "Flink",
    "HDFS",
    "HBase",
    "Iceberg",
    "Kafka",
    "Snowflake",
    "Apache Avro",
    "Apache Parquet",
    "MapReduce",
    "Spark",
    "Hive",
    "REST",
    "JUnit",
    "CI/CD",
    "Git",
    "Maven",
    "Gradle",
    "NoSQL",
    "Mongo DB",
    "Bash Shell Script",
    "Pandas",
    "SAP Sybase IQ",
  ],
  mentorship: [
    {
      title: "GS Campus Recruiting Coordinator · North Americas",
      start: "2019",
      end: "Present",
      description:
        "Leading and mentoring the recruiting team to identify talents for Goldman Sachs Engineering Division across the United States & Canada.",
    },
    {
      title: "UT Dallas Scouting Team",
      start: "2020",
      end: "Present",
      description:
        "Organized various events at The University of Texas at Dallas representing Goldman Sachs.",
    },
    {
      title: "Coach for Goldman Sachs BAI/HLAI",
      start: "2021",
      end: "Present",
      description:
        "Served as mentor & coach to interns, analysts, and associates as part of Black Analyst Initiative/Hispanic, Latinx Analyst Initiative to encourage diversity across the firm.",
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
      description: "Designed a complete database for a car rental system with all the features. Database was designed using PLSQL",
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
