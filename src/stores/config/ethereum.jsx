import { ADVANCE, BASIC, DEGEN, EXPERT } from "../../constants/constants";

import config from "../../config";
import { INFO_LINK } from "../../constants/page-constant";

const ethereum = [
  {
    id: "daoCDV",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoCDV",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x8fe826cc1225b03aa06477ad5af745aed5fe7066",
    vaultContractABI: config.vaultDAOCDVContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    feeDecimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12586420,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "DAO Citadel: USDT USDC DAI",
    strategy: "DAO Citadel",
    strategyAddress: "0x8a00046ab28051a952e64a886cd8961ca90a59bd",
    strategyContractABI: config.strategyDAOCDVContractABI,
    strategyInfo: "A balanced crypto portfolio enhanced with yield farming rewards.",
    strategyDescription: "A market weight strategy that gives an investor a balanced exposure to crypto. Portfolio components are paired up to earn yield farming rewards to boost returns. ",
    historicalPriceId: "daoCDV_price",
    logoFormat: "png",
    risk: EXPERT,
    strategyType: "citadel",
    cTokenAddress: "",
    cAbi: "",
    group: EXPERT,
    tvlKey: "daoCDV_tvl",
    infoLink: INFO_LINK.CITADEL,
    isPopularItem: true, // use to render popular item icon
    happyHourEnabled: true,
    performanceId: "daoCDV",
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  {
    id: "daoCDV2",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoCDV2",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0xcc6c417e991e810477b486d992faaca1b7440e76",
    vaultContractABI: config.vaultDAOCDV2ContractABI,
    balance: 0, // Stores balance of selectedERC20Address
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    feeDecimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 13344175,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "DAO Citadel V2: USDT USDC DAI",
    strategy: "DAO Citadel V2",
    strategyAddress: "0x3845d7c09374df1ae6ce4728c99dd20d3d75f414",
    strategyContractABI: config.vaultDAOCDV2StrategyABI,
    strategyInfo: "Invest in balanced blue chip cryptos with added yield.",
    strategyDescription: "The same beloved DAO Citadel with BTC/ETH/DPI but built on a new improved auto-compounder that maximises yield through reduced platform fees.",
    historicalPriceId: "daoCDV2_price",
    logoFormat: "png",
    risk: EXPERT,
    strategyType: "citadelv2",
    cTokenAddress: "",
    cAbi: "",
    group: EXPERT,
    tvlKey: "daoCDV2_tvl",
    infoLink: INFO_LINK.CITADELV2,
    isPopularItem: true,
    happyHourEnabled: true,
    performanceId: "daoCDV2",
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  {
    id: "daoMVF",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoMVF",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x5b3ae8b672a753906b1592d44741f71fbd05ba8c",
    vaultContractABI: config.vaultDAOMVFContractABIMainnet,
    balance: 0, // Stores balance of selectedERC20Address
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    feeDecimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 27067389,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "DAO Metaverse: USDT USDC DAI",
    strategy: "DAO Metaverse",
    strategyAddress: "0xfa83ca66fdacc4028dab383de4adc8ab7db21ff2",
    strategyContractABI: config.vaultDAOMVFStrategyABIMainnet,
    strategyInfo: "Ride the growth of NFT and gamefi ecosystems.",
    strategyDescription: " Investors can gain exposure to the booming NFT and gaming sector with this product that invests in the most successful metaverse tokens.",
    historicalPriceId: "daoMVF_price",
    logoFormat: "png",
    risk: EXPERT,
    strategyType: "metaverse",
    cTokenAddress: "",
    cAbi: "",
    group: EXPERT,
    tvlKey: "daoMVF_tvl",
    infoLink: INFO_LINK.METAVERSE,
    isPopularItem: true,
    happyHourEnabled: true,
    performanceId: "daoMVF",
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  {
    id: "daoSTO",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoSTO",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x9ee54014e1e6cf10fd7e9290fdb6101fd0d5d416",
    vaultContractABI: config.vaultDAOSTOContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    feeDecimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12932754,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "DAO FAANG Stonk: USDT USDC DAI",
    strategy: "DAO FAANG Stonks",
    strategyAddress: "0x4a73dd597b8257e651ef12fd04a91a8819c89416",
    strategyContractABI: config.strategyDAOSTOContractABI,
    strategyInfo: "Popular US tech stocks with yield farming rewards and reduced volatility.",
    strategyDescription: "US tech stock names packaged into a bundle for one-click investment, with only half the volatility of the stock market. High chance of beating Wall Street with yield farming.",
    historicalPriceId: "daoSTO_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "daoFaang",
    cTokenAddress: "",
    cAbi: "",
    group: ADVANCE,
    tvlKey: "daoSTO_tvl",
    infoLink: INFO_LINK.FAANG,
    isPopularItem: true, // use to render popular item icon
    happyHourEnabled: true,
    performanceId: "daoSTO",
  },
  {
    id: "daoSTO2",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoSTO2",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0xd0b14644b0f91239075ed8a415769c4e20d37cf9", 
    vaultContractABI: config.vaultDAOSTO2ContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    feeDecimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: "13344659",
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "DAO Tech Stonks: USDT USDC DAI",
    strategy: "DAO Tech Stonks",
    strategyAddress: "0x07450ffdaa82ec583f2928bf69293d05e53a4ae9",
    strategyContractABI: config.vaultDAOSTO2StrategyABI,
    strategyInfo: "Diversified basket of US tech stocks with yield incentives.",
    strategyDescription: "A basket of diversified popular US tech stocks that leverages on yield farming incentives to provide superior returns.",
    historicalPriceId: "daoSTO2_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "daoStonks",
    cTokenAddress: "",
    cAbi: "",
    group: ADVANCE,
    tvlKey: "daoSTO2_tvl",
    infoLink: INFO_LINK.FAANG,
    isPopularItem: true, // use to render popular item icon
    happyHourEnabled: true,
    performanceId: "daoSTO2",
  },
  {
    id: "daoELO",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoELO",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x2d9a136cf87d599628bcbdfb6c4fe75acd2a0aa8",
    vaultContractABI: config.vaultDAOELOContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    feeDecimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12722655,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "Elon's Ape: USDT USDC DAI",
    strategy: "DAO Elon",
    strategyAddress: "0x24d281dcc7d435500669459eaa393dc5200595b1",
    strategyContractABI: config.strategyDAOELOContractABI,
    strategyInfo: "A basket of 3 assets associated with Elon Musk: Bitcoin, Dogecoin, and Tesla",
    strategyDescription: "Invest in a basket of ERC-20 tokens representing the 3 names most commonly associated with Elon Musk: Bitcoin, Dogecoin, and Tesla.",
    historicalPriceId: "daoELO_price",
    logoFormat: "png",
    risk: DEGEN,
    strategyType: "elon",
    cTokenAddress: "",
    cAbi: "",
    group: DEGEN,
    tvlKey: "daoELO_tvl",
    infoLink: INFO_LINK.ELON,
    isPopularItem: false,
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  {
    id: "daoCUB",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoCUB",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x2ad9f8d4c24652ea9f8a954f7e1fdb50a3be1dfd",
    vaultContractABI: config.vaultDAOCUBContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    feeDecimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12799447, 
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "Cuban's Ape: USDT USDC DAI",
    strategy: "DAO Cuban",
    strategyAddress: "0x7c0f84e9dc6f721de21d51a490de6e370fa01cd6",
    strategyContractABI: config.strategyDAOCUBContractABI,
    strategyInfo: "A basket featuring DeFi and NFT names Mark Cuban has invested in.",
    strategyDescription: "A basket of 7 DeFi and NFT names that billionaire Mark Cuban has publicly been known to invest in.",
    historicalPriceId: "daoCUB_price",
    logoFormat: "png",
    risk: DEGEN,
    strategyType: "cuban",
    cTokenAddress: "",
    cAbi: "",
    group: DEGEN,
    tvlKey: "daoCUB_tvl",
    infoLink: INFO_LINK.CUBAN,
    isPopularItem: false,
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  /*{
    id: "USDT",
    name: "USDT",
    symbol: "USDT",
    description: "Tether USD",
    vaultSymbol: "dvmUSDT",
    vaultAddress: "0x2f08119c6f07c006695e079aafc638b8789faf18",
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x4F0C1c9bA6B9CCd0BEd6166e86b672ac8EE621F7",
    vaultContractABI: config.vaultUSDTContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10651402,
    measurement: 1e18,
    price_id: "tether",
    strategyName: "Yearn-Fighter: USDT",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyUSDTContractABI,
    strategyInfo: "",
    strategyDescription: "",
    vaultABI: config.vaultContractV3ABI,
    historicalPriceId: "yUSDT_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yUSDT_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "DAI",
    name: "DAI",
    symbol: "DAI",
    description: "DAI Stablecoin",
    vaultSymbol: "dvmDAI",
    vaultAddress: "0xacd43e627e64355f1861cec6d3a6688b31a6f952",
    erc20address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    vaultContractAddress: "0x2bFc2Da293C911e5FfeC4D2A2946A599Bc4Ae770",
    vaultContractABI: config.vaultDAIContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10650116,
    measurement: 1e18,
    price_id: "dai",
    // yVaultCheckAddress: '0x1bbe0f9af0cf852f9ff14637da2f0bc477a6d1ad',
    strategyName: "Yearn-Fighter: DAI",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyDAIContractABI,
    strategyInfo: "",
    strategyDescription: "",
    vaultABI: config.vaultContractV3ABI,
    historicalPriceId: "yDAI_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yDAI_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "USDC",
    name: "USDC",
    symbol: "USDC",
    description: "USDC Coin",
    vaultSymbol: "dvmUSDC",
    vaultAddress: "0x597ad1e0c13bfe8025993d9e79c69e1c0233522e",
    erc20address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    vaultContractAddress: "0x9f0230FbDC0379E5FefAcca89bE03A42Fec5fb6E",
    vaultContractABI: config.vaultUSDCContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10532708,
    measurement: 1e18,
    price_id: "usd-coin",
    strategyName: "Yearn-Fighter: USDC",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyUSDCContractABI,
    strategyInfo: "",
    strategyDescription: "",
    vaultABI: config.vaultContractABI,
    historicalPriceId: "yUSDC_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yUSDC_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "TUSD",
    name: "TUSD",
    symbol: "TUSD",
    description: "TrueUSD",
    vaultSymbol: "dvmTUSD",
    vaultAddress: "0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a",
    erc20address: "0x0000000000085d4780b73119b644ae5ecd22b376",
    vaultContractAddress: "0x2C8de02aD4312069355B94Fb936EFE6CFE0C8FF6",
    vaultContractABI: config.vaultTUSDContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10603368,
    measurement: 1e18,
    price_id: "true-usd",
    strategyName: "Yearn-Fighter: TUSD",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyTUSDContractABI,
    strategyInfo: "",
    strategyDescription: "",
    vaultABI: config.vaultContractV3ABI,
    historicalPriceId: "yTUSD_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yTUSD_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "cUSDT",
    name: "USDT",
    symbol: "USDT",
    description: "compound USDT",
    vaultSymbol: "dvlUSDT",
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0xEeCe6AD323a93d4B021BDAaC587DCC04b5cf0a78",
    vaultContractABI: config.compoundVaultContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10651402,
    measurement: 1e18,
    price_id: "compound-usdt",
    strategyName: "Compound-Fighter: Compound USDT",
    strategy: "Compount USDT",
    strategyContractABI: config.compundStrategyCompundABI,
    strategyInfo: "",
    strategyDescription: "",
    historicalPriceId: "cUSDT_price",
    logoFormat: "png",
    risk: BASIC,
    strategyType: "compound",
    cTokenAddress: "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
    cAbi: config.cUSDTContract,
    group: BASIC,
    tvlKey: "cUSDT_tvl",
    infoLink: INFO_LINK.COMPOUND,
    isPopularItem: false,
  },
  {
    id: "cDAI",
    name: "DAI",
    symbol: "DAI",
    description: "Compound DAI",
    vaultSymbol: "dvlDAI",
    erc20address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    vaultContractAddress: "0x43C20638C3914Eca3c96e9cAc8ebE7d652Be45c6",
    vaultContractABI: config.compoundVaultContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10650116,
    measurement: 1e18,
    price_id: "cdai",
    strategyName: "Compound-Fighter: Compound DAI",
    strategy: "Compound DAI",
    strategyContractABI: config.compundStrategyCompundABI,
    strategyInfo: "",
    strategyDescription: "",
    historicalPriceId: "cDAI_price",
    logoFormat: "png",
    risk: BASIC,
    strategyType: "compound",
    cTokenAddress: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
    cAbi: config.cDAIContract,
    group: BASIC,
    tvlKey: "cDAI_tvl",
    infoLink: INFO_LINK.COMPOUND,
    isPopularItem: false,
  },
  {
    id: "cUSDC",
    name: "USDC",
    symbol: "USDC",
    description: "Compound USDC",
    vaultSymbol: "dvlUSDC",
    erc20address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    vaultContractAddress: "0xd1D7f950899C0269a7F2aad5E854cdc3a1350ba9",
    vaultContractABI: config.compoundVaultContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10532708,
    measurement: 1e18,
    price_id: "compound-usd-coin",
    strategyName: "Compound-Fighter: Compound USDC",
    strategy: "Compound USDC",
    strategyContractABI: config.compundStrategyCompundABI,
    strategyInfo: "",
    strategyDescription: "",
    historicalPriceId: "cUSDC_price",
    logoFormat: "png",
    risk: BASIC,
    strategyType: "compound",
    cTokenAddress: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    cAbi: config.cUSDCContract,
    group: BASIC,
    tvlKey: "cUSDT_tvl",
    infoLink: INFO_LINK.COMPOUND,
    isPopularItem: false,
  },*/
];

export default ethereum;
