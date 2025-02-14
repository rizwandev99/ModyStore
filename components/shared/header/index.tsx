import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constant";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

const Header = () => (
  <header className="w-full border-b">
    <div className="wrapper flex-between">
      <Link href="/" className="flex-start">
        <Image
          src={"/images/logo.svg"}
          alt="shop"
          height={48}
          width={48}
          priority={true}
        />
        <div className="hidden md:block text-2xl font-bold ml-3">
          {APP_NAME}
        </div>
      </Link>
      <div className="space-x-2">
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
      </div>
    </div>
  </header>
);

export default Header;
