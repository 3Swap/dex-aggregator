export type WidgetFormprops = {
  onClickFrom: () => void;
  onSelectChain: (chain: Chain) => void;
  onSelectToken: (token: Token) => void;
  chains: ChainsResponse | null;
  tokens: TokensObject | null;
};

export type Chain = {
  id: number;
  key: string;
  name: string;
  chainType: string;
  coin: string;
  mainnet: boolean;
  logoURI: string;
  tokenlistUrl: string;
  multicallAddress: string;
  metamask: {
    chainId: string;
    blockExplorerUrls: string[];
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: string[];
  };
  nativeToken: {
    address: string;
    symbol: string;
    decimals: number;
    chainId: number;
    name: string;
    coinKey: string;
    priceUSD: string;
    logoURI: string;
  };
};

export type ChainsResponse = {
  chains: Chain[];
};

export type Token = {
  address: string;
  decimals: number;
  symbol: string;
  chainId: number;
  coinKey: string;
  name: string;
  logoURI: string;
  priceUSD: string;
};

export type TokensObject = {
  [key: string]: Token[];
};
