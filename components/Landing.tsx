import Image from 'next/image'
import bg from '../public/bg0.png'
import squid from '../public/passText.png'


const Landing = () => {
  return (
    <div className="flex relative justify-center h-[1000px] lg:h-[970px] bg-gray-900" id="Landing">
      <div className="bottom-0 absolute z-[2] translate-y-[6.9px] select-none">
        <Image quality={100} priority={true} src={bg}/>
      </div>
      <div className="z-[4] grid grid-cols-1 h-[900px] lg:grid-cols-2 gap-0 lg:gap-20">
        <div className="mx-auto mt-20 xs:mt-32 lg:m-auto w-[200px] xs:w-[300px] sm:w-[400px] md:w-[400px] lg:w-[580px] xl:w-[650px] flex justify-center drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">
          <div>
            <Image priority={true} src={squid}/>
          </div>
        </div>
        <div className="m-auto px-10 lg:p-0 flex flex-col text-white">
          <div className="m-auto lg:m-0 text-4xl lg:text-7xl text-center lg:text-left font-bold pb-8">Into the abyss</div>
          <div className="max-w-[700px] text-center lg:text-left text-md xs:text-lg lg:text-2xl pb-8">The Abyss community is hand selected by our staff to ensure the best for each and every member. Owning a membership pass grants access to a wide range of information from exclusive curated alpha that is only available in house, to some of the best tools on the market.</div>
          <div className="hidden lg:block max-w-[700px] text-center lg:text-left text-md xs:text-lg lg:text-2xl pb-8">To join you can apply when new submissions open up or purchase a pass on OpenSea. Each pass has a renewal of either 30 or 45 days and can be managed using our dashboard.</div>
          <div className="grid xs:block gap-5 xs:gap-0 m-auto lg:m-0">
            <a className="m-auto">
              <button className="transition-all inline-block text-2xl px-6 py-3 leading-none rounded font-bold text-white bg-blue-500 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Apply</button>
            </a>
            <a href="https://opensea.io/collection/abyssfnf" className="m-auto">
              <button className="xs:ml-6 transition-all inline-block text-2xl px-6 py-3 mb-3 leading-none rounded font-bold text-white bg-blue-500 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Buy Pass</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;