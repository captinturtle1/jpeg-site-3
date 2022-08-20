import { BsTwitter } from "react-icons/bs";

const Team = () => {
    return (
        <div className="flex justify-center h-[1200px] lg:h-screen bg-gray-400 z-[1]" id="Team">
          <img className="object-cover lg:object-fill h-[1200px] lg:h-full  w-full absolute z-[2]" src="bg4.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div>
              <a href="https://twitter.com/HeyDody">
                <div className="bg-slate-700 bg-opacity-80 backdrop-blur-lg px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <div className="text-center font-bold text-3xl py-5">Dody</div>
                  <img className="w-[100px] lg:w-[200px] rounded-full" src="dody.png"></img>
                  <div className="text-center text-sm xl:text-xl pt-3">Owner</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/0x_Dylan">
                <div className="bg-slate-700 bg-opacity-80 backdrop-blur-lg px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <div className="text-center font-bold text-3xl py-5">Dylan</div>
                  <img className="w-[100px] lg:w-[200px] rounded-full" src="dylan.png"></img>
                  <div className="text-center text-sm xl:text-xl pt-3">Alpha Caller</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a>
                <div className="bg-slate-700 bg-opacity-80 backdrop-blur-lg px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <div className="text-center font-bold text-3xl py-5">Yasha</div>
                  <img className="w-[100px] lg:w-[200px] rounded-full" src="yasha.png"></img>
                  <div className="text-center text-sm xl:text-xl pt-3">Alpha Caller</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/its_Zoid">
                <div className="bg-slate-700 bg-opacity-80 backdrop-blur-lg px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <div className="text-center font-bold text-3xl py-5">Zoid</div>
                  <img className="w-[100px] lg:w-[200px] rounded-full" src="zoid.png"></img>
                  <div className="text-center text-sm xl:text-xl pt-3">Alpha Caller</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-2 m-auto lg:col-span-1 lg:m-0">
              <a href="https://twitter.com/foxninjac71">
                <div className="bg-slate-700 bg-opacity-80 backdrop-blur-lg px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <div className="text-center font-bold text-3xl py-5">Turtle</div>
                  <img className="w-[100px] lg:w-[200px] rounded-full m-auto" src="captinturtle.png"></img>
                  <div className="text-center text-sm xl:text-xl pt-3">Dev</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
    );
}

export default Team;