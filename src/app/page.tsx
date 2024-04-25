import Image from "next/image";
import Bg1 from "@@/assets/img/Group 8797.png"
import GamingScholarships1 from "@@/assets/img/gaming-scholarship1.png"
import GamingScholarships2 from "@@/assets/img/gaming-scholarships2.png"
import GamingScholarships3 from "@@/assets/img/gaming-scholarships3.png"
import GamingScholarships4 from "@@/assets/img/gaming-scholarships4.png"
import VideoIcon from "@@/assets/img/icons/video.svg"
import AudiotrackIcon from "@@/assets/img/icons/audiotrack.svg"
import FilterIcon from "@@/assets/img/icons/filter.svg"
import MusicIcon from "@@/assets/img/icons/music.svg"
import PhotoIcon from "@@/assets/img/icons/photo.svg"
import StarIcon from "@@/assets/img/icons/star.svg"

import BeautifulGirl from "@@/assets/img/beautiful-girl.png"
import BeautifulGirl2 from "@@/assets/img/beautiful-girl2.png"
import BeautifulGirl3 from "@@/assets/img/beautiful-girl3.png"
import BeautifulGirl4 from "@@/assets/img/beautiful-girl4.png"
import BeautifulGirl5 from "@@/assets/img/beautiful-girl5.png"
import BeautifulGirl6 from "@@/assets/img/beautiful-girl6.png"
import BeautifulGirl7 from "@@/assets/img/beautiful-girl7.png"
import BeautifulGirl8 from "@@/assets/img/beautiful-girl.png"

export default function Home() {
  return (
    <>
      <div>
        <section>
          <Image src={Bg1} alt="landing Image" className="w-full" />
        </section>
        <section className="w-full mt-10">
          <div className=" md:px-32 mx-auto">
            <div className="flex">
              <h4 className="mr-auto font-bold">Trending Products</h4>
              <h6 className="flex ml-auto text-blue-500">View All
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </h6>
            </div>
            <h6 className="text-gray-400">Enjoy the open course to lean new things</h6>
            <div className="md:flex flex-row my-3">
              <div className="md:w-1/4 pr-1">
                <Image src={GamingScholarships1} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">$75</span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={VideoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={MusicIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={AudiotrackIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={PhotoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={FilterIcon} alt="Icon Feather Video" className="mx-1" />
                  </span>
                </div>
              </div>
              <div className="md:w-1/4 px-1">
                <Image src={GamingScholarships2} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">$75</span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={VideoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={MusicIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={AudiotrackIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={PhotoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={FilterIcon} alt="Icon Feather Video" className="mx-1" />
                  </span>
                </div>
              </div>
              <div className="md:w-1/4 px-1">
                <Image src={GamingScholarships3} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">$75</span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={VideoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={MusicIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={AudiotrackIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={PhotoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={FilterIcon} alt="Icon Feather Video" className="mx-1" />
                  </span>
                </div>
              </div>
              <div className="md:w-1/4 pl-1">
                <Image src={GamingScholarships4} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">$75</span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={VideoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={MusicIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={AudiotrackIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={PhotoIcon} alt="Icon Feather Video" className="mx-1" />
                    <Image src={FilterIcon} alt="Icon Feather Video" className="mx-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mt-10">
          <div className=" md:px-32 mx-auto">
            <div className="flex">
              <h4 className="mr-auto font-bold">Free Course</h4>
              <h6 className="flex ml-auto text-blue-500">View All
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </h6>
            </div>
            <h6 className="text-gray-400">Enjoy the open course to lean new things</h6>
            <div className="md:flex flex-row my-3">
              <div className="md:w-1/5 pr-1">
                <Image src={GamingScholarships1} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <p className="text-gray-400 text-sm">The corporate finance course course is taught hands-on by experts.</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">
                    <span className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Free</span>
                  </span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={StarIcon} alt="Rating" className="mx-1" />
                    <p className="m-1 py-auto text-gray-500">4.2</p>
                  </span>
                </div>
              </div>
              <div className="md:w-1/5 pr-1">
                <Image src={GamingScholarships1} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <p className="text-gray-400 text-sm">The corporate finance course course is taught hands-on by experts.</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">
                    <span className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Free</span>
                  </span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={StarIcon} alt="Rating" className="mx-1" />
                    <p className="m-1 py-auto text-gray-500">4.2</p>
                  </span>
                </div>
              </div>
              <div className="md:w-1/5 pr-1">
                <Image src={GamingScholarships1} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <p className="text-gray-400 text-sm">The corporate finance course course is taught hands-on by experts.</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">
                    <span className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Free</span>
                  </span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={StarIcon} alt="Rating" className="mx-1" />
                    <p className="m-1 py-auto text-gray-500">4.2</p>
                  </span>
                </div>
              </div>
              <div className="md:w-1/5 pr-1">
                <Image src={GamingScholarships1} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <p className="text-gray-400 text-sm">The corporate finance course course is taught hands-on by experts.</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">
                    <span className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Free</span>
                  </span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={StarIcon} alt="Rating" className="mx-1" />
                    <p className="m-1 py-auto text-gray-500">4.2</p>
                  </span>
                </div>
              </div>
              <div className="md:w-1/5 pr-1">
                <Image src={GamingScholarships1} alt="gaming-scholarships-esports-scholarships" className="w-full" />
                <p className="pt-2">Introduction to Corporate Finance</p>
                <p className="text-gray-400 text-sm">The corporate finance course course is taught hands-on by experts.</p>
                <div className="flex flex-row my-2">
                  <span className="text-teal-400">
                    <span className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Free</span>
                  </span>
                  <span className="flex flex-row ml-auto pr-2">
                    <Image src={StarIcon} alt="Rating" className="mx-1" />
                    <p className="m-1 py-auto text-gray-500">4.2</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mt-10">
          <div className=" md:px-32 mx-auto">
            <div className="flex">
              <h4 className="mr-auto font-bold">Top Creators</h4>
              <h6 className="flex ml-auto text-blue-500">View All
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </h6>
            </div>
            <h6 className="text-gray-400">Enjoy the open course to lean new things</h6>
            <div className="md:flex md:flex-row my-3 columns-2">
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl2} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl3} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl4} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl5} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl6} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl7} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
              <div className="md:w-1/6 mb-2 pr-1 px-auto ">
                <div className="flex flex-row justify-center items-center px-4">
                  <Image src={BeautifulGirl} alt="Beautiful Girl" className="w-full" />
                </div>
                <p className="pt-1 text-center">Dora Jakubowski</p>
                <div className="pt-1 flex flex-row justify-center items-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">Sold $201K</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
