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
export type Metadata = {
  id: number;
  name: string;
  image: string;
  description: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
};
export type TokenDetail = Metadata & Pick<Token, "owner"> & Pick<NFT, "symbol">;
