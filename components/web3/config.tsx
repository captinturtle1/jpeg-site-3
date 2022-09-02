export const contractAddress = "0xFB7E674bd31BA368c282Ca86a2fcbdCFAC1B73ab";

export const addressesNotLowercase= 
[
    "0x69836c2aE4E7126E5a7621E98c566c1D42AAcAd5", 
    "0x3e36acEe30E8b327a72282EA2B14B2b9ca5758Bf", 
    "0x3F3768b454Bf371dD91676599Cb63907B241E274", 
    "0x357Dcafe16816Ca82834190e59F3bA760A6CB959"
];

export const OGaddressesNotLowercase= 
[
    "0x6BF19939678B3791d935e9147354Ec7d5488357e", 
    "0x62D2dF1837a1A083797709d84E316E343Bd76e66", 
    "0xDE768b5E21459CaeAEA7a9Ea96354FF361507dFB", 
    "0xd229eD9B9f68CeE3d0532bdc5b1f1C866daeD5d7", 
    "0xAEebD32CFC3979aFC08568c607B834B4bF7bBcD3", 
    "0xaF3f45b379DECb9001653e9B7445d568293cc734", 
    "0x9728F67AaA954CbEB5218a99E32F559A4347D512", 
    "0xA0228a18C307180Ccdc0A210e3869bFBfA597e46", 
    "0x31409ad51Fe6A7ca0F8Ed85C9321077E694e3dA0", 
    "0x6E906FdC79331dB16Bab0e772C7f6F21571fdf7a", 
    "0xC4233C687bc7a3e738fc0bB53Fdb76bD582A1D07"
];

export const lowerAddresses = addressesNotLowercase.map(element => {
    return element.toLowerCase();
});

export const lowerAdressesOG = OGaddressesNotLowercase.map(element => {
    return element.toLowerCase();
});