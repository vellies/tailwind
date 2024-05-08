'use client';

import Image from "next/image";
import Linkedin from "@@/assets/img/linkedin.jpeg"
import JobSearch from "@@/assets/img/JobSearch1.png"
import Header from "@@/app/header/page";
import { Button } from "@@/components/ui/button"
import axios from 'axios';
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function LinkedIn() {

    const [data, setData] = useState([
        {
            "id": "3886850035",
            "publishedAt": "2024-04-09",
            "salary": "",
            "title": "Web Developer",
            "jobUrl": "https://in.linkedin.com/jobs/view/web-developer-at-lenovo-3886850035?trk=public_jobs_topcard-title",
            "companyName": "Lenovo",
            "companyUrl": "https://cn.linkedin.com/company/lenovo?trk=public_jobs_topcard-org-name",
            "location": "Bangalore Urban, Karnataka, India",
            "postedTime": "4 weeks ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Why Work at Lenovo\n\nWe are Lenovo. We do what we say. We own what we do. We WOW our customers.\n\nLenovo is a US$62 billion revenue global technology powerhouse, ranked #217 in the Fortune Global 500, employing 77,000 people around the world, and serving millions of customers every day in 180 markets. Focused on a bold vision to deliver smarter technology for all, Lenovo has built on its success as the world’s largest PC company by further expanding into growth areas that fuel the advancement of ‘New IT’ technologies (client, edge, cloud, network, and intelligence) including server, storage, mobile, software, solutions, and services.\n\nThis transformation together with Lenovo’s world-changing innovation is building a more inclusive, trustworthy, and smarter future for everyone, everywhere. To find out more visit www.lenovo.com, and read about the latest news via our StoryHub.\n\nDescription And Requirements\n\n\n * To be successful in this role, you should have extensive in building web pages and in-depth knowledge of the following programming languages: HTML, CSS and JavaScript.\n * You will ensure our websites are up and running and cover both internal and customer needs.\n * Identify user and system requirements for new business requirements\n * Assess wireframes to decide on layout, and feasibility within platform\n * Liaise with designers to decide on UI/UX elements (like graphics and navigation buttons)\n * Maintain documentation and repository\n * Solid knowledge of HTML/CSS Experience with mockup and UI prototyping tools Using Jira to track and report works\n * Understanding of security practices\n * Understand and monitor web performance, suggest and take corrective actions\n * Familiarity with network diagnostics tools\n   \n   \n   \n\nAdditional Locations:\n\n\n * India - Karnātaka - Bangalore\n * India - Karnātaka - BANGALORE\n * India\n * India - Karnātaka\n * India - Karnātaka - Bangalore , * India - Karnātaka - BANGALORE",
            "contractType": "Full-time",
            "experienceLevel": "Not Applicable",
            "workType": "Engineering and Information Technology",
            "sector": "IT Services and IT Consulting",
            "companyId": "3653",
            "posterProfileUrl": "",
            "posterFullName": ""
        },
        {
            "id": "3889692343",
            "publishedAt": "2024-04-09",
            "salary": "",
            "title": "Software Engineer, Payments",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-payments-at-google-3889692343?trk=public_jobs_topcard-title",
            "companyName": "Google",
            "companyUrl": "https://www.linkedin.com/company/google?trk=public_jobs_topcard-org-name",
            "location": "Bengaluru, Karnataka, India",
            "postedTime": "4 weeks ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Note: By applying to this position you will have an opportunity to share your preferred working location from the following: Hyderabad, Telangana, India; Bangalore, Karnataka, India.Minimum qualifications:\n\n\n * Bachelor’s degree or equivalent practical experience.\n * 1 year of experience with software development in one or more programming languages (e.g., Python, C, C++, Java, JavaScript).\n   \n   \n\nPreferred qualifications:\n\n\n * Master's degree or PhD in Computer Science or related technical field.\n * Experience developing accessible technologies.\n   \n   \n\nAbout The Job\n\nGoogle's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.\n\nWith your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions.\n\nWhether it is paying online with Autofill, using tap and pay in stores, or using the Google Pay app, the Payments team at Google is focused on making payments simple, seamless, and secure. In addition to consumer payment technologies, the Payments team also powers the money movement between Google and its consumers and businesses.\n\nResponsibilities\n\n\n * Write product or system development code.\n * Participate in, or lead design reviews with peers and stakeholders to decide amongst available technologies.\n * Review code developed by other developers and provide feedback to ensure best practices (e.g., style guidelines, checking code in, accuracy, testability, and efficiency).\n * Contribute to existing documentation or educational content and adapt content based on product/program updates and user feedback.\n * Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality.\n   \n   \n   \n\nGoogle is proud to be an equal opportunity workplace and is an affirmative action employer. We are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender identity or Veteran status. We also consider qualified applicants regardless of criminal histories, consistent with legal requirements. See also Google's EEO Policy and EEO is the Law. If you have a disability or special need that requires accommodation, please let us know by completing our Accommodations for Applicants form .",
            "contractType": "Full-time",
            "experienceLevel": "Not Applicable",
            "workType": "Information Technology and Engineering",
            "sector": "Information Services and Technology, Information and Internet",
            "companyId": "1441",
            "posterProfileUrl": "",
            "posterFullName": ""
        },
        {
            "id": "3909977575",
            "publishedAt": "2024-04-30",
            "salary": "",
            "title": "Software Engineer",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-at-microsoft-3909977575?trk=public_jobs_topcard-title",
            "companyName": "Microsoft",
            "companyUrl": "https://www.linkedin.com/company/microsoft?trk=public_jobs_topcard-org-name",
            "location": "Bengaluru, Karnataka, India",
            "postedTime": "1 week ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Summary\n\nAre you early in career and looking for rewarding software challenges? Do you ever wonder how software is used when you purchase something, ensuring it is available at the right time, in the right place, and tailored to just how you’d like it? Perhaps you’re curious about how AI is reshaping how people interact with software? If so, we’d like to hear from you!\n\nWe are hiring software engineers (full-stack, back-end) to join our supply chain management application team who are supporting customers today and designing for tomorrow. Familiarity with business applications or a keen interest in learning them is essential, as our progress hinges on recognizing our customers' elaborate circumstances, in conjunction with proficient software engineering and a continuous learning approach.\n\nWhat we offer\n\nAt Microsoft India Development Center you will always be a part of something bigger. We bring people together today to build the solutions of tomorrow. We create intelligent business applications using AI and innovative solutions to enable every team to stay agile. We spark ideas, set ground-breaking standards, and encourage new talent to grow – with a positive focus on wellbeing, thriving, learning and growth.\n\nOur diverse team is a reflection of our inclusive values. The flexibility of our working environment, which includes hybrid opportunities, ensures effective collaboration regardless of where you are.\n\nOur product, Dynamics 365 Supply Chain Management, is a market leading service built atop Microsoft’s highly extensible business applications platform. Our company operates supply chain services for some of the most distinguished companies worldwide, assisting in the delivery of their products with efficiency and insight. Our charter is to transform organizations to maximize business and employee impact in the moments that matter across the entire supply chain.\n\nResponsibilities\n\n\n * Develop features with focus on quality, usability & performance\n * Participate in live-site operations with emphasis on timely response, delivery & satisfaction for stakeholders\n * Collaborate across internal & external teams to provide feedback and continuous improvements\n   \n   \n\nQualifications\n\n\n * Desire to learn and build world class business applications\n * Relevant qualifications or practical experience in Computer Science, Engineering, Advanced Sciences or equivalent\n * Hands-on experience writing code\n * Proficient in both written and spoken English communication\n * Demonstrable coding, testing and problem-solving skills\n   \n   \n\nResearch indicates that underrepresented communities refrain from applying unless they are 100% qualified. If this is the reason you hesitate to apply, we ask you to reconsider and apply anyway; maybe your profile fits better than you think.\n\n#AIERPJobs\n\nMicrosoft is an equal opportunity employer. Consistent with applicable law, all qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about requesting accommodations.",
            "contractType": "Full-time",
            "experienceLevel": "Not Applicable",
            "workType": "Engineering and Information Technology",
            "sector": "Software Development",
            "companyId": "1035",
            "posterProfileUrl": "",
            "posterFullName": ""
        },
        {
            "id": "3902356316",
            "publishedAt": "2024-04-19",
            "salary": "",
            "title": "Software Engineer",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-at-microsoft-3902356316?trk=public_jobs_topcard-title",
            "companyName": "Microsoft",
            "companyUrl": "https://www.linkedin.com/company/microsoft?trk=public_jobs_topcard-org-name",
            "location": "Hyderabad, Telangana, India",
            "postedTime": "2 weeks ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Designation: FULL STACK ENGINEER.\n\nOverview:\n\nAre you an experienced full-stack Software Engineer. Does the opportunity to be involved in state-of-the-art development, measurement, and experimentation for edge browser and edge shopping excite you? If so, this Senior Software Engineer position may be a perfect fit for you. Please check out the link for edge shopping here: Microsoft Edge Shopping | Save time and money with built-in savings features\n\n\n\nWe are passionate about building highly engaging and accessible products for all our users and are actively looking for a Software Engineer 2 who can build new experiences and contribute to our existing solutions and help drive best practices for agile and robust software development. There are many opportunities for growth and impact with our team - check out the responsibilities below.\n\n\n\nContent Services specializes in building personalized and engaging content around news, shopping, sports, weather, and finance that can scale to 1B+ Microsoft users on desktop and mobile.\n\nEdge Shopping is the shopping experiences on edge browser used by millions of users daily and has saved Billions of dollars for our users.\n\nQualifications\n\nRequired Qualifications:\n\n * 4+ years of industry experience in Software Engineering\n * Bachelor’s degree in computer science or similar engineering/software/services experience\n * Passionate about writing quality code and proficient in at least one programming language such as C#, C++, Java, JavaScript, TypeScript, GO\n * Skilled in web technologies such as JavaScript, TypeScript, CSS, ReactJS, AngularJS and NodeJS\n * Demonstrable history of excellent analytical and problem-solving skills\n\nPreferred Qualifications:\n\n * Experience with micro services platform, service architecture is desirable.\n\n\n\n\n\n\nResponsibilities:\n\nYou will demonstrate engineering excellence and curiosity to dive deep while solving challenging problems. Your passion for customers and their needs will shine through as you build delightful experiences.\n\nIn addition to the day-to-day function of the job that involves building an innovative solution, you will also:\n\n * Work closely with customer requirements and our Product and Program Management teams.\n * Architect and design state of art products and features for our customers\n * Analyze and make decisions based on data.\n * Balance the needs to deliver incremental customer value and the desire to design and build systems that last.\n\n\n\nFemale candidates required.\n\n\n\n\nBenefits/perks listed below may vary depending on the nature of your employment with Microsoft and the country where you work.\n\nIndustry leading healthcare\n\nEducational resources\n\nDiscounts on products and services\n\nSavings and investments\n\nMaternity and paternity leave\n\nGenerous time away\n\nGiving programs\n\nOpportunities to network and connect.\n\n",
            "contractType": "Full-time",
            "experienceLevel": "Mid-Senior level",
            "workType": "Information Technology and Engineering",
            "sector": "Software Development",
            "companyId": "1035",
            "posterProfileUrl": "https://in.linkedin.com/in/hussain-khan-9b5b621a4",
            "posterFullName": "Hussain khan"
        },
        {
            "id": "3904293160",
            "publishedAt": "2024-04-22",
            "salary": "",
            "title": "Software Development Engineer - I (Frontend)",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-development-engineer-i-frontend-at-upstox-3904293160?trk=public_jobs_topcard-title",
            "companyName": "Upstox",
            "companyUrl": "https://in.linkedin.com/company/upstox?trk=public_jobs_topcard-org-name",
            "location": "Mumbai, Maharashtra, India",
            "postedTime": "2 weeks ago",
            "applicationsCount": "Over 200 applicants",
            "description": "About us:\n\nUpstox is one of India's leading Fin-Tech companies with a mission to simplify trading & investing to make it easily accessible to the masses. We aim to enable everyone, from new investors to seasoned traders, to invest across multiple categories with our state-of-the-art trade & investment platform and commission-free pricing. We offer numerous asset categories to invest in, like Stocks, Digital Gold, IPOs, Mutual Funds, and more.\n\nBy focusing on our customers’ needs and equipping them with personalized yet powerful tools, we witnessed a steep growth of 800% in our customer base from 25 Thousand in 2017 to 2 Lakh in 2019. With 1500% growth in 2020, currently, over 3 million customers trust us with their investment decisions, thus setting us on the course to become an industry leader in the country.\n\nThe company was founded in 2009 by Ravi Kumar and Shrinivas Viswanath, and in2016 Kavitha Subramanian joined as the third co-founder. Backed by Ratan Tata, weraised $4 million in Series A funding (2016) led by Kalaari Capital. In 2019, US-based investment firm Tiger Global Management invested $25 million in a Series B funding round. Visit our Linkedin page to learn more about us.\n\nDo visit our Linkedin page to know more about us.\n\nAbout the Team:\n\nWe are a Formula-1 team where every millisecond counts. Here, we are continuously innovating and building highly scalable backend systems and strategies that give a seamless experience to our customers even during large volumes of traffic hitting our systems.\n\nA glimpse of what we do:\n\nCreating and improving multiple products via continuous delivery Embrace and enable DevOps culture within the organization Data driven approach to build new products and features Build new tech innovations to improve business processes and enable our various departments to help service our customers better.\n\nWhat we want:\n\nWe are looking for talented engineers with strong foundations who can learn and pick up new tools on the fly. We want you to share our passion for developing products that will help change the landscape for fin-tech in India. You would be working with the latest web technologies to build new features, improve performance and reliability of existing features, and improve our development processes as we scale our company.\n\nRoles & Responsibilities:\n\n\n * Design and build efficient, scalable systems that are used by millions of people\n * Own what you build as you create, test and refine what’s under the hood of our pages and services\n * Implement and maintain features, improve performance and reliability in our frontend web experiences\n * Interact with Product, Design and Engineering teams to spec, build, test and deploy . new features\n * Improve testing and reliability by improving existing tests and writing new ones\n * Perform Peer Code Reviews\n * Investigate production issues pertaining to the user interface to determine root cause and implement solutions\n   \n   \n   \n\nWhat you need:\n\n\n * You have 1 to 3 years of experience building applications on the web platform with JavaScript, HTML and CSS\n * Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux\n * Strong fundamentals on Web Standards, Browser Performance and Rendering Pipelines, HTTP and other relevant concepts\n * You have a get-things-done attitude and deep empathy for users and fellow teammates\n * You can write testable, maintainable code that’s easy to understand\n * Ability to take complex problems and break them down into smaller tasks & You have a curiosity about how things work\n   \n   \n   \n\nPsst… tips on how you can beat the competition:\n\nIf you can showcase your abilities to:\n\n\n\n\nBe self-driven / quick starter·\n\nHave an ownership mindset·\n\nAggressively drive and deliver results\n\nIf you fit the above description, we would love to connect with you! APPLY NOW\n\nA basic requirement but one that many forget: Make sure you go through our website, download our app and give us feedback!\n\nUpstox is an Equal Opportunity Employer; all qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, veteran status, or other characteristics.",
            "contractType": "Full-time",
            "experienceLevel": "Not Applicable",
            "workType": "Engineering and Information Technology",
            "sector": "Financial Services",
            "companyId": "15091079",
            "posterProfileUrl": "",
            "posterFullName": ""
        },
        {
            "id": "3904646858",
            "publishedAt": "2024-04-23",
            "salary": "",
            "title": "Software Engineer",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-at-microsoft-3904646858?trk=public_jobs_topcard-title",
            "companyName": "Microsoft",
            "companyUrl": "https://www.linkedin.com/company/microsoft?trk=public_jobs_topcard-org-name",
            "location": "Hyderabad, Telangana, India",
            "postedTime": "2 weeks ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Our team is looking for a Senior UX Software Engineer to help develop a world-class, customer-centered engineering infrastructure. You will work with Azure CXP Program Managers, other Azure engineering teams and the Field, Marketing and Support organizations to define and deliver critical, customer-facing features, tools, infrastructure and end-to-end solutions required for all the rapidly expanding programs in Azure CXP.\n\n\n\nThis role will have a measurable impact in customer growth and satisfaction for one of the fastest growing businesses at Microsoft. We are looking for a software engineer, who thinks strategically, works pragmatically in a dynamic environment with few guardrails, and enjoys getting stuff done. In this role, you will need strong customer empathy and an ability to focus our engineering efforts on Azure’s business priorities. As we drive to increase Azure customer adoption, satisfaction and consumption, you will need to carefully balance agility and the need to meet our partner teams’ immediate needs with building scalable, robust and reusable solutions, operating in a dynamic environment, building full stack solutions using cutting edge Azure and open source technologies. You will participate and impact the entire lifecycle of application development including:\n\n\n\n\nQualifications:\n\nQualified candidates should be able to demonstrate 4+ years of experience in:\n\n\n\n * Collaborating effectively with multiple disciplines\n * Experience in delivering high quality user facing applications at high scale\n * Strong advocacy of customer requirements\n * Ability to create and analyze telemetry for debugging and customer insights\n * Passion for engineering and personal growth\n * Creating innovative solutions for solving tough problems\n * Working in an agile environment with detailed planning and high estimation accuracy\n * Teamwork focused, results driven, growth mindset, diverse perspectives\n\n\n\n\nTechnical Requirements:\n\n * 4+ years experience with React-Redux\n * 4+ years experience with JavaScript and Typescript\n * 4+ years experience working with Orchestration technologies (i.e. npm/yarn)\n * 4+ years experience working with Web deployment technologies (i.e. webpack)\n * 4+ years experience working with Data structure, wire protocol, and REST API design\n * Azure deployment technologies (PowerShell, ARM, Service Fabric, WebApps)\n * Experience in working with Azure cloud services like Azure function, Storage Account, Key Vault, Cosmos DB etc.\n * C# coding with backend microservices knowledge is an added advantage.\n * MS or BS degree in Computer Science or related studies\n\n\n\n\n\n\n\nBenefits/perks listed below may vary depending on the nature of your employment with Microsoft and the country where you work.\n\n * Industry leading healthcare\n * Educational resources\n * Discounts on products and services\n * Savings and investments\n * Maternity and paternity leave\n * Generous time away\n * Giving programs\n * Opportunities to network and connect\n\n",
            "contractType": "Full-time",
            "experienceLevel": "Mid-Senior level",
            "workType": "Engineering, Information Technology, and Product Management",
            "sector": "IT Services and IT Consulting and Engineering Services",
            "companyId": "1035",
            "posterProfileUrl": "",
            "posterFullName": ""
        },
        {
            "id": "3908309892",
            "publishedAt": "2024-04-27",
            "salary": "",
            "title": "Software Engineer",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-at-microsoft-3908309892?trk=public_jobs_topcard-title",
            "companyName": "Microsoft",
            "companyUrl": "https://www.linkedin.com/company/microsoft?trk=public_jobs_topcard-org-name",
            "location": "Bengaluru, Karnataka, India",
            "postedTime": "1 week ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Why work at WWE\n\nInside Microsoft's Web Experiences Team\n\nThe Web Experiences Team, WebXT, builds comprehensive and engaging content, services, and platforms for consumers to access the information they need anywhere on any device and for enterprises to enhance their employee and customer experiences. The engineers on our front-end team build the web applications that provide full self-service access for our customers to our e-commerce promotions platform. We are looking for a front-end engineer with a demonstrated track record of innovative thinking, and technical excellence.\n\nThe Search + Distribution organization includes the product, engineering, and growth teams responsible for Microsoft Bing worldwide, as well as Microsoft Search in Bing for enterprise. Our mission is to delight users everywhere with the best search experience. We are focused on creating competitive and differentiated search quality experiences, which we do by applying highly advanced ML technologies such as large-scale deep learning models and by investing in more modern search experiences.\n\nResponsibilities\n\n\n * Ship high-quality, well-tested, secure, and maintainable code\n * Work closely with the leadership and product owner to help address business needs while maintaining engineering standards and paying down technical debt\n * Experiment with and recommend new technologies that simplify or improve our stack\n * Build end to end full stack service for a deeply engaging user experience\n * Work in a world class engineering team of engineers, architects, scientists, and leadership that will help you grow your career\n * Design and implement distributed systems that can be scaled to serve hundreds of millions of\n   \n   \n\nQualifications\n\nRequired Qualifications:\n\nUnderstand User Requirements\n\n\n * Contributes in partnership with appropriate stakeholders (e.g., project manager, technical lead) to determine user requirements for a feature. Considers a variety of feedback channels to incorporate insights into future designs or solution fixes. Begins to incorporate appropriate continuous feedback loops measuring customer value, usage patterns, and other actionable metrics of value.\n   \n   \n\nDesign\n\n\n * Learns and contributes to processes for the architecture of a product/solution feature and learns to create proposals by testing design hypotheses and helping to refine code plans under the technical leadership of others. Produces code to test hypotheses for technical solutions and assists with technical validation efforts. Helps with and participates in the development of design documents for simple designs or User Stories with oversight, helps to determine the technology that will be leveraged, and how they will interact. Escalates findings from investigations to team members for design decisions. Learns about the implications of security and compliance requirements in systems architecture.\n * Collaborates with others to create a clear and articulated plan for testing and assuring quality of solutions. Helps to augment test cases and assures that features have good test coverage. Learns to integrate automation into testing during planning where applicable.\n * Supports identification of dependencies, and the development of design documents for a product feature with oversight. Learns and helps to identify other teams and technologies that will be leveraged, how they will interact, and when one's system may provide support to others. Learns about back-end dependencies associated with product, application, service, or platform functionality for product features. Learns about downstream effects of solutions and work provided.\n   \n   \n\nCoding\n\n\n * With guidance, learns to create and implement code for a product, service, or feature reusing code as applicable. Writes and learns to create code that is extensible and maintainable. Learns about and applies diagnosability, reliability, and maintainability, and understands when the code is ready to be shared and delivered. Applies coding patterns and best practices to write code.\n * Learns about and applies knowledge of debugging tools, logs, telemetry, and other methods to proactively flags issues before they occur and reactively flag issues as they occur for product features. Learns to conduct retrospective debugging of solutions to identify root causes of problems.\n * Learns to review code and helps to review code of others to ensure it meets the team's and Microsoft's quality standards. Participates in code review processes for self-development, gathers feedback, and learns about coding standards and the team's features. Applies coding patterns and best practices.\n   \n   \n\nImplement\n\n\n * Learns to review work items to gain knowledge of product features in partnership with appropriate stakeholders (e.g., project managers). Assists and learns about breaking down work items into tasks and provides estimation. Escalates any issues that would cause a delay.\n * Learns about and supports deployment to customers following the correct measures to push features out to customers. Learns about and considers the impact of build deployments on both users and other services. Learns about best practices for the deployment of features safely.\n   \n   \n\n#Search# #WWE#\n\nMicrosoft is an equal opportunity employer. Consistent with applicable law, all qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about requesting accommodations.",
            "contractType": "Full-time",
            "experienceLevel": "Not Applicable",
            "workType": "Engineering and Information Technology",
            "sector": "Software Development",
            "companyId": "1035",
            "posterProfileUrl": "",
            "posterFullName": ""
        },
        {
            "id": "3903679974",
            "publishedAt": "2024-04-22",
            "salary": "",
            "title": "Software Engineer",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-at-microsoft-3903679974?trk=public_jobs_topcard-title",
            "companyName": "Microsoft",
            "companyUrl": "https://www.linkedin.com/company/microsoft?trk=public_jobs_topcard-org-name",
            "location": "Hyderabad, Telangana, India",
            "postedTime": "2 weeks ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Overview\n\nFalcon is a project that helps developers in the WebXT Org to build, deploy and run microservices at scale. The team builds and owns an SDK that is actively used by 100s of developers to build over 500 mission critical services powering apps like Bing Web Search. The team is also now building the platform to enable smooth and efficient migration of services from the bare-metal hardware to Kubernetes clusters. We are building one of the largest Kubernetes cluster fleets in the world managing tens of thousands of servers across the globe with high agility, reliability and scalability with the aim to run every single workload, both offline and online.\n\n\n\nUnder the umbrella of this initiative our primary objective is to solve some hard infrastructure management problems at very large scale with the aim of high availability and low latencies that our demanding workloads expect, around ~30ms @ 99th percentile, while optimizing for COGS.\n\n\n\nWe are targeting to have the best-in-class developer experience and DRI tooling which will increase the developer productivity and agility multifold. We strongly believe that developers should be focusing on solving their end-user problems than solving infrastructure problems.\n\n\n\nWe are envisioning exponential growth of the platform so are looking engineers who love to:\n\n * work on large-scale, distributed systems\n * solve hard infrastructure problems\n * simplify infrastructure to enable other engineers to be productive in solving their customer needs\n\nQualifications\n\n * A Bachelors or Master’s degree in Computer Science or equivalent field\n * 4+ years of industry software development experience\n * 2+ years of experience design, implement and operating distributed systems\n * Experience in Golang is desirable, .NET, C#, C++, Java\n * Experience with large scale distributed systems and microservices\n * Kubernetes, GoLang expertise is highly desirable\n\n\n\n\nResponsibilities\n\n * Design and develop large scale cluster fleet management infrastructure to manage diverse resources with high availability, resiliency and agility.\n * Framework should provide end-to-end solutioning by leveraging open source technologies with sound software engineering practices.\n * Collaborate with different engineering teams across the organization to provide both the technical and operational support.\n * Incorporate feedback from our partner engineering teams to drive long-term strategic improvements to the platform.\n * Liaise with various Azure teams such as Compute, Networking and Azure Kubernetes Service to adopt cutting-edge features and influence the product roadmaps of Azure services.\n * Maintain code standards regarding quality, privacy, accessibility, security, documentation, etc.\n * Proactively seek new knowledge and adapts to new trends, technical solutions, and patterns that will improve the availability, reliability, efficiency, observability, and performance of the platform.\n\n\n\n\nFemale candidates preferred\n\nJob location will be Hyderabad",
            "contractType": "Full-time",
            "experienceLevel": "Mid-Senior level",
            "workType": "Information Technology",
            "sector": "Software Development",
            "companyId": "1035",
            "posterProfileUrl": "https://in.linkedin.com/in/hussain-khan-9b5b621a4",
            "posterFullName": "Hussain khan"
        },
        {
            "id": "3913864471",
            "publishedAt": "2024-05-03",
            "salary": "",
            "title": "Software Engineer",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-at-microsoft-3913864471?trk=public_jobs_topcard-title",
            "companyName": "Microsoft",
            "companyUrl": "https://www.linkedin.com/company/microsoft?trk=public_jobs_topcard-org-name",
            "location": "Bengaluru, Karnataka, India",
            "postedTime": "4 days ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Microsoft is a company where passionate innovators come to collaborate, envision what can be and take their careers to levels they cannot achieve anywhere else. This is a world of more possibilities, more innovation, more openness, and the sky is the limit thinking a cloud-enabled world.\n\nMicrosoft’s Health and Life Sciences team is dedicated to empowering healthcare organizations to achieve their goals and improve patient care. We aim to create an efficient and connected healthcare ecosystem by bringing the healthcare ecosystem together which empowers everyone across the healthcare journey to collaborate, communicate, and innovate together to provide better experiences for their workforces and patients or members alike.\n\nWe do not just value differences or different perspectives. We seek them out and invite them in so we can tap into the collective power of everyone in the company. As a result, our ideas are better, our products are better, and our customers are better served.\n\nResponsibilities\n\nWe are looking for passionate people with experiences working with all service aspects of high throughput and multi-tenant services, ability to design components carefully, properly handle errors, write clean and well-factored code with good tests and good maintainability.  \n\nResponsibilities Include\n\n\n * Contributes, in partnership with appropriate stakeholders (e.g., project manager, technical lead), to determine user requirements for a feature. Considers a variety of feedback channels to incorporate insights into future designs or solution fixes. Begins to incorporate appropriate continuous feedback loops measuring customer value, usage patterns, and other actionable metrics of value.\n * With guidance, learns to create and implement code for a product, service, or feature reusing code as applicable. Writes and learns to create code that is extensible and maintainable. Learns about and applies diagnosability, reliability, and maintainability, and understands when the code is ready to be shared and delivered. Applies coding patterns and best practices to write code.\n * Learns about and applies knowledge of debugging tools, logs, telemetry, and other methods to proactively flags issues before they occur and reactively flag issues as they occur for product features. Learns to conduct retrospective debugging of solutions to identify root causes of problems.\n * Learns to review code and helps to review code of others to ensure it meets the team's and Microsoft's quality standards. Participates in code review processes for self-development, gathers feedback, and learns about coding standards and the team's features. Applies coding patterns and best practices.\n   \n   \n\nLearns about and contributes to operations of live service as issues arise on a rotational, on-call basis. Identifies solutions and mitigations to simple issues impacting performance or functionality of Live Site services and escalates as necessary.\n\nQualifications\n\n/span>.\n\nMicrosoft is an equal opportunity employer. Consistent with applicable law, all qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about requesting accommodations.",
            "contractType": "Full-time",
            "experienceLevel": "Not Applicable",
            "workType": "Engineering and Information Technology",
            "sector": "Software Development",
            "companyId": "1035",
            "posterProfileUrl": "",
            "posterFullName": ""
        },
        {
            "id": "3908313057",
            "publishedAt": "2024-04-27",
            "salary": "",
            "title": "Software Engineer",
            "jobUrl": "https://in.linkedin.com/jobs/view/software-engineer-at-microsoft-3908313057?trk=public_jobs_topcard-title",
            "companyName": "Microsoft",
            "companyUrl": "https://www.linkedin.com/company/microsoft?trk=public_jobs_topcard-org-name",
            "location": "Bengaluru, Karnataka, India",
            "postedTime": "1 week ago",
            "applicationsCount": "Over 200 applicants",
            "description": "Microsoft is a company where passionate innovators come to collaborate, envision what can be and take their careers further. This is a world of more possibilities, more innovation, more openness, and the sky is the limit thinking in a cloud-enabled world.\n\nMicrosoft’s Azure Data engineering team is leading the transformation of analytics in the world of data with products like databases, data integration, big data analytics, messaging & real-time analytics, and business intelligence. The products our portfolio include Microsoft Fabric, Azure SQL DB, Azure Cosmos DB, Azure PostgreSQL, Azure Data Factory, Azure Synapse Analytics, Azure Service Bus, Azure Event Grid, and Power BI. Our mission is to build the data platform for the age of AI, powering a new class of data-first applications and driving a data culture.\n\nWithin Azure Data, the messaging and real-time analytics team provides comprehensive solutions and a robust platform that enables users to ingest high granularity signals (real-time & observability) and complex data, converting those into an advantage in real-time for both end users and modern applications.  \n\n\n\nAzure Messaging Team is hiring a Software Engineer I to join our team to help us tackle the new challenges we face as we strive to further scale our services. We are highly collaborative, data-oriented, and greatly value diversity of thought and ideas.\n\nWe do not just value differences or different perspectives. We seek them out and invite them in so we can tap into the collective power of everyone in the company. As a result, our customers are better served.\n\nResponsibilities\n\n\n * Build real-time data ingestion services which support millions of messages being processed per second with 99.99% service availability.\n * Build highly reliable distributed storage systems which support low latency/high throughput for ingestion, relying on cutting edge technologies like Azure Service Fabric. \n * Integrate with ecosystems such as: IoT applications, Azure Serverless, Apache Hadoop, Apache Spark, Azure Stream Analytics, Microsoft Fabric.\n   \n   \n\nEmbody our culture and values\n\nQualifications\n\nRequired/Minimum Qualifications\n\n\n * Bachelor's Degree in Computer Science, or related technical discipline with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python\n    * OR equivalent experience.\n      \n\nOther Requirements\n\nAbility to meet Microsoft, customer and/or government security screening requirements are required for this role. These requirements include, but are not limited to the following specialized security screenings: Microsoft Cloud Background Check:\n\n\n * This position will be required to pass the Microsoft Cloud background check upon hire/transfer and every two years thereafter.\n   \n   \n\nPreferred/Additional Qualifications\n\n\n * Bachelor's Degree in Computer Science or related technical field AND 1+ year(s) technical engineering experience with coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python.\n    * OR Master's Degree in Computer Science or related technical field with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python\n       * OR equivalent experience.\n         \n\n#azdat #azuredata #messaging #eventhub #servicebus #eventgrid #fabric\n\nMicrosoft is an equal opportunity employer. Consistent with applicable law, all qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about requesting accommodations.",
            "contractType": "Full-time",
            "experienceLevel": "Not Applicable",
            "workType": "Engineering and Information Technology",
            "sector": "Software Development",
            "companyId": "1035",
            "posterProfileUrl": "",
            "posterFullName": ""
        }
    ])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        console.log(1111111)
        // getLinkedInJob()
    }, [data]);

    const getLinkedInJob = async () => {
        await axios.post(
            'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs/trial',
            {
                "title": "Software Engineer",
                "location": "India",
                "rows": 10
            },
            {
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '9b618d7d93mshee331c5f6eb017dp1c92bfjsn15bc4cd60af7',
                    'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
                }
            }
        )
            .then(function (response: any) {
                console.log(response);
                setData(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <Header />
            <div className=" h-screen">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Jobs</h2>
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
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" >
                                                Experience
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" >
                                                workType  / Sector
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
                                                                {/* <div className="flex-shrink-0 w-10 h-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-full rounded-full w-6 h-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                                                    </svg>
                                                                </div> */}
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">  {k.title}   </p>
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-blue-700/10">{k.contractType}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                <Link target="_blank" href={k.companyUrl} >
                                                                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{k.companyName}</span>
                                                                </Link>
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-600 whitespace-no-wrap">{k.location}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-600 whitespace-no-wrap">{k.postedTime}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-600 whitespace-no-wrap">{k.experienceLevel}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-600 whitespace-no-wrap white-space: nowrap">{k.workType} /</p>
                                                            <p className="text-gray-600 whitespace-no-wrap white-space: nowrap">{k.sector}</p>
                                                        </td>
                                                        <td
                                                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                                        >
                                                            <Button
                                                                type="button"
                                                                className="bg-red-300 inline-block text-white hover:bg-gray-500"
                                                            >
                                                                <Link href={k.jobUrl} target="_blank">Apply</Link>
                                                            </Button>
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