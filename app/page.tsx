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
    <div className="flex flex-col min-h-screen bg-lightblack">
      <Container>
        {loadingUser ? <h1>loading...</h1> : <h1 className="text-darkwhite">User: {user?.email}</h1>}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
          <button
            className="bg-appGreen rounded-xl py-1 px-4 text-black text-xl border-2 border-appGreen
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
      </Container>
    </div>
  );
}
