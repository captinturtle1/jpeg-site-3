import { ethers } from "ethers";

const abi = require('../../../components/web3/abi.json');
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/y-6zzw3DXBgO-qvDv_FHbLCSQHiSz13d");
const contract = new ethers.Contract("0xFBbB17037Fd01851ddA9FC097748EB3E52A56710", abi, provider);

const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getUTCFullYear();
    var month = months[a.getMonth()];
    var date = a.getUTCDate();
    var hour = a.getUTCHours();
    var min = a.getUTCMinutes();
    var sec = a.getUTCSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec + ' UTC' ;
    return time;
}

export default async function handler(req, res) {
    const { pid } = req.query
    let expireTime = await contract.expireTime(pid);
    let isExpired = (expireTime < Math.floor(Date.now() / 1000))
    
    let name;
    let description;
    let type;
    let expiration = timeConverter(expireTime);
    let expirationUNIX = expireTime;
    let expiredStatus;
    let image;
    let animation_url;
    let external_url = "https://www.abyssfnf.com/";

    if (pid > 10) {
        // if regular pass
        type = "Member";
        description = "A private collective of skilled traders and investors navigating the web3 space. Membership passes grant access to all community benefits while active. Each membership runs on a 30 day renewal system and can be managed at anytime via our dashboard. Artwork by rebelyuzz.";
        if (isExpired) {
            // if regular pass and expired
            name = `Expired Membership #${pid}`;
            expiredStatus = "Expired";
            image = "https://abyssnftdata.s3.us-east-2.amazonaws.com/closedgif.gif";
            animation_url = "https://abyssnftdata.s3.us-east-2.amazonaws.com/Closed.mp4";
        } else {
            // if regular pass and not expired
            name = `Membership #${pid}`;
            expiredStatus = "Active";
            image = "https://abyssnftdata.s3.us-east-2.amazonaws.com/opengif.gif";
            animation_url = "https://abyssnftdata.s3.us-east-2.amazonaws.com/Open.mp4";
        }
    } else {
        // if og pass
        type = "OG";
        description = "A private collective of skilled traders and investors navigating the web3 space. OG membership passes grant access to all community benefits while active as well as additional benefits exclusive to OG holders. Each OG membership runs on a 45 day renewal system and can be managed at anytime via our dashboard. Artwork by rebelyuzz.";
        if (isExpired) {
            // if og pass and expired
            name = `Expired OG Membership #${pid}`;
            expiredStatus = "Expired";
            image = "https://abyssnftdata.s3.us-east-2.amazonaws.com/closedgif.gif";
            animation_url = "https://abyssnftdata.s3.us-east-2.amazonaws.com/Closed.mp4";
        } else {
            // if og pass and not expired
            name = `OG Membership #${pid}`;
            expiredStatus = "Active";
            image = "https://abyssnftdata.s3.us-east-2.amazonaws.com/opengif.gif";
            animation_url = "https://abyssnftdata.s3.us-east-2.amazonaws.com/Open.mp4";
        }
    }

    let nftObject = {
        name: name,
        description: description,
        external_url: external_url,
        image: image,
        animation_url: animation_url,
        attributes: [
            {trait_type: "Type", value: type},
            {display_type: "date", trait_type: "Expiration", value: expirationUNIX},
            {display_type: "date", trait_type: "ExpirationDate", value: expiration},
            {trait_type: "Status", value: expiredStatus}
        ]
    }

    try {
        res.status(200).json( nftObject )
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    } 
  }
  