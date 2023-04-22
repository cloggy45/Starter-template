import Sidebar from "@component/sidebar/Sidebar";
import { useSession } from "next-auth/react";

interface DashboardLayoutProps {
  children: JSX.Element;
}

// TODO add responsive navbar using https://www.floatui.com/components/sidebars
export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session } = useSession();
  const user = session?.user;
  console.log("Loading", user);
  return (
    <div className={"flex"}>
      <div>
        <Sidebar fullname={user?.name ?? ""} imageUrl={user?.image ?? ""} />
      </div>
      <div className={"ml-80 flex-1"}>
        <main>{children}</main>
      </div>
    </div>
  );
}
