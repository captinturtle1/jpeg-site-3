import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import nftnerdsExample from "../public/tools1.png"
import zetaExample from "../public/tools2.png"
import degenmintExample from "../public/tools3.png"
import React, { useState, useEffect } from 'react';


// 0 = image, 1 = title, 2 = desc
const nftnerdsDesc: any = [nftnerdsExample, "NFTNerds.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];
const zetaDesc: any = [zetaExample, "Zeta.", "Aliquam faucibus purus in massa tempor. Aenean sed adipiscing diam donec adipiscing tristique risus. Velit egestas dui id ornare arcu odio ut. Natoque penatibus et magnis dis parturient. Tortor id aliquet lectus proin nibh. A erat nam at lectus urna duis convallis convallis tellus. Integer vitae justo eget magna fermentum iaculis eu non. Nisi est sit amet facilisis magna etiam. Pretium nibh ipsum consequat nisl vel pretium. Enim facilisis gravida neque convallis a cras."];
const degenmintDesc: any = [degenmintExample, "Degen Mint.", "Nullam ac tortor vitae purus faucibus ornare suspendisse. Risus pretium quam vulputate dignissim suspendisse in est. Purus in mollis nunc sed id semper. Nunc faucibus a pellentesque sit amet porttitor eget. Ipsum dolor sit amet consectetur adipiscing. At tellus at urna condimentum mattis pellentesque id."];

const Tools = () => {
  const [example, setExample] = useState(nftnerdsDesc);
  const [exampleCount, setExampleCount] = useState(0);

  //changes card information depending on exampleCount
  useEffect(() => {
    if (exampleCount == 0) {
      setExample(nftnerdsDesc);
    } else if (exampleCount == 1) {
      setExample(zetaDesc);
    } else if (exampleCount == 2) {
      setExample(degenmintDesc);
    }
  });

  //cycles examplecCount up, loops back at 2
  const cycleUp = () => {
    setExampleCount(exampleCount + 1);
    if (exampleCount == 2) {
      setExampleCount(0);
    }
  };

  //cycles exampleCount down 1, loops back at 0
  const cycleDown = () => {
    setExampleCount(exampleCount - 1);
    if (exampleCount == 0) {
      setExampleCount(2);
    }
  };

    return (
        <div className="flex justify-center h-screen bg-gray-200 z-[1]" id="Tools">
          <img className="object-cover lg:object-fill h-full w-full absolute z-[2]" src="bg2.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <img className="hidden lg:block h-96 xl:h-[30vw] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]" src={example[0].src}></img>
            </div>
            <div className="m-auto text-left">
              <div className="text-[10vw] md:text-[4vw] font-bold bg-teal-500 p-10 md:m-0 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] flex justify-center">Tools</div>
              <div className="max-w-[600px] mx-[20px] text-[130%] bg-pink-300 pt-[80px] mt-[-50px] p-8">{example[1]}</div>
              <div className="max-w-[600px] h-[300px] mx-[20px] text-[95%] lg:text-[115%] bg-pink-300 px-8 pb-8 select-none">{example[2]}</div>
            </div>
            <div className="col-span-2 flex justify-center text-white z-[4] gap-20 text-[30px]">
              <AiOutlineLeft onClick={cycleDown} className="hover:text-gray-300 cursor-pointer"/>
              <AiOutlineRight onClick={cycleUp} className="hover:text-gray-300 cursor-pointer"/>
            </div>
          </div>
        </div>
    );
}

export default Tools;