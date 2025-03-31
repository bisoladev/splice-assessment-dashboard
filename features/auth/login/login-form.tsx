"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoginContext } from "./type";
import { useForm } from "react-hook-form";
import { Form, FormLabel, FormWrapper } from "@/components/ui/form";
import { PasswordInput } from "@/components/password-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginAction } from "./actions";
import { ActionResponse } from "@/types";
import { useActionState, useEffect } from "react";

const initialState: ActionResponse<LoginContext> = {
  message: "",
  success: false,
};

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const form = useForm<LoginContext>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const { replace } = useRouter();
  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.success) {
      return replace("/app");
    } else if (!state.success && state.errors) {
      for (const key in state.errors) {
        form.setError(key as "email", {
          type: "custom",
          message: state.errors[key],
        });
      }
    }
  }, [state, replace, form]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email and password below <br />
            to log into your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={action}>
              <div className="grid gap-6">
                <FormWrapper
                  name="email"
                  label="Email"
                  form={form}
                  render={({ field }) => (
                    <Input placeholder="name@example.com" {...field} />
                  )}
                />

                <FormWrapper
                  name="password"
                  label={
                    <div className="flex items-center justify-between w-full">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="#"
                        className="text-xs font-medium text-muted-foreground hover:opacity-75"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  }
                  form={form}
                  render={({ field }) => (
                    <PasswordInput placeholder="********" {...field} />
                  )}
                />
              </div>

              <Button type="submit" className="w-full mt-8">
                {isPending ? "Please wait..." : "Login"}
              </Button>

              <div className="text-center text-sm mt-1">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
