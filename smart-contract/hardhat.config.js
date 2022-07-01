require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/0qm4RYPclmxLu7uGRn2YRsWRMf7jtNw8',
      accounts: [
        'a7dbbdff2fc0ebc36cdf71211418dfecb5c65b91c5fde9c63bce5ba4e0ac272c'
      ],
    },
  },
}

