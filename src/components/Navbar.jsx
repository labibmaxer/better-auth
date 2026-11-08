'use client';
import { Link, Button } from "@heroui/react";
import { useSession } from "@/lib/auth-client";
const Navbar = () => {
    const {data, isPending} = useSession();
    if(isPending) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
    console.log('login session', data);
    const user = data?.user;
    return (
        <div>
<nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      {/* <Logo /> */}
      <p className="font-bold">ACME</p>
    </div>
    <ul className="flex items-center gap-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/about">About</Link></li>

    </ul>
  </header>
</nav>
<div>
   {user ? <><p>Welcome, {user.name}!</p> 
   <button onClick={() => signOut()}>Sign Out</button> </> : <> <Link href="/auth/sign-in">Sign In</Link> </>}
</div>
        </div>
    );
};

export default Navbar;