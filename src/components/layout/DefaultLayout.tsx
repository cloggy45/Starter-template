import { useSession } from "next-auth/react";
import Head from "next/head";
import { LoggedInNavBar } from "@component/navbar/logged-in/LoggedInNavBar";
import { LoggedOutNavBar } from "@component/navbar/logged-out/LoggedOutNavBar";
import { Footer } from "@component/navbar/footer/footer";

interface DefaultLayoutProps {
  hideNavBar?: boolean;
  hideFooter?: boolean;
  children: JSX.Element;
}

export function DefaultLayout({
  children,
  hideNavBar = false,
  hideFooter = false,
}: DefaultLayoutProps) {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Template Project</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {hideNavBar ? null : sessionData ? (
        <LoggedInNavBar />
      ) : (
        <LoggedOutNavBar />
      )}
      <main className="flex min-h-screen flex-col items-center justify-center">
        {children}
      </main>
      {hideFooter ? null : <Footer />}
    </>
  );
}