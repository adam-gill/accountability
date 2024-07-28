"use client"

import { createClient } from "@/lib/supabase/browser";
import { error } from "console";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [isGoogle, setIsGoogle] = useState<boolean>(true)

  const handleSignInWithOAuth = (provider: "google" | "github") => {
    const supabase = createClient();
    supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo: location.origin + "/auth/callback"
        }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightblack">
      {/* <h1 className="flex flex-col justify-center items-center py-4 text-darkwhite">Sign in</h1> */}
      <button className="bg-appGreen py-4 px-8 text-black text-xl rounded-xl
          transition-all duration-300 ease-in-out
          hover:brightness-90
          active:scale-95
          mb-4
          mx-auto
          max-w-xs
          w-full
        "
      onClick={() => {
        if (isGoogle) {
            handleSignInWithOAuth("google")
        } else {
            handleSignInWithOAuth("github")
        }
      }}>
        {isGoogle ? "Sign in with Google" : "Sign in with GitHub"}
      </button>
      <button className="bg-darkwhite p-3 rounded-full text-black text-3xl
          transition-all duration-300 ease-in-out
          hover:brightness-90
          active:scale-95
        " onClick={() => setIsGoogle(!isGoogle)}>
        {isGoogle ? <FaGoogle /> : <FaGithub />}
      </button>
    </div>
  );
};

export default SignIn;
