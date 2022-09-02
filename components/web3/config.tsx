export const contractAddress = "0xFB7E674bd31BA368c282Ca86a2fcbdCFAC1B73ab";

export const addressesNotLowercase= 
[
    "0xC4233C687bc7a3e738fc0bB53Fdb76bD582A1D07",
    "0xA90E2cE216b768E34d160d9F197216F6EBc6170A",
    "0x4F103A576a6914b07f48707640A7CAB00C50896D",
    "0x571439237453127202c900Ba7ea03193da7432E0"
];

export const OGaddressesNotLowercase= 
[
    ""
];

export const lowerAddresses = addressesNotLowercase.map(element => {
    return element.toLowerCase();
});

export const lowerAdressesOG = OGaddressesNotLowercase.map(element => {
    return element.toLowerCase();
});