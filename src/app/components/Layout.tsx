import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-light">
      <header className="bg-green-400   p-4 shadow-lg ">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-yellow-700">MyBank</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:text-accent text-yellow-600">Home</Link>
            <Link href="/about" className="hover:text-accent  text-yellow-600">About</Link>
            <Link href="/services" className="hover:text-accent  text-yellow-600">Services</Link>
            <Link href="/contact" className="hover:text-accent  text-yellow-600">Contact</Link>
            <Link href="/login" className="hover:text-accent  text-yellow-600">Login</Link>
          </div>
        </nav>
      </header>
      { <main className="container mx-auto p-4 flex-grow">{children}</main> }
      <footer className="bg-green-400  text-yellow-700 text-center p-4 mt-4 ">
        &copy; 2024 MyBank. All rights reserved.
      </footer>
    </div>
  );
  
}


