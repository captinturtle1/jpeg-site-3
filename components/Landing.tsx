import Image from 'next/image'
import bg from '../public/bg0.png'
import squid from '../public/passText.png'


const Landing = () => {
  return (
    <div className="flex relative justify-center h-[1200px] lg:h-[970px] bg-gray-900" id="Landing">
      <div className="bottom-0 absolute z-[2] translate-y-[6.9px]">
        <Image quality={100} src={bg}/>
      </div>
      <div className="z-[4] grid grid-cols-1 h-[900px] lg:grid-cols-2 gap-20">
        <div className="mx-auto mt-32 lg:m-auto w-[200px] xs:w-[300px] lg:w-[650px] flex justify-center drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">
          <div>
            <Image src={squid}/>
          </div>
        </div>
        <div className="m-auto px-10 lg:p-0 flex flex-wrap">
          <div className="text-5xl lg:text-7xl text-center lg:text-left font-bold pb-8">Into the abyss</div>
          <div className="max-w-[700px] text-center lg:text-left text-md xs:text-xl lg:text-2xl pb-8">A private collective of skilled traders and investors navigating the web3 space. Membership passes grant access to all community benefits while active. Each membership runs on a 30 day renewal system and can be managed at anytime via our dashboard.</div>
          <div className="max-w-[700px] text-center lg:text-left text-md xs:text-xl lg:text-2xl pb-8">Membership passes grant access to all community benefits while active. Each membership runs on a 30 day renewal system and can be managed at anytime via our dashboard.</div>
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