import React, { useState } from 'react';

const FAQ = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);

  // probably a way better way to do this, functions that opens the selected box and minimizes other ones
  const setBoxOne = () => {
    setBox1(!box1);
    setBox2(false);
    setBox3(false);
    setBox4(false);
    setBox5(false);
    setBox6(false);
  };

  const setBoxTwo = () => {
    setBox2(!box2);
    setBox1(false);
    setBox3(false);
    setBox4(false);
    setBox5(false);
    setBox6(false);
  };

  const setBoxThree = () => {
    setBox3(!box3);
    setBox2(false);
    setBox1(false);
    setBox4(false);
    setBox5(false);
    setBox6(false);
  };

  const setBoxFour = () => {
    setBox4(!box4);
    setBox2(false);
    setBox3(false);
    setBox1(false);
    setBox5(false);
    setBox6(false);
  };

  const setBoxFive = () => {
    setBox5(!box5);
    setBox2(false);
    setBox3(false);
    setBox4(false);
    setBox1(false);
    setBox6(false);
  };

  const setBoxSix = () => {
    setBox6(!box6);
    setBox2(false);
    setBox3(false);
    setBox4(false);
    setBox5(false);
    setBox1(false);
  };

    return (
      <div className="flex justify-center h-[1400px] lg:h-screen bg-gray-500 z-[1]" id="Faq">
        <img className="object-cover lg:object-fill h-[1400px] lg:h-full w-full absolute z-[2]" src="bg5.png"></img>
        <div className="flex absolute pt-[150px] z-[3]">
          <h1 className="m-auto text-6xl lg:text-8xl pb-10 font-bold">Questions?</h1>
        </div>
        <div className="z-[3] mt-[350px]">
          <div className="grid grid-cols-1 gap-1 w-[400px] lg:w-[500px] m-auto">
            <div onClick={setBoxOne} className={box1 === true ? "bg-slate-800 h-[230px] rounded-3xl transition-all cursor-pointer" : "bg-slate-800 rounded-3xl h-[90px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box1 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div onClick={setBoxTwo} className={box2 === true ? "bg-slate-800 h-[230px] rounded-3xl transition-all cursor-pointer" : "bg-slate-800 rounded-3xl h-[90px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box2 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div onClick={setBoxThree} className={box3 === true ? "bg-slate-800 h-[230px] rounded-3xl transition-all cursor-pointer" : "bg-slate-800 rounded-3xl h-[90px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box3 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div onClick={setBoxFour} className={box4 === true ? "bg-slate-800 h-[230px] rounded-3xl transition-all cursor-pointer" : "bg-slate-800 rounded-3xl h-[90px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box4 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div onClick={setBoxFive} className={box5 === true ? "bg-slate-800 h-[230px] rounded-3xl transition-all cursor-pointer" : "bg-slate-800 rounded-3xl h-[90px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box5 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div onClick={setBoxSix} className={box6 === true ? "bg-slate-800 h-[230px] rounded-3xl transition-all cursor-pointer" : "bg-slate-800 rounded-3xl h-[90px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold p-8 m-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box6 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FAQ;