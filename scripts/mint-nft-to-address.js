import sdk from "./initialize-thirdweb-sdk.js";

const contract = sdk.getNFTDrop("0x8dEc603644CA7222958Ec568aDf1A832D15d474E");

//should be taken from a button press on a website with connected wallet
const wallet_address = "0x9414a5a2968276F44963ee53238e3458D085bc30";

const tx = await contract.claim(1);
const receipt = tx.receipt; // the transaction receipt
const claimedTokenId = tx.id; // the id of the NFT claimed
const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata

console.log(`id: ${claimedTokenId}`);
