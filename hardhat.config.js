require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require('@openzeppelin/hardhat-upgrades')
require("@nomiclabs/hardhat-etherscan")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://rinkeby.infura.io/v3/<key>"

const PRIVATE_KEY = process.env.PRIVATE_KEY || "<private-key>"
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    local: {
      url: 'http://127.0.0.1:8545/'
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      // accounts: [PRIVATE_KEY],
      accounts: {
        mnemonic: "<your mnemonic>",
      },
      saveDeployments: true,
    },
  },
  solidity: "0.8.2",
}
