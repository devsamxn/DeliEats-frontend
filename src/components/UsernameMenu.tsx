import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useState } from "react";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    console.log("in");
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center px-3 gap-2 border-black border-2 hover:text-black hover:border-white hover:border-b-2 hover:border-orange- rounded-2xl hover:bg-orange-200">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-mono">
        <DropdownMenuItem onClick={handleItemClick}>
          <Link
            to="/manage-restaurant"
            className=" hover:text-orange-500 text-[16px]"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleItemClick}>
          <Link
            to="/user-profile"
            className=" hover:text-orange-500 text-[16px]"
          >
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="min-w-[150px] bg-orange-500 text-[16px]"
          >
            Sign Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
