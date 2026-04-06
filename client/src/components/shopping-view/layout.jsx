import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import ShoppingFooter from "./footer";

function ShoppingLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      {/* common footer */}
      <ShoppingFooter />
    </div>
  );
}

export default ShoppingLayout;

