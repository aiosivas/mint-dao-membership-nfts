# mint-dao-membership-nfts

## Dependencies
through npm:
thirdweb-dev/sdk
ethers

#### Must create .env file with these three fields in scripts folder
WALLET_ADDRESS=
ALCHEMY_URL_API=
PRIVATE_KEY=

run scripts using ```node <script>```
First deploynftdrop, then set claim-conditions, then lazy mint nfts, 
then you can mint these NFTs to addresses using mint-nft-to-address script; 
it's possible to implement script to get addresses from a .csv file or such,
or implement a react page where the user connects their wallet,
but thirdweb react docs are limited
