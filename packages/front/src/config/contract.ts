import type { Hash } from '../types';
export const CONTRACT_ADDRESS_MANTLE: Hash = '0xB74475009BD955CB8Ef3d930999737DF1Edb96a6';

export interface TGetNumberOfProperties {
  owner: Hash
}

export interface TChainContracts {
  name: string;
  estate: Hash,
}

export interface TContracts {
  [id: string]: TChainContracts
}

export const contracts: TContracts = {
  534353: {
    name: 'scrollAlfaTestnet',
    estate: '0x',
  },
  420: {
    name: 'OptimismTestnet',
    estate: '0x',
  },
  5001: {
    name: 'mantleTestnet',
    estate: '0x',
  },
  10200: {
    name: 'chiadoGnosisTestnet',
    estate: '0x',
  },
  167005: {
    name: 'taikoTestnet',
    estate: '0x',
  },
}
