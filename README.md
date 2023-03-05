# Liberate

## Mint your twitter handle into your wallet and never let anyone deplatform you

We are on a mission to enable everyone to bridge their social graph data from large media platforms to decentralized social networks. We’ve built a production-ready app that enables people to store Twitter metadata (currently: user handles) in a non-transferable NFT that can be permanently bound to a Lens Profile NFT.

Pitch deck: https://pitch.com/public/60479da4-2ef2-45b5-b06d-37c07be03563/486e31bb-f432-4c3a-9d51-320955484089

Live prototype (please try desktop first): https://liberate-sage.vercel.app/

Check out the proof of concept at https://liberate-sage.vercel.app/

Check out demo video at https://www.loom.com/share/b1eada1faa7b49b98dcf5297350769a9

This is a web application that allows users to authenticate with their Twitter account using Next Auth and then connect to their preferred wallet using Wagmi. The app allows users to mint a non-transferable NFT that proves ownership of their Twitter account by interacting with a smart contract.

## Installation and Setup

To install and set up the app, follow these steps:

1. Clone the repository from GitHub.
2. Install the dependencies using npm or yarn.
3. Set up a Twitter Developer Account and get the necessary API keys and tokens.
4. Set up a Wagmi account and create a new project to get the API key and API secret key.
5. Set up a blockchain network and deploy the smart contract to mint the NFT.
6. Configure the app by creating a `.env` file and setting the following environment variables:
   - `TWITTER_CONSUMER_KEY`: Your Twitter consumer key.
   - `TWITTER_CONSUMER_SECRET`: Your Twitter consumer secret.
   - `NEXTAUTH_URL`: The URL of your Next Auth server.
   - `WAGMI_API_KEY`: Your Wagmi API key.
   - `WAGMI_API_SECRET`: Your Wagmi API secret.
   - `SMART_CONTRACT_ADDRESS`: The address of the smart contract on the blockchain network.
   - `NETWORK`: The name of the blockchain network (e.g., "rinkeby").
7. Start the app using npm or yarn.

## Usage

To use the T-3 app, follow these steps:

1. Navigate to the app's URL in your web browser.
2. Click on the "Connect with Twitter" button to authenticate with your Twitter account.
3. Once authenticated, select your preferred wallet from the dropdown menu and click on the "Connect Wallet" button to connect to your wallet using Wagmi.
4. Enter the amount of cryptocurrency you want to use to mint the NFT and click on the "Mint NFT" button.
5. Wait for the transaction to be confirmed on the blockchain network.
6. Once the transaction is confirmed, you will receive the non-transferable NFT that proves ownership of your Twitter account.

## Contributing

If you would like to contribute to the T-3 app, please follow these steps:

1. Fork the repository on GitHub.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.
4. Make the necessary changes and commit them to the new branch.
5. Push the branch to your forked repository on GitHub.
6. Create a pull request from the new branch to the original repository.

## License

The T-3 app is licensed under the MIT License. See the `LICENSE` file for more information.
