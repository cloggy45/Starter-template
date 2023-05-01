import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Route } from "@component/layout/defaultLayout";
import { OAuthButton } from "@component/authentication/OAuthButton";
import { CommonProviderOptions } from "next-auth/src/providers";
import { MagicLinkForm } from "@component/authentication/MagicLinkForm";

type LoginProps = {
  oauthProviders: CommonProviderOptions[];
};

export const Login = ({ oauthProviders }: LoginProps) => {
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
          <div className="grid grid-cols-2 gap-x-3">
            <OAuthButton providers={oauthProviders} />
          </div>
          <div className="relative">
            <span className="block h-px w-full bg-gray-300"></span>
            <p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-2 text-sm">
              Or continue with
            </p>
          </div>
          <MagicLinkForm />
          <div className="relative">
            <span className="block h-px w-full bg-gray-300"></span>
            <p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-2 text-sm">
              We’ll email you a magic code for a password-free sign-in.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
