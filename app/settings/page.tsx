"use client"

import Container from "@/components/Container";
import { useAuth } from "@/lib/supabase/useAuth";

const Settings = () => {
  const { user, loadingUser } = useAuth()

  return (
    <>
      <Container>
        <h1 className="text-4xl">Settings</h1>
        <div className="bg-appGreen h-1 w-full rounded-full my-4"></div>
        {!!user && <p>Email: {user.email}</p>}
        {!!user && <p>Email: {user.email}</p>}
      </Container>
    </>
  );
};

export default Settings;
