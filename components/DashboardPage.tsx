const About = () => {
    return (
        <div className="flex justify-center h-screen bg-gray-200">
          <img className="object-cover h-full w-full absolute" src="darkbg.png"></img>
          <div className="m-auto">
            <a href="/dashboard" className="transition-all inline-block text-md px-4 py-2 leading-none rounded text-white bg-gradient-to-tl from-orange-200 to-pink-300 hover:from-orange-300 hover:to-pink-400 hover:text-gray-100 drop-shadow hover:drop-shadow-sm">Connect</a>
          </div>
        </div>
    );
}

export default About;