import Link from "next/link";
import Image from "next/image";
import { NavigationItem, navsFooter } from "@component/sidebar/Sidebar";
import { Route } from "@component/layout/defaultLayout";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <li>
      <button
        onClick={() => signOut({ callbackUrl: Route.LOGIN })}
        className="flex items-center gap-x-2 rounded-lg p-2 text-gray-600  duration-150 hover:bg-gray-50 active:bg-gray-100"
      >
        <div className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </div>
        Logout
      </button>
    </li>
  );
}

type ExpandedSideBarProps = {
  navigation: NavigationItem[];
  profileImage: string;
  displayName: string;
};

export function ExpandedSideBar({
  navigation,
  profileImage,
  displayName,
}: ExpandedSideBarProps) {
  return (
    <>
      <nav className="fixed left-0 top-0 h-full w-full space-y-8 border-r bg-white sm:w-80">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center px-8">
            <Image
              alt={"logo"}
              src="https://floatui.com/logo.svg"
              width={140}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="flex h-full flex-1 flex-col overflow-auto">
            <ul className="flex-1 px-4 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-x-2 rounded-lg p-2 text-gray-600  duration-150 hover:bg-gray-50 active:bg-gray-100"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-x-2 rounded-lg p-2 text-gray-600  duration-150 hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </Link>
                  </li>
                ))}
                <LogoutButton />
              </ul>
              <div className="border-t px-4 py-4">
                <div className="flex items-center gap-x-4">
                  <Image
                    alt={"profile image"}
                    src={profileImage}
                    width={100}
                    priority
                    height={100}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <span className="block text-sm font-semibold text-gray-700">
                      {displayName}
                    </span>
                    <Link
                      href="#"
                      className="mt-px block text-xs text-gray-600 hover:text-indigo-600"
                    >
                      View profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
