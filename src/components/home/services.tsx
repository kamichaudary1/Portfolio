import Image from 'next/image';
import { Inter } from 'next/font/google';

import Data from '../../json/services.json';

import React from 'react'

export default function Services() {
  const { servicesTitle, servicesText } = Data;

  return (
    <div className="flex flex-wrap justify-between items-start py-20 px-14 bg-slate-100 mt-28">
      <div className='flex flex-wrap items-start mx-20'>
        <h2 className='relative text-black text-5xl font-bold font-Workbold leading-tight tracking-wider mb-7 pb-1
        before:bg-orange before:absolute before:bottom-[5px] before:left-0 before:w-[100px] before:h-[4px]'>
          <span className='absolute w-full left-12 top-[-22px] text-orange text-3xl italic font-Workitalic font-bold leading-tight tracking-normal'>{servicesText}</span>
          {servicesTitle}
        </h2>
        
      </div>
    </div>
  )
}
