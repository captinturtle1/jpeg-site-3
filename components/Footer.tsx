import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image'

import banner from '../public/banner.png'

const Footer = () => {
    return (
      <div className="grid">
        <div className="grid justify-center p-10 text-white bg-gray-900 z-[3]">
          <div className="m-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-52 text-center lg:text-left">
            <div>
              <div className="text-sm max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <div className="flex justify-center lg:justify-start">
                <div className="w-[250px] my-5">
                  <Image layout="responsive" src={banner} className="rounded-xl"/>
                </div>
              </div>
              <div>ABYSS © 2022 ALL RIGHTS RESERVED.</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-xl select-none">Nav</div>
              <div>
               <Link to="Tools" smooth={true} offset={0} duration={800} className="cursor-pointer text-white hover:text-gray-300">Tools</Link>
              </div>
              <div>
               <Link to="Success" smooth={true} offset={0} duration={800} className="cursor-pointer text-white hover:text-gray-300">Success</Link>
              </div>
              <div>
               <Link to="Team" smooth={true} offset={0} duration={800} className="cursor-pointer text-white hover:text-gray-300">Team</Link>
              </div>
              <div>
               <Link to="Faq" smooth={true} offset={0} duration={800} className="cursor-pointer text-white hover:text-gray-300">Faq</Link>
              </div>
              <a href="/dashboard" className="text-white hover:text-gray-300">Dashboard</a>
            </div>
            <div>
              <div className="mb-2 font-bold text-xl select-none">Links</div>
              <div>
                <a href="https://opensea.io/collection/jpegmp10" className="text-white hover:text-gray-300">OpenSea</a>
              </div>
              <div>
                <a href="https://twitter.com/jpegpass" className="text-white hover:text-gray-300">Twitter</a>
              </div>
              <div>
                <a href="https://jpegsquared.medium.com/" className="text-white hover:text-gray-300">Medium</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;