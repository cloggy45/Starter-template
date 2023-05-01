import Sidebar from "@component/sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface DashboardLayoutProps {
  children: JSX.Element;
}

// TODO add responsive navbar using https://www.floatui.com/components/sidebars
export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user;

  // TODO https://stackoverflow.com/questions/67560587/how-to-protect-routes-in-next-js-next-auth
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "unauthenticated") {
    void router.push("/api/auth/signin");
  }

  return (
    <div className={"flex"}>
      <div>
        <Sidebar
          fullname={user?.name ?? user?.email ?? ""}
          imageUrl={user?.image ?? ""}
        />
      </div>
      <div className={"ml-80 flex-1"}>
        <main className={"mx-auto max-w-screen-xl px-4 md:px-8"}>
          {children}
        </main>
      </div>
    </div>
  );
}
