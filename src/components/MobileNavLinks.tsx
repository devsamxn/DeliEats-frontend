import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

type MobileNavCloser = {
  closeSheet: () => void;
};
const MobileNavLinks = ({ closeSheet }: MobileNavCloser) => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        onClick={closeSheet}
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-orange-500"
        >
        Order Status
      </Link>
      <Link
        onClick={closeSheet}
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500"
        >
        My Restaurant
      </Link>
      <Link
        onClick={closeSheet}
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
        >
        User Profile
      </Link>
      <Button
      
        onClick={() => logout()}
        className="flex items-center px-3 hover:bg-gray-500"
      >
        Sign Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
