import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'GAME',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x7662786e7D78FC8Ed04E3517D4b9B9fEbe418cF7',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xc3c2eAE09495D66dDc923837Bf60ee15aAe8A7f6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  
]

export default pools
