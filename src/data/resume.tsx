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
    "Software Engineer",
  about:
    "Highly skilled software developer with 10 years of experience in designing, developing, leading and maintaining data-intensive distributed systems and enterprise applications.",
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
        url: "https://drive.google.com/file/d/12Er2HjZSvr9IYpwIkOKrIqq0-EXg-YzE/view",
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
      company: "Goldman Sachs",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      title: "Vice President → Core Data Engineering",
      start: "2021",
      end: "Present",
      description:
        "Data Lake → Lead for the firm’s enterprise Data Lake platform, overseeing core services (ingest, sandbox, and simulator) to support reporting and analytics across ~160K unique datasets ingesting ~180K daily data pipelines.",
      description2:
        "Spearheaded the data & operational catalog, and built the ingest application using HBase, Flink, HDFS, and Hadoop YARN.",
      description3:
        "Streamlined SDLC and reduced time to production by 75% through the adoption of blue/green deployment strategy.",
      description4:
        "Lakehouse → Lead Architect for Lake to Lakehouse migration, designing and implementing ingest migration architecture to enhance performance and reduce costs.",
      description5:
        "Engineered parallel ingest components, enabling dual ingest pipelines for seamless migration, enhancing scalability, and creating a failover environment for greater reliability.",
      description6:
        "Designed workflows to identify and decommission legacy refiners, datastores and migrated unused data to AWS S3 Glacier, resulting in ~$500k in quarterly storage costs savings",
      description7:
        "Collaborated with Snowflake Engineers to develop the Snowpark Migration Accelerator tool, facilitating the categorization of refiners for auto-migration to the Lakehouse and streamlining the migration process.",
      description8:
        "Managed and mentored junior and mid-level developers, providing regular coaching through 1:1 sessions and career development planning."
    },
    ],
    work2: [
    {
      company: "",
      link: "",
      title: "Associate Software Engineer",
      start: "2020",
      end: "2021",
      description:
        "Architected and developed key components of Data Lake, including AWS S3 Ingest service, Data Partitioner, Snowflake Ingest service, Avro-Parquet Scanner & Converter utility, ensuring high reliability and on-time delivery.",
      description2:
        "Built a Simulator tool that enabled early bug detection, fostered developer mindfulness, and improved performance tuning, resulting in an 80% increase in customer satisfaction.",
    },
    {
      company: "",
      link: "",
      title: "Analyst Software Engineer",
      start: "2017",
      end: "2020",
      description:
        "Contributed to the core backend metadata services for data cataloging, ingest and refinement for early stage enterprise Data Lake platform.",
      description2:
        "Migrated ingest framework from legacy MapReduce to Apache Flink resulting in an average data availability latency reduction of 25% and memory reduction of 33%.",
    },
  ],
  work3:[
    {
      company: "Infosys Limited, India",
      link: "https://www.accc.gov.au/system/files/Telstra%20Revised%20Cost%20Allocation%20Framework%20%28Public%20Version%29.pdf",
      title: "Software Engineer",
      start: "2013",
      end: "2015",
      description:
        "Developed, optimized and delivered processed extracts on a Data Warehouse ETL platform → Network Decision Support Database for Telstra Corporation, Australia.",
      description2:
        "Achieved 100% predictability by building an Emergency Alert Solution to warn communities under fire and flood danger in Australia.",
    },
    {
      company: "",
      link: "",
      title: "Software Engineer Intern",
      start: "Feb 2013",
      end: "May 2013",
      description:
        "Developed Online Shopping Cart that markets seasonal clothes to customers based on their geolocation.",
      description2:
        "Rapidly prototyped new capabilities to ensure feasibility of the project.",
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
  volunteering: [
    {
      title: "Mentor → Goldman Sachs Emerging Leaders Series (ELS)",
      start: "2024",
      end: "2025",
      description:
        "Mentored sophomore students to cultivate essential industry skills that will help them become better engineers and explore opportunities at Goldman Sachs.",
    },
    {
      title: "Mentor → Goldman Sachs BAI/HLAI Network",
      start: "2021",
      end: "2025",
      description:
        "Mentoring interns, analysts, and associates through the Black Analyst Initiative and Hispanic/Latinx Analyst Initiative to promote diversity within Goldman Sachs.",
    },
    {
      title: "GS Campus Recruiting Coordinator · North Americas",
      start: "2019",
      end: "2025",
      description:
        "Leading and mentoring the recruiting team to identify and hire talents for Goldman Sachs Engineering Division across the United States & Canada.",
    },
    {
      title: "UT Dallas Scouting Team",
      start: "2020",
      end: "2025",
      description:
        "Organized Hackathons and various engineering events at The University of Texas at Dallas leading Goldman Sachs Engineers.",
    },
    {
      title: "Big Data Instructor · UT Dallas",
      start: "2016",
      end: "2017",
      description:
        "Developed competency among 500+ students and 300+ industry professionals by conducting hands-on workshops and seminars on Big Data technologies.",
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
