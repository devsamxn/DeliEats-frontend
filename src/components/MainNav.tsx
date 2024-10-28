import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center text-xl font-mono">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className=" p-0.5 px-3 hover:text-black hover:border-b-2 hover:border-b-orange-300 rounded-2xl hover:bg-orange-200"
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="hover:text-black text-xl hover:border-white rounded-2xl hover:bg-orange-200 border-2 border-black"
          onClick={async () => await loginWithRedirect()}
        >
          Sign In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
