const About = () => {
    return (
        <div className="flex justify-center h-screen min-h-[1000px] bg-gray-100 z-[1]" id="About">
          <img className="object-cover lg:object-fill h-full min-h-[1000px] w-full absolute z-[3]" src="bg1.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="m-auto">
              <div className="text-[10vw] md:text-[4vw] font-bold bg-teal-500 p-10 m-10 md:m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] flex justify-center">Who Are We</div>
              <div className="max-w-[600px] m-[20px] text-[130%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="flex justify-center">
              <img className="h-96 xl:h-[30vw] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]" src="jpegge.png"></img>
            </div>
          </div>
        </div>
    );
}

export default About;