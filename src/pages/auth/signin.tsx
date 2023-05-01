import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { DefaultLayout, Route } from "@component/layout/defaultLayout";
import { Login } from "@component/authentication/Login";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DefaultLayout>
      <Login oauthProviders={providers} />
    </DefaultLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: Route.DASHBOARD.PARENT } };
  }

  const maybeProviders = await getProviders();
  const providers = maybeProviders
    ? Object.values(maybeProviders).filter((p) => p.type !== "email")
    : [];

  return {
    props: { providers },
  };
}
