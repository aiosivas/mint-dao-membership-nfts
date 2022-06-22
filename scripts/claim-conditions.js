import sdk from "./initialize-thirdweb-sdk.js";

const contract = sdk.getNFTDrop("0x8dEc603644CA7222958Ec568aDf1A832D15d474E");

const startTime = new Date();
const claimConditions = [
  {
    startTime: startTime,//now 
    maxQuantity: 9999,
    price: 0.01,
  }
]);
await contract.claimConditions.set(claimConditions);
