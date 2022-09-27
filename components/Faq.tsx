import React, { useState } from 'react';
import Image from 'next/image'

import bg from '../public/bg4.png'

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
      <div className="flex justify-center h-[1100px] lg:h-[950px] bg-gray-500 z-[1]" id="Faq">
        <div className="object-cover lg:object-fill h-[1101px] lg:h-[951px] w-full absolute z-[2] select-none">
          <Image layout="fill" quality={100} src={bg}/>
        </div>
        <div className="z-[3] flex flex-col absolute pt-[150px] gap-5 text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mx-auto">Questions?</h1>
          <div className="h-[3px] bg-white w-[350px] mx-auto hidden lg:block"></div>
        </div>
        <div className="z-[3] mt-[300px] text-white">
          <div className="grid grid-cols-1 gap-1 mx-8 lg:w-[500px] m-auto">
            <div onClick={setBoxOne} className={box1 === true ? "bg-slate-800 h-[460px] xs:h-[550px] lg:h-[380px] rounded-lg transition-all cursor-pointer" : "bg-slate-800 rounded-lg h-[60px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold px-8 py-[18px] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] select-none">Who are we?</div>
              <div className={box1 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>The Abyss was created by three like minded friends with one goal in mind, turning a profit.</div>
              <div className={box1 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>We started with the goal of helping each other to make money by sharing ideas and insights into different projects. Once we realized just how much potential there was in what we were doing we decided to expand and bring in more friends and their family. Fast forward more than a year later and we are still here providing that info as one of the true OG alpha communities in this space.</div>
              <div className={box1 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Taking the conventional approach towards starting a brand was not something we had in mind when we began this journey we just wanted to make money with some friends. True satisfaction comes when we win as a community not as individuals and we will continue to strive for that.</div>
            </div>
            <div onClick={setBoxTwo} className={box2 === true ? "bg-slate-800 h-[350px] xs:h-[400px] lg:h-[300px] rounded-lg transition-all cursor-pointer" : "bg-slate-800 rounded-lg h-[60px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold px-8 py-[18px] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] select-none">What comes with holding a pass?</div>
              <div className={box2 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Exclusive in house alpha calls on new and existing projects.</div>
              <div className={box2 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Highly skilled team of experienced traders from around the world.</div>
              <div className={box2 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Community made up of like minded traders and strategists.</div>
              <div className={box2 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Access to the best tools covering every corner of the market.</div>
              <div className={box2 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Assistance with defi market strategies and insights.</div>
              <div className={box2 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Opportunites to secure whitelist and access to private projects.</div>
            </div>
            <div onClick={setBoxThree} className={box3 === true ? "bg-slate-800 h-[440px] xs:h-[500px] lg:h-[330px] rounded-lg transition-all cursor-pointer" : "bg-slate-800 rounded-lg h-[60px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold px-8 py-[18px] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] select-none">Where can I buy a pass?</div>
              <div className={box3 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Our community is hand selected by committee and the only way to mint is through application. There will be at least once application submission period each month for a handful of spots. To have the best odds of submitting on time make sure to follow our Twitter and apply once you see a new form go live. If your application is accepted you will be contacted and have your address added to the contract allowing you to mint from our dashboard.</div>
              <div className={box3 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>The only other option is to purchase a membership pass off of a secondary market like OpenSea. In order to check the expiration date (when a pass needs to be renewed) you can visit our dashboard and type in the pass id number.</div>
            </div>
            <div onClick={setBoxFour} className={box4 === true ? "bg-slate-800 h-[480px] xs:h-[580px] lg:h-[360px] rounded-lg transition-all cursor-pointer" : "bg-slate-800 rounded-lg h-[60px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold px-8 py-[18px] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] select-none">How much is a pass?</div>
              <div className={box4 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>There are 2 fees associated with joining as a new member. The first is an initial fee if selected which is 2x the renewal price or .16 ETH which includes the first months renewal. After any initial fee is paid each pass moves to a normal renewal system of either 30 days for normal members or 45 days for OG members.</div>
              <div className={box4 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>If for some reason the secondary value of an active pass falls below our initial fee the price will be adjusted accordingly the following month. Additionally 20% of the funds from renewals each month as well as any secondary sales will go into a community fund to assist in server development.</div>
              <div className={box4 === true ? "text-[.6rem] xs:text-sm lg:text-[.8rem] pb-4 px-8 transition-all duration-100 visible opacity-100" : "invisible opacity-0 transition-all duration-100"}>Passes can also be purchased through secondary markets such as OpenSea. To check the expiration date on a pass you can visit our dashboard and input the pass id number for the exact time.</div>
            </div>
            {/*
            <div onClick={setBoxFive} className={box5 === true ? "bg-slate-800 h-[180px] rounded-lg transition-all cursor-pointer" : "bg-slate-800 rounded-lg h-[60px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold px-8 py-[18px] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box5 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div onClick={setBoxSix} className={box6 === true ? "bg-slate-800 h-[180px] rounded-lg transition-all cursor-pointer" : "bg-slate-800 rounded-lg h-[60px] transition-all cursor-pointer"}>
              <div className="text-sm lg:text-lg font-bold px-8 py-[18px] drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">Lorem Ipsum</div>
              <div className={box6 === true ? "text-sm lg:text-lg pb-8 px-8 transition-all" : "opacity-0 transition-all"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            */}
          </div>
        </div>
      </div>
    );
}

export default FAQ;