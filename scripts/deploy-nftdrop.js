import { AddressZero } from "@ethersproject/constants";
import sdk from "./initialize-thirdweb-sdk.js";

(async () => {
  try {
  	const	contractAddress = await sdk.deployer.deployNFTDrop({
 		name: "Weavechain Membership NFTs",
  		primary_sale_recipient: AddressZero,
	});

    const contract = sdk.getNFTDrop(contractAddress);
    // with this, we can get the metadata of our contract
    const metadata = await contract.metadata.get();

    console.log(
      "✅ Successfully deployed NFTDrop contract, address:",
      contractAddress,
    );
    console.log("✅ contract metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy contract", error);
  }
})();

