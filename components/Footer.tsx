import Image from 'next/image'

import { AiFillTwitterCircle } from 'react-icons/ai'; 
import banner from '../public/jpegge.png'
import Opensea from '../public/opensea.svg'
import X2y2 from '../public/x2y2.svg'
import Looksrare from '../public/looksrare.svg'

const Footer = () => {
    return (
      <div className="grid">
        <div className="grid justify-center p-10 text-white bg-gray-900 z-[3]">
          <div className="w-[60px] m-auto pb-5">
            <Image src={banner}/>
          </div>
          <div>ABYSS © 2022 ALL RIGHTS RESERVED.</div>
          <div className="flex m-auto">
            <div className="grid grid-cols-4 gap-2 text-3xl pt-4">
              <a href="https://twitter.com/AbyssFNF">
                <AiFillTwitterCircle className="m-auto"/>
              </a>
              <a href="https://opensea.io/collection/abyssfnf">
                <svg className="h-[28px] w-[28px] m-auto fill-white"><Opensea/></svg>
              </a>
              <a href="https://x2y2.io/collection/abyssfnf/items">
                <svg className="h-[28px] w-[28px] m-auto fill-white"><X2y2/></svg>
              </a>
              <a href="https://looksrare.org/collections/0xFBbB17037Fd01851ddA9FC097748EB3E52A56710">
                <svg className="h-[28px] w-[28px] m-auto fill-white"><Looksrare/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;