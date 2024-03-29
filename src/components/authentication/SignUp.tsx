import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CommonProviderOptions } from "next-auth/src/providers";
import { Route } from "@component/layout/defaultLayout";
import { OAuthButton } from "@component/authentication/OAuthButton";
import { MagicLinkForm } from "@component/authentication/MagicLinkForm";

type SignUpProps = {
  oauthProviders: CommonProviderOptions[];
  csrfToken: string;
};

export function SignUp({ oauthProviders }: SignUpProps) {
  return (
    <main className="flex w-full">
      <div className="relative hidden h-screen flex-1 items-center justify-center bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <Image
            alt={"logo"}
            src="https://floatui.com/logo-dark.svg"
            width={150}
            height={50}
          />
          <div className=" mt-16 space-y-3">
            <h3 className="text-3xl font-bold text-white">
              Start growing your business quickly
            </h3>
            <p className="text-gray-300">
              Create an account and get access to all features for 30-days, No
              credit card required.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex h-screen flex-1 items-center justify-center">
        <div className="w-full max-w-md space-y-8 bg-white px-4 text-gray-600 sm:px-0">
          <div className="">
            <Image
              alt={"logo"}
              src="https://floatui.com/logo.svg"
              width={150}
              height={50}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Sign up
              </h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  href={Route.LOGIN}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            <OAuthButton providers={Object.values(oauthProviders)} />
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
}
