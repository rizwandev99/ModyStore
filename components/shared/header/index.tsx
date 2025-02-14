import { APP_NAME } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

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
      <Menu />
    </div>
  </header>
);

export default Header;
