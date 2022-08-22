import React, { useState } from 'react';
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

const Dashboard = () => {
  const [walletAddress, setWalletAddress] = useState();
  const [ensName, setENSName] = useState("...");
  const [token, setToken] = useState();
  const [expireTime, setExpireTime] = useState("");
  const [tokenId, setTokenId] = useState();

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
        }).catch((err) => {
          console.log(err);
        })
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
  
  const updateInput = () => {
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
            <div onClick={updateConnected} className={walletAddress === undefined ? "transition-all w-24 h-8 flex text-md px-4 py-2 leading-none rounded text-white bg-blue-300 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm cursor-pointer" : "transition-all w-[45vw] h-[30vw] text-md px-4 py-2 leading-none rounded-3xl text-white bg-blue-400 drop-shadow"}>
              <div className={walletAddress === undefined ? "m-auto" : "hidden"}>Connect</div>
              <div className={walletAddress === undefined ? "transition-all opacity-0 hidden" : "transition-all flex opacity-100"}>
                <div className="m-auto">
                  <h1 className="pt-10 font-bold text-xl text-center p-5">Welcome {ensName}</h1>
                  <label className="">Check expiration</label>
                  <form className="flex gap-5 pt-2">
                    <input
                      maxLength={4}
                      type="number"
                      value={token}
                      onChange={handleNumChange}
                      placeholder="token #"
                      className="p-1 focus:outline-none"
                    />
                    <div onClick={updateInput} className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[2px] rounded-full w-16 m-auto text-center p-2">check</div>
                  </form>
                  <div className="flex">
                    <div className="pt-5 m-auto font-bold">{expireTime}</div>
                  </div>
                  <div className="flex">
                    <div className="transition-all m-auto text-center p-8">Your tokenId: #{tokenId}</div>
                  </div>
                  <div className="flex">
                    <div onClick={renew} className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[2px] rounded-full w-16 m-auto text-center p-2">renew</div>
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