import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-3">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          <img
            className="max-w-[125px] md:max-w-[200px] max-h-[100px]"
            src="/assets/logo.png"
          />
        </Link>
        <div className="flex flex-row justify-around items-center gap-5">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block flex justify-around">
            <MainNav />
          </div>
          <a
            href="https://www.sameernegi.com"
            className="font-sans italic px-2 py-1 bg-slate-300 hover:bg-slate-500 transition-colors duration-500 rounded-full"
            target="_blank"
          >
            Visit my portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
