import { trpcClient } from '@icecreamswap/backend'
import { TokenList } from '@uniswap/token-lists'
import defaultList from '../../../public/default.tokenList.json';

export const getDefaultTokenList = async (): Promise<TokenList> => {
  // @ts-ignore
  return defaultList
  // return trpcClient.token.defaultList.query()
}
