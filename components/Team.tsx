const Team = () => {
    return (
        <div className="flex justify-center h-screen bg-gray-400 z-[1]" id="Team">
          <img className="object-cover lg:object-fill h-full w-full absolute z-[2]" src="bg4.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="bg-teal-500 p-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
              <div className="text-center font-bold text-3xl mb-10">Dody</div>
              <img className="w-[200px]" src="dody.png"></img>
            </div>
            <div className="bg-teal-500 p-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
              <div className="text-center font-bold text-3xl mb-10">Dylan</div>
              <img className="w-[200px]" src="dylan.png"></img>
            </div>
            <div className="bg-teal-500 p-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
              <div className="text-center font-bold text-3xl mb-10">Yasha</div>
              <img className="w-[200px]" src="yasha.png"></img>
            </div>
            <div className="bg-teal-500 p-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
              <div className="text-center font-bold text-3xl mb-10">Chiefnquach</div>
              <img className="w-[200px]" src="chiefnquach.gif"></img>
            </div>
            <div className="bg-teal-500 p-10 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)]">
              <div className="text-center font-bold text-3xl mb-10">captinturtle</div>
              <img className="w-[200px]" src="captinturtle.png"></img>
            </div>
          </div>
        </div>
    );
}

export default Team;