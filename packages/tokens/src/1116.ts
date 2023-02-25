import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const coreTokens = {  // todo: add bridged CORE tokens
  wcore: WETH9[ChainId.CORE],
  ice: new ERC20Token(ChainId.CORE, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.CORE, '0x81bCEa03678D1CEF4830942227720D542Aa15817', 18, 'USDT', 'Tether USD'),
  usdc: new ERC20Token(ChainId.CORE, '0xD2683b22287E63D22928CBe4514003a92507f474', 18, 'USDC', 'USD Coin'),
  eth: new ERC20Token(ChainId.CORE, '0xeF6b7BC74C9354BCf2e3F2A068e4b0B5CDf08F29', 18, 'ETH', 'Ether'),
  bnb: new ERC20Token(ChainId.CORE, '0x12AA82525DEfF84777fa78578A68ceB854A85f43', 18, 'BNB', 'BNB'),
  huc: new ERC20Token(ChainId.CORE, '0x5EE2c2aE144218b52CF756c0907bA384C7E35fba', 18, 'HUC', 'Hobo Universe'),
  aicore: new ERC20Token(ChainId.CORE, '0x7621c97683A3b0499EC156bD257E44175e793bb1', 9, 'AICore', 'AI CORE TOKEN'),
  bcore: new ERC20Token(ChainId.CORE, '0xBFa14641bf0fE84dE3fcf3Bf227900af445f09C3', 18, 'Bcore', 'Big Core'),
  kishu: new ERC20Token(ChainId.CORE, '0xb2172C92e22F09Bc7d15C4B1790c7704f8429d14', 18, 'CKISHU', 'Core Kishu'),
  gte: new ERC20Token(ChainId.CORE, '0xdA7dAA9a07ef5070dB671307fEa819c75d2D6cE3', 18, 'GTE', 'Goatge'),
  word: new ERC20Token(ChainId.CORE, '0xAA7912C028E058e4bD90Bcbb9fB41C27DbcC3245', 6, 'WORD', 'StarlyBooks'),
}
