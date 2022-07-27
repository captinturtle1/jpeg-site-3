import Image from 'next/image'
import bg from '../public/testbg.png'

const Landing = () => {
    return (
        <div className="w-[10vw] h-[100vh]">
            <img className="object-cover h-full w-full absolute -z-10" src="testbg.png"/>
        </div>
    );
}

export default Landing;