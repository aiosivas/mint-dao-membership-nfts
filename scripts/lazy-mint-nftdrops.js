import sdk from "./initialize-thirdweb-sdk.js";
import { readFileSync } from "fs";

//must manually paste NFTDrop contract address
const NFTDropAddress = "0x8dEc603644CA7222958Ec568aDf1A832D15d474E";

const contract = sdk.getNFTDrop(`${NFTDropAddress}`);

//this script is assuming it is being called from the scripts folder
const metadatas = [{
        name: "WChain Sample NFT",
        description: "This NFT will give you access to WChainDAO!",
        image: readFileSync("assets/weave_NFT_ID_9999.png"),
}];

//mint NFT to address
(async () => {
    try {
      const result = await contract.createBatch(metadatas);
    } catch (error) {
      console.error("Failed to mint NFT", error);
    }
})();
