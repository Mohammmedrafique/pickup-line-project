"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";
import { Heart } from "lucide-react";

const LoginButton = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      // If user is logged in, redirect to Homepage
      if (user) {
        router.push("/Homepage");
      }
    };

    fetchUser();

    // Set up listener for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user);
          router.push("/Homepage");
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );

    // Cleanup function
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <Button
        onClick={async () => {
          await signout();
          setUser(null);
        }}
      >
        Log out
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
      className="bg-[#ff1257] rounded-full"
    >
      <Heart />
      Generate one for me
      <Heart />
    </Button>
  );
};

export default LoginButton;
