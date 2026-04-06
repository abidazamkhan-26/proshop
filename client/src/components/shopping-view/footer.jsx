import { Link } from "react-router-dom";

function ShoppingFooter() {
  return (
    <footer className="border-t bg-white py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-gray-600 animate-in fade-in duration-700">
            &copy; 2026 ProShop E-com Platform. Developed By{" "}
            <a
              href="https://abidazam.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-black hover:underline"
            >
              Abid Azam Khan
            </a>{" "}
            · CEO of{" "}
            <a
              href="https://unipixer.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-black hover:underline"
            >
              Unipixer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ShoppingFooter;

