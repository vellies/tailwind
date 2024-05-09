'use client';

import Image from "next/image";
import Linkedin from "@@/assets/img/linkedin.jpeg"
import JobSearch from "@@/assets/img/JobSearch1.png"
import Header from "@@/app/header/page";
import { Button } from "@@/components/ui/button"
import axios from 'axios';
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function Google() {

    const [data, setData] = useState<any>(
        [
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixJLG0sbSxlLG4scyxlLHQsZSxrLDEsQSxuLHksdyxoLGUscixlLEo=",
                "title": "Blockchain Developer",
                "company": "Immensetek",
                "description": "Job Title: Senior Blockchain Developer\n\nLocation: Remote\n\nResponsibilities\n• Design and develop decentralized applications (DApps) and smart contracts using blockchain platforms such as Ethereum, Hyperledger, or others.\n• Architect and implement blockchain protocols, consensus mechanisms, and cryptographic algorithms to ensure security, scalability, and performance.\n• Collaborate with product managers, designers, and other developers to define project requirements, specifications, and timelines.\n• Conduct code reviews, provide feedback, and mentor junior team members to promote best practices and coding standards in blockchain development.\n• Integrate blockchain solutions with existing systems and applications, ensuring seamless interoperability and data integrity.\n• Stay updated with emerging blockchain technologies, tools, and industry trends, and propose innovative solutions to address business challenges.\n• Research and evaluate third-party libraries, frameworks, and tools to... optimize development processes and enhance platform capabilities.\n\nQualifications\n• Bachelor's degree in Computer Science, Engineering, or related field.\n• 4+ years of professional experience as a Blockchain Developer, with a strong portfolio showcasing your work in blockchain development.\n• Proficiency in blockchain platforms such as Ethereum, Hyperledger Fabric, Corda, or others.\n• Solid understanding of blockchain fundamentals, including decentralized consensus, cryptographic algorithms, and smart contract development.\n• Experience with programming languages commonly used in blockchain development, such as Solidity, Go, or Rust.\n• Familiarity with blockchain development tools and frameworks, such as Truffle, Remix, Web3.js, or Hyperledger Composer.\n\nSkills: blockchain,hyperledger,algorithms,blockchain development,computer science",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmFjGeYutkgahjaVjckQLKcJ9_WThWhLTRNyV&s=0",
                "location": "Anywhere",
                "employmentType": "Full-time",
                "datePosted": "14 hours ago",
                "salaryRange": "",
                "jobProviders": [
                    {
                        "jobProvider": "LinkedIn",
                        "url": "https://in.linkedin.com/jobs/view/blockchain-developer-at-immensetek-3921021766?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "UyxlLG4saSxvLHIsICxCLGwsbyxDLGEsbCxpLGYsbyxyLG4saSxhLDMsQSxuLHksdyxoLGUscixlLEo=",
                "title": "Senior Blockchain Developer",
                "company": "California Software",
                "description": "Job Description\n\nAbout the Role:\n\nWe seek a seasoned Ethereum Blockchain Developer with a profound understanding of the Ethereum ecosystem, smart contracts, and DApp development. The ideal candidate will have hands-on experience in Layer 2 and Layer 3 solutions, aiming to enhance scalability and reduce transaction costs on the Ethereum network.\n\nResponsibilities\n\n1. Smart Contract Development: Design, implement, and maintain smart contracts on the Ethereum blockchain.\n\n2. Collaboration: Work closely with cross-functional teams to define project requirements and convert them into executable technical solutions.\n\n3. Blockchain Solutions: Develop scalable and secure solutions, emphasizing reliability and efficiency within the Ethereum ecosystem.\n\n4.Decentralized GPU Computation: Develop and optimize GPU-based decentralized computation solutions to enhance data processing and transaction execution.\n\n4. Debugging and Troubleshooting: Conduct in-depth debugging of applications to identify... and rectify issues.\n\n5. Research and Development: Keep abreast of the latest Ethereum updates, integrating innovative features and enhancements.\n\n7. Documentation and Best Practices: Ensure thorough documentation of code and processes, adhering to best practices in development.\n\nPreferred Domains\n\nInfra, Protocol, Depin, Decentralised Computing\n\nRequirements\n\n1.At least 7+ years in blockchain development.\n\n2.Solidity and EVM Expertise: Demonstrated experience with Solidity and a deep understanding of the Ethereum Virtual Machine (EVM).\n\n3. Tools Proficiency: Skilled in deploying smart contracts using Truffle, Remix, or similar, and building DApps with Web3.js, Embark, or equivalent frameworks.\n\n4. Blockchain Fundamentals: Familiarity with blockchain protocols, consensus mechanisms, and the nuances of decentralized technology.\n\n5. Problem-Solving Skills: Exceptional analytical skills with a keen eye for detail, capable of solving complex technical challenges.\n\n6. Collaborative Spirit: Excellent communication and teamwork abilities, thriving in a dynamic, fast-paced environment.\n\n7. Open Source Contributions: Previous contributions to open-source projects are highly regarded.\n\nAdvantages of Joining Us\n\n1. Diverse Technological Exposure: Engage with a wide array of blockchain technologies and platforms.\n\n2. Innovative Team: Collaborate with a group of passionate blockchain and AI experts in a culture driven by innovation and continuous learning.\n\n3. Creative Freedom: Enjoy the flexibility to pursue your own projects and ideas within a supportive ecosystem.\n\n4. Competitive Compensation: Benefit from a comprehensive compensation package, complemented by opportunities for career progression.\n\nCompany Profile:\n\nThe story of Calsoft began in Chennai, India in 1992. The challenges and opportunities faced by all businesses due to the impact of COVID-19 have led Calsoft to adapt and thrive in its environment, maintaining and strengthening enduring partnerships with clients, just as it has done over the past 30 years. This ongoing pandemic has accelerated the shift of clients towards digital business models. In response, Calsoft is currently developing and launching CS-Digital, a cloud-based software industry park, where CS-Cloud shares the same boat.\n\nCalsoft specializes in the development and implementation of robust technology solutions for Life Sciences R&amp;D. Our unparalleled combination of domain experience and technology expertise allows us to deliver efficient and practical end-to-end solutions in compliance with HIPAA, GXP, CSV, 21 CFR Part 11, and other applicable regulatory guidelines. We specialize in developing and implementing comprehensive Clinical Trials Software Platforms such as CS-SAFETY, CS-DAC, CS-eTRIALS, CS-RMS, and CS-CTMS for pharmaceutical, biotech, and life sciences companies. Additionally, our next-generation and highly secure eCommerce platform, CS-eCom, is designed to transform the e-commerce landscape through AI integration for both B2B (business-to-business) and B2C (business-to-customer) segments. CS-eCom empowers businesses to create unique and engaging shopping experiences.\n\nRecent research conducted by McKinsey reveals that 96% of surveyed B2B and B2C businesses have shifted their sales models to favor online and eCommerce-based selling. This shift has proven to be fruitful, with a persistent migration in shopper behavior towards digital commerce. Calsoft, guided by its core values of kindness, determination, perseverance, striving for success, and sharing and growing with customers, is embarking on a new journey to achieve its vision and mission, aiming for great accomplishments",
                "image": "https://fonts.gstatic.com/s/i/googlematerialicons/auto_stories/v8/gm_grey-24dp/1x/gm_auto_stories_gm_grey_24dp.png",
                "location": "Anywhere",
                "employmentType": "Full-time",
                "datePosted": "14 hours ago",
                "salaryRange": "",
                "jobProviders": [
                    {
                        "jobProvider": "LinkedIn",
                        "url": "https://in.linkedin.com/jobs/view/senior-blockchain-developer-at-california-software-3917534972?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Jooble",
                        "url": "https://in.jooble.org/jdp/4960952648116588315?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Web3 Universe",
                        "url": "https://web3universe.today/job/senior-ethereum-blockchain-developer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixCLG8scyxjLGgsICxHLHIsbyx1LDgsQixlLG4sZyxhLGwsdSxyLHU=",
                "title": "Blockchain Developers",
                "company": "Bosch Group",
                "description": "Job Description\n\nMandatory Skills:\n• 3-7 years of hands on experience on Blockchain practices like Ethereum, Hyperledger\n• Hands-on Java/J2EE/ AngularJS/React/Spring MVC\n• Ethereum/Hyper Ledger/IOTA – Coding in Solidity, NodeJS, Python, GO Lang, Viper\n• REST Service development using popular frameworks (spring boot, cxf, resteasy..)\n• Knowledge of RDBMS - Oracle and/or SQL server, NoSQL databases like MongoDB\n• Hands on experience on build frameworks (Maven, Ant…)\n• Applied knowledge of application servers such as Tomcat, Jboss, and Websphere\n• Knowledge on continuous integration (CI) technologies like Jenkins, SonarQube\n• Exposer to any cloud-based application development\n• Hands on experience in automated testing Junit, TesNg\n• Experience of working in Scrum and test-driven development SDLC model\n• Capability to work with BIG DATA stacks (Kafka, SPARK)\n• Experience hands on UI frameworks JSF, JQuery, Prime Faces\n• OOAD design. Knowhow of UML and common design patterns, usage of... tools like Enterprise Architect\n• Knowhow of requirement management tool like Doors/equivalent\n\nQualifications\n\nBE,BTech MCA, MS or MTech\n\nAdditional Information\n\n3-7 years",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYtXHPp--R9p1ik5Zg5HCYQZ_Xbte59COmQiY&s=0",
                "location": "Bengaluru, Karnataka, India",
                "employmentType": "Full-time",
                "datePosted": "9 days ago",
                "salaryRange": "",
                "jobProviders": [
                    {
                        "jobProvider": "SmartRecruiters Job Search",
                        "url": "https://jobs.smartrecruiters.com/BoschGroup/743999978615353-blockchain-developers?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Glassdoor",
                        "url": "https://www.glassdoor.co.in/job-listing/blockchain-developers-bosch-group-JV_IC2940587_KO0,21_KE22,33.htm?jl=1009223580865&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Foundit.in",
                        "url": "https://www.foundit.in/job/senior-blockchain-developer-careerpaths-bengaluru-bangalore-22991239?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Bayt.com",
                        "url": "https://www.bayt.com/en/india/jobs/blockchain-developers-70886214/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Jooble",
                        "url": "https://in.jooble.org/jdp/5415649853977778500?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "SimplyHired",
                        "url": "https://www.simplyhired.co.in/job/Vz9XJeweymbeRhZkJ7vjKy3X9OuRKjdm7mal-xaQVaBwdI9jmx3zcQ?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Glassdoor",
                        "url": "https://www.glassdoor.com/job-listing/blockchain-developers-bosch-group-JV_IC2940587_KO0,21_KE22,33.htm?jl=1009223580865&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Adzuna",
                        "url": "https://www.adzuna.in/details/4672041108?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixDLG8sZCxlLHgsICxULGUsYyxoLDQsQSxuLHksdyxoLGUscixlLEo=",
                "title": "Blockchain Developer",
                "company": "Codex Tech-IT LLC",
                "description": "Job Responsibilities:\n\n1. Design, develop, test, and deploy smart contracts to support the business logic and applications of a blockchain platform.\n\n2. Write secure and efficient code using smart contract languages like Solidity, Rust, JavaScript, and others.\n\n3. Engage in smart contract development and integration on public and consortium chains, such as Ethereum, Solana, Stellar, etc.\n\n4. Proficient in Soroban smart contract platform.\n\n5. Responsible for smart contract optimization and maintenance to ensure system stability and performance.\n\n6. Conduct code review for existing contracts to guarantee code quality and security.\n\n7. Collaborate closely with the team to ensure end-to-end quality of the entire blockchain application.\n\n8. Actively participate in project planning and requirements analysis, working with project team members to formulate solutions.\n\nQualifications:\n\n1. Bachelor's degree or higher in Computer Science, Software Engineering, or a relevant field.\n\n2. At least... five years of software development experience, with a minimum of three years focused on smart contracts and blockchain technologies.\n\n3. Proficiency in Solidity and Rust, with a track record of successfully deploying large-scale smart contracts on Ethereum and at least one other blockchain platform (such as Solana or Stellar).\n\n4. Skilled in using smart contract development frameworks and tools (e.g., Truffle, Hardhat, Anchor), and in interacting with smart contracts using programming languages such as JavaScript/TypeScript.\n\n5. Direct involvement or leadership in the development and deployment of at least one complete DeFi protocol (e.g., decentralized exchanges DEXs, liquidity pools LPs, lending platforms, automated market makers AMMs, stablecoin systems).\n\n6. Practical experience in integrating off-chain services with smart contracts, such as market data feeds, meta-transactions services, or decentralized identity systems.\n\n7. Experience in projects related to NFT issuance, such as the development of smart contracts for minting, trading, and copyright management of artwork, collectibles, and game assets.\n\n8. Experience in developing Stellar smart contracts using the Soroban platform or related tools, or demonstrating the ability to quickly learn and apply new technology.\n\n9. A public, verifiable blockchain project involvement, such as contributions to code or discussions on GitHub.\"\n\nJob Types: Full-time, Fresher, Internship\n\nPay: ₹45,000.00 - ₹50,000.00 per month\n\nSchedule:\n• Evening shift\n• Fixed shift\n• Monday to Friday\n\nTipe Lokasi:\n• Remote\n\nEducation:\n• Bachelor's (Preferred)\n\nExperience:\n• total work: 3 years (Preferred)\n• software development: 3 years (Preferred)\n• HTML5: 3 years (Preferred)\n\nWork Location: Remote\n\nSpeak with the employer\n+91-XXXXXXXXXX",
                "image": "",
                "location": "Anywhere",
                "employmentType": "Full-time and Internship",
                "datePosted": "13 hours ago",
                "salaryRange": "₹45K–₹50K a month",
                "jobProviders": [
                    {
                        "jobProvider": "Indeed",
                        "url": "https://in.indeed.com/viewjob?jk=410b2f107dfd3632&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Glassdoor",
                        "url": "https://www.glassdoor.co.in/job-listing/blockchain-developer-codex-tech-it-llc-JV_KO0,20_KE21,38.htm?jl=1009270645006&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Hacendo.com",
                        "url": "https://in.hacendo.com/job/927992114/senior-smart-contract-developer-karnataka/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Web3 Universe",
                        "url": "https://web3universe.today/job/senior-smart-contract-developer-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixHLGksYSxrLGEsYSwgLEMsYSxwLDEsQSxuLHksdyxoLGUscixlLEo=",
                "title": "Blockchain Developer Intern",
                "company": "Giakaa Capital",
                "description": "Job Opportunity: Blockchain Developer Intern at Giakaa Capital\n\nAbout Giakaa Capital:**\n\nGiakaa Capital is a leading venture capital firm specializing in digital public infrastructure and blockchain-based projects. We are committed to fostering the mass adoption of blockchain technology and creating significant social impacts. Our projects align with the United Nations Sustainable Development Goals (UN SDGs), focusing on innovative solutions to global challenges.\n\nRole Overview:\n\nGiakaa Capital is looking for a motivated Blockchain Developer Intern to join our team. This role is ideal for candidates who are passionate about blockchain technology and eager to develop new skills in a cutting-edge field. You will work alongside experienced developers and contribute to the development of blockchain solutions that address real-world problems.\n\nResponsibilities:\n\n- Assist in the development and maintenance of blockchain-based applications.\n\n- Write smart contracts and help in deploying them... to blockchain.\n\n- Collaborate with the team to design blockchain system architecture.\n\n- Test and debug blockchain applications to ensure robustness and performance.\n\n- Document new solutions as well as maintaining that of existing ones.\n\nQualifications:\n\n- Currently pursuing or recently graduated in Computer Science, Software Engineering, or a related field.\n\n- Strong foundation in software development and familiarity with programming languages such as JavaScript, Python, or Solidity.\n\n- Interest and basic understanding of blockchain technology and its application.\n\n- Problem-solving skills and ability to work collaboratively in a team environment.\n\n- Proactive in learning new technologies and concepts related to blockchain and decentralized systems.\n\nWhat We Offer:\n\n- A platform to work on meaningful projects in the blockchain space.\n\n- Exposure to the venture capital industry and innovative blockchain projects.\n\n- A dynamic and supportive work environment with mentorship from industry experts.\n\n- Opportunities to develop professional skills and network within the blockchain and VC community.\n\nDuration: This is a 3 Months paid internship position.\n\nHow to Apply:\n\nPlease send your resume along with a cover letter detailing your interest in blockchain technology and your career aspirations in this field. Include any relevant projects or coursework in blockchain development",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4wfue6gX5pyK-vx1HSqoH7mbx8Fiz5ugSc9a&s=0",
                "location": "Anywhere",
                "employmentType": "Temp work and Internship",
                "datePosted": "2 days ago",
                "salaryRange": "",
                "jobProviders": [
                    {
                        "jobProvider": "LinkedIn",
                        "url": "https://in.linkedin.com/jobs/view/blockchain-developer-intern-at-giakaa-capital-3918832316?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "Rix1LGwsbCxzLHQsYSxjLGssICxQLGUscyx0LG8sICxULGUsYyxoLDEsRyx1LHIsdSxnLHIsYSxtLCw=",
                "title": "Fullstack Developer - Blockchain",
                "company": "Pesto Tech",
                "description": "Job Title: Fullstack Blockchain Developer\n\nExperience: 4+ Years\n\nTech Stack: Blockchain, Typescript, Nodejs, Microservices, NextJS, TailwingCSS, WebGL\n\nLocation: Remote\n• *Note: This position is with one of our hiring partners\n\nPosition Overview:\n\nAs a Fullstack Blockchain Developer, you will play a pivotal role in developing innovative blockchain solutions and digital art experiences. You will work closely with our cross-functional team to design, implement, and optimize user-centric applications, leveraging cutting-edge technologies such as TypeScript, Next.js, Node.js, and smart contracts on Ethereum, Tezos, and Base blockchains. From frontend interface enhancements to backend infrastructure optimization, you will have the opportunity to contribute to every stage of the development lifecycle and make a lasting impact on our projects. This role offers flexibility and autonomy, allowing you to collaborate with us on a freelance basis while pushing the boundaries of technology and... creativity. If you are passionate about blockchain innovation and enjoy working on diverse and challenging projects, we invite you to join our team and be part of our exciting journey in the digital art space.\n\nResponsibilities\n• Implement and optimize user interface features using Next.js and TailwindCSS.\n• Develop and integrate social media login functionality to enhance user accessibility and engagement.\n• Design and deploy microservices using Node.js and Lambda services.\n• Develop custom indexers for Ethereum, Tezos, and Base blockchains.\n• Write and deploy smart contracts on Ethereum, Tezos, and Base for unique art minting processes.\n• Implement wallet authentication and streamline wallet management interfaces.\n• Optimize PostgreSQL database queries and structures for high performance.\n• Utilize Go for performance-critical backend services.\n• Conduct A/B testing on various UI/UX elements to determine user-friendly design choices.\n• Iterate and deploy UI/UX fixes based on user feedback.\n• Integrate additional payment gateways for more flexible purchasing options.\n• Develop a feature for users to highlight and promote selected art projects on their profiles.\n\nRequirements\n• Bachelor's degree in Computer Science, Engineering, or related field (preferred).\n• Minimum of 4 years of fullstack development experience, with expertise in blockchain technologies.\n• Proven track record of successfully delivering complex projects from conception to deployment.\n• Excellent problem-solving skills and ability to work independently.\n• Strong communication skills and ability to collaborate effectively with cross-functional teams.\n• Hustler mentality with a passion for learning and exploring new technologies.\n\nAbout Pesto Tech:\n\nPesto is where software developers go to build their career path for the next 5 years. We don't just offer jobs; we provide unparalleled opportunities for your growth and success in the dynamic landscape of Tech Jobs",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrNtltUelZkCf4t1fapr7IWapX8kZRnVF6SKK&s=0",
                "location": "Gurugram, Haryana, India",
                "employmentType": "Full-time",
                "datePosted": "6 days ago",
                "salaryRange": "",
                "jobProviders": [
                    {
                        "jobProvider": "Lever",
                        "url": "https://jobs.lever.co/PestoTech/375230f9-7bbe-41d2-a102-048171724503?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixGLGwsaSxwLHAsZSxkLC4sYSxpLDgsQSxuLHksdyxoLGUscixlLEI=",
                "title": "Blockchain Developer",
                "company": "Flipped.ai",
                "description": "Blockchain Developer\n\nSummary:\n\nYou will play a crucial role in designing, implementing, and optimizing smart contracts and zero-knowledge proof (ZK) circuits using Solidity and Rust programming languages. You will work closely with our development team to build scalable and secure blockchain solutions that leverage zero-knowledge proofs for privacy and scalability enhancements.\n\nIt is an amazing opportunity to work on cutting edge fintech Key Responsibilities:\n• Design, develop, and deploy smart contracts on Ethereum and other blockchain platforms using Solidity.\n• Implement zero-knowledge proof circuits and protocols in Rust for privacy-preserving and scalable blockchain applications.\n• Collaborate with the research team to explore and implement cutting-edge cryptographic techniques for zero-knowledge proofs.\n• Optimize smart contracts and zero-knowledge proof circuits for performance, scalability, and security.\n• Conduct code reviews and provide constructive feedback to ensure the... quality and robustness of the codebase.\n• Stay updated with the latest advancements in blockchain technology, zero-knowledge proofs, and decentralized finance (DeFi).\n• Work closely with cross-functional teams including software engineers, and product managers to deliver high-quality blockchain solutions.\n• Contribute to the development of technical documentation, including specifications, architecture diagrams, and developer guides.\n\nJob Type: Full-time\n\nPay: ₹1,500,000.00 - ₹4,000,000.00 per year\n\nEducation:\n• Bachelor's (Preferred)\n\nExperience:\n• total work: 3 years (Preferred)\n\nWork Location: Remote",
                "image": "",
                "location": "Anywhere",
                "employmentType": "Full-time",
                "datePosted": "6 days ago",
                "salaryRange": "₹1.5M–₹4M a year",
                "jobProviders": [
                    {
                        "jobProvider": "Indeed",
                        "url": "https://in.indeed.com/viewjob?jk=6f4a020c494f3c92&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Glassdoor",
                        "url": "https://www.glassdoor.co.in/job-listing/blockchain-developer-flipped-ai-JV_KO0,20_KE21,31.htm?jl=1009264909253&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "LinkedIn",
                        "url": "https://in.linkedin.com/jobs/view/blockchain-zk-developer-rootpe-at-kira-studio-3907104522?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Shine",
                        "url": "https://www.shine.com/jobs/blockchain-developerrootpe-permanent/kira-studio/14766224?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Hirist",
                        "url": "https://www.hirist.tech/j/blockchain-developer-solidity-2-10-yrs-1320991.html?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Jooble",
                        "url": "https://in.jooble.org/jdp/1568318254431616149?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Adzuna",
                        "url": "https://www.adzuna.in/details/4662206701?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Webbtree",
                        "url": "https://app.webbtree.com/company/kirastudio/jobs/blockchain-zk-developerrootpe-13b1d1?utm_source=google&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixQLGUscixmLGUsYyx0LCAsZSxMLDMsRCxlLGwsaCxpLCwsICxJLG4=",
                "title": "Blockchain Developer",
                "company": "Perfect eLearning",
                "description": "Location: Badarpur, New Delhi\n\nExperience Required: 3+ years\n\nJob Type: Full-time, Permanent\n\nAbout Us:\nWe are a dynamic and innovative tech company dedicated to pushing the boundaries of blockchain technology. With a passion for cutting-edge development and a commitment to making a difference, we are seeking skilled professionals to join our team in multiple domains. If you're a tech enthusiast with expertise in blockchain development, we want to hear from you!\n\nKey Responsibilities:\n• Develop and implement blockchain solutions using various programming languages and frameworks.\n• Collaborate with cross-functional teams to design and deploy decentralized applications (dApps).\n• Write smart contracts and deploy them on blockchain platforms.\n• Conduct thorough testing and debugging of blockchain applications to ensure functionality and security.\n• Stay updated with the latest trends and developments in blockchain technology.\n• Contribute to the continuous improvement of development... processes and methodologies.\n• Provide technical guidance and mentorship to junior team members.\n\nSkills and Qualifications:\n• Bachelor's degree in Computer Science, Engineering, or related field.\n• Minimum 3 years of experience in blockchain development.\n• Proficiency in JavaScript, Web3.js, Ether.js, Solidity, Python, Go, Node.js, and other relevant programming languages and frameworks.\n• Hands-on experience with blockchain platforms such as Ethereum, Hyperledger, or Corda.\n• Strong understanding of cryptographic principles and distributed systems.\n• Experience with smart contract development and deployment.\n• Excellent problem-solving skills and attention to detail.\n• Ability to work both independently and collaboratively in a fast-paced environment.\n• Good communication and interpersonal skills.\n\nJob Types: Full-time, Permanent\n\nPay: ₹600,000.00 - ₹1,200,000.00 per year\n\nSchedule:\n• Day shift\n\nEducation:\n• Bachelor's (Preferred)\n\nExperience:\n• total work: 1 year (Preferred)\n• software development: 1 year (Preferred)\n• HTML5: 1 year (Preferred)\n\nWork Location: In person",
                "image": "",
                "location": "Delhi, India",
                "employmentType": "Full-time",
                "datePosted": "5 days ago",
                "salaryRange": "₹600K–₹1.2M a year",
                "jobProviders": [
                    {
                        "jobProvider": "Indeed",
                        "url": "https://in.indeed.com/viewjob?jk=b509763b20e5f8ef&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "Glassdoor",
                        "url": "https://www.glassdoor.co.in/job-listing/blockchain-developer-perfect-elearning-JV_IC2891544_KO0,20_KE21,38.htm?jl=1009265885647&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "SimplyHired",
                        "url": "https://www.simplyhired.co.in/job/T-ibPJjJ2nKYZ6GCUz-tKEda_DkEbWpRd4-hGNpO0yVNdQ1_Dp0tCA?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixULG8sayx5LG8sVCxlLGMsaCxpLDIsTixlLHcsICxELGUsbCxoLGk=",
                "title": "Blockchain Developers",
                "company": "TokyoTechie",
                "description": "• Responsibilities:\n• Hands-on technical exposure in implementing Blockchain technologies such as Ethereum and Hyperledger\n• Familiarity with Hyperledger Fabric and Solidity would be an added advantage\n• Experience with Smart contract development tools is a plus\n• Strong background in Javascript, Phyton &amp; Node JS\n• Experience in writing programs in scripting languages and deep understanding of its architecture\n• Strong understanding of REST/JSON based API integration\n• Understanding of Distributed Ledger technology, Blockchain ecosystem and structure\n• Experience working in an Agile and DevOps environment\n• Knowledge on Mining, Hashing, Elliptic Curve Cryptography(ECC) and P2P Networking\n• Extensive experience with progression of major projects from the planning stage through to implementation and completion\n• Effective communicator to all stakeholders and management during project consulting and analysis\n• Minimum work experience of 5 years full time in software development\n•... Experience Required: 1 - 5 Years\n• Education:\n• UG: B.Tech/B.E. Computers, B.Sc Any Specialization\n• PG: Any Postgraduate Any Specialization, Post Graduation Not Required, MCA Computers",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUggwec0HkvQhHz0mF-ON7HzfcIXUOVHPKBCfY&s=0",
                "location": "New Delhi, Delhi, India",
                "employmentType": "Full-time and Contractor",
                "datePosted": "8 days ago",
                "salaryRange": "",
                "jobProviders": [
                    {
                        "jobProvider": "LinkedIn",
                        "url": "https://in.linkedin.com/jobs/view/blockchain-developers-at-tokyotechie-3912866527?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    },
                    {
                        "jobProvider": "TechGig.com",
                        "url": "https://www.techgig.com/jobs/Blockchain-Developers/70005410?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            },
            {
                "id": "QixsLG8sYyxrLGMsaCxhLGksbixKLEUsVyxFLEwsTixNLEUsICxQLDEsSSxuLGQsaSxhLEosbyxiLCA=",
                "title": "Blockchain Developer",
                "company": "JEWELNME PRIVATE LIMITED",
                "description": "Job Description\n\nHiring for MERN Stack Developer. We Foresee a Blockchain Expert in You! The best technologists are technology agnostic and that builds a stronger foundation to lead the dynamic trends. Strengthening our trust in the same, we have created an exciting opportunity for MERN Stack developers to learn blockchain and grow with us. All we are looking for is working experience. (Minimum 1 to 3 years) as a MERN developer and a keen interest in fin-tech applications. As a rapidly growing company, we are always looking for professionals who have a penchant for new technologies.\n\nQualification: BCA / B.Sc. (IT) / B.Tech, candidates with MCA/M.Sc. (IT) preferred\n\nPrimary Skills:\n\nStrong working knowledge of Typescript, MongoDB, MySQL, Express\n\nStrong proficiency in TypeScript, and Javascript including DOM manipulation and the JavaScript object model, ES6\n\nHands-on experience in React JS\n\nStrong understanding of HTML5, CSS3\n\nStrong understanding of NodeJS fundamentals\n\nKnowledge and... experience working with PostgreSQL is a major plus\n\nExperience with ORM libraries\n\nFamiliarity with RESTful APIs\n\nKnowledge of tools like Git, Github, JIRA, Cucumber, Jasmine, and others that make coding more efficient and easier to share\n\nFamiliarity with working in either the AWS Cloud or Azure including Docker + Rubbernecks-based microservice deployment\n\nSecondary Skills:\n\nGood communication and design skills Experience in handling teams\n\nAt least 1-7 years of solid front-end and back-end software development experience\n\nAbility to understand business requirements and translate them into technical requirements\n\nRequirements\n\nQualification:\n\nMinimum 3 years of experience as Software Developer\n\nBack End Developers/ API Web Services Experience Mandatory\n\nFront-end React JS is mandatory\n\nNodeJS is mandatory\n\nOne RDBMS and one document database mandatory\n\nJob Type: Full-time\n\nPay: ₹300,000.00 - ₹600,000.00 per year\n\nSchedule:\n• Morning shift\n\nAbility to commute/relocate:\n• Mohali, Mohali, Punjab: Reliably commute or planning to relocate before starting work (Required)\n\nEducation:\n• Bachelor's (Preferred",
                "image": "",
                "location": "India",
                "employmentType": "Full-time",
                "datePosted": "6 days ago",
                "salaryRange": "",
                "jobProviders": [
                    {
                        "jobProvider": "Indeed",
                        "url": "https://in.indeed.com/viewjob?jk=75a278cd953066f8&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                    }
                ]
            }
        ]
    )
    const [isLoading, setLoading] = useState(true)
    const [searchIndex, setSearchIndex] = useState(0)
    const [previousButton, setPreviousButton] = useState(true)

    useEffect(() => {

    }, [data]);

    const getGoogleJob = async (index: any) => {
        await axios.get(
            'https://jobs-api14.p.rapidapi.com/list',
            {
                params: {
                    query: 'Blockchain Developer',
                    location: 'india',
                    language: 'en_GB',
                    remoteOnly: 'false',
                    employmentTypes: 'fulltime;parttime;intern;contractor',
                    index: index
                },
                headers: {
                    'X-RapidAPI-Key': '9b618d7d93mshee331c5f6eb017dp1c92bfjsn15bc4cd60af7',
                    'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
                }
            }
        )
            .then(function (response: any) {
                console.log(response);
                setData(response?.data?.jobs)
                setPreviousButton(index == 0 ? true : false)
            })
            .catch(function (error) {
                console.log(error);
            });

        // setPreviousButton(index == 0 ? true : false)
        // setData(
        //     [
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixJLG0sbSxlLG4scyxlLHQsZSxrLDEsQSxuLHksdyxoLGUscixlLEo=",
        //             "title": "Blockchain Developer",
        //             "company": "Immensetek",
        //             "description": "Job Title: Senior Blockchain Developer\n\nLocation: Remote\n\nResponsibilities\n• Design and develop decentralized applications (DApps) and smart contracts using blockchain platforms such as Ethereum, Hyperledger, or others.\n• Architect and implement blockchain protocols, consensus mechanisms, and cryptographic algorithms to ensure security, scalability, and performance.\n• Collaborate with product managers, designers, and other developers to define project requirements, specifications, and timelines.\n• Conduct code reviews, provide feedback, and mentor junior team members to promote best practices and coding standards in blockchain development.\n• Integrate blockchain solutions with existing systems and applications, ensuring seamless interoperability and data integrity.\n• Stay updated with emerging blockchain technologies, tools, and industry trends, and propose innovative solutions to address business challenges.\n• Research and evaluate third-party libraries, frameworks, and tools to... optimize development processes and enhance platform capabilities.\n\nQualifications\n• Bachelor's degree in Computer Science, Engineering, or related field.\n• 4+ years of professional experience as a Blockchain Developer, with a strong portfolio showcasing your work in blockchain development.\n• Proficiency in blockchain platforms such as Ethereum, Hyperledger Fabric, Corda, or others.\n• Solid understanding of blockchain fundamentals, including decentralized consensus, cryptographic algorithms, and smart contract development.\n• Experience with programming languages commonly used in blockchain development, such as Solidity, Go, or Rust.\n• Familiarity with blockchain development tools and frameworks, such as Truffle, Remix, Web3.js, or Hyperledger Composer.\n\nSkills: blockchain,hyperledger,algorithms,blockchain development,computer science",
        //             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmFjGeYutkgahjaVjckQLKcJ9_WThWhLTRNyV&s=0",
        //             "location": "Anywhere",
        //             "employmentType": "Full-time",
        //             "datePosted": "14 hours ago",
        //             "salaryRange": "",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "LinkedIn",
        //                     "url": "https://in.linkedin.com/jobs/view/blockchain-developer-at-immensetek-3921021766?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "UyxlLG4saSxvLHIsICxCLGwsbyxDLGEsbCxpLGYsbyxyLG4saSxhLDMsQSxuLHksdyxoLGUscixlLEo=",
        //             "title": "Senior Blockchain Developer",
        //             "company": "California Software",
        //             "description": "Job Description\n\nAbout the Role:\n\nWe seek a seasoned Ethereum Blockchain Developer with a profound understanding of the Ethereum ecosystem, smart contracts, and DApp development. The ideal candidate will have hands-on experience in Layer 2 and Layer 3 solutions, aiming to enhance scalability and reduce transaction costs on the Ethereum network.\n\nResponsibilities\n\n1. Smart Contract Development: Design, implement, and maintain smart contracts on the Ethereum blockchain.\n\n2. Collaboration: Work closely with cross-functional teams to define project requirements and convert them into executable technical solutions.\n\n3. Blockchain Solutions: Develop scalable and secure solutions, emphasizing reliability and efficiency within the Ethereum ecosystem.\n\n4.Decentralized GPU Computation: Develop and optimize GPU-based decentralized computation solutions to enhance data processing and transaction execution.\n\n4. Debugging and Troubleshooting: Conduct in-depth debugging of applications to identify... and rectify issues.\n\n5. Research and Development: Keep abreast of the latest Ethereum updates, integrating innovative features and enhancements.\n\n7. Documentation and Best Practices: Ensure thorough documentation of code and processes, adhering to best practices in development.\n\nPreferred Domains\n\nInfra, Protocol, Depin, Decentralised Computing\n\nRequirements\n\n1.At least 7+ years in blockchain development.\n\n2.Solidity and EVM Expertise: Demonstrated experience with Solidity and a deep understanding of the Ethereum Virtual Machine (EVM).\n\n3. Tools Proficiency: Skilled in deploying smart contracts using Truffle, Remix, or similar, and building DApps with Web3.js, Embark, or equivalent frameworks.\n\n4. Blockchain Fundamentals: Familiarity with blockchain protocols, consensus mechanisms, and the nuances of decentralized technology.\n\n5. Problem-Solving Skills: Exceptional analytical skills with a keen eye for detail, capable of solving complex technical challenges.\n\n6. Collaborative Spirit: Excellent communication and teamwork abilities, thriving in a dynamic, fast-paced environment.\n\n7. Open Source Contributions: Previous contributions to open-source projects are highly regarded.\n\nAdvantages of Joining Us\n\n1. Diverse Technological Exposure: Engage with a wide array of blockchain technologies and platforms.\n\n2. Innovative Team: Collaborate with a group of passionate blockchain and AI experts in a culture driven by innovation and continuous learning.\n\n3. Creative Freedom: Enjoy the flexibility to pursue your own projects and ideas within a supportive ecosystem.\n\n4. Competitive Compensation: Benefit from a comprehensive compensation package, complemented by opportunities for career progression.\n\nCompany Profile:\n\nThe story of Calsoft began in Chennai, India in 1992. The challenges and opportunities faced by all businesses due to the impact of COVID-19 have led Calsoft to adapt and thrive in its environment, maintaining and strengthening enduring partnerships with clients, just as it has done over the past 30 years. This ongoing pandemic has accelerated the shift of clients towards digital business models. In response, Calsoft is currently developing and launching CS-Digital, a cloud-based software industry park, where CS-Cloud shares the same boat.\n\nCalsoft specializes in the development and implementation of robust technology solutions for Life Sciences R&amp;D. Our unparalleled combination of domain experience and technology expertise allows us to deliver efficient and practical end-to-end solutions in compliance with HIPAA, GXP, CSV, 21 CFR Part 11, and other applicable regulatory guidelines. We specialize in developing and implementing comprehensive Clinical Trials Software Platforms such as CS-SAFETY, CS-DAC, CS-eTRIALS, CS-RMS, and CS-CTMS for pharmaceutical, biotech, and life sciences companies. Additionally, our next-generation and highly secure eCommerce platform, CS-eCom, is designed to transform the e-commerce landscape through AI integration for both B2B (business-to-business) and B2C (business-to-customer) segments. CS-eCom empowers businesses to create unique and engaging shopping experiences.\n\nRecent research conducted by McKinsey reveals that 96% of surveyed B2B and B2C businesses have shifted their sales models to favor online and eCommerce-based selling. This shift has proven to be fruitful, with a persistent migration in shopper behavior towards digital commerce. Calsoft, guided by its core values of kindness, determination, perseverance, striving for success, and sharing and growing with customers, is embarking on a new journey to achieve its vision and mission, aiming for great accomplishments",
        //             "image": "https://fonts.gstatic.com/s/i/googlematerialicons/auto_stories/v8/gm_grey-24dp/1x/gm_auto_stories_gm_grey_24dp.png",
        //             "location": "Anywhere",
        //             "employmentType": "Full-time",
        //             "datePosted": "14 hours ago",
        //             "salaryRange": "",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "LinkedIn",
        //                     "url": "https://in.linkedin.com/jobs/view/senior-blockchain-developer-at-california-software-3917534972?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Jooble",
        //                     "url": "https://in.jooble.org/jdp/4960952648116588315?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Web3 Universe",
        //                     "url": "https://web3universe.today/job/senior-ethereum-blockchain-developer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixCLG8scyxjLGgsICxHLHIsbyx1LDgsQixlLG4sZyxhLGwsdSxyLHU=",
        //             "title": "Blockchain Developers",
        //             "company": "Bosch Group",
        //             "description": "Job Description\n\nMandatory Skills:\n• 3-7 years of hands on experience on Blockchain practices like Ethereum, Hyperledger\n• Hands-on Java/J2EE/ AngularJS/React/Spring MVC\n• Ethereum/Hyper Ledger/IOTA – Coding in Solidity, NodeJS, Python, GO Lang, Viper\n• REST Service development using popular frameworks (spring boot, cxf, resteasy..)\n• Knowledge of RDBMS - Oracle and/or SQL server, NoSQL databases like MongoDB\n• Hands on experience on build frameworks (Maven, Ant…)\n• Applied knowledge of application servers such as Tomcat, Jboss, and Websphere\n• Knowledge on continuous integration (CI) technologies like Jenkins, SonarQube\n• Exposer to any cloud-based application development\n• Hands on experience in automated testing Junit, TesNg\n• Experience of working in Scrum and test-driven development SDLC model\n• Capability to work with BIG DATA stacks (Kafka, SPARK)\n• Experience hands on UI frameworks JSF, JQuery, Prime Faces\n• OOAD design. Knowhow of UML and common design patterns, usage of... tools like Enterprise Architect\n• Knowhow of requirement management tool like Doors/equivalent\n\nQualifications\n\nBE,BTech MCA, MS or MTech\n\nAdditional Information\n\n3-7 years",
        //             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYtXHPp--R9p1ik5Zg5HCYQZ_Xbte59COmQiY&s=0",
        //             "location": "Bengaluru, Karnataka, India",
        //             "employmentType": "Full-time",
        //             "datePosted": "9 days ago",
        //             "salaryRange": "",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "SmartRecruiters Job Search",
        //                     "url": "https://jobs.smartrecruiters.com/BoschGroup/743999978615353-blockchain-developers?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Glassdoor",
        //                     "url": "https://www.glassdoor.co.in/job-listing/blockchain-developers-bosch-group-JV_IC2940587_KO0,21_KE22,33.htm?jl=1009223580865&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Foundit.in",
        //                     "url": "https://www.foundit.in/job/senior-blockchain-developer-careerpaths-bengaluru-bangalore-22991239?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Bayt.com",
        //                     "url": "https://www.bayt.com/en/india/jobs/blockchain-developers-70886214/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Jooble",
        //                     "url": "https://in.jooble.org/jdp/5415649853977778500?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "SimplyHired",
        //                     "url": "https://www.simplyhired.co.in/job/Vz9XJeweymbeRhZkJ7vjKy3X9OuRKjdm7mal-xaQVaBwdI9jmx3zcQ?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Glassdoor",
        //                     "url": "https://www.glassdoor.com/job-listing/blockchain-developers-bosch-group-JV_IC2940587_KO0,21_KE22,33.htm?jl=1009223580865&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Adzuna",
        //                     "url": "https://www.adzuna.in/details/4672041108?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixDLG8sZCxlLHgsICxULGUsYyxoLDQsQSxuLHksdyxoLGUscixlLEo=",
        //             "title": "Blockchain Developer",
        //             "company": "Codex Tech-IT LLC",
        //             "description": "Job Responsibilities:\n\n1. Design, develop, test, and deploy smart contracts to support the business logic and applications of a blockchain platform.\n\n2. Write secure and efficient code using smart contract languages like Solidity, Rust, JavaScript, and others.\n\n3. Engage in smart contract development and integration on public and consortium chains, such as Ethereum, Solana, Stellar, etc.\n\n4. Proficient in Soroban smart contract platform.\n\n5. Responsible for smart contract optimization and maintenance to ensure system stability and performance.\n\n6. Conduct code review for existing contracts to guarantee code quality and security.\n\n7. Collaborate closely with the team to ensure end-to-end quality of the entire blockchain application.\n\n8. Actively participate in project planning and requirements analysis, working with project team members to formulate solutions.\n\nQualifications:\n\n1. Bachelor's degree or higher in Computer Science, Software Engineering, or a relevant field.\n\n2. At least... five years of software development experience, with a minimum of three years focused on smart contracts and blockchain technologies.\n\n3. Proficiency in Solidity and Rust, with a track record of successfully deploying large-scale smart contracts on Ethereum and at least one other blockchain platform (such as Solana or Stellar).\n\n4. Skilled in using smart contract development frameworks and tools (e.g., Truffle, Hardhat, Anchor), and in interacting with smart contracts using programming languages such as JavaScript/TypeScript.\n\n5. Direct involvement or leadership in the development and deployment of at least one complete DeFi protocol (e.g., decentralized exchanges DEXs, liquidity pools LPs, lending platforms, automated market makers AMMs, stablecoin systems).\n\n6. Practical experience in integrating off-chain services with smart contracts, such as market data feeds, meta-transactions services, or decentralized identity systems.\n\n7. Experience in projects related to NFT issuance, such as the development of smart contracts for minting, trading, and copyright management of artwork, collectibles, and game assets.\n\n8. Experience in developing Stellar smart contracts using the Soroban platform or related tools, or demonstrating the ability to quickly learn and apply new technology.\n\n9. A public, verifiable blockchain project involvement, such as contributions to code or discussions on GitHub.\"\n\nJob Types: Full-time, Fresher, Internship\n\nPay: ₹45,000.00 - ₹50,000.00 per month\n\nSchedule:\n• Evening shift\n• Fixed shift\n• Monday to Friday\n\nTipe Lokasi:\n• Remote\n\nEducation:\n• Bachelor's (Preferred)\n\nExperience:\n• total work: 3 years (Preferred)\n• software development: 3 years (Preferred)\n• HTML5: 3 years (Preferred)\n\nWork Location: Remote\n\nSpeak with the employer\n+91-XXXXXXXXXX",
        //             "image": "",
        //             "location": "Anywhere",
        //             "employmentType": "Full-time and Internship",
        //             "datePosted": "13 hours ago",
        //             "salaryRange": "₹45K–₹50K a month",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "Indeed",
        //                     "url": "https://in.indeed.com/viewjob?jk=410b2f107dfd3632&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Glassdoor",
        //                     "url": "https://www.glassdoor.co.in/job-listing/blockchain-developer-codex-tech-it-llc-JV_KO0,20_KE21,38.htm?jl=1009270645006&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Hacendo.com",
        //                     "url": "https://in.hacendo.com/job/927992114/senior-smart-contract-developer-karnataka/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Web3 Universe",
        //                     "url": "https://web3universe.today/job/senior-smart-contract-developer-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixHLGksYSxrLGEsYSwgLEMsYSxwLDEsQSxuLHksdyxoLGUscixlLEo=",
        //             "title": "Blockchain Developer Intern",
        //             "company": "Giakaa Capital",
        //             "description": "Job Opportunity: Blockchain Developer Intern at Giakaa Capital\n\nAbout Giakaa Capital:**\n\nGiakaa Capital is a leading venture capital firm specializing in digital public infrastructure and blockchain-based projects. We are committed to fostering the mass adoption of blockchain technology and creating significant social impacts. Our projects align with the United Nations Sustainable Development Goals (UN SDGs), focusing on innovative solutions to global challenges.\n\nRole Overview:\n\nGiakaa Capital is looking for a motivated Blockchain Developer Intern to join our team. This role is ideal for candidates who are passionate about blockchain technology and eager to develop new skills in a cutting-edge field. You will work alongside experienced developers and contribute to the development of blockchain solutions that address real-world problems.\n\nResponsibilities:\n\n- Assist in the development and maintenance of blockchain-based applications.\n\n- Write smart contracts and help in deploying them... to blockchain.\n\n- Collaborate with the team to design blockchain system architecture.\n\n- Test and debug blockchain applications to ensure robustness and performance.\n\n- Document new solutions as well as maintaining that of existing ones.\n\nQualifications:\n\n- Currently pursuing or recently graduated in Computer Science, Software Engineering, or a related field.\n\n- Strong foundation in software development and familiarity with programming languages such as JavaScript, Python, or Solidity.\n\n- Interest and basic understanding of blockchain technology and its application.\n\n- Problem-solving skills and ability to work collaboratively in a team environment.\n\n- Proactive in learning new technologies and concepts related to blockchain and decentralized systems.\n\nWhat We Offer:\n\n- A platform to work on meaningful projects in the blockchain space.\n\n- Exposure to the venture capital industry and innovative blockchain projects.\n\n- A dynamic and supportive work environment with mentorship from industry experts.\n\n- Opportunities to develop professional skills and network within the blockchain and VC community.\n\nDuration: This is a 3 Months paid internship position.\n\nHow to Apply:\n\nPlease send your resume along with a cover letter detailing your interest in blockchain technology and your career aspirations in this field. Include any relevant projects or coursework in blockchain development",
        //             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4wfue6gX5pyK-vx1HSqoH7mbx8Fiz5ugSc9a&s=0",
        //             "location": "Anywhere",
        //             "employmentType": "Temp work and Internship",
        //             "datePosted": "2 days ago",
        //             "salaryRange": "",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "LinkedIn",
        //                     "url": "https://in.linkedin.com/jobs/view/blockchain-developer-intern-at-giakaa-capital-3918832316?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "Rix1LGwsbCxzLHQsYSxjLGssICxQLGUscyx0LG8sICxULGUsYyxoLDEsRyx1LHIsdSxnLHIsYSxtLCw=",
        //             "title": "Fullstack Developer - Blockchain",
        //             "company": "Pesto Tech",
        //             "description": "Job Title: Fullstack Blockchain Developer\n\nExperience: 4+ Years\n\nTech Stack: Blockchain, Typescript, Nodejs, Microservices, NextJS, TailwingCSS, WebGL\n\nLocation: Remote\n• *Note: This position is with one of our hiring partners\n\nPosition Overview:\n\nAs a Fullstack Blockchain Developer, you will play a pivotal role in developing innovative blockchain solutions and digital art experiences. You will work closely with our cross-functional team to design, implement, and optimize user-centric applications, leveraging cutting-edge technologies such as TypeScript, Next.js, Node.js, and smart contracts on Ethereum, Tezos, and Base blockchains. From frontend interface enhancements to backend infrastructure optimization, you will have the opportunity to contribute to every stage of the development lifecycle and make a lasting impact on our projects. This role offers flexibility and autonomy, allowing you to collaborate with us on a freelance basis while pushing the boundaries of technology and... creativity. If you are passionate about blockchain innovation and enjoy working on diverse and challenging projects, we invite you to join our team and be part of our exciting journey in the digital art space.\n\nResponsibilities\n• Implement and optimize user interface features using Next.js and TailwindCSS.\n• Develop and integrate social media login functionality to enhance user accessibility and engagement.\n• Design and deploy microservices using Node.js and Lambda services.\n• Develop custom indexers for Ethereum, Tezos, and Base blockchains.\n• Write and deploy smart contracts on Ethereum, Tezos, and Base for unique art minting processes.\n• Implement wallet authentication and streamline wallet management interfaces.\n• Optimize PostgreSQL database queries and structures for high performance.\n• Utilize Go for performance-critical backend services.\n• Conduct A/B testing on various UI/UX elements to determine user-friendly design choices.\n• Iterate and deploy UI/UX fixes based on user feedback.\n• Integrate additional payment gateways for more flexible purchasing options.\n• Develop a feature for users to highlight and promote selected art projects on their profiles.\n\nRequirements\n• Bachelor's degree in Computer Science, Engineering, or related field (preferred).\n• Minimum of 4 years of fullstack development experience, with expertise in blockchain technologies.\n• Proven track record of successfully delivering complex projects from conception to deployment.\n• Excellent problem-solving skills and ability to work independently.\n• Strong communication skills and ability to collaborate effectively with cross-functional teams.\n• Hustler mentality with a passion for learning and exploring new technologies.\n\nAbout Pesto Tech:\n\nPesto is where software developers go to build their career path for the next 5 years. We don't just offer jobs; we provide unparalleled opportunities for your growth and success in the dynamic landscape of Tech Jobs",
        //             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrNtltUelZkCf4t1fapr7IWapX8kZRnVF6SKK&s=0",
        //             "location": "Gurugram, Haryana, India",
        //             "employmentType": "Full-time",
        //             "datePosted": "6 days ago",
        //             "salaryRange": "",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "Lever",
        //                     "url": "https://jobs.lever.co/PestoTech/375230f9-7bbe-41d2-a102-048171724503?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixGLGwsaSxwLHAsZSxkLC4sYSxpLDgsQSxuLHksdyxoLGUscixlLEI=",
        //             "title": "Blockchain Developer",
        //             "company": "Flipped.ai",
        //             "description": "Blockchain Developer\n\nSummary:\n\nYou will play a crucial role in designing, implementing, and optimizing smart contracts and zero-knowledge proof (ZK) circuits using Solidity and Rust programming languages. You will work closely with our development team to build scalable and secure blockchain solutions that leverage zero-knowledge proofs for privacy and scalability enhancements.\n\nIt is an amazing opportunity to work on cutting edge fintech Key Responsibilities:\n• Design, develop, and deploy smart contracts on Ethereum and other blockchain platforms using Solidity.\n• Implement zero-knowledge proof circuits and protocols in Rust for privacy-preserving and scalable blockchain applications.\n• Collaborate with the research team to explore and implement cutting-edge cryptographic techniques for zero-knowledge proofs.\n• Optimize smart contracts and zero-knowledge proof circuits for performance, scalability, and security.\n• Conduct code reviews and provide constructive feedback to ensure the... quality and robustness of the codebase.\n• Stay updated with the latest advancements in blockchain technology, zero-knowledge proofs, and decentralized finance (DeFi).\n• Work closely with cross-functional teams including software engineers, and product managers to deliver high-quality blockchain solutions.\n• Contribute to the development of technical documentation, including specifications, architecture diagrams, and developer guides.\n\nJob Type: Full-time\n\nPay: ₹1,500,000.00 - ₹4,000,000.00 per year\n\nEducation:\n• Bachelor's (Preferred)\n\nExperience:\n• total work: 3 years (Preferred)\n\nWork Location: Remote",
        //             "image": "",
        //             "location": "Anywhere",
        //             "employmentType": "Full-time",
        //             "datePosted": "6 days ago",
        //             "salaryRange": "₹1.5M–₹4M a year",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "Indeed",
        //                     "url": "https://in.indeed.com/viewjob?jk=6f4a020c494f3c92&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Glassdoor",
        //                     "url": "https://www.glassdoor.co.in/job-listing/blockchain-developer-flipped-ai-JV_KO0,20_KE21,31.htm?jl=1009264909253&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "LinkedIn",
        //                     "url": "https://in.linkedin.com/jobs/view/blockchain-zk-developer-rootpe-at-kira-studio-3907104522?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Shine",
        //                     "url": "https://www.shine.com/jobs/blockchain-developerrootpe-permanent/kira-studio/14766224?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Hirist",
        //                     "url": "https://www.hirist.tech/j/blockchain-developer-solidity-2-10-yrs-1320991.html?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Jooble",
        //                     "url": "https://in.jooble.org/jdp/1568318254431616149?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Adzuna",
        //                     "url": "https://www.adzuna.in/details/4662206701?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Webbtree",
        //                     "url": "https://app.webbtree.com/company/kirastudio/jobs/blockchain-zk-developerrootpe-13b1d1?utm_source=google&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixQLGUscixmLGUsYyx0LCAsZSxMLDMsRCxlLGwsaCxpLCwsICxJLG4=",
        //             "title": "Blockchain Developer",
        //             "company": "Perfect eLearning",
        //             "description": "Location: Badarpur, New Delhi\n\nExperience Required: 3+ years\n\nJob Type: Full-time, Permanent\n\nAbout Us:\nWe are a dynamic and innovative tech company dedicated to pushing the boundaries of blockchain technology. With a passion for cutting-edge development and a commitment to making a difference, we are seeking skilled professionals to join our team in multiple domains. If you're a tech enthusiast with expertise in blockchain development, we want to hear from you!\n\nKey Responsibilities:\n• Develop and implement blockchain solutions using various programming languages and frameworks.\n• Collaborate with cross-functional teams to design and deploy decentralized applications (dApps).\n• Write smart contracts and deploy them on blockchain platforms.\n• Conduct thorough testing and debugging of blockchain applications to ensure functionality and security.\n• Stay updated with the latest trends and developments in blockchain technology.\n• Contribute to the continuous improvement of development... processes and methodologies.\n• Provide technical guidance and mentorship to junior team members.\n\nSkills and Qualifications:\n• Bachelor's degree in Computer Science, Engineering, or related field.\n• Minimum 3 years of experience in blockchain development.\n• Proficiency in JavaScript, Web3.js, Ether.js, Solidity, Python, Go, Node.js, and other relevant programming languages and frameworks.\n• Hands-on experience with blockchain platforms such as Ethereum, Hyperledger, or Corda.\n• Strong understanding of cryptographic principles and distributed systems.\n• Experience with smart contract development and deployment.\n• Excellent problem-solving skills and attention to detail.\n• Ability to work both independently and collaboratively in a fast-paced environment.\n• Good communication and interpersonal skills.\n\nJob Types: Full-time, Permanent\n\nPay: ₹600,000.00 - ₹1,200,000.00 per year\n\nSchedule:\n• Day shift\n\nEducation:\n• Bachelor's (Preferred)\n\nExperience:\n• total work: 1 year (Preferred)\n• software development: 1 year (Preferred)\n• HTML5: 1 year (Preferred)\n\nWork Location: In person",
        //             "image": "",
        //             "location": "Delhi, India",
        //             "employmentType": "Full-time",
        //             "datePosted": "5 days ago",
        //             "salaryRange": "₹600K–₹1.2M a year",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "Indeed",
        //                     "url": "https://in.indeed.com/viewjob?jk=b509763b20e5f8ef&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "Glassdoor",
        //                     "url": "https://www.glassdoor.co.in/job-listing/blockchain-developer-perfect-elearning-JV_IC2891544_KO0,20_KE21,38.htm?jl=1009265885647&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "SimplyHired",
        //                     "url": "https://www.simplyhired.co.in/job/T-ibPJjJ2nKYZ6GCUz-tKEda_DkEbWpRd4-hGNpO0yVNdQ1_Dp0tCA?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixULG8sayx5LG8sVCxlLGMsaCxpLDIsTixlLHcsICxELGUsbCxoLGk=",
        //             "title": "Blockchain Developers",
        //             "company": "TokyoTechie",
        //             "description": "• Responsibilities:\n• Hands-on technical exposure in implementing Blockchain technologies such as Ethereum and Hyperledger\n• Familiarity with Hyperledger Fabric and Solidity would be an added advantage\n• Experience with Smart contract development tools is a plus\n• Strong background in Javascript, Phyton &amp; Node JS\n• Experience in writing programs in scripting languages and deep understanding of its architecture\n• Strong understanding of REST/JSON based API integration\n• Understanding of Distributed Ledger technology, Blockchain ecosystem and structure\n• Experience working in an Agile and DevOps environment\n• Knowledge on Mining, Hashing, Elliptic Curve Cryptography(ECC) and P2P Networking\n• Extensive experience with progression of major projects from the planning stage through to implementation and completion\n• Effective communicator to all stakeholders and management during project consulting and analysis\n• Minimum work experience of 5 years full time in software development\n•... Experience Required: 1 - 5 Years\n• Education:\n• UG: B.Tech/B.E. Computers, B.Sc Any Specialization\n• PG: Any Postgraduate Any Specialization, Post Graduation Not Required, MCA Computers",
        //             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUggwec0HkvQhHz0mF-ON7HzfcIXUOVHPKBCfY&s=0",
        //             "location": "New Delhi, Delhi, India",
        //             "employmentType": "Full-time and Contractor",
        //             "datePosted": "8 days ago",
        //             "salaryRange": "",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "LinkedIn",
        //                     "url": "https://in.linkedin.com/jobs/view/blockchain-developers-at-tokyotechie-3912866527?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 },
        //                 {
        //                     "jobProvider": "TechGig.com",
        //                     "url": "https://www.techgig.com/jobs/Blockchain-Developers/70005410?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": "QixsLG8sYyxrLGMsaCxhLGksbixKLEUsVyxFLEwsTixNLEUsICxQLDEsSSxuLGQsaSxhLEosbyxiLCA=",
        //             "title": "Blockchain Developer",
        //             "company": "JEWELNME PRIVATE LIMITED",
        //             "description": "Job Description\n\nHiring for MERN Stack Developer. We Foresee a Blockchain Expert in You! The best technologists are technology agnostic and that builds a stronger foundation to lead the dynamic trends. Strengthening our trust in the same, we have created an exciting opportunity for MERN Stack developers to learn blockchain and grow with us. All we are looking for is working experience. (Minimum 1 to 3 years) as a MERN developer and a keen interest in fin-tech applications. As a rapidly growing company, we are always looking for professionals who have a penchant for new technologies.\n\nQualification: BCA / B.Sc. (IT) / B.Tech, candidates with MCA/M.Sc. (IT) preferred\n\nPrimary Skills:\n\nStrong working knowledge of Typescript, MongoDB, MySQL, Express\n\nStrong proficiency in TypeScript, and Javascript including DOM manipulation and the JavaScript object model, ES6\n\nHands-on experience in React JS\n\nStrong understanding of HTML5, CSS3\n\nStrong understanding of NodeJS fundamentals\n\nKnowledge and... experience working with PostgreSQL is a major plus\n\nExperience with ORM libraries\n\nFamiliarity with RESTful APIs\n\nKnowledge of tools like Git, Github, JIRA, Cucumber, Jasmine, and others that make coding more efficient and easier to share\n\nFamiliarity with working in either the AWS Cloud or Azure including Docker + Rubbernecks-based microservice deployment\n\nSecondary Skills:\n\nGood communication and design skills Experience in handling teams\n\nAt least 1-7 years of solid front-end and back-end software development experience\n\nAbility to understand business requirements and translate them into technical requirements\n\nRequirements\n\nQualification:\n\nMinimum 3 years of experience as Software Developer\n\nBack End Developers/ API Web Services Experience Mandatory\n\nFront-end React JS is mandatory\n\nNodeJS is mandatory\n\nOne RDBMS and one document database mandatory\n\nJob Type: Full-time\n\nPay: ₹300,000.00 - ₹600,000.00 per year\n\nSchedule:\n• Morning shift\n\nAbility to commute/relocate:\n• Mohali, Mohali, Punjab: Reliably commute or planning to relocate before starting work (Required)\n\nEducation:\n• Bachelor's (Preferred",
        //             "image": "",
        //             "location": "India",
        //             "employmentType": "Full-time",
        //             "datePosted": "6 days ago",
        //             "salaryRange": "",
        //             "jobProviders": [
        //                 {
        //                     "jobProvider": "Indeed",
        //                     "url": "https://in.indeed.com/viewjob?jk=75a278cd953066f8&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        //                 }
        //             ]
        //         }
        //     ])

    }

    return (
        <>
            <Header />
            <div className=" h-screen">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-full rounded-full w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h2 className="text-2xl font-semibold leading-tight">Jobs
                                    <Button

                                        disabled={previousButton}
                                        onClick={() => {
                                            setSearchIndex(searchIndex - 1)
                                            getGoogleJob(searchIndex - 1)

                                        }}>Previous</Button>
                                    <Button className="ml-1" onClick={() => {
                                        setSearchIndex(searchIndex + 1)
                                        getGoogleJob(searchIndex + 1)
                                        setPreviousButton(false)
                                    }}>{data.length > 0 ? 'Next' : 'Search'}</Button>
                                </h2>
                            </div>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div
                                className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                            >
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                S.No
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Title
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Company Name
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                location
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Posted
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >

                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data?.map((k: any, v: any) => {
                                                return (
                                                    <tr key={v}>
                                                        <td className="text-center">{v + 1}</td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">  {k?.title}   </p>
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-blue-700/10">{k?.employmentType}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {/* <Link target="_blank" href={k?.companyUrl} > */}
                                                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{k?.company}</span>
                                                                {/* </Link> */}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-600 whitespace-no-wrap">{k?.location}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-600 whitespace-no-wrap">{k?.datePosted}</p>
                                                        </td>
                                                        <td
                                                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                                        >
                                                            {
                                                                k?.jobProviders?.map((v: any, r: any) => {
                                                                    return (
                                                                        <span key={r} className="">
                                                                            <Button
                                                                                type="button"
                                                                                className="bg-red-300 inline-block text-white hover:bg-gray-500 m-1"
                                                                            >
                                                                                <Link href={v?.url} target="_blank">{v.jobProvider}</Link>
                                                                            </Button>
                                                                        </span>
                                                                    )
                                                                })
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}