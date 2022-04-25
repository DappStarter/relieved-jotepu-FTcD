require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember evil inner clog bubble giant'; 
let testAccounts = [
"0x907585fdbd102347dc089926d0e0d021e00fd1e86a226653e85941b84028273f",
"0x0cbef8c5fbc725c32e908e662bce02bf8913542c554e349a8822e52c220752b4",
"0xe1951816836a329b41e25ebe8abb6b04220f63cb05b354a26db5d1bae75127be",
"0x19a0a00eec2b87b376520f69dbde3db81b3fea2a3a543ca1d7abb1677e4c3527",
"0xb605a6edf5307126819d9cc03af3bf906b983a1d576338946cd41581fead1a2a",
"0xe3aed9a23cef4ec6f988d00064a32b05fb64a7f217fce3e42c689825adbb06e4",
"0x66c8f17a8a244025530e8c8a353cea308d0a3dadda4476619017600cf34097b7",
"0x63ff93eedfa97e8c8d91cdadbbe6581d27f0e1e5dad03819fe4e4ad25f1a4abf",
"0x57fe30d9370d1f982da8a6f1cea18bb68b43a6bc2142967129831f506b497225",
"0xc27b5b4c7695cf81a2e6b509011951716030e83c7d379a737a5b3556e87e6dc9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

