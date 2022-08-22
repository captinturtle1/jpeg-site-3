import { ethers } from "ethers";
import abi from './abi.json'

const contractAddress = "0xE7e8F297D39B0056a1706cCc7C3B6d5DCaeeeB74";

let selectedAccount;
let nftContract;
let isInitialized = false;

export const initWeb3 = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();

    if (typeof provider !== 'undefined') {
        window.ethereum.on('accountsChanged', function (accounts){
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
        })
    }

    nftContract = new ethers.Contract(contractAddress, abi, signer);

    isInitialized = true;
}

export async function requestAccount() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            selectedAccount = accounts[0];
            return accounts[0];
        } catch (error) {
        }
    } else {
    }
}

export async function getAccount() {
    if (window.ethereum) {
        console.log("Wallet detected");
        try {
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            selectedAccount = accounts[0];
            console.log(selectedAccount, "Is connected");
            return accounts[0];
        } catch (error) {
            console.log("Error connecting...");
        }
    } else {
        console.log("No wallet detected");
    }
}

export async function getAddressBalanceOf(address) {
    if (!isInitialized) {
        await initWeb3();
    }
    let passBalance = await nftContract.balanceOf(address);
    return passBalance;
}

export async function getTokenIdOfBalance(address, index) {
    if (!isInitialized) {
        await initWeb3();
    }
    let tokenId = await nftContract.tokenOfOwnerByIndex(address, index);
    return tokenId;
}

export async function getENS(address) {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let ensName = await provider.lookupAddress(address);
    return ensName;
}

export async function getExpire(tokenId) {
    if (!isInitialized) {
        await initWeb3();
    }
    let expireTime = await nftContract.expireTime(tokenId);
    return expireTime;
}

export const checkIfPaused = async () => {
    if (!isInitialized) {
        await initWeb3();
    }
    let isPaused = await nftContract.paused();
    return isPaused;
};

export const getTotalSupply = async () => {
    if (!isInitialized) {
      await initWeb3();
    }
    let supply = await nftContract.totalSupply();
     return supply.toString()
};

export const mintToken = async (mintAmount) => {
    if (!isInitialized) {
      await initWeb3();
    }
    let totalcost = mintAmount * COSTINETH;
    let overrides = {
        value: ethers.utils.parseEther(totalcost.toString())
    };
    return nftContract.mint(mintAmount, overrides);
};

export const renewPass = async (tokenId) => {
    if (!isInitialized) {
      await initWeb3();
    }
    let ogTokenEnd = await nftContract.ogTokenEnd();
    // mint if token is regular
    if (tokenId > ogTokenEnd) {
        let cost = await nftContract.renewPrice().toString();
        console.log(cost);
        let overrides = {
            value: ethers.utils.parseEther(cost.toString())
        };
        return nftContract.renewPass(tokenId, overrides);
    }
    //mint if token is og
    let cost = await nftContract.renewPriceOG().toString();
    console.log(cost);
    let overrides = {
        value: ethers.utils.parseEther(cost.toString())
    };
    return nftContract.renewPassOG(tokenId, overrides);
};