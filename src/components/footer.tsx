import { APP_NAME } from "@/lib/constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t flex flex-center p-5">
      {currentYear} {APP_NAME} . All rights reserved
    </footer>
  );
};

export default Footer;