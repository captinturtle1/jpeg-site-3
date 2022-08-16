import { BsTwitter } from "react-icons/bs";

const Team = () => {
    return (
        <div className="flex justify-center h-screen bg-gray-400 z-[1]" id="Team">
          <img className="object-cover lg:object-fill h-full  w-full absolute z-[2]" src="bg4.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div>
              <div className="bg-teal-500 px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
                <div className="text-center font-bold text-3xl py-5">Dody</div>
                <img className="w-[200px]" src="dody.png"></img>
                <div className="text-center text-xl">Owner</div>
                <div className="flex justify-center pb-5">
                  <a href="https://twitter.com/HeyDody">
                    <BsTwitter/>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-teal-500 px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
                <div className="text-center font-bold text-3xl py-5">Dylan</div>
                <img className="w-[200px]" src="dylan.png"></img>
                <div className="text-center text-xl">Alpha Caller</div>
                <div className="flex justify-center pb-5">
                  <a href="https://twitter.com/0x_Dylan">
                    <BsTwitter/>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-teal-500 px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
                <div className="text-center font-bold text-3xl py-5">Yasha</div>
                <img className="w-[200px]" src="yasha.png"></img>
                <div className="text-center text-xl pb-9">Alpha Caller</div>
              </div>
            </div>
            <div>
              <div className="bg-teal-500 px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
                <div className="text-center font-bold text-3xl py-5">Chiefnquach</div>
                <img className="w-[200px]" src="chiefnquach.gif"></img>
                <div className="text-center text-xl">Collab Manager</div>   
                <div className="flex justify-center pb-5">
                  <a href="https://twitter.com/chiefnquach">
                    <BsTwitter/>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-teal-500 px-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] col-span-2 lg:col-span-1">
                <div className="text-center font-bold text-3xl py-5">Captinturtle</div>
                <img className="w-[200px]" src="captinturtle.png"></img>
                <div className="text-center text-xl">Dev</div>
                <div className="flex justify-center pb-5">
                  <a href="https://twitter.com/foxninjac71">
                    <BsTwitter/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Team;