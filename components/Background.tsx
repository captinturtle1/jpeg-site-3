import { Parallax } from 'react-scroll-parallax';

const Background = () => {
    return (
        <Parallax translateY={[-15, 20]}>
            <div className="h-full w-full z-30 pt-[40vh]">
                <div className="h-96 w-96 bg-slate-800 rounded-3xl">
                </div>
            </div>
        </Parallax>
    );
}

export default Background;