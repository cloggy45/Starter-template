import { ReactElement, ReactNode } from "react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { api } from "@utils/api";
import { ToastContainer } from "react-toastify";

import "~/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(
        <>
          <ToastContainer />
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
}
export default api.withTRPC(MyApp);
