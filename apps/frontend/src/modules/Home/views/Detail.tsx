import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "../components";
import { TokenDetail } from "../Types";

const Detail: FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [token, setToken] = useState<TokenDetail>();

  useEffect(() => {
    if (!state) navigate(-1);
    setToken(state as TokenDetail);
  }, []);

  return token ? (
    <div className="flex w-3/4 mt-4 gap-4">
      <img
        src={token.image}
        alt={token.name}
        className="flex-1 object-contain object-center w-2/5 rounded-t-md"
      />
      <div className="w-full flex flex-col gap-4">
        <div className="text-xl font-medium">{token.name}</div>
        <div className="text-2xl font-bold text-cyan-900">{`${token.symbol} #${token.id}`}</div>
        <div className="text-slate-500">Owned by: {token.owner}</div>
        <div className="rounded-md shadow-md bg-white">
          <div className="text-sm font-medium p-4 border-b-2 border-dotted">
            Description:
          </div>
          <div className="p-4">{token.description}</div>
        </div>
        <div className="rounded-md shadow-md bg-white">
          <div className="text-sm font-medium p-4 border-b-2 border-dotted">
            Properties:
          </div>
          <div className="flex justify-evenly w-full p-2">
            {token.attributes.map((attr, i) => (
              <Box name={attr.trait_type} value={attr.value} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Detail;
