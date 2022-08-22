import React, { useState } from 'react';
import { ethers } from "ethers";
import { 
  requestAccount,
  getAccount, 
  checkIfPaused,
  getTotalSupply,
  mintToken,
  getENS,
  getExpire,
  getAddressBalanceOf,
  getTokenIdOfBalance,
  renewPass,
} from './web3/ethersComponents'
import { FaSearch } from "react-icons/fa";

declare var window: any

function refresh() {
  window.location.reload();
}

const Dashboard = () => {
  const [walletAddress, setWalletAddress] = useState();
  const [ensName, setENSName] = useState("...");
  const [token, setToken] = useState();
  const [expireTime, setExpireTime] = useState("");
  const [tokenId, setTokenId] = useState();
  const [userExpireTime, setUserExpireTime] = useState("");
  const [userStatus, setUserStatus] = useState("");

  if (typeof window !== 'undefined') {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    if (typeof provider !== 'undefined') {
      window.ethereum.on('accountsChanged', function (accounts){
        let selectedAccount = accounts[0];
        console.log(`Selected account changed to ${selectedAccount}`);
        updateConnected();
      })
      window.ethereum.on('chainChanged', function(network){
        console.log(`Selected network changed to ${network}`);
        refresh();
    })
      
    }
  }

  // handles input box for pass expire check box
  const handleNumChange = event => {
    const limit = 4;
    setToken(event.target.value.slice(0, limit));
  };

  // gets pass balance info from address
  const findBalanceOfOwner = (address) => {
    getAddressBalanceOf(address).then(value => {
      if (value > 0) {
        console.log("User owns pass");
        getTokenIdOfBalance(address, 0).then(value => {
          setTokenId(value.toString());
          getUserExpireTime(value.toString());
          console.log(value.toString());
          if (value.toString() > 5) {
            setUserStatus("Member");
            return;
          }
          setUserStatus("OG");
          return;
        }).catch((err) => {
          console.log(err);
        })
      } else {
        setUserStatus("Not a member");
        setUserExpireTime("N/A");
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
        setWalletAddress(value);
        getENSName(value);
        findBalanceOfOwner(value);
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  const getENSName = (address) => {
    getENS(address).then(value => {
      if (value == undefined) {
        let truncatedAdress = (`${address.substring(0, 6)}...${address.substring(38, 42)}`)
        setENSName(truncatedAdress);
        return;
      }
      let nameMax = 20;
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

  const getUserExpireTime = (tokenId) => {
    getExpire(tokenId).then(value => {
      if (value == 0) {
        setUserExpireTime("No pass detected.");
        return;
      }
      let expireDate = timeConverter(value);
      setUserExpireTime(expireDate);
    }).catch((err) => {
      console.log(err);
    })
  }

  const renew = () => {
    renewPass(tokenId).then(tx => {
      console.log(tx);
    })
    .catch((err) => {
      console.log(err);
    })
  }

    return (
      <div>
        <nav className="z-[1] fixed ml-20 mt-5 pt-6 px-10">
          <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="fill-current h-8 w-8 mr-2 rounded-xl" src={"pinksquare.png"}/>
            <span className="font-semibold text-xl tracking-tight mr-4">Abyss</span>
          </a>
        </nav>
        <div className="flex justify-center h-screen bg-slate-900">
          <div className="m-auto">
            <div onClick={updateConnected} className={walletAddress === undefined ? "transition-all w-24 h-8 flex text-md px-4 py-2 leading-none rounded text-white bg-blue-300 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm cursor-pointer" : "transition-all duration-300 trans w-[400px] h-[450px] max-w-[900px] max-h-[600px] xl:w-[45vw] xl:h-[30vw] text-md p-10 leading-none text-white bg-indigo-900 drop-shadow-[15px_20px_20px_rgba(0,0,0,0.4)] grid rounded-3xl"}>
              <div className={walletAddress === undefined ? "m-auto" : "hidden"}>Connect</div>
              <div className={walletAddress === undefined ? "transition-all duration-1000 invisible opacity-0" : "transition-all visible flex opacity-100"}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 m-auto">
                  <img className="w-[350px] hidden xl:block rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)]" src="testpassimg.png"></img>
                  <div className="">
                    <h1 className="font-bold text-3xl">Welcome</h1>
                    <h1 className="font-bold text-3xl">{ensName}</h1>
                    <div className="transition-all pt-5 font-bold text-xl">Status: {userStatus}</div>
                    <div className="transition-all pt-5 font-bold text-xl">Your expiration: {userExpireTime}</div>
                    <div className="flex pt-5 gap-5 text-2xl font-bold">
                      <div onClick={renew} className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 rounded-xl">Mint</div>
                      <div onClick={renew} className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 rounded-xl">Apply</div>
                    </div>
                    <h1 className="pt-10 font-light">check other pass</h1>
                    <form className="flex pt-1 gap-3">
                      <input
                        maxLength={4}
                        type="number"
                        value={token}
                        onChange={handleNumChange}
                        placeholder="token #"
                        className="p-1 focus:outline-none"
                      />
                      <div onClick={getExpireTime} className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] rounded-full text-center p-2"><FaSearch/></div>
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