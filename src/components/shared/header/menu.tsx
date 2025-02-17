import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div>
      <div className="flex justify-end gap-3 ">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
          <ModeToggle />
          <Button asChild variant={"ghost"}>
            <Link href="/">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              <User /> Sign In
            </Link>
          </Button>
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start ">
              <SheetTitle className="border-b border-gray-400 w-full">
                Menu
              </SheetTitle>
              <ModeToggle /> 
              <Button asChild variant={"ghost"}>
                <Link href="/">
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <Button asChild>
                <Link href="/">
                  <User /> Sign In
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
