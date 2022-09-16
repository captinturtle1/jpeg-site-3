import Image from 'next/image'
import squid from '../public/jpegge.png'
import bg1 from '../public/bg1.png'

const About = () => {
    return (
        <div className="flex justify-center h-[1300px] lg:h-[900px] bg-gray-100 z-[1]" id="About">
          <div className="object-cover lg:object-fill h-[1301px] lg:h-[900px] w-full absolute z-[2]">
            <Image layout="fill" quality={100} src={bg1}/>
          </div>
          <div className="m-auto z-[4] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="grid grid-cols-2 gap-4 lg:gap-5 m-4 text-white">
              <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)]">
                <div className="text-[1rem] lg:text-lg font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
              <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)]">
                <div className="text-[1rem] lg:text-lg font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
              <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)]">
                <div className="text-[1rem] lg:text-lg font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
              <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)]">
                <div className="text-[1rem] lg:text-lg font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
            </div>
            <div className="flex justify-center drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">
                <Image src={squid} className="h-96 xl:h-[30vw] m-auto"/>
            </div>
          </div>
        </div>
    );
}

export default About;