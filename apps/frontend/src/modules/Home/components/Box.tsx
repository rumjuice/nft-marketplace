import { FC } from "react";

type Props = {
  name: string;
  value: string;
};
const Box: FC<Props> = ({ name, value }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-md shadow-md bg-white">
      <div className="text-lg font-medium text-cyan-900">{value}</div>
      <div className="text-sm text-slate-500">{name}</div>
    </div>
  );
};

export default Box;
