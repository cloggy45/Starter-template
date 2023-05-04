import Sidebar from "@component/sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Route } from "@component/layout/defaultLayout";
import { useMediaQuery } from "~/hooks/useMediaQuery";

interface DashboardLayoutProps {
  children: JSX.Element;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useMediaQuery(768);
  let styles = "flex-1";

  if (isMobile) {
    styles += " ml-20";
  } else {
    styles += " ml-80";
  }

  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user;

  if (status === "unauthenticated") {
    void router.push(Route.LOGIN);
  }

  return (
    <div className={"flex"}>
      <div>
        {status === "authenticated" ? (
          <Sidebar
            isMobile={isMobile}
            displayName={user?.name ?? user?.email ?? ""}
            profileImage={user?.image ?? ""}
          />
        ) : null}
      </div>
      <div className={styles}>
        <main className={"mx-auto max-w-screen-xl px-4 md:px-8"}>
          {children}
        </main>
      </div>
    </div>
  );
}
