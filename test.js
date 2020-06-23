const Rsk3 = require('@rsksmart/rsk3')
const RNS = require('@rsksmart/rns')

const rsk3 = new Rsk3('https://public-node.testnet.rsk.co', null, { privateKey: 'L2j44B6jFY4aPaxaNvZ1H8HHLYgnLzLQaB6FRjzabgfrr9eiirSD' })

// rsk3.getAccounts().then(console.log)

const rns = new RNS(rsk3)

rns.addr('leyz.tinyyxx12.rsk').then(console.log)
// rns.subdomains.create('tinyyxx12.rsk', 'nonsense', '0x55d6abcaecf88d438aecf32e38b8ab2466fab737', '0x55d6abcaecf88d438aecf32e38b8ab2466fab737').then(console.log);
