import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constant";
import Link from "next/link";

const CredentialsSignInForm = () => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={signInDefaultValues.email}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="password"
          defaultValue={signInDefaultValues.password}
        />
      </div>
      <div>
        <Button variant="default" className="w-full">
          Sign in
        </Button>
      </div>
      <div className="text-center">
        Don&apos;t have an account ?<Link href="/sign-up"> Sign up</Link>
      </div>
    </div>
  );
};

export default CredentialsSignInForm;
