import config from "../../../config/config";

// Addresses in mainnet
// CitadelV2
const WETHAddr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const WBTCAddr = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const DPIAddr = "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b";
const DAIAddr = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; 

// DAO Stonks
const USTAddr = "0xa47c8bf37f92abed4a126bda807a7b7498661acd";
const mMSFTAddr = "0x41BbEDd7286dAab5910a1f15d12CBda839852BD7";
const mTWTRAddr = "0xEdb0414627E6f1e3F082DE65cD4F9C693D78CCA9";
const  mTSLAAddr = "0x21cA39943E91d704678F5D00b6616650F066fD63";
const  mGOOGLAddr = "0x59A921Db27Dd6d4d974745B7FfC5c33932653442";
const  mAMZNAddr = "0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7";
const  mAAPLAddr = "0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84";
const  mNFLXAddr = "0xC8d674114bac90148d11D3C1d33C61835a0F9DCD";

// DAO Degen
const wBNBAddr = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const alpacaAddress = "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F";
const xvsAddress = "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63";
const bUSDAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const beltAddress = "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f";
const chessAddress = "0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6";
const usdcAddress = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
// DAO Safu
const wBNBBscAddr = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
const btcbBscAddress = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c"
const wethBscAddress = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
const bUSDBscAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
const cakeBscAddress = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
// DAO TA
const USDCAddr = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
// Metaverse
const AXSAddr = "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b";
const SLPAddr = "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25";
const ILVAddr = "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E";
const GHSTAddr = "0x3F382DbD960E3a9bbCeaE22651E88158d2791550";
const REVVAddr = "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca";
const MVIAddr = "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7";

const tokensMinInfo = {
    metaverse: {
        routerAddress: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
        abi: config.uniswapV2RouterABI,
        tokens: [
            { amount: 1, decimal: 18, pairs:[WETHAddr]}, // ETH <-> Stablecoins for withdraw
            { amount: 1, decimal: 18, pairs:[AXSAddr, WETHAddr]},
            { amount: 1, decimal: 0, pairs:[SLPAddr, WETHAddr]},
            { amount: 1, decimal: 18, pairs:[ILVAddr, WETHAddr]},
            { amount: 1, decimal: 18, pairs:[GHSTAddr, WETHAddr]},
            { amount: 1, decimal: 18, pairs:[REVVAddr, WETHAddr]},
            { amount: 1, decimal: 18, pairs:[MVIAddr, WETHAddr]},
        ]
    },
    citadelv2: {
        routerAddress: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
        abi: config.uniswapV2RouterABI,
        tokens: [
            { amount: 1, decimal: 18, pairs:[WETHAddr]}, // ETH <-> Stablecoins for withdraw
            { amount: 1, decimal: 8, pairs:[WBTCAddr, WETHAddr]},
            { amount: 1, decimal: 18, pairs:[DPIAddr, WETHAddr]},
            { amount: 1, decimal: 18, pairs:[DAIAddr, WETHAddr]},
        ]
    },
    daoStonks: {
        routerAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        abi: config.uniswapV2RouterABI,
        tokens: [
            { amount: 1, decimal: 18, pairs:[mMSFTAddr, USTAddr]},
            { amount: 1, decimal: 18, pairs:[mTWTRAddr, USTAddr]},
            { amount: 1, decimal: 18, pairs:[mTSLAAddr, USTAddr]},
            { amount: 1, decimal: 18, pairs:[mGOOGLAddr, USTAddr]},
            { amount: 1, decimal: 18, pairs:[mAMZNAddr, USTAddr]},
            { amount: 1, decimal: 18, pairs:[mAAPLAddr, USTAddr]},
            { amount: 1, decimal: 18, pairs:[mNFLXAddr, USTAddr]},
        ]
    },
    daoDegen: {
        routerAddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        abi: config.uniswapV2RouterABI,
        tokens: [
            { amount: 1, decimal: 18, pairs:[wBNBAddr]},
            { amount: 1, decimal: 18, pairs:[bUSDAddress, wBNBAddr]},
            { amount: 1, decimal: 18, pairs:[usdcAddress, wBNBAddr]},
            { amount: 1, decimal: 18, pairs:[alpacaAddress, wBNBAddr]},
            { amount: 1, decimal: 18, pairs:[xvsAddress, wBNBAddr]},
            { amount: 1, decimal: 18, pairs:[beltAddress, wBNBAddr]},
            { amount: 1, decimal: 18, pairs:[chessAddress, wBNBAddr]},
        ]
    },
    daoSafu : {
        routerAddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        abi: config.uniswapV2RouterABI,
        tokens: [
            { amount: 1, decimal: 18, pairs:[wBNBBscAddr]},
            { amount: 1, decimal: 18, pairs:[btcbBscAddress, wBNBBscAddr]},
            { amount: 1, decimal: 18, pairs:[wethBscAddress, wBNBBscAddr]},
            { amount: 1, decimal: 18, pairs:[bUSDBscAddress, wBNBBscAddr]},
            { amount: 1, decimal: 18, pairs:[cakeBscAddress, wBNBBscAddr]},
        ]
    },
    daoTA: {
        routerAddress: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
        abi: config.uniswapV2RouterABI,
        tokens: [
            { amount: 1, decimal: 18, pairs:[WETHAddr]}, // ETH <-> Stablecoins for withdraw
            { amount: 1, decimal: 8, pairs:[WBTCAddr, WETHAddr]},
            { amount: 1, decimal: 6, pairs:[USDCAddr, WETHAddr]},
        ]
    }
};

export default tokensMinInfo;