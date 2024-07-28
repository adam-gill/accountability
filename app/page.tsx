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
  const { user, loadingUser } = useAuth();
  console.log(user);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("user signed out");
    if (error) console.log(error);
  };

  return (
    <>
      <Container>
        {loadingUser ? <h1>loading...</h1> : <h1>User: {user?.email}</h1>}
        
      </Container>
    </>
  );
}
