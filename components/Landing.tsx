const Landing = () => {
    return (
    <div className="flex justify-center h-screen bg-white z-[1]">
      <img className="object-cover lg:object-fill h-full w-full absolute drop-shadow-[15px_0px_15px_rgba(0,0,0,0.4)] z-[3]" src="bg0.png"></img>
      <h1 className="hidden md:flex mt-[18vh] text-[15vw] xl:text-[14rem] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-black">
        JPGALPHA
      </h1>
      <div className="md:hidden mt-[8vh] text-[35vw] xl:text-[14rem] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-black">
        <h1>JPG</h1>
        <h1 className="mt-[-13vh]">ALP</h1>
      </div>
    </div>
    );
}

export default Landing;