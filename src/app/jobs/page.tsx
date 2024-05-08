'use client';

import Image from "next/image";
import Link from 'next/link'
import Linkedin from "@@/assets/img/linkedin.jpeg"
import JobSearch from "@@/assets/img/JobSearch1.png"
import Header from "@@/app/header/page";

export default function Jobs() {

    return (
        <>
            <Header />
            <div className=" h-screen">
                <section className="">
                    <div>
                        <div className="bg-gray-100">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                    <h2 className="text-2xl font-bold text-gray-900">Jobs</h2>
                                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                        <div className="group relative">
                                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                                <Image src={Linkedin} width={200} height={200} alt="Linked in job search" className="h-full w-full object-cover object-center rounded-lg" />
                                            </div>
                                            <h3 className="mt-6 text-sm text-base font-semibold text-gray-900">
                                                <Link className="" href="/jobs/linkedin">
                                                    <span className="absolute inset-0"></span>
                                                    Linkedin jobs
                                                </Link>
                                            </h3>
                                            <p className="text-gray-500">
                                                Designed for both personal and professional use, simply enter your desired job title and location to receive a tailored list of job opportunities. Try it today!

                                                Are you tired of the endless scrolling of job searches? Want to take your career to the next level? Look no further than our LinkedIn job search tool! Our powerful tool is the ultimate solution for professionals and job seekers alike, providing tailored job listings in just a few clicks.

                                                Looking for a job that fits your lifestyle? Our tool is perfect for personal use and helps you find jobs that match your skills and location.

                                                Want to evaluate your market position? With our job scraper, you can get a complete view of the job market in your industry. You can extract data on vacancies, salaries and skills required for the different positions. By analyzing this data, you can better understand your position in the market and adjust your recruitment strategy accordingly. Plus, you can monitor job market trends over time to stay current and competitive.

                                                But don’t just take our word for it: our satisfied users rave about the ease and effectiveness of our LinkedIn job search tool. With its user-friendly features and intuitive interface, you can start using our tool right away, even if you’re not a technology expert.

                                                Unlock your career potential with our LinkedIn job search tool. Try it today and see the difference for yourself!
                                            </p>
                                        </div>
                                        <div className="group relative">
                                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                                <Image src={JobSearch} width={200} height={200} alt="Linked in job search" className="h-full w-full object-cover object-center rounded-lg" />
                                            </div>
                                            <h3 className="mt-6 text-sm text-base font-semibold text-gray-900">
                                                <Link className="" href="/jobs/google">
                                                    <span className="absolute inset-0"></span>
                                                    Google jobs
                                                </Link>
                                            </h3>
                                            <p className="text-gray-500">
                                                Access the global job listing by using Google Jobs webscraping. This API allows you to discover employment opportunities from various providers, including but not limited to LinkedIn, Indeed, Jooble, ZipRecruiter, Glassdoor, and many other sources.

                                                Introducing our innovative API designed to revolutionize the job search experience on a global scale. Using the power of web scraping technology for accessing job opportunities worldwide. With this Google Jobs webscraping API, you can now effortlessly retrieve an extensive list of employment opportunities from a diverse array of renowned providers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}