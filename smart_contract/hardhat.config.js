require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/0tm9zfzNVCZusWnQzXpB7l0b1NqZBrGy",
      accounts: [
        "0xe243a4e18fbcf12d050478c279e7c4ef285678bfcd0ce2b5370e4f0897e74cc5",
      ],
    },
  },
};
