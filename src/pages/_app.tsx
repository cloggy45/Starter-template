import { ReactElement, ReactNode } from "react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { api } from "@utils/api";

import "~/styles/globals.css";

// No changes to this type
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Add generic type
type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

// Pass `{ session: Session; }` type as generic
function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(
        <>
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
}
export default api.withTRPC(MyApp);
