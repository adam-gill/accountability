"use client"

import Container from "@/components/Container";
import { useAuth } from "@/lib/supabase/useAuth";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter()
  const { user, loadingUser } = useAuth()
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("user signed out");
    if (error) console.log(error);
  };


  return (
    <>
      <Container>
        <h1 className="text-4xl">Settings</h1>
        <div className="bg-appGreen h-1 w-full rounded-full my-4"></div>
        {!!user && <p>Name: {user.user_metadata.name}</p>}
        {!!user && <p>Email: {user.email}</p>}
        {!!user && <p>User ID: {user.id}</p>}

        <button
          className="bg-appGreen rounded-xl py-1 px-4 text-black text-xl border-2 border-appGreen mt-4
                          transition-all duration-300 ease-in-out
                          hover:scale-105 hover:brightness-90 hover:bg-inherit hover:text-appGreen
                          active:scale-90 active:bg-[#2bfccf20]
                          sm:text-base
            "
          onClick={() => {
            !!user ? signOut() : router.push("/signin")
          }}
        >
          {!!user ? "Sign Out" : "Sign In"}
        </button>

      </Container>
    </>
  );
};

export default Settings;
