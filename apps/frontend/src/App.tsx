import { ReactElement } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteObject,
  Routes,
} from "react-router-dom";
import Header from "./modules/Header";
import HomeRoutes from "./modules/Home/Route";

function App(): ReactElement {
  const routes: RouteObject[] = [...HomeRoutes];

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center h-screen w-screen bg-slate-50 pb-4">
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
