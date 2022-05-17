import { ReactElement } from "react";
import Header from "./modules/Header";
import List from "./modules/Home/views";

function App(): ReactElement {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-slate-50 pb-4">
      <Header />
      <List />
    </div>
  );
}

export default App;
