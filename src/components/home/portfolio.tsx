import Image from 'next/image';
import { Inter } from 'next/font/google';

import Data from '../../json/portfolio.json';

interface PortfolioArray {
  portfolioText: string;
  portfolioTitle: string;
  portfolioDetail: PortfolioObject[];
}

interface PortfolioObject {
  portfolioThumbnail: string;
  portfolioTechsTitle: string;
  portfolioTechs: string;
}

export default function Portfolio() {
  const { portfolioTitle, portfolioText, portfolioDetail } = Data;
  console.log(portfolioDetail, "portfolioooooo");

  return (
    <div className="flex flex-wrap justify-between items-start py-20 px-14 bg-slate-100 mt-28">
      <div className='flex flex-wrap items-start mx-20'>
        <h2 className='relative text-black text-5xl font-bold font-Workbold leading-tight tracking-wider mb-12 pb-1
        before:bg-orange before:absolute before:bottom-[-5px] before:left-0 before:w-[100px] before:h-[4px]'>
          <span className='absolute w-full left-12 top-[-22px] text-orange text-3xl italic font-Workitalic font-bold leading-tight tracking-normal'>{portfolioText}</span>
          {portfolioTitle}
        </h2>
      </div>
      <div className='flex flex-wrap justify-between px-20 w-full'>
          {
            portfolioDetail && portfolioDetail.map((item: PortfolioObject) => {
              return (
                <div className='flex w-1/3 bg-white p-2 rounded-md'>
                  <span>{item.portfolioTechs}</span>
                  <Image
                    src={item.portfolioThumbnail}
                    alt="Portfolio Thumbnail"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
