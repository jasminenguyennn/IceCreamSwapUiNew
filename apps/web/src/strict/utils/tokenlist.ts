import { trpcClient } from '@icecreamswap/backend'
import { TokenList } from '@uniswap/token-lists'
// import defaultList from '../../../public/default.tokenList.json';

export const getDefaultTokenList = async (): Promise<TokenList> => {
  // @ts-ignore
  return {
    name: 'IcecreamSwap Default',
    timestamp: '2022-01-26T11:45:09Z',
    version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    tags: {},
    logoURI: 'https://icecreamswap.com/logo.png',
    keywords: ['icecreamswap', 'default'],
    tokens: [
      {
        name: 'Wrapped BNB',
        symbol: 'WBNB',
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        chainId: 56,
        decimals: 18,
        logoURI: 'https://tokens.icecreamswap.com/images/symbol/bnb.png',
      },
      {
        name: 'BUSD Token',
        symbol: 'BUSD',
        address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        chainId: 56,
        decimals: 18,
        logoURI: 'https://tokens.icecreamswap.com/images/symbol/busd.png',
      },
      {
        name: 'Ethereum Token',
        symbol: 'ETH',
        address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        chainId: 56,
        decimals: 18,
        logoURI: 'https://icecreamswap.com/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png',
      },
      {
        name: 'Tether USD',
        symbol: 'USDT',
        address: '0x55d398326f99059fF775485246999027B3197955',
        chainId: 56,
        decimals: 18,
        logoURI: 'https://tokens.icecreamswap.com/images/symbol/usdt.png',
      },
      {
        name: 'PancakeSwap Token',
        symbol: 'CAKE',
        address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        chainId: 56,
        decimals: 18,
        logoURI: 'https://icecreamswap.com/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png',
      },
      {
        name: 'Wrapped Brise',
        address: '0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710',
        symbol: 'WBRISE',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710/logo.png',
      },
      {
        name: 'Sphynx BRISE',
        address: '0x0e11DCE06eF2FeD6f78CEF5144F970E1184b4298',
        symbol: 'SPHYNX',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x0e11DCE06eF2FeD6f78CEF5144F970E1184b4298/logo.png',
      },
      {
        name: 'Brisepad',
        address: '0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D',
        symbol: 'BPAD',
        decimals: 8,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D/logo.png',
      },
      {
        name: 'BROGE',
        address: '0x41c5ae56681Fb19334eCF7d914919805DaE2Ec8f',
        symbol: 'BROGE',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x41c5ae56681Fb19334eCF7d914919805DaE2Ec8f/logo.png',
      },
      {
        name: 'BriseZilla',
        address: '0x9b8535Dd9281e48484725bC9Eb6Ed2f66CEA2a36',
        symbol: 'BRZILLA',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x9b8535Dd9281e48484725bC9Eb6Ed2f66CEA2a36/logo.png',
      },
      {
        name: 'BitsXT',
        address: '0x1A8a039007186d7640C1D7Cd7c2606e333D04e03',
        symbol: 'BTXT',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x1A8a039007186d7640C1D7Cd7c2606e333D04e03/logo.png',
      },
      {
        name: 'Graphen',
        address: '0xb860eCD8400600c13342a751408737235E177077',
        symbol: 'ELTG',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xb860eCD8400600c13342a751408737235E177077/logo.png',
      },
      {
        name: 'EVO',
        address: '0x267Ae4bA9CE5ef3c87629812596b0D89EcBD81dD',
        symbol: 'EVO',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x267Ae4bA9CE5ef3c87629812596b0D89EcBD81dD/logo.png',
      },
      {
        name: '4D Twin Maps',
        address: '0x6D347fdCb302a5879545E01EceE7A176db23dCDa',
        symbol: 'MAP',
        decimals: 2,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x6D347fdCb302a5879545E01EceE7A176db23dCDa/logo.png',
      },
      {
        name: 'Miidas NFT',
        address: '0x5B534A2Df329195Fd7e5c9AcA1D9ffbdA14A4963',
        symbol: 'Miidas',
        decimals: 6,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x5B534A2Df329195Fd7e5c9AcA1D9ffbdA14A4963/logo.png',
      },
      {
        name: 'Mix Reality',
        address: '0x2468dad471fA7E03d8029F057cc41742F017D53d',
        symbol: 'MIR',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x2468dad471fA7E03d8029F057cc41742F017D53d/logo.png',
      },
      {
        name: 'Numitor',
        address: '0x6718e47e74497d1564EE76d832309144b83Ef8E8',
        symbol: 'NUMI',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x6718e47e74497d1564EE76d832309144b83Ef8E8/logo.png',
      },
      {
        name: 'OmniaVerse',
        address: '0x5d4685c2C75581C67b9D6292A065a767bC214681',
        symbol: 'OMNIA',
        decimals: 8,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x5d4685c2C75581C67b9D6292A065a767bC214681/logo.png',
      },
      {
        name: 'Brise Paradise',
        address: '0x31226B28add9062c5064a9Bd35eA155F323C6ca6',
        symbol: 'PRDS',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x31226B28add9062c5064a9Bd35eA155F323C6ca6/logo.png',
      },
      {
        name: 'Rise Luna',
        address: '0x6660A7AF57fAE695D4a10D645088aBA9fb547728',
        symbol: 'RLUNA',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x6660A7AF57fAE695D4a10D645088aBA9fb547728/logo.png',
      },
      {
        name: 'Vefi Ecosystem Token',
        address: '0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2',
        symbol: 'VEF',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2/logo.png',
      },
      {
        name: 'Whale Maker Fund',
        address: '0xc89fcd3E1CF5A355fc41E160d18BAC5f624610D4',
        symbol: 'WMF',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xc89fcd3E1CF5A355fc41E160d18BAC5f624610D4/logo.png',
      },
      {
        name: 'YOGO Token',
        address: '0xB361D5953e21Cfde5CD62B89FDf40bc21903A6bb',
        symbol: 'YOGO',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB361D5953e21Cfde5CD62B89FDf40bc21903A6bb/logo.png',
      },
      {
        name: 'Young Parrot',
        address: '0x11203a00a9134Db8586381C4B2fca0816476b3FD',
        symbol: 'YPC',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x11203a00a9134Db8586381C4B2fca0816476b3FD/logo.png',
      },
      {
        name: 'IceCream',
        address: '0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D',
        symbol: 'ICE',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
      },
      {
        name: 'Metaverse City Tokyo',
        address: '0x38EA4741d100cAe9700f66B194777F31919142Ee',
        symbol: '$Tokyo',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x38EA4741d100cAe9700f66B194777F31919142Ee/logo.png',
      },
      {
        name: 'Alpha Trades',
        address: '0x4Fb3DBF9111169ff60fFB8a7be1c6Fd3D4E417bC',
        symbol: 'WOLF',
        decimals: 19,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x4Fb3DBF9111169ff60fFB8a7be1c6Fd3D4E417bC/logo.png',
      },
      {
        name: 'AIBRA',
        address: '0x9F7Bb6E8386ac9ad5e944d66fBa80F3F7231FA94',
        symbol: 'ABR',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x9F7Bb6E8386ac9ad5e944d66fBa80F3F7231FA94/logo.png',
      },
      {
        name: 'Brisecom',
        address: '0x6cd08bE8Aa9B705Ca86B4923B1784C0eE06E5220',
        symbol: 'BASKOM',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x6cd08bE8Aa9B705Ca86B4923B1784C0eE06E5220/logo.png',
      },
      {
        name: 'LunaGens',
        address: '0xc3b730dD10A7e9A69204bDf6cb5A426e4f1F09E3',
        symbol: 'LUNG',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xc3b730dD10A7e9A69204bDf6cb5A426e4f1F09E3/logo.png',
      },
      {
        name: 'Tether USD IcecreamSwap',
        address: '0xC7E6d7E08A89209F02af47965337714153c529F0',
        symbol: 'USDTi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
      },
      {
        name: '3D City',
        address: '0x5feDA75eaB27814Cba0694C9711F7d4abEa5b0b5',
        symbol: '$3DC',
        decimals: 8,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x5feDA75eaB27814Cba0694C9711F7d4abEa5b0b5/logo.png',
      },
      {
        name: 'Darrival',
        address: '0xeB18A16A08530b811523fA49310319809ac4c979',
        symbol: 'DRV',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xeB18A16A08530b811523fA49310319809ac4c979/logo.png',
      },
      {
        name: 'Ether IcecreamSwap',
        address: '0xeA61Dc96F105469522d39cBF7bD59b42393678F7',
        symbol: 'ETHi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xeA61Dc96F105469522d39cBF7bD59b42393678F7/logo.png',
      },
      {
        name: 'Dogecoin IcecreamSwap',
        address: '0x46a8E16dB8Bb241618873bCA21Ef02F120EA4125',
        symbol: 'DOGEi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x46a8E16dB8Bb241618873bCA21Ef02F120EA4125/logo.png',
      },
      {
        name: 'BNB IcecreamSwap',
        address: '0x74446a7418BFbFCDe3F1f6bCaFFA097d050a6dD8',
        symbol: 'BNBi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x74446a7418BFbFCDe3F1f6bCaFFA097d050a6dD8/logo.png',
      },
      {
        name: 'Shiba Inu IcecreamSwap',
        address: '0xADF3051f6fbC1f42ee20B2eDb47EA7f6CcaBe978',
        symbol: 'SHIBi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xADF3051f6fbC1f42ee20B2eDb47EA7f6CcaBe978/logo.png',
      },
      {
        name: 'Dai IcecreamSwap',
        address: '0x71Ef0A490E53Cc177F640169b0347Be4d0f23cc9',
        symbol: 'DAIi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x71Ef0A490E53Cc177F640169b0347Be4d0f23cc9/logo.png',
      },
      {
        name: 'USD Coin IcecreamSwap',
        address: '0xaEdD3Ff7b9Fc5fc4e44d140b80f0B1C7FdB6102c',
        symbol: 'USDCi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xaEdD3Ff7b9Fc5fc4e44d140b80f0B1C7FdB6102c/logo.png',
      },
      {
        name: 'BUSD IcecreamSwap',
        address: '0xd0CE781960c6356A7175988751bfC8d7cd28EA60',
        symbol: 'BUSDi',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xd0CE781960c6356A7175988751bfC8d7cd28EA60/logo.png',
      },
      {
        name: 'Ardiansyah Crypto',
        address: '0xbfa6394b9898566652276f1Fb40d65e75787D66f',
        symbol: 'ARCO',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xbfa6394b9898566652276f1Fb40d65e75787D66f/logo.png',
      },
      {
        name: 'DAI Multichain',
        address: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
        symbol: 'DAIm',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xfA9343C3897324496A05fC75abeD6bAC29f8A40f/logo.png',
      },
      {
        name: 'Tether USD Multichain',
        address: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        symbol: 'USDTm',
        decimals: 6,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D/logo.png',
      },
      {
        name: 'USD Coin Multichain',
        address: '0x765277EebeCA2e31912C9946eAe1021199B39C61',
        symbol: 'USDCm',
        decimals: 6,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x765277EebeCA2e31912C9946eAe1021199B39C61/logo.png',
      },
      {
        name: 'BNB Multichain',
        address: '0x922D641a426DcFFaeF11680e5358F34d97d112E1',
        symbol: 'BNBm',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x922D641a426DcFFaeF11680e5358F34d97d112E1/logo.png',
      },
      {
        name: 'Ether Multichain',
        address: '0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
        symbol: 'ETHm',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8/logo.png',
      },
      {
        name: 'Dogecoin Multichain',
        address: '0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844',
        symbol: 'DOGEm',
        decimals: 8,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844/logo.png',
      },
      {
        name: 'BUSD Multichain',
        address: '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
        symbol: 'BUSDm',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b/logo.png',
      },
      {
        name: 'Matic Multichain',
        address: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
        symbol: 'MATICm',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB44a9B6905aF7c801311e8F4E76932ee959c663C/logo.png',
      },
      {
        name: 'Neorbit',
        address: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
        symbol: 'NRB',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/logo.png',
      },
      {
        name: 'USD Coin PolyNetwork',
        address: '0xeE448bc6A8dC14D1Faa2Bfa567f1874f1B62C267',
        symbol: 'USDCp',
        decimals: 6,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xaEdD3Ff7b9Fc5fc4e44d140b80f0B1C7FdB6102c/logo.png',
      },
      {
        name: 'O3 Swap Token',
        address: '0xEe9801669C6138E84bD50dEB500827b776777d28',
        symbol: 'O3',
        decimals: 18,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xEe9801669C6138E84bD50dEB500827b776777d28/logo.png',
      },
      {
        name: 'EAGLE EYE TOKEN',
        address: '0x0B00C890c9C543d963a36Ce1520DeBA330C6aBb5',
        symbol: 'EET',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x0B00C890c9C543d963a36Ce1520DeBA330C6aBb5/logo.png',
      },
      {
        name: 'BITCOIN FUTURE',
        address: '0x9Ba88b1edCBd8f24aa3fa0c7472e07903f6d0098',
        symbol: 'BITCOINF',
        decimals: 2,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x9Ba88b1edCBd8f24aa3fa0c7472e07903f6d0098/logo.png',
      },

      {
        name: 'Wrapped DOGE',
        address: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
        symbol: 'WDOGE',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101/logo.png',
      },
      {
        name: 'Dogechain Token',
        address: '0x7B4328c127B85369D9f82ca0503B000D09CF9180',
        symbol: 'DC',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0x7B4328c127B85369D9f82ca0503B000D09CF9180/logo.png',
      },
      {
        name: 'YodeDEX Token',
        address: '0x6FC4563460d5f45932C473334d5c1C5B4aEA0E01',
        symbol: 'YODE',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0x6FC4563460d5f45932C473334d5c1C5B4aEA0E01/logo.png',
      },
      {
        name: 'Atlantis',
        address: '0x338726dd694dB9e2230eC2bB8624a2d7F566C96d',
        symbol: 'ATL',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0x338726dd694dB9e2230eC2bB8624a2d7F566C96d/logo.png',
      },
      {
        name: 'IceCream',
        address: '0x81bCEa03678D1CEF4830942227720D542Aa15817',
        symbol: 'ICE',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0x81bCEa03678D1CEF4830942227720D542Aa15817/logo.png',
      },
      {
        name: 'Tether USD',
        address: '0xD2683b22287E63D22928CBe4514003a92507f474',
        symbol: 'USDT',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0xD2683b22287E63D22928CBe4514003a92507f474/logo.png',
      },
      {
        name: 'Ether',
        address: '0xDC2393dc10734BF153153038943a5deB42b209cd',
        symbol: 'ETH',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0xDC2393dc10734BF153153038943a5deB42b209cd/logo.png',
      },
      {
        name: 'BNB',
        address: '0xC7E6d7E08A89209F02af47965337714153c529F0',
        symbol: 'BNB',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
      },
      {
        name: 'Shiba Inu',
        address: '0xB25cB6a275a8D6a613228FB161eB3627b50EB696',
        symbol: 'SHIB',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0xB25cB6a275a8D6a613228FB161eB3627b50EB696/logo.png',
      },
      {
        name: 'Dai',
        address: '0xc57F0eb99363e747D637B17BBdB4e1AB85e60631',
        symbol: 'DAI',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0xc57F0eb99363e747D637B17BBdB4e1AB85e60631/logo.png',
      },
      {
        name: 'USD Coin',
        address: '0xce6c9c70f91c6797873EFC80505f972290A88f5D',
        symbol: 'USDC',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0xce6c9c70f91c6797873EFC80505f972290A88f5D/logo.png',
      },
      {
        name: 'BUSD',
        address: '0x905caAE1627856529BEd7b9572F02af5e5Ac6cA7',
        symbol: 'BUSD',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0x905caAE1627856529BEd7b9572F02af5e5Ac6cA7/logo.png',
      },
      {
        name: 'LunaGens',
        address: '0x876607adc4CC715CDE0183fdC49eA2539053f358',
        symbol: 'LUNG',
        decimals: 18,
        chainId: 2000,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doge/assets/0x876607adc4CC715CDE0183fdC49eA2539053f358/logo.png',
      },

      {
        name: 'IceCream',
        address: '0x54051D9DbE99687867090d95fe15C3D3E35512Ba',
        symbol: 'ICE',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x54051D9DbE99687867090d95fe15C3D3E35512Ba/logo.png',
      },
      {
        name: 'BNB',
        address: '0x867f08A3ab824b42e8058a1B48e32E1dF205b092',
        symbol: 'BNB',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x867f08A3ab824b42e8058a1B48e32E1dF205b092/logo.png',
      },
      {
        name: 'BUSD',
        address: '0x12AA82525DEfF84777fa78578A68ceB854A85f43',
        symbol: 'BUSD',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x12AA82525DEfF84777fa78578A68ceB854A85f43/logo.png',
      },
      {
        name: 'Dai',
        address: '0x8687cD1d02A28098571067ddB18F33fEF667C929',
        symbol: 'DAI',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x8687cD1d02A28098571067ddB18F33fEF667C929/logo.png',
      },
      {
        name: 'Dogecoin',
        address: '0xD2683b22287E63D22928CBe4514003a92507f474',
        symbol: 'DOGE',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xD2683b22287E63D22928CBe4514003a92507f474/logo.png',
      },
      {
        name: 'Ether',
        address: '0xDC2393dc10734BF153153038943a5deB42b209cd',
        symbol: 'ETH',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xDC2393dc10734BF153153038943a5deB42b209cd/logo.png',
      },
      {
        name: 'LunaGens',
        address: '0x669E7828dF230eccEc83f3a9a850b5A3F1141Af2',
        symbol: 'LUNG',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x669E7828dF230eccEc83f3a9a850b5A3F1141Af2/logo.png',
      },
      {
        name: 'Shiba Inu',
        address: '0xC7E6d7E08A89209F02af47965337714153c529F0',
        symbol: 'SHIB',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
      },
      {
        name: 'USD Coin',
        address: '0xB25cB6a275a8D6a613228FB161eB3627b50EB696',
        symbol: 'USDC',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xB25cB6a275a8D6a613228FB161eB3627b50EB696/logo.png',
      },
      {
        name: 'Tether USD',
        address: '0x8e6dAa037b7F130020b30562f1E2a5D02233E6c5',
        symbol: 'USDT',
        decimals: 18,
        chainId: 61916,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x8e6dAa037b7F130020b30562f1E2a5D02233E6c5/logo.png',
      },

      {
        name: 'IceCream',
        address: '0x867f08A3ab824b42e8058a1B48e32E1dF205b092',
        symbol: 'ICE',
        decimals: 18,
        chainId: 122,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
      },
      {
        name: 'Dogecoin',
        address: '0x12AA82525DEfF84777fa78578A68ceB854A85f43',
        symbol: 'DOGE',
        decimals: 18,
        chainId: 122,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x46a8E16dB8Bb241618873bCA21Ef02F120EA4125/logo.png',
      },
      {
        name: 'Shiba Inu',
        address: '0x8687cD1d02A28098571067ddB18F33fEF667C929',
        symbol: 'SHIB',
        decimals: 18,
        chainId: 122,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xADF3051f6fbC1f42ee20B2eDb47EA7f6CcaBe978/logo.png',
      },

      {
        name: 'IceCream',
        address: '0x54051D9DbE99687867090d95fe15C3D3E35512Ba',
        symbol: 'ICE',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x54051D9DbE99687867090d95fe15C3D3E35512Ba/logo.png',
      },
      {
        name: 'BNB',
        address: '0x867f08A3ab824b42e8058a1B48e32E1dF205b092',
        symbol: 'BNB',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x867f08A3ab824b42e8058a1B48e32E1dF205b092/logo.png',
      },
      {
        name: 'BUSD',
        address: '0x12AA82525DEfF84777fa78578A68ceB854A85f43',
        symbol: 'BUSD',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x12AA82525DEfF84777fa78578A68ceB854A85f43/logo.png',
      },
      {
        name: 'Dai',
        address: '0x8687cD1d02A28098571067ddB18F33fEF667C929',
        symbol: 'DAI',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x8687cD1d02A28098571067ddB18F33fEF667C929/logo.png',
      },
      {
        name: 'Dogecoin',
        address: '0xD2683b22287E63D22928CBe4514003a92507f474',
        symbol: 'DOGE',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xD2683b22287E63D22928CBe4514003a92507f474/logo.png',
      },
      {
        name: 'Ether',
        address: '0xDC2393dc10734BF153153038943a5deB42b209cd',
        symbol: 'ETH',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xDC2393dc10734BF153153038943a5deB42b209cd/logo.png',
      },
      {
        name: 'Shiba Inu',
        address: '0xC7E6d7E08A89209F02af47965337714153c529F0',
        symbol: 'SHIB',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
      },
      {
        name: 'USD Coin',
        address: '0xB25cB6a275a8D6a613228FB161eB3627b50EB696',
        symbol: 'USDC',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0xB25cB6a275a8D6a613228FB161eB3627b50EB696/logo.png',
      },
      {
        name: 'Tether USD',
        address: '0xc57F0eb99363e747D637B17BBdB4e1AB85e60631',
        symbol: 'USDT',
        decimals: 18,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x8e6dAa037b7F130020b30562f1E2a5D02233E6c5/logo.png',
      },
      {
        name: 'USPLUS',
        address: '0xc280EbcD651d2a0C8D4bb49151062C9eEF55d370',
        symbol: 'US+',
        decimals: 6,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/xdc/assets/0xc280EbcD651d2a0C8D4bb49151062C9eEF55d370/logo.png',
      },
      {
        name: 'BitcoinX',
        address: '0xb6E57fBB2D44092f75d9da2769FFc788ce931320',
        symbol: 'BTCx',
        decimals: 8,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/xdc/assets/0xb6e57fbb2d44092f75d9da2769ffc788ce931320/logo.png',
      },
      {
        name: 'GEM',
        address: '0x84fb1a5795858E7296780a7f55C43afa20e9A7Ae',
        symbol: 'GEM',
        decimals: 15,
        chainId: 50,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/xdc/assets/0x84fb1a5795858E7296780a7f55C43afa20e9A7Ae/logo.png',
      },

      {
        name: 'Wrapped CORE',
        address: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
        symbol: 'WCORE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f/logo.png',
      },
      {
        name: 'StakedCore',
        address: '0xA20b3B97df3a02f9185175760300a06B4e0A2C05',
        symbol: 'SCORE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xA20b3B97df3a02f9185175760300a06B4e0A2C05/logo.png',
      },
      {
        name: 'Tether USD (ICE Bridge)',
        address: '0x81bCEa03678D1CEF4830942227720D542Aa15817',
        symbol: 'USDT',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x8e6dAa037b7F130020b30562f1E2a5D02233E6c5/logo.png',
      },
      {
        name: 'IceCream (ICE Bridge)',
        address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
        symbol: 'ICE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/doken/assets/0x54051D9DbE99687867090d95fe15C3D3E35512Ba/logo.png',
      },
      {
        name: 'BNB (ICE Bridge)',
        address: '0x12AA82525DEfF84777fa78578A68ceB854A85f43',
        symbol: 'BNB',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x74446a7418BFbFCDe3F1f6bCaFFA097d050a6dD8/logo.png',
      },
      {
        name: 'BUSD (ICE Bridge)',
        address: '0x8687cD1d02A28098571067ddB18F33fEF667C929',
        symbol: 'BUSD',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xd0CE781960c6356A7175988751bfC8d7cd28EA60/logo.png',
      },
      {
        name: 'Dai (ICE Bridge)',
        address: '0x1f82d787a1186c67360E62869C46eADbc192846a',
        symbol: 'DAI',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x71Ef0A490E53Cc177F640169b0347Be4d0f23cc9/logo.png',
      },
      {
        name: 'Dogecoin (ICE Bridge)',
        address: '0x7de0Bc2cf736f0a307299A0acFf1e89843C109a2',
        symbol: 'DOGE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x46a8E16dB8Bb241618873bCA21Ef02F120EA4125/logo.png',
      },
      {
        name: 'Ether (ICE Bridge)',
        address: '0xeF6b7BC74C9354BCf2e3F2A068e4b0B5CDf08F29',
        symbol: 'ETH',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xeA61Dc96F105469522d39cBF7bD59b42393678F7/logo.png',
      },
      {
        name: 'Shiba Inu (ICE Bridge)',
        address: '0xD45eC0D923E7CD61666A46bfc0A8BE9C234Ae6d7',
        symbol: 'SHIB',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xADF3051f6fbC1f42ee20B2eDb47EA7f6CcaBe978/logo.png',
      },
      {
        name: 'USD Coin (ICE Bridge)',
        address: '0xD2683b22287E63D22928CBe4514003a92507f474',
        symbol: 'USDC',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xaEdD3Ff7b9Fc5fc4e44d140b80f0B1C7FdB6102c/logo.png',
      },
      {
        name: 'Young Parrot (ICE Bridge)',
        address: '0xDC2393dc10734BF153153038943a5deB42b209cd',
        symbol: 'YPC',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x11203a00a9134Db8586381C4B2fca0816476b3FD/logo.png',
      },
      {
        name: 'Coreinu',
        address: '0x6E35fF7aC8eEB825DdB155515eF612ADcD66BCbC',
        symbol: 'Coreinu',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x6E35fF7aC8eEB825DdB155515eF612ADcD66BCbC/logo.png',
      },
      {
        name: 'CoreShib',
        address: '0x751669F3dCE1ED1c449dE44889365E40F13ce57f',
        symbol: 'CoreShib',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x751669F3dCE1ED1c449dE44889365E40F13ce57f/logo.png',
      },
      {
        name: 'ShibKing',
        address: '0xfaAb2496997b7D0C0BCbe8Fd4fC5d3a310f8691f',
        symbol: 'ShibKing',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xfaAb2496997b7D0C0BCbe8Fd4fC5d3a310f8691f/logo.png',
      },
      {
        name: 'AIINUcorecoin',
        address: '0x7469BaE0b0bC80A208EB0946121b5AFf686A6AC2',
        symbol: 'AIINU',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x7469BaE0b0bC80A208EB0946121b5AFf686A6AC2/logo.png',
      },
      {
        name: 'CoreKing',
        address: '0x95fa9f187fdBeB310f38A9cf99536648EC4231D9',
        symbol: 'CoreKing',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x95fa9f187fdBeB310f38A9cf99536648EC4231D9/logo.png',
      },
      {
        name: 'CoreTiger',
        address: '0x4B61816857431C7d6ff0Dc023B7638d55e408587',
        symbol: 'TCORE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x4B61816857431C7d6ff0Dc023B7638d55e408587/logo.png',
      },
      {
        name: 'DogeZilla',
        address: '0xed291D99922C13CD0225C18628A7Fde15a8eb017',
        symbol: 'DZilla',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xed291D99922C13CD0225C18628A7Fde15a8eb017/logo.png',
      },
      {
        name: 'ShibZilla',
        address: '0x3Af9b566876b0343BBdBC16D6038204578FF786C',
        symbol: 'SZilla',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x3Af9b566876b0343BBdBC16D6038204578FF786C/logo.png',
      },
      {
        name: 'CoreMoon',
        address: '0xc7C380Cf10d7c6f0720BFDf4D613c877Ba0D2DB1',
        symbol: 'CMoon',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xc7C380Cf10d7c6f0720BFDf4D613c877Ba0D2DB1/logo.png',
      },
      {
        name: 'AKIO INU',
        address: '0xBb790D1e8A2d34e9d846bb00EA0b0380813375EE',
        symbol: 'AKIO',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xBb790D1e8A2d34e9d846bb00EA0b0380813375EE/logo.png',
      },
      {
        name: 'Big Core',
        address: '0xBFa14641bf0fE84dE3fcf3Bf227900af445f09C3',
        symbol: 'Bcore',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xBFa14641bf0fE84dE3fcf3Bf227900af445f09C3/logo.png',
      },
      {
        name: 'CoreCCTV',
        address: '0x7Ce61A71Fd872F9B0599f1F49ab0b9783Db26E9E',
        symbol: 'CoreCCTV',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x7Ce61A71Fd872F9B0599f1F49ab0b9783Db26E9E/logo.png',
      },
      {
        name: 'Dao',
        address: '0xA677940e2D7F696D3EC11F226a3FF7a06E5c8254',
        symbol: 'Dao',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xA677940e2D7F696D3EC11F226a3FF7a06E5c8254/logo.png',
      },
      {
        name: 'Corgi Inu',
        address: '0xCb6375D3bF479e7fD1355ac4138eDC8D13E13218',
        symbol: 'CORGI',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xCb6375D3bF479e7fD1355ac4138eDC8D13E13218/logo.png',
      },
      {
        name: 'BullKats',
        address: '0x7C2Cb8462Be5fA86353e043b80aFd1A58a8Ccfc3',
        symbol: 'Bullkats',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x7C2Cb8462Be5fA86353e043b80aFd1A58a8Ccfc3/logo.png',
      },
      {
        name: 'CoreBoy',
        address: '0x7C220b37C8D12324e59c045E32830c48FA0f2869',
        symbol: 'CBoy',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x7C220b37C8D12324e59c045E32830c48FA0f2869/logo.png',
      },
      {
        name: 'Volcanoes Core',
        address: '0x9D083d1749B0446D16B48678567E164B03Cc92F3',
        symbol: 'VOLC',
        decimals: 8,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x9D083d1749B0446D16B48678567E164B03Cc92F3/logo.png',
      },
      {
        name: 'CoreFloki',
        address: '0xA8Fba30fD133dE026EeF6218c6E38e6b83108ce6',
        symbol: 'CoreFloki',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xA8Fba30fD133dE026EeF6218c6E38e6b83108ce6/logo.png',
      },
      {
        name: 'Goatge',
        address: '0xdA7dAA9a07ef5070dB671307fEa819c75d2D6cE3',
        symbol: 'GTE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xdA7dAA9a07ef5070dB671307fEa819c75d2D6cE3/logo.png',
      },
      {
        name: 'LunaGens',
        address: '0xE8b0dF74192CCA9C4de66F23653476f6e6CD1d98',
        symbol: 'LUNG',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xE8b0dF74192CCA9C4de66F23653476f6e6CD1d98/logo.png',
      },
      {
        name: 'AI CORE TOKEN',
        address: '0x7621c97683A3b0499EC156bD257E44175e793bb1',
        symbol: 'AICore',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x7621c97683A3b0499EC156bD257E44175e793bb1/logo.png',
      },
      {
        name: 'CoreDOGE',
        address: '0xB9CFcC2995eDD0f7Ad4cf873A3006E54831A8888',
        symbol: 'CDOGE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xB9CFcC2995eDD0f7Ad4cf873A3006E54831A8888/logo.png',
      },
      {
        name: 'StarlyBooks',
        address: '0xAA7912C028E058e4bD90Bcbb9fB41C27DbcC3245',
        symbol: 'WORD',
        decimals: 6,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xAA7912C028E058e4bD90Bcbb9fB41C27DbcC3245/logo.png',
      },
      {
        name: 'Core Kishu',
        address: '0xb2172C92e22F09Bc7d15C4B1790c7704f8429d14',
        symbol: 'CKISHU',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xb2172C92e22F09Bc7d15C4B1790c7704f8429d14/logo.png',
      },
      {
        name: 'CoreTomb',
        address: '0xC830a752eef79F2D66a36645A70fB0bA176b4Cea',
        symbol: 'CTOMB',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xC830a752eef79F2D66a36645A70fB0bA176b4Cea/logo.png',
      },
      {
        name: 'CoreShare',
        address: '0x6501cCA79ca8D6F68784f2345c9a379951e30A05',
        symbol: 'CSHARE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x6501cCA79ca8D6F68784f2345c9a379951e30A05/logo.png',
      },
      {
        name: 'Hobo Universe',
        address: '0x25100C0083e8E53b1cb264E978522bd477011A0d',
        symbol: 'HOBO',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x25100C0083e8E53b1cb264E978522bd477011A0d/logo.png',
      },
      {
        name: 'WOOF',
        address: '0x5C44d3D2312AbA4d5F2406A98Bf374Bc76455092',
        symbol: 'WOOF',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x5C44d3D2312AbA4d5F2406A98Bf374Bc76455092/logo.png',
      },
      {
        name: 'USDT Rain',
        address: '0xFB59984Fd355C60064fcb191C0Ed817F1365eec0',
        symbol: 'USDTRAIN',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xFB59984Fd355C60064fcb191C0Ed817F1365eec0/logo.png',
      },
      {
        name: 'DogeCore',
        address: '0x8063F3ff48B24cAe82DbA04D24D11b8A3B9A087c',
        symbol: 'DCORE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x8063F3ff48B24cAe82DbA04D24D11b8A3B9A087c/logo.png',
      },
      {
        name: 'ShibaCore',
        address: '0x84F0FDAA0a34B5F4a1144372072a706A4A8121A4',
        symbol: 'SHIBA',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x84F0FDAA0a34B5F4a1144372072a706A4A8121A4/logo.png',
      },
      {
        name: 'Biang Inu',
        address: '0x241dC1D03eAbd156FDb326Cf9fFBa11f48BA9758',
        symbol: 'BINU',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x241dC1D03eAbd156FDb326Cf9fFBa11f48BA9758/logo.png',
      },
      {
        name: 'Core Sharky',
        address: '0x73532Ba016bAf18db9edD6013eB150BDf3451C51',
        symbol: 'CSHARKY',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x73532Ba016bAf18db9edD6013eB150BDf3451C51/logo.png',
      },
      {
        name: 'Zombie Core',
        address: '0xc951d94922CEC79e2a363c6773dACac8079BA833',
        symbol: 'ZCORE',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xc951d94922CEC79e2a363c6773dACac8079BA833/logo.png',
      },
      {
        name: 'Rubic Wallet',
        address: '0xe1497a14a1224DaEFa5Fe68fD9e107Cb472e8129',
        symbol: 'RBWT',
        decimals: 9,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xe1497a14a1224DaEFa5Fe68fD9e107Cb472e8129/logo.png',
      },
      {
        name: 'SHIBONK',
        address: '0x85FD5f8dBD0c9Ef1806E6c7d4B787d438621C1dC',
        symbol: 'SBONK',
        decimals: 9,
        chainId: 32520,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x85FD5f8dBD0c9Ef1806E6c7d4B787d438621C1dC/logo.png',
      },
      {
        name: 'MemeRoyale',
        address: '0xA7c0B19645B653B4373E3592C84fce8C64D89E8F',
        symbol: 'ROYALE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/binance/assets/0x7a89fae255957C190ac8552f559be0Ad0401A081/logo.png',
      },
      {
        name: '4D Twin Maps',
        address: '0xAB82f8b18ea7929815076F152b8Fd24F8b267274',
        symbol: 'MAP',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x6D347fdCb302a5879545E01EceE7A176db23dCDa/logo.png',
      },
      {
        name: 'AIBRA',
        address: '0xe56016187C0fb36f76c33d0D0B36b47648A42D0A',
        symbol: 'ABR',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x9F7Bb6E8386ac9ad5e944d66fBa80F3F7231FA94/logo.png',
      },
      {
        name: 'FlashX Max',
        address: '0x5aE225fa6573903CA58E26Cd4171B87060CeEAA2',
        symbol: 'FSXM',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x5aE225fa6573903CA58E26Cd4171B87060CeEAA2/logo.png',
      },
      {
        name: 'EMPEROR',
        address: '0x8AFB52De791A19873c3097195Ef04D48ED93fE14',
        symbol: 'EMPEROR',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x8AFB52De791A19873c3097195Ef04D48ED93fE14/logo.png',
      },
      {
        name: 'ZMLM',
        address: '0x8EDF218D7bd1A28AA3736A0F77Bd8879e2af6789',
        symbol: 'ZM',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x8EDF218D7bd1A28AA3736A0F77Bd8879e2af6789/logo.png',
      },
      {
        name: 'GreenRanger',
        address: '0xDBa57074B81CD0630D7960dFAA370972C5E1A6D9',
        symbol: 'GR',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xDBa57074B81CD0630D7960dFAA370972C5E1A6D9/logo.png',
      },
      {
        name: '3D City',
        address: '0x979A34f98b9a1bF2B38fD18f5c038423e4902db9',
        symbol: '$3DC',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x979A34f98b9a1bF2B38fD18f5c038423e4902db9/logo.png',
      },
      {
        name: 'Testsale IceCream',
        address: '0x4Fa8A18cFf618A19948c9F954F6330eB53DA4348',
        symbol: 'TICE',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x4Fa8A18cFf618A19948c9F954F6330eB53DA4348/logo.png',
      },
      {
        name: 'Avocado Baby',
        address: '0xf69399158cbA7b92089317814E60C5AF867fEaB6',
        symbol: 'Avo',
        decimals: 18,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xf69399158cbA7b92089317814E60C5AF867fEaB6/logo.png',
      },
      {
        name: 'Coffee Crypto',
        address: '0x7241C79C5Bf1C69eA6f0F8FAF2dFB30e37EF0820',
        symbol: 'CFEE',
        decimals: 8,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x7241C79C5Bf1C69eA6f0F8FAF2dFB30e37EF0820/logo.png',
      },
      {
        name: 'ShadowSwap Token',
        symbol: 'SHDW',
        address: '0xddBa66C1eBA873e26Ac0215Ca44892a07d83aDF5',
        chainId: 1116,
        decimals: 18,
        logoURI: 'https://shadowswap.xyz/images/tokens/0xddBa66C1eBA873e26Ac0215Ca44892a07d83aDF5.png',
      },
      {
        name: 'LFG',
        symbol: 'LFG',
        address: '0xF7a0b80681eC935d6dd9f3Af9826E68B99897d6D',
        chainId: 1116,
        decimals: 18,
        logoURI: 'https://www.lfgswap.finance/images/tokens/0xF7a0b80681eC935d6dd9f3Af9826E68B99897d6D.png',
      },
      {
        name: 'USD Coin (Layer0 Bridge)',
        address: '0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9',
        symbol: 'USDC',
        decimals: 6,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9/logo.png',
      },
      {
        name: 'Tether USD (Layer0 Bridge)',
        address: '0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1',
        symbol: 'USDT',
        decimals: 6,
        chainId: 1116,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1/logo.png',
      },
      {
        address: '0x6ce5334048E95F800C22ce39B533369Eb1037485',
        chainId: 1116,
        name: 'DFJ',
        symbol: 'DFJ',
        decimals: 18,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x6ce5334048E95F800C22ce39B533369Eb1037485/logo.png',
      },
      {
        address: '0xE8dEC1bFC7BF572D60403c609d6589715d2a23fC',
        chainId: 1116,
        name: 'Bitvexa Network',
        symbol: 'BTV',
        decimals: 8,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xE8dEC1bFC7BF572D60403c609d6589715d2a23fC/logo.png',
      },
      {
        address: '0x9cc83D580180f0d37d00e5d86ce868f73b6E3D0A',
        chainId: 1116,
        name: 'Bitcointry Token',
        symbol: 'BTTY',
        decimals: 18,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x9cc83D580180f0d37d00e5d86ce868f73b6E3D0A/logo.png',
      },
      {
        address: '0x6F8BF0Ca89b8936AA498c7A2C75815Eecca328F3',
        chainId: 1116,
        name: 'CORE BUNNY',
        symbol: 'CBUNNY',
        decimals: 18,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x6F8BF0Ca89b8936AA498c7A2C75815Eecca328F3/logo.png',
      },
      {
        address: '0xcfd38184c30832917A2871695F91e5e61bBD41fF',
        chainId: 1116,
        name: 'Miidas NFT',
        symbol: 'Miidas',
        decimals: 6,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xcfd38184c30832917A2871695F91e5e61bBD41fF/logo.png',
      },
      {
        address: '0xbFf24592345094DFA4d6f75aFF5BE79AbCbC9bD9',
        chainId: 1116,
        name: 'BlockVerse',
        symbol: 'BLOCK',
        decimals: 8,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xbFf24592345094DFA4d6f75aFF5BE79AbCbC9bD9/logo.png',
      },
      {
        address: '0x98564E70c7fCC6d947fFE6d9EfeD5ba68b306F2E',
        chainId: 1116,
        name: 'Ignore Fud',
        symbol: '4TOKEN',
        decimals: 18,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x98564E70c7fCC6d947fFE6d9EfeD5ba68b306F2E/logo.png',
      },
      {
        address: '0x496Bb259D0117E89B2e73433524e9838c3073e60',
        chainId: 1116,
        name: 'UnityCore',
        symbol: 'UCORE',
        decimals: 18,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0x496Bb259D0117E89B2e73433524e9838c3073e60/logo.png',
      },

      {
        name: 'IceCream',
        address: '0x81bCEa03678D1CEF4830942227720D542Aa15817',
        symbol: 'ICE',
        decimals: 18,
        chainId: 2415,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
      },

      {
        name: 'IceCream',
        address: '0xBD2e577dEa54602C7c367fa144981c8ACA6FD570',
        symbol: 'ICE',
        decimals: 18,
        chainId: 8081,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
      },
      {
        name: 'Tether USD',
        address: '0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42',
        symbol: 'USDT',
        decimals: 18,
        chainId: 8081,
        logoURI:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
      },
    ],
  }

  // return trpcClient.token.defaultList.query()
}
