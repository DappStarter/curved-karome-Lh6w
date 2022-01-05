require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift remember magic evil hope civil army ghost'; 
let testAccounts = [
"0xa783912629222b1d8c4bc532d7e7a2681373d5b88b973cbd7aecaeea18c40bad",
"0xe37ed8a93d1f70464cffb18f835d568a7d39c81b19cda796b1ba2188f77dc083",
"0xc6ca394609a7747053ac404f594b1f88758357fd55b0b73eecbbf4096a0b1c31",
"0x9d205ceb4bab8852ac9a8d8513a631dde64642a00d9b3392037c16d7f98a62b7",
"0x17e1c6670d268a1124e43603c11913c726a901454170235d38f77a3f19668d88",
"0xce9f12bbe59fafb05927833754bdefd60ee9c4ede6effefab9041ed055be0511",
"0xf95c943ea9cf965b855b71eb7ae9648646126b2c627ed3de1d72a3f4b4ba27f7",
"0xddaad9e3186baccb2b33bb2740acbf5d2bece34b941be16da3da51e62c10c8ce",
"0xe13b3bff247e213d3e738dd1d6e5e267dff33580453778c7097faa319b4fadb2",
"0x20a5b9cb86fdd73fda92bcb01b7ba2bb2ee1b67ff9854afea6810b00c3bf0756"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

