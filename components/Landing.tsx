import Image from 'next/image'
import bg0 from '../public/bg0.png'

const Landing = () => {
    return (
    <div className="flex justify-center h-screen bg-gray-900 z-[1]">
      <div className="object-cover lg:object-fill h-full w-full translate-y-[1px] absolute drop-shadow-[15px_0px_15px_rgba(0,0,0,0.4)] z-[2]">
        <Image layout="fill" quality={100} src={bg0}/>
      </div>
      <h1 className="hidden md:flex mt-[18vh] text-[15vw] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-white">
        ABYSS
      </h1>
      <div className="md:hidden mt-[30vh] text-[20vw] xl:text-[14rem] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-white">
        <h1>ABYSS</h1>
      </div>
    </div>
    );
}

export default Landing;