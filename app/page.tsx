"use client";

import NavBar from "@/components/NavBar";
import { supabase } from "@/lib/supabase";
import { createClient } from "@/lib/supabase/server";
import { useAuth } from "@/lib/supabase/useAuth";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  // const [user, setUser] = useState<User | null>(null)
  const { user, loadingUser } = useAuth();
  console.log(user);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("user signed out");
    if (error) console.log(error);
  };

  // useEffect(() => {
  //   const getUser = async () => {
  //     setLoading(true)
  //     const { data: { user } } = await supabase.auth.getUser()
  //     setUser(user)
  //     setLoading(false)
  //   }

  //   getUser()
  // }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightblack">
      {loadingUser ? (
        <h1 className="text-darkwhite">Loading...</h1>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-darkwhite mb-8">User: {user?.email}</h1>
          <button
            className="bg-appGreen rounded-xl py-3 px-8 text-black text-xl border-2 border-appGreen
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:brightness-90 hover:bg-inherit hover:text-appGreen
              active:scale-90 active:bg-[#2bfccf20]
              sm:text-base
            "
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
