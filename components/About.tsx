import Image from 'next/image'
import squid from '../public/jpegge.png'
import bg from '../public/bg1.png'

const About = () => {
    return (
      <div className="flex justify-center h-[1300px] lg:h-[900px] bg-gray-900 z-[1]" id="About">
        <div className="object-cover lg:object-fill h-[1301px] lg:h-[900px] w-full absolute z-[2]">
          <Image layout="fill" quality={100} src={bg}/>
        </div>
        <div className="m-auto z-[4] grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-2 gap-4 lg:gap-5 m-4 text-white">
            <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)] z-[3]">
              <div>
                <div className="text-[1rem] lg:text-2xl font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Alpha</div>
                <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">Each member of our team has a long resume of experience providing alpha in the web3 space.</div>
              </div>
            </div>
            <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)]">
              <div className="text-[1rem] lg:text-2xl font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Tools</div>
              <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">Specially curated tools to assist even the most advanced traders, available anywhere at anytime.</div>
            </div>
            <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)]">
              <div className="text-[1rem] lg:text-2xl font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Whitelist</div>
              <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">Access to different whitelist from some of the top upcoming projects and tools.</div>
            </div>
            <div className=" bg-slate-800 rounded-3xl min-h-[200px] md:min-h-0 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:drop-shadow-[5px_6px_6px_rgba(0,0,0,0.4)]">
              <div className="text-[1rem] lg:text-2xl font-bold p-8 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Success</div>
              <div className="max-w-[300px] text-[80%] xl:text-[1.1rem] xl:text-xl px-8 h-40">Over 12 months of past success amassing over 8 figures in profit between all members.</div>
            </div>
          </div>
          <div className="w-[330px] m-auto flex justify-center drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">
            <Image src={squid}/>
          </div>
        </div>
      </div>
    );
}

export default About;