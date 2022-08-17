const About = () => {
    return (
      <div>
        <nav className="z-[1] fixed ml-20 mt-5 p-6">
            <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="fill-current h-8 w-8 mr-2 rounded-xl" width="54" height="54" src={"pinksquare.png"}/>
                <span className="font-semibold text-xl tracking-tight mr-4">Abyss</span>
            </a>
        </nav>
        <div className="flex justify-center h-screen bg-gray-200">
          <img className="object-cover h-full w-full absolute" src="darkbg.png"></img>
          <div className="m-auto">
            <div className="transition-all inline-block text-md px-4 py-2 leading-none rounded text-white bg-blue-300 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm cursor-pointer">Connect</div>
          </div>
        </div>
      </div>
    );
}

export default About;