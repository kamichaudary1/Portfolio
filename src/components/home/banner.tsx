import Script from "next/script";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Data from '../../json/banner.json';
import BannerThumbnail from '../../assets/images/frontend.jpg'

export default function Banner() {
  const { bannerHeading, bannerTagline, bannerSocialList } = Data;
  return (
    <>
      <section className="w-full h-screen absolute" id="background">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
      <div className="flex items-center justify-between w-full h-[100vh] sm:px-4 md:px-5 xl:pl-36 xl:pr-32 relative z-2">
        <div className="sm:w-full xl:w-2/3 2xl::w-2/5 flex flex-wrap">
          <h1 className="text-white sm:text-3xl md:text-5xl xl:text-6xl font-Workbold font-bold leading-[.8] tracking-tight">
            Bringing your digital 
            <span className="flex sm:text-4xl md:text-7xl xl:text-[100px] text-orange font-Workbold">Vision to Life,</span>
            one pixel at a time.
          </h1>
          <p className="text-white text-2xl leading-[1.5] mt-12 mb-10 font-Workitalic italic xl:pr-[200px] tracking-[.5px]">
            {Data.bannerTagline}
          </p>
          <div className="flex flex-wrap items-center sm:w-full lg:w-[380px]">
            <a href="" className="flex justify-center rounded-md bg-orange w-48 py-3 px-7 relative 
              after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:bg-black after:rounded-md after:ease-in-out after:duration-300
              hover:after:w-full">
              <span className="flex justify-center w-full text-white text-[18px] tracking-[1px] font-Workbold font-bold relative z-10">Let's Talk</span>
            </a>
            <ul className="flex flex-wrap justify-between w-36 lg:ml-8">
              { Data.bannerSocialList && Data.bannerSocialList.map(( item, i ) => {
                return (
                  <li key={'icons-${i}'} className="flex items-center justify-center w-8 h-8 bg-orange rounded-md duration-300 ease-in-out hover:bg-amber-600
                  hover:scale-110">
                    <a href={item.bannerSocialLink} target="_blank">
                    <Image
                      className="object-scale-down fill-white"
                      src={item.bannerSocialIcon}
                      alt="icon"
                      width={22}
                      height={22}
                    />
                    </a>
                  </li>
                )
              })                
              }              
            </ul>
          </div>
        </div>
        <div className="sm:hidden lg:flex 2xl:w-[500px] 2xl:h-[500px] relative">
          <Image
            className="rounded-full relative z-20 w-full object-cover"
            src={BannerThumbnail}
            alt="FrontEnd"
            width={500}
            height={500}
          />
          <span className="absolute left-1 top-0 w-full h-full rounded-full bg-[#d97828] border-[#fda55d]"></span>
          <span className="absolute right-1 top-1 w-[96%] h-[96%] rounded-full bg-[#f96645] border-[#d97828]"></span>
          <span className="absolute right-2 top-2 w-[96%] h-[96%] rounded-full bg-[#fe9f51] border-[#f96645]"></span>
          <span className="absolute right-4 top-3 w-[96%] h-[96%] rounded-full bg-[#fda55d] border-[#fe9f51]"></span>
        </div>
      </div>
    </>

  );
}
