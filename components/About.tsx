const About = () => {
    return (
        <div className="flex justify-center h-[1400px] lg:h-screen min-h-[1000px] bg-gray-100 z-[1]" id="About">
          <img className="object-cover lg:object-fill h-[1400px] lg:h-full min-h-[1000px] w-full absolute z-[3]" src="bg1.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="grid grid-cols-2 gap-5">
              <div className=" bg-slate-800 rounded-3xl">
                <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-sm lg:text-lg p-8">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
              <div className="bg-slate-800 rounded-3xl">
                <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-sm lg:text-lg p-8">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
              <div className="bg-slate-800 rounded-3xl">
                <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-sm lg:text-lg p-8">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
              <div className="bg-slate-800 rounded-3xl">
                <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">A PRIME NFT PASS IS</div>
                <div className="max-w-[300px] text-sm lg:text-lg p-8">By activating your squid pass you are gaining access to in depth trading platform with a community first</div>
              </div>
            </div>
            <div className="flex justify-center">
              <img className="h-96 xl:h-[30vw] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]" src="jpegge.png"></img>
            </div>
          </div>
        </div>
    );
}

export default About;