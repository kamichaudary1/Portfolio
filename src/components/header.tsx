import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Nav } from "./home/nav";
import Logo from '../assets/images/logo-white.png'
export default function Header(  ) {

  const [togglenav, setToggleNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeHeaderBg = () => {
    if (window.scrollY >= 50) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }
 
  const navHandler = () => {
    setToggleNav(!togglenav);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderBg, true);
    return () => window.removeEventListener('scroll', changeHeaderBg);
  }, []);

  return (
    <header className={`w-full flex justify-between flex-wrap py-4 bg fixed z-50 left-0 top-0 border-b-[1px] border-[#6c70cb] ease-in-out duration-300
    ${navBg ? 'bg-black' : ''}`}>
      <div className="flex flex-wrap items-center justify-between w-full md:w-11/12 mx-auto py-3 px-4">
        <nav className="md:z-10 md:opacity-100 md:visible md:flex flex w-full wrap justify-between md:items-center">
          <a href="" className="flex items-center w-52">
            <Image 
              src={Logo}
              alt="Frontend Dev"
            />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" 
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" aria-expanded="false" onClick={navHandler}> 
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <div className={`w-full absolute lg:w-[calc(100%_-_300px)] xl:w-[calc(100%_-_700px)] lg:static left-0 top-20 lg:top-0 bg-black md:bg-transparent py-2 px-4 lg:p-0
                 lg:block ${togglenav ? 'visible' : 'hidden'}`}>
           <Nav />
          </div>
        </nav>
      </div>      
    </header>
  )
}
