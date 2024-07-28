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
    <>
      <h1>Sign in</h1>
      <button className="bg-appGreen p-3 text-black rounded-xl
        transition-all duration-300 ease-in-out
        hover:brightness-90
        active:scale-95
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
      <button className="ml-4" onClick={() => setIsGoogle(!isGoogle)}>
        {isGoogle ? <FaGoogle /> : <FaGithub />}
      </button>
    </>
  );
};

export default SignIn;
