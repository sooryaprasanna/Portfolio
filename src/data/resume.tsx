import { ResumeIcon } from "@/components/icons/ResumeIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Github, Globe } from "lucide-react";

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
  personalWebsiteUrl: "https://sooryaprasanna.com",
  contact: {
    email: "https://www.sooryaprasanna.com/p/contact.html",
    social: [
      {
        name: "Resume",
        url: "https://www.dropbox.com/s/wrzshwgysdxiahn/Resume.pdf",
        icon: ResumeIcon,
      },
      {
        name: "Portfolio",
        url: "https://www.sooryaprasanna.com/",
        icon: Globe,
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
        "Lakehouse → Designing and building the components for next generation of data platform built on cloud-native Lakehouse architecture. Leading the migration effort from Lake to Lakehouse to cut down capital cost by identifying refiners to migrate to cloud, building pipelines for ingestions and demise unused data to cold storage.",
    },
    {
      company: "",
      link: "",
      title: "Associate Software Engineer",
      start: "2020",
      end: "2021",
      description:
        "Designed and Developed various components of Data Lake → AWS S3 Ingestions, Data Partitioner, Snowflake Ingestions, Simulator environment for performance tuning and error reduction.",
    },
    {
      company: "",
      link: "",
      title: "Analyst Software Engineer",
      start: "2017",
      end: "2020",
      description:
        "Contributed to the core backend metadata services for data cataloging, governance, and refinement for early stage enterprise Data Lake platform. Migrated ingest framework from MapReduce to Apache Flink.",
    },
    {
      company: "The University of Texas at Dallas",
      link: "https://cs.utdallas.edu/community/organizations/",
      title: "Big Data Instructor",
      start: "2016",
      end: "2017",
      description:
        "Developed competency among 500+ students and 300+ industry professionals by conducting hands-on workshops and seminars on Big Data technologies.",
    },
    {
      company: "Infosys Limited",
      link: "https://www.accc.gov.au/system/files/Telstra%20Revised%20Cost%20Allocation%20Framework%20%28Public%20Version%29.pdf",
      title: "Software Engineer",
      start: "2013",
      end: "2015",
      description:
        "Developed, optimized and delivered processed extracts on a Data Warehouse ETL platform → Network Decision Support Database for Telstra Corporation, Australia.",
    },
    {
      company: "",
      link: "",
      title: "Software Engineer Intern",
      start: "Feb 2013",
      end: "May 2013",
      description:
        "Developed Online Shopping Cart that markets seasonal clothes to customers based on their geolocation. Rapidly prototyped new capabilities to ensure feasibility of the project.",
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
    "HDFS",
    "MapReduce",
    "Apache Flink",
    "Apache Spark",
    "Apache Kafka",
    "Apache Hive",
    "Apache HBase",
    "Apache Avro",
    "Apache Parquet",
    "Apache Zookeeper",
    "Apache Iceberg",
    "AWS",
    "Snowflake",
    "Mongo DB",
    "Bash Shell Script",
    "Pandas",
    "CI/CD",
    "REST",
    "Git",
    "Github",
    "Gitlab",
    "Maven",
    "Gradle",
    "MySQL",
    "NoSQL",
    "JUnit",
    "SAP Sybase IQ",
  ].sort(),
  projects: [
    {
      title: "Portfolio",
      techStack: [
        "Side Project",
        "Next.js",
        "React",
      ],
      description: "Personal webpage built using Next.js, deployed on Vercel.",
      link: {
        label: "sooryaprasanna.com",
        href: "https://www.sooryaprasanna.com/",
      },
    },
    {
      title: "Yelp Dataset Challenge",
      techStack: [
        "Java",
        "Scala",
        "PigLatin",
        "Big Data",
      ],
      description: "Prediction of Yelp Review Star Rating → Sentiment Analysis & Recommendation Model.",
      link: {
        label: "",
        href: "",
      },
    },
    {
        title: "Online Tech Store",
        techStack: [
          "Javascript",
          "PHP",
          "CSS",
          "MySQL",
        ],
        description: "Developed scalable web application to market wide range of tech products.",
        link: {
          label: "",
          href: "",
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
        href: "",
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
        href: "",
      },
    },
    {
      title: "Pima Dataset Analysis",
      techStack: [
        "R Programming",
        "Machine Learning",
      ],
      description: "Implemented Naive Bayes, SVM and KNN classifiers across complex multivariate dataset with 768 instances and 8 attributes with 75% accuracy.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Car Rental System",
      techStack: [
        "PLSQL",
        "Design",
      ],
      description: "Designed a database for rental system using PLSQL stored procedures to update reservations, check insurance information and validate offer codes.",
      link: {
        label: "",
        href: "",
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
        href: "",
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
        href: "",
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
        href: "",
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
        href: "",
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
        href: "",
      },
    },
  ],
} as const;
