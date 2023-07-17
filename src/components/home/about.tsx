import Image from 'next/image';
import { Inter } from 'next/font/google';
import Data from '../../json/about.json';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  const { about, name, aboutDescription, aboutContact, aboutThankyou, aboutSkills } = Data;
  
  const getLevel = (skillLevel: string) =>{
    if(skillLevel === "99" ) {
      return 'bg-green-600'
    } else if(skillLevel === "80"){
        return 'bg-blue-600'
    }else if(skillLevel === "65"){
      return 'bg-red-600'
    }else if(skillLevel === "70"){
      return 'bg-yellow-600'
    } else {
        return 'bg-white-600'
    }
  }

  const getLevelWidth = ( skillLevel: string) => {
    if( skillLevel == '99' ) {
      return 'w-[99%]'
    }else if( skillLevel == "80"){
      return 'w-[80%]'
    }else if ( skillLevel == '65' ){
      return 'w-[65%]'
    }else if ( skillLevel == '70' ){
      return 'w-[70%]'
    }else {
      return 'w-[70%]'
    }
  }

  return (
      <div className="flex flex-wrap justify-between items-start py-20 px-14 mx-10 bg-black mt-[-80px] z-10 relative rounded-[40px]">
        <div className='flex flex-wrap md:w-[48%]'>
          <h2 className='relative text-white text-5xl font-semibold font-Worksemibold leading-tight tracking-wider mb-7 pb-1
          before:bg-orange before:absolute before:bottom-[5px] before:left-0 before:w-[100px] before:h-[4px]'>
            <span className='absolute left-12 top-[-25px] text-orange text-4xl italic font-Workitalic font-bold leading-tight tracking-normal'>{about}</span>
            {name}
          </h2>
          {
            aboutDescription && aboutDescription.map(( item ) => {
              return <p className="text-white text-[16px] leading-7 tracking-widest font-Workregular mb-6">{item.aboutParagraph}</p>   
            })
          }
          <a href="" className="flex justify-center rounded-md bg-orange w-48 py-3 px-7 relative 
            after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:bg-[#4e54c8] after:rounded-md after:ease-in-out after:duration-300
            hover:after:w-full">
            <span className="flex justify-center w-full text-white text-[18px] tracking-[1px] font-Workbold font-bold relative z-10">{aboutContact}</span>
          </a>          
          <span className='font-Workitalic italic text-xl text-white tracking-widest w-full block mt-3'>{aboutThankyou}</span>
        </div>
        <div className="flex flex-wrap md:w-[48%]">
          <h2 className='relative text-white text-4xl font-bold font-Workbold leading-tight tracking-widest mb-10'>Skills</h2>
          <div className='w-full'>
           {
           aboutSkills && aboutSkills.map((item) => {
            return (
              <div className='w-full mb-4'>
                <div className="mb-1 text-[16px] font-semibold font-Worksemibold text-white tracking-widest pl-1">{item.skilTitle}</div>
                <div className="w-full bg-gray-200 rounded-full h-3 relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-700">
                    <div className={`h-3 rounded-full ${getLevelWidth(item.skillLevel)} ${getLevel(item.skillLevel)}`}>
                      <span className='absolute left-[50%] top-1 text-white text-xs font-Workbold font-bold tracking-widest z-10'>
                        {/* {item.skillLevel} */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
           })
           }            
          </div>
        </div>
      </div>
  )
}
