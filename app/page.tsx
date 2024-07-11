import LoginButton from "@/components/LoginLogoutButton";
import { CardTitle } from "@/components/ui/card";

import "./globals.css";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-cover bg-no-repeat bg-[url('https://i.postimg.cc/9Mj7j0bG/image-1.jpg')]">
      <div className="font-mono text-sm lg:flex">
        <CardTitle className="text-center text-3xl">
          Pickup line <br /> Generator
        </CardTitle>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:bg-none">
        <LoginButton />
      </div>
    </main>
  );
}
