"use server";

import { type LoginContext, LoginSchema } from "./type";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (_: unknown, formData: FormData) => {
  await new Promise((resolve) => {
    return setTimeout(() => {
      resolve("done");
    }, 2000);
  });

  const toObject = Object.fromEntries(formData) as LoginContext;

  const payload = { email: toObject.email, password: toObject.password };
  const result = LoginSchema.safeParse(payload);

  if (result.success) {
    const cookieStore = await cookies();
    cookieStore.set(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg"
    );
    const response = {
      message: "Form submitted",
      success: true,
      errors: null,
      input: payload,
    };
    return response;
  }

  const response = {
    message: "Validation error",
    success: false,
    errors: result.error?.issues.reduce((acc, issue) => {
      acc[issue.path[0] as keyof typeof acc] = issue.message;
      return acc;
    }, {} as LoginContext),
    input: payload,
  };

  return response;
};

export const handleLogout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  redirect("/");
};
