export type NFT = {
  name: string;
  symbol: string;
  address: string;
  tokens: Token[];
};
export type Token = {
  uri: string;
  owner: string;
  id: number;
};
