import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubLoginButton } from "@component/authentication/SSO/GithubLoginButton";
import { TwitterLoginButton } from "@component/authentication/SSO/TwitterLoginButton";
import { GoogleLoginButton } from "@component/authentication/SSO/GoogleLoginButton";
import { Route } from "@component/layout/defaultLayout";

export const Login = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <Image
            alt={"logo"}
            src="https://floatui.com/logo.svg"
            width={150}
            height={50}
            className="mx-auto"
          />

          <div className="mt-5 space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Dont have an account?{" "}
              <Link
                href={Route.SIGNUP}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="space-y-8 bg-white p-4 py-6 shadow sm:rounded-lg sm:p-6">
          <div className="grid grid-cols-3 gap-x-3">
            <GoogleLoginButton />
            <TwitterLoginButton />
            <GithubLoginButton />
          </div>
          <div className="relative">
            <span className="block h-px w-full bg-gray-300"></span>
            <p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-2 text-sm">
              Or continue with
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
              Sign in
            </button>
          </form>
        </div>
        <div className="text-center">
          <Link href="#" className="hover:text-indigo-600">
            Forgot password?
          </Link>
        </div>
      </div>
    </main>
  );
};
