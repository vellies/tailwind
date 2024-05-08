'use client';

import Image from "next/image";
import Link from 'next/link'
import LoginLogo from "@@/assets/img/login-logo.svg"
import { Input } from "@@/components/ui/input"
import { Button } from "@@/components/ui/button"
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Header() {
  const { push } = useRouter();
  const [menuIcon, setMenuIcon] = useState('menu');

  const onToggle = (e: any) => { setMenuIcon(e) }

  return (
    <>
      <div className="font-[Poppins] bg-gradient-to-t from-blue-400 to-blue-300 " >
        <header className="bg-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto  py-3">
            <div>
              <Image className="w-16" width={40} height={40} src="https://www.geto.ai/_next/static/media/GETO%20Logo.fa280944.svg" alt="Logo" />
            </div>
            <div className={`md:static absolute bg-white md:min-h-fit min-h-[60hv] left-0 top-[${menuIcon == 'menu' ? '-100%' : '9%'}] md:w-auto w-full flex item-center px-5 my`}>
              <ul className="flex md:flex-row flex-col md:items-center md:gap-4 gap-6 my-6">
                <li>
                  <Link className="hover:text-red-900" href="/">Home</Link>
                </li>
                <li>
                  <Link className="hover:text-red-900" href="/">Product</Link>
                </li>
                <li>
                  <Link className="hover:text-red-900" href="/jobs">Find Jobs</Link>
                </li>
                <li>
                  <Link className="hover:text-red-900" href="/">Developers</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-slate-700"
                onClick={() => {
                  push(`/login`);
                }}
              >Sign in</Button>
              <span className={menuIcon == 'menu' ? 'block' : 'hidden'} onClick={(e: any) => {
                setMenuIcon('close')
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-3xl cursor-pointer md:hidden">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </span>
              <span className={menuIcon == 'close' ? 'block' : 'hidden'} onClick={(e: any) => {
                setMenuIcon('menu')
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-3xl cursor-pointer md:hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}