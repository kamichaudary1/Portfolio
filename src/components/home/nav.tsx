import React from 'react';
import navList from '../../json/nav.json';

interface navListItem {
    id: number;
    navLink: string;
    navText : string;
}

interface navProps {
    navItemms: navListItem;
}

export function getStaticProps() {
    return {
      props: {
        data: navList,
      },
    };
}

export const Nav = ( props:navProps ) => {
    return (
        <ul className="flex flex-wrap justify-between w-full lg:w-auto bg-black lg:bg-transparent sm:mt-10 md:mt-0 sm:absolute left-0 
        lg:relative p-5 md:p-0">
            {
                navList.navigation && navList.navigation.map((item, i) => {
                    return (
                        <li className="w-full sm:mb-2 lg:w-auto lg:mb-0" id={i} key={'nav-${i}'}>
                            <a href={item.navLink} 
                                className="block text-white p-2 font-Worksemibold capitalize relative hover:text-orange ease-in-out duration-300 
                                    after:ease-in-out after:duration-300 after:absolute after:left-0 after:bottom-[-5px] after:w-auto after:h-[2px]
                                    after:bg-orange after:hover:w-full" 
                                 aria-current="page">
                                {item.navText}
                            </a>              
                        </li>
                    )
                })
            }
        </ul>
    )
}

