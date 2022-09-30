import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Image from 'next/image'
import NextLink from 'next/link'
import { 
  requestAccount,
  getAccount, 
  mintToken,
  getENS,
  getExpire,
  getAddressBalanceOf,
  getTokenIdOfBalance,
  renewPass,
  getProof,
  checkContractStatus
} from './web3/ethersComponents'
import { FaSearch } from "react-icons/fa";

const day = 86400;
declare var window: any


const Dashboard = () => {
  const [walletAddress, setWalletAddress] = useState();
  const [ensName, setENSName] = useState("...");
  const [token, setToken] = useState();
  const [expireTime, setExpireTime] = useState("");
  const [tokenId, setTokenId] = useState();
  const [userExpireTime, setUserExpireTime] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userStatusNum, setUserStatusNum] = useState(0);
  const [userMintStatus, setUserMintStatus] = useState<any>();
  const [proof, setProof] = useState<any>();
  const [privateSaleStatus, setPrivateSaleStatus] = useState();
  const [canRenewStatus, setCanRenewStatus] = useState();
  const [monthsToRenew, setMonthsToRenew] = useState(1);
  const [price, setPrice] = useState(0);
  const [renewPrice, setRenewPrice] = useState(0);
  const [maxRenewMonths, setMaxRenewMonths] = useState(0);
  const [ogTokenEnd, setOgTokenEnd] = useState(10);
  const [expireTimeUnix, setExpireTimeUnix] = useState(0);
  const [monthsAbleToRenew, setMonthsAbleToRenew] = useState(0);

  // runs when page started and when walletAddress state changes
  useEffect(() => {
    updateConnected();

    // checks if ethereum provider
    try{
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      if (typeof provider !== 'undefined') {
        window.ethereum.on('accountsChanged', function (accounts){

          // runs when metamask accounts change
          let selectedAccount = accounts[0];
          console.log(`Selected account changed to ${selectedAccount}`);
          updateConnected();
        })

        // runs when metamask chains changed
        window.ethereum.on('chainChanged', function(network){
          console.log(`Selected network changed to ${network}. Refreshing...`);
          window.location.reload();
        })

        // gets address sets states
        getAccount().then(value => {
          if (value !== undefined) {
            setWalletAddress(value);
            getENSName(value);
          } else {
            console.log("Not connected");
          }
        }).catch((err) => {
          console.log(err);
        })
      }
    } catch (err) {
      console.log("No ethereum service.");
    }
  },
  [walletAddress])
  
  // checks if there is an ethereum service, refreshes on network change, auto updates on account change, looks for address if ethereum is present
  

  // handles input box for pass expire check box
  const handleNumChange = event => {
    const limit = 4;
    setToken(event.target.value.slice(0, limit));
  };

  // handles months to renew select box
  const handleMonthsChange = event => {
    const limit = 1;
    setMonthsToRenew(event.target.value.slice(0, limit));
  };

  // gets pass balance info from address
  const findBalanceOfOwner = (address) => {
    getAddressBalanceOf(address).then(value => {
      if (value > 0) {
        getTokenIdOfBalance(address, 0).then(value => {
          setTokenId(value.toString());
          getUserExpireTime(value.toString());
          if (value.toString() > ogTokenEnd) {
            setUserStatus("Member");
            setUserStatusNum(2);
            return;
          }
          setUserStatus("OG");
          setUserStatusNum(1);
          return;
        }).catch((err) => {
          console.log(err);
        })
      } else {
        setUserStatus("Not a member");
        setUserStatusNum(0);
        setUserExpireTime("N/A");
        setTokenId(undefined);
        return;
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  /*
  const ownedTokens = (address) => {
    let passesOwnedNum = parseInt(passesOwned);
    console.log(passesOwnedNum);
    for (let i = 0; i < passesOwnedNum; i++) {
      getTokenIdOfBalance(address, i).then(value => {
        console.log(value.toString());
      }).catch((err) => {
        console.log(err);
      })
    }
  }
  */

  // runs when connect button is clicked
  const updateConnected = () => {
    requestAccount().then(value => {
      getAccount().then(value => {
        if (value !== undefined) {
          setWalletAddress(value);
          getENSName(value);
          findBalanceOfOwner(value);
          getProofStatus(value);
          getContractStatus();
        }
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  // sets userMintStatus if there is a proof detected
  const getProofStatus = (walletAddress) => {
    let gotProof = getProof(walletAddress);
    console.log(`user proof is ${gotProof[1]}`);
    setUserMintStatus(gotProof[0])
    setProof(gotProof[1]);
  }

  // updates site with contract info
  const getContractStatus = () => {
    checkContractStatus().then(value => {
      setCanRenewStatus(value[0]);
      setPrivateSaleStatus(value[1]);
      setPrice(value[2] / 1000000000000000000);
      setRenewPrice(value[3] / 1000000000000000000);
      setMaxRenewMonths(value[4]);
      //setOgTokenEnd(value[5]);
    }).catch((err) => {
      console.log(err);
    })
  }

  // checks if ens name for address and sets it if so
  const getENSName = (address) => {
    getENS(address).then(value => {
      if (value == undefined) {
        let truncatedAdress = (`${address.substring(0, 6)}...${address.substring(38, 42)}`)
        setENSName(truncatedAdress);
        return;
      }
      let nameMax = 32;
      if (value.length > nameMax) {
        let truncatedName = (`${value.substring(0, nameMax)}...`)
        setENSName(truncatedName);
        return;
      }
      setENSName(value);
    }).catch((err) => {
      console.log(err);
    })
  }

  // gives human readable time
  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  // sets how many months the user is able to renew
  const getUserMonthsAbleToRenew = (tokenId, expiretime) => {
    let maxExpireTimeOG = Math.floor(Date.now() / 1000) + (3 * (day * 45));
    let maxExpireTime = Math.floor(Date.now() / 1000) + (3 * (day * 30));

    if (tokenId > 0 && tokenId <= ogTokenEnd) {
      if (maxExpireTimeOG > (expiretime + 3 * (45 * day))) {
        console.log("3 month");
        setMonthsAbleToRenew(1);
      } else if (maxExpireTimeOG > (expiretime + 2 * (45 * day))) {
        console.log("2 month");
        setMonthsAbleToRenew(2);
      } else if (maxExpireTimeOG > (expiretime + 1 * (45 * day))) {
        console.log("1 month");
        setMonthsAbleToRenew(3);
      }
      return;
    } else if (tokenId > ogTokenEnd) {
      if (maxExpireTime > (expiretime + 3 * (30 * day))) {
        console.log("3 month");
        setMonthsAbleToRenew(1);
      } else if (maxExpireTime > (expiretime + 2 * (30 * day))) {
        console.log("2 month");
        setMonthsAbleToRenew(2);
      } else if (maxExpireTime > (expiretime + 1 * (30 * day))) {
        console.log("1 month");
        setMonthsAbleToRenew(3);
      }
      return;
    }
    console.log("0 month");
    setMonthsAbleToRenew(0);
    return;
  }
  
  // gets expire time for pass number inputted
  const getExpireTime = () => {
    getExpire(token).then(value => {
      if (value == 0) {
        setExpireTime("Pass not found.");
        return;
      }
      let expireDate = timeConverter(value);
      setExpireTime(expireDate);
    }).catch((err) => {
      console.log(err);
    })
  }

  // gets user expire time if the user holds a pass
  const getUserExpireTime = (tokenId) => {
    getExpire(tokenId).then(value => {
      if (value == 0) {
        setUserExpireTime("No pass detected.");
        return;
      }
      let expireDate = timeConverter(value);
      setExpireTimeUnix(value.toString());
      setUserExpireTime(expireDate);
      getUserMonthsAbleToRenew(tokenId, parseInt(value.toString()));
    }).catch((err) => {
      console.log(err);
    })
  }

  // contract renew calling function
  const renew = () => {
    renewPass(tokenId, monthsToRenew).then(tx => {
      console.log(tx);
      tx.wait(1).then(value => {
        console.log("Confirmed");
        updateConnected();
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // contract mint pass function
  const mintPass = () => {
    if (userMintStatus !== 0) {
      mintToken(userMintStatus, proof).then(tx => {
        console.log(tx);
        tx.wait(1).then(value => {
          console.log("Confirmed");
          updateConnected();
        })
        .catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  // idk why i have this but it was the only way for me to get something to work
  const nothing = () => {}

    return (
      <div>
        <nav className="z-[1] fixed pt-6 px-10">
          <NextLink href="/">
            <a className="flex items-center flex-shrink-0 text-white mr-6">
              <div className="h-8 w-8 mr-2">
                <Image height="100%" width="100%" priority={true} src="/logo.png" className="rounded-xl"/>
              </div>
              <span className="font-semibold text-xl tracking-tight mr-4">Abyss</span>
            </a>
          </NextLink>
        </nav>
        <div className="flex justify-center h-screen min-h-[700px] bg-slate-900 overflow-hidden">
          <div className="m-auto">
            <div onClick={walletAddress === undefined ? updateConnected : nothing} className={walletAddress === undefined ? "transition-all w-24 h-8 flex flex-wrap text-md px-4 py-2 leading-none rounded text-white bg-blue-300 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm cursor-pointer" : "transition-all duration-300 trans w-[350px] h-[450px] max-w-[900px] max-h-[600px] xl:w-[45vw] xl:h-[30vw] text-md p-10 leading-none text-white bg-zinc-700 drop-shadow-[15px_20px_20px_rgba(0,0,0,0.4)] grid rounded-3xl"}>
              <div className={walletAddress === undefined ? "m-auto" : "hidden"}>Connect</div>
              <div className={walletAddress === undefined ? "transition-all duration-1000 invisible opacity-0" : "transition-all visible flex opacity-100"}>
                <div className={walletAddress === undefined ? "grid grid-cols-1 xl:grid-cols-2 gap-10 m-auto invisible opacity-0" : "transition-all ease-linear delay-100 duration-200 grid grid-cols-1 xl:grid-cols-2 gap-10 m-auto visible opacity-100"}>
                  <div className="hidden xl:block rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)] m-auto">
                    <Image width="500px" height="500px" priority={true} src="/pass.png"/>
                  </div>
                  <div className="my-auto">
                    <h1 className="font-bold text-lg 2xl:text-3xl">Welcome</h1>
                    <h1 className="font-bold text-lg 2xl:text-3xl">{ensName}</h1>
                    <div className="transition-all pt-5 text-xl">Status: {userStatus}</div>
                    <div className={expireTimeUnix < Math.floor(Date.now() / 1000) ? "transition-all pt-2 text-xl text-red-500" : "transition-all pt-2 text-xl text-white"}>Expiration: {userExpireTime}</div>
                    <div className="flex pt-5 gap-5 text-2xl font-bold">
                      {userMintStatus !== 0 ? (
                        <>
                          {tokenId !== undefined ? (
                            <>
                              <div onClick={canRenewStatus === true ? renew : nothing} className={canRenewStatus === true ? (monthsToRenew <= monthsAbleToRenew ? "transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 my-auto rounded-xl" : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none my-auto") : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none my-auto"}>Renew</div>
                              <form className="my-auto">
                                <select
                                  value={monthsToRenew}
                                  onChange={handleMonthsChange}
                                  className="pl-2 p-1 focus:outline-none rounded-lg w-16 h-full bg-neutral-800"
                                >
                                  <option className="bg-neutral-800">1</option>
                                  <option className="bg-neutral-800">2</option>
                                  <option className="bg-neutral-800">3</option>
                                </select>
                              </form>
                              <div className="my-auto text-[1.1rem] 2xl:text-[1.5rem]">{renewPrice * monthsToRenew} Ξ</div>
                            </>
                          ) : (
                            <>
                              <div onClick={privateSaleStatus === true ? mintPass : nothing} className={privateSaleStatus === true && userMintStatus !== 0 ? "transition-all cursor-pointer bg-blue-500 hover:bg-blue-400 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 rounded-xl" : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none"}>Mint</div>
                              <div className="my-auto text-[1.1rem] 2xl:text-[1.5rem]">{price} Ξ</div>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {userStatusNum !== 0 ? (
                              <>
                                <div onClick={canRenewStatus === true ? renew : nothing} className={canRenewStatus === true ? (monthsToRenew <= monthsAbleToRenew ? "transition-all cursor-pointer bg-blue-500 hover:bg-blue-400 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 my-auto rounded-xl" : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none my-auto") : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none my-auto"}>Renew</div>
                                  <form className="my-auto">
                                    <select
                                      value={monthsToRenew}
                                      onChange={handleMonthsChange}
                                      className="pl-2 p-1 focus:outline-none rounded-lg w-16 h-full bg-neutral-800"
                                    >
                                      <option className="bg-neutral-800">1</option>
                                      <option className="bg-neutral-800">2</option>
                                      <option className="bg-neutral-800">3</option>
                                    </select>
                                  </form>
                                <div className="my-auto text-[1.1rem] 2xl:text-[1.5rem]">{renewPrice * monthsToRenew} Ξ</div>
                              </>
                            ):(
                              <a href="" className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 rounded-xl">Apply</a>
                            )}
                          
                        </>
                      )}
                    </div>
                    <h1 className="pt-10 font-light">check other pass</h1>
                    <form className="flex pt-1 gap-3">
                      <input
                        maxLength={4}
                        onChange={handleNumChange}
                        placeholder="token #"
                        className="pl-2 p-1 focus:outline-none rounded-lg bg-neutral-800"
                      />
                      <div onClick={getExpireTime} className="transition-all cursor-pointer bg-blue-500 hover:bg-blue-400 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] rounded-full text-center p-2"><FaSearch/></div>
                    </form>
                    <div className="m-auto font-bold pt-2">{expireTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;