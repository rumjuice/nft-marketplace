import { FC } from "react";

type Props = {
  name: string;
  symbol: string;
  id: number;
  img: string;
};
const Card: FC<Props> = ({ name, symbol, id, img }) => {
  return (
    <div className="flex flex-col rounded-md shadow-md bg-white">
      <img
        src={img}
        alt={name}
        className="object-contain object-center w-60 h-60 rounded-t-md"
      />
      <div className="p-3">
        <div className="text-sm text-slate-500">{name}</div>
        <div className="text-cyan-900 font-medium">{`${symbol} #${id}`}</div>
      </div>
    </div>
  );
};

export default Card;
