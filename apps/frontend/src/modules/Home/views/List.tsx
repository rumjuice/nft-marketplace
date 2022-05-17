import { FC } from "react";
import { Box, Card } from "../components";

const List: FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Box name="Name" value="Meng" />
        <Box name="Symbol" value="MENG" />
      </div>
      <div className="mt-2">
        <Box
          name="Address"
          value="0x5f74042a94A4E03C47040f8eE5a05b32CEed097b"
        />
      </div>
      <div className="w-full border-b-cyan-900 border-b-2 border-dotted my-4"></div>
      <div className="grid grid-flow-col gap-4">
        <Card
          img="http://localhost:8080/images/cibul.jpg"
          name="Cibul"
          symbol="MENG"
          id={1}
        />
        <Card
          img="http://localhost:8080/images/cibul.jpg"
          name="Cibul"
          symbol="MENG"
          id={1}
        />
        <Card
          img="http://localhost:8080/images/cibul.jpg"
          name="Cibul"
          symbol="MENG"
          id={1}
        />
      </div>
    </>
  );
};

export default List;
