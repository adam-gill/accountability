"use client"

import Container from "@/components/Container";
import { useAuth } from "@/lib/supabase/useAuth";

const Settings = () => {
  const { user, loadingUser } = useAuth()

  return (
    <div className="flex flex-col min-h-screen bg-lightblack">
      <Container>
        <h1 className="text-4xl text-darkwhite">Settings</h1>
        <div className="bg-appGreen h-1 w-full rounded-full my-4"></div>
        {!!user && <p className="text-darkwhite">Email: {user.email}</p>}
        {!!user && <p className="text-darkwhite">Email: {user.email}</p>}
      </Container>
    </div>
  );
};

export default Settings;
