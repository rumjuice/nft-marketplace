import { FC, useCallback, useEffect, useState } from "react";
import { Box, Card } from "../components";
import { getAllNft, getMetadata } from "../repos";
import { NFT, Token, TokenDetail } from "../Types";

const List: FC = () => {
  const [nft, setNft] = useState<NFT>();
  const [tokenDetail, setTokenDetail] = useState<TokenDetail[]>();

  useEffect(() => {
    fetchNft();
  }, []);

  useEffect(() => {
    if (nft) {
      fetchMetadata(nft.tokens);
    }
  }, [nft]);

  const fetchNft = useCallback(async () => {
    try {
      const data = await getAllNft();
      setNft(data);
    } catch (error) {
      alert(error);
    }
  }, []);

  const fetchMetadata = useCallback(async (_tokens: Token[]) => {
    const _tokenDetail: TokenDetail[] = [];

    for (const token of _tokens) {
      try {
        const data = await getMetadata(token.id);
        _tokenDetail.push({ ...data, owner: token.owner });
      } catch (error) {
        console.error(error);
      }
    }
    setTokenDetail(_tokenDetail);
  }, []);

  return nft ? (
    <>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Box name="Name" value={nft.name} />
        <Box name="Symbol" value={nft.symbol} />
      </div>
      <div className="mt-2">
        <Box name="Address" value={nft.address} />
      </div>
      <div className="w-full border-b-cyan-900 border-b-2 border-dotted my-4"></div>
      <div className="grid grid-flow-col gap-4">
        {tokenDetail &&
          tokenDetail.map((token) => (
            <Card
              key={token.id}
              img={token.image}
              name={token.name}
              symbol={nft.symbol}
              id={token.id}
            />
          ))}
      </div>
    </>
  ) : (
    <div className="m-auto">Fetching data...</div>
  );
};

export default List;
