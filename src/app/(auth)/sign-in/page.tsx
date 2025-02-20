import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constant";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CredentialsSignInForm from "./credentials-signin-form";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-4 flex-col items-center justify-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt={`${APP_NAME} logo`}
                width={100}
                height={100}
                priority={true}
              />
            </Link>
            <CardTitle className="text-center">{APP_NAME}</CardTitle>
            <CardDescription className="text-center">
              {APP_DESCRIPTION}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
          <CredentialsSignInForm />
        </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignInPage;
