import { Link } from "react-router-dom";

function ShoppingFooter() {
  return (
    <footer className="border-t bg-white py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
           <p className="py-4 text-center text-xs md:text-sm">
        © 2026 Proshop. Developed By <span href="" target="_blank" className="font-medium ">Abid Azam Khan</span> · CEO of <span href="" target="_blank" className="font-medium">Unipixer</span>
      </p>
        </div>
      </div>
    </footer>
  );
}

export default ShoppingFooter;

