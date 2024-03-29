import { DefaultLayout, Route } from "@component/layout/defaultLayout";
import { SignUp } from "@component/authentication/SignUp";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { getCsrfToken, getProviders } from "next-auth/react";

export default function GetStartedPage({
  providers,
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DefaultLayout showNavbar={false}>
      <SignUp csrfToken={csrfToken as string} oauthProviders={providers} />
    </DefaultLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const csrfToken = await getCsrfToken(context);

  if (session) {
    return { redirect: { destination: Route.DASHBOARD.PARENT } };
  }

  const maybeProviders = await getProviders();
  const providers = maybeProviders
    ? Object.values(maybeProviders).filter((p) => p.type !== "email")
    : [];

  return {
    props: { providers, csrfToken },
  };
}
