import config from "../../config";
import { ADVANCE } from "../../constants/constants";
import { INFO_LINK } from "../../constants/page-constant";

const avalancheMainnet = [
    // {
    //     id: "daoAXA",
    //     name: "USDT/USDC/DAI",
    //     symbol: "USDT",
    //     symbols: ["USDT", "USDC", "DAI"],
    //     description: "Stablecoins",
    //     vaultSymbol: "daoAXA",
    //     erc20addresses: [
    //         "0xE01A4D7de190f60F86b683661F67f79F134E0582", // Update here
    //         "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
    //         "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c",
    //     ],
    //     erc20address: "0xE01A4D7de190f60F86b683661F67f79F134E0582",  // Update here
    //     vaultContractAddress: "0x0b0e5b52e14152308f9f952ff19c67ebeb7560bb",   // Update here
    //     vaultContractABI: config.avaxVaultContractABI,
    //     balance: 0, // Stores balance of selectedERC20Address
    //     balances: [0, 0, 0],
    //     vaultBalance: 0,
    //     decimals: 18,
    //     feeDecimals: 18,
    //     deposit: true,
    //     depositAll: true,
    //     withdraw: true,
    //     withdrawAll: true, 
    //     lastMeasurement: 2074684, // Updarte here
    //     measurement: 1e18,
    //     price_id: ["tether", "usd-coin", "dai"],
    //     priceInUSD: [0, 0, 0],
    //     strategyName: "DAO AXA: USDT USDC DAI",
    //     strategy: "DAO AXA",
    //     strategyAddress: "", 
    //     strategyContractABI: [],
    //     strategyInfo: "High risk BSC defi tokens with potential rocketship-like returns.",
    //     strategyDescription: "A range of high ROI potential but risky defi tokens that are native on the Binance Smart Chain (BSC) with added yield farming APRs.",
    //     historicalPriceId: "daoAXA_price",
    //     logoFormat: "png",
    //     risk: ADVANCE,
    //     strategyType: "daoAXA",
    //     cTokenAddress: "",
    //     cAbi: "",
    //     group: ADVANCE,
    //     tvlKey: "daoAXA_tvl",
    //     infoLink: INFO_LINK.DAODEGEN,
    //     isPopularItem: false,
    //     // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
    // },
    // {
    //     id: "daoAXS",
    //     name: "USDT/USDC/DAI",
    //     symbol: "USDT",
    //     symbols: ["USDT", "USDC", "DAI"],
    //     description: "Stablecoins",
    //     vaultSymbol: "daoAXS",
    //     erc20addresses: [
    //         "0xE01A4D7de190f60F86b683661F67f79F134E0582",  // Update here
    //         "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
    //         "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c",
    //     ],
    //     erc20address: "0xE01A4D7de190f60F86b683661F67f79F134E0582", 
    //     vaultContractAddress: "0xdf9fc6774937bf42602be1f80ab3da8a0b2a8594",  // Update here
    //     vaultContractABI: config.avaxStableVaultContractABI,
    //     balance: 0, // Stores balance of selectedERC20Address
    //     balances: [0, 0, 0],
    //     vaultBalance: 0,
    //     decimals: 18,
    //     feeDecimals: 18,
    //     deposit: true,
    //     depositAll: true,
    //     withdraw: true,
    //     withdrawAll: true, 
    //     lastMeasurement: 2074783, // Update here
    //     measurement: 1e18,
    //     price_id: ["tether", "usd-coin", "dai"],
    //     priceInUSD: [0, 0, 0],
    //     strategyName: "DAO AXS: USDT USDC DAI",
    //     strategy: "DAO AXS",
    //     strategyAddress: "", 
    //     strategyContractABI: [],
    //     strategyInfo: "High risk BSC defi tokens with potential rocketship-like returns.",
    //     strategyDescription: "A range of high ROI potential but risky defi tokens that are native on the Binance Smart Chain (BSC) with added yield farming APRs.",
    //     historicalPriceId: "daoAXS_price",
    //     logoFormat: "png",
    //     risk: ADVANCE,
    //     strategyType: "daoAXS",
    //     cTokenAddress: "",
    //     cAbi: "",
    //     group: ADVANCE,
    //     tvlKey: "daoAXS_tvl",
    //     infoLink: INFO_LINK.DAODEGEN,
    //     isPopularItem: false,
    //     // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
    // },
    // {
    //     id: "daoASA",
    //     name: "USDT/USDC/DAI",
    //     symbol: "USDT",
    //     symbols: ["USDT", "USDC", "DAI"],
    //     description: "Stablecoins",
    //     vaultSymbol: "daoASA",
    //     erc20addresses: [
    //         "0xE01A4D7de190f60F86b683661F67f79F134E0582",  // Update here
    //         "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
    //         "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c",
    //     ],
    //     erc20address: "0xE01A4D7de190f60F86b683661F67f79F134E0582", // Update here
    //     vaultContractAddress: "0x0d79f121fd1eb213e5dbde11edbe7744ecb51352", // Update here
    //     vaultContractABI: config.avaxStableVaultContractABI,
    //     balance: 0, // Stores balance of selectedERC20Address
    //     balances: [0, 0, 0],
    //     vaultBalance: 0,
    //     decimals: 18,
    //     feeDecimals: 18,
    //     deposit: true,
    //     depositAll: true,
    //     withdraw: true,
    //     withdrawAll: true,  
    //     lastMeasurement: 2074872,  // Update here
    //     measurement: 1e18,
    //     price_id: ["tether", "usd-coin", "dai"],
    //     priceInUSD: [0, 0, 0],
    //     strategyName: "DAO ASA: USDT USDC DAI",
    //     strategy: "DAO ASA",
    //     strategyAddress: "", 
    //     strategyContractABI: [],
    //     strategyInfo: "High risk BSC defi tokens with potential rocketship-like returns.",
    //     strategyDescription: "A range of high ROI potential but risky defi tokens that are native on the Binance Smart Chain (BSC) with added yield farming APRs.",
    //     historicalPriceId: "daoASA_price",
    //     logoFormat: "png",
    //     risk: ADVANCE,
    //     strategyType: "daoASA",
    //     cTokenAddress: "",
    //     cAbi: "",
    //     group: ADVANCE,
    //     tvlKey: "daoASA_tvl",
    //     infoLink: INFO_LINK.DAODEGEN,
    //     isPopularItem: false,
    //     // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
    // },
    // {
    //     id: "daoA2S",
    //     name: "USDT/USDC/DAI",
    //     symbol: "USDT",
    //     symbols: ["USDT", "USDC", "DAI"],
    //     description: "Stablecoins",
    //     vaultSymbol: "daoA2S",
    //     erc20addresses: [
    //         "0xE01A4D7de190f60F86b683661F67f79F134E0582",  // Update here
    //         "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
    //         "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c",
    //     ],
    //     erc20address: "0xE01A4D7de190f60F86b683661F67f79F134E0582", 
    //     vaultContractAddress: "0x89d6fd8ba3eaf76687cf7b3d10f914cc445eaec1",  // Update here
    //     vaultContractABI: config.avaxStableVaultContractABI,
    //     balance: 0, // Stores balance of selectedERC20Address
    //     balances: [0, 0, 0],
    //     vaultBalance: 0,
    //     decimals: 18,
    //     feeDecimals: 18,
    //     deposit: true,
    //     depositAll: true,
    //     withdraw: true,
    //     withdrawAll: true, 
    //     lastMeasurement: 2074921,  // Update here
    //     measurement: 1e18,
    //     price_id: ["tether", "usd-coin", "dai"],
    //     priceInUSD: [0, 0, 0],
    //     strategyName: "DAO A2S: USDT USDC DAI",
    //     strategy: "DAO A2S",
    //     strategyAddress: "", 
    //     strategyContractABI: [],
    //     strategyInfo: "High risk BSC defi tokens with potential rocketship-like returns.",
    //     strategyDescription: "A range of high ROI potential but risky defi tokens that are native on the Binance Smart Chain (BSC) with added yield farming APRs.",
    //     historicalPriceId: "daoA2S_price",
    //     logoFormat: "png",
    //     risk: ADVANCE,
    //     strategyType: "daoA2S",
    //     cTokenAddress: "",
    //     cAbi: "",
    //     group: ADVANCE,
    //     tvlKey: "daoA2S_tvl",
    //     infoLink: INFO_LINK.DAODEGEN,
    //     isPopularItem: false,
    //     // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
    // },
];

export default avalancheMainnet;