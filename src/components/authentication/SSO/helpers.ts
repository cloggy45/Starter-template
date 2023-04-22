import { NextRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Route } from "@component/layout/defaultLayout";

type SSOProvider = "google" | "github" | "twitter";
type SessionState = "authenticated" | "unauthenticated" | "loading";

export function handleSSOLogin(
  ssoProvider: SSOProvider,
  status: SessionState,
  router: NextRouter
) {
  if (status === "unauthenticated") {
    void signIn(ssoProvider, {
      callbackUrl: Route.DASHBOARD.PARENT,
      redirect: true,
    });
  } else if (status === "authenticated") {
    void router.push(Route.DASHBOARD.PARENT);
  }
}
