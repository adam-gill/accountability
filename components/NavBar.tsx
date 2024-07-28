"use client";

import Link from "next/link";
import Logo from "./svg/Logo";
import { useAuth } from "@/lib/supabase/useAuth";
import Image from "next/image";

const NavBar = () => {
  const { user, loadingUser } = useAuth();

  return (
    <>
      <nav className="px-8 py-5">
        <ul className="w-full max-w-6xl flex flex-row items-center justify-between mx-auto">
          <Link href={"/"}>
            <li className="flex flex-row gap-2 items-center justify-center">
              <Logo width="40px" height="40px" />
              <h1 className="text-3xl">Accounty</h1>
            </li>
          </Link>
          <li>
            {!!user ? (
              <>
                <Link href={"/settings"}>
                  <button
                    className="bg-appGreen rounded-full w-[40px] h-[40px] text-black text-xl border-2 border-appGreen
                          transition-all duration-300 ease-in-out
                          hover:scale-105 hover:brightness-90 hover:bg-inherit hover:text-appGreen
                          active:scale-90 active:bg-[#2bfccf20]
                          sm:text-base
            "
                  >
                    {!!user.user_metadata.avatar_url ? (
                      <Image src={user.user_metadata.avatar_url} height={40} width={40} alt="user avatar" className="rounded-full"></Image>
                    ) : (
                      <p>{user.email?.charAt(0).toUpperCase()}</p>
                    )}
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link href={"/signin"}>
                  <button
                    className="bg-appGreen rounded-xl py-1 px-4 text-black text-xl border-2 border-appGreen
                          transition-all duration-300 ease-in-out
                          hover:scale-105 hover:brightness-90 hover:bg-inherit hover:text-appGreen
                          active:scale-90 active:bg-[#2bfccf20]
                          sm:text-base
            "
                  >
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
