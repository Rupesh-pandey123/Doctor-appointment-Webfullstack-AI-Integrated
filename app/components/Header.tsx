"use client";

import Image from "next/image";
import Link from "next/link";
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";


export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Medickit Logo" width={50} height={50} />
          <span className="text-2xl font-bold">Medickit</span>
        </Link>
        <p className="text-sm">Connect with doctors anytime, anywhere</p>
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
