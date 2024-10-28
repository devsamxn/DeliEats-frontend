import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
import { useState } from "react";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const username = user?.email
    ? user.email.length > 10
      ? user.email.slice(0, 10) + "..."
      : user.email
    : "";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3 w-[200px] font-mono">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500" />
              <span className="text-[15px]">{username}</span>
            </span>
          ) : (
            <div className="flex justify-center">
              <span> Welcome to Deli-Eats!</span>
            </div>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col items-center gap-4">
          {isAuthenticated ? (
            <MobileNavLinks closeSheet={() => setIsOpen(false)} />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-orange-500"
            >
              Sign In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
