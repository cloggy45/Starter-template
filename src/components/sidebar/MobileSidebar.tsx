import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import {
  NavigationItem,
  navsFooter,
  SidebarProps,
} from "@component/sidebar/Sidebar";
import { Route } from "@component/layout/defaultLayout";

type MobileSidebarProps = {
  navigation: NavigationItem[];
} & SidebarProps;

export function MobileSidebar({
  navigation,
  profileImage,
  displayName,
}: MobileSidebarProps) {
  const profileRef = useRef<HTMLButtonElement>(null);

  const [isProfileActive, setIsProfileActive] = useState(false);

  useEffect(() => {
    const handleProfile = (e: Event) => {
      // @ts-ignore
      if (profileRef.current && !profileRef.current.contains(e.target))
        setIsProfileActive(false);
    };
    document.addEventListener("click", handleProfile);
  }, []);

  return (
    <>
      <nav className="fixed left-0 top-0 h-full w-20 space-y-8 border-r bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-center px-8">
            <a href="#" className="flex-none">
              <img
                src="https://floatui.com/logo-letter.png"
                width={35}
                className="mx-auto"
              />
            </a>
          </div>
          <div className="flex h-full flex-1 flex-col">
            <ul className="flex-1 px-4 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="group relative flex items-center justify-center gap-x-2 rounded-lg p-2  text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-gray-800 p-1 px-1.5 text-xs text-white duration-150 group-hover:inline-block group-focus:hidden">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="group relative flex items-center justify-center gap-x-2 rounded-lg p-2  text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-gray-800 p-1 px-1.5 text-xs text-white duration-150 group-hover:inline-block group-focus:hidden">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="relative border-t px-4 py-4">
                <button
                  ref={profileRef}
                  className="flex h-12 w-12 cursor-pointer items-center gap-x-4 rounded-full ring-gray-800 ring-offset-2 duration-150 focus:ring-2"
                  onClick={() => setIsProfileActive(!isProfileActive)}
                >
                  <Image
                    alt={"profile image"}
                    src={profileImage}
                    width={12}
                    priority
                    height={12}
                    className="h-12 w-12 rounded-full"
                  />
                </button>
                {isProfileActive ? (
                  <div className="absolute bottom-4 left-20 w-64 rounded-lg border bg-white text-sm text-gray-600 shadow-md">
                    <div className="p-2">
                      <span className="block p-2 text-gray-500/80">
                        {displayName}
                      </span>
                      <button
                        onClick={() => signOut({ callbackUrl: Route.LOGIN })}
                        className="block w-full rounded-md p-2 text-left duration-150 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
