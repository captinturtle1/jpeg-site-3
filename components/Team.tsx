import { BsTwitter } from "react-icons/bs";

const Team = () => {
    return (
        <div className="flex justify-center h-[1000px] lg:h-screen bg-gray-400 z-[1]" id="Team">
          <img className="object-cover lg:object-fill h-[1000px] lg:h-full  w-full absolute z-[2]" src="bg4.png"></img>
          <div className="z-[4] grid">
          <h1 className="z-[4] m-auto text-6xl font-bold mb-[-90px]">Meet Our Team</h1>
          <div className="h-[3px] bg-white w-[500px] m-auto mb-5"></div>
          <div className="m-auto  grid grid-cols-2 lg:grid-cols-3 gap-10 px-10">
            <div>
              <a href="https://twitter.com/HeyDody">
                <div className="bg-opacity-80 backdrop-blur-lg px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="dody.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Dody</div>
                  <div className="text-center text-sm xl:text-xl">Owner</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/0x_Dylan">
                <div className="bg-opacity-80 backdrop-blur-lg px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="dylan.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Dylan</div>
                  <div className="text-center text-sm xl:text-xl">Owner</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Yashatoshi">
                <div className="bg-opacity-80 backdrop-blur-lg px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="yasha.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Yasha</div>
                  <div className="text-center text-sm xl:text-xl">Owner</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/its_Zoid">
                <div className="bg-opacity-80 backdrop-blur-lg px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="zoid.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Zoid</div>
                  <div className="text-center text-sm xl:text-xl">Market Guru</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/foxninjac71">
                <div className="bg-opacity-80 backdrop-blur-lg px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <img className="w-[100px] lg:w-[150px] rounded-full m-auto" src="captinturtle.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Turtle</div>
                  <div className="text-center text-sm xl:text-xl">Dev</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/chiefnquach">
                <div className="bg-opacity-80 backdrop-blur-lg px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] rounded-3xl transition-all ease-out trans hover:translate-x-1 hover:translate-y-1 cursor-pointer">
                  <img className="w-[100px] lg:w-[150px] rounded-full m-auto" src="chiefnquach.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Chief</div>
                  <div className="text-center text-sm xl:text-xl">Collab Manager</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
    );
}

export default Team;