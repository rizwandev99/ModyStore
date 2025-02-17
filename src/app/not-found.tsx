import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constant";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-3/4 sm:w-1/3 flex flex-col justify-center items-center p-4 gap-4 shadow-md rounded-lg">
        <Image
          src="/images/logo.svg"
          alt={`${APP_NAME} logo`}
          height={48}
          width={48}
          priority={true}
        />
        <h1 className="font-bold text-3xl ">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button variant="default">← Back To Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
