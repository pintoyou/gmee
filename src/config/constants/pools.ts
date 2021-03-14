import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'GAME',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xe841F151992259113C46370Db1AdE55f4884850f',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x6073036cdef163Ad776C783c261a37E24a2bcD18',
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
