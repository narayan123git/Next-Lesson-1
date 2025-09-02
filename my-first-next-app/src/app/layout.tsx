// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "NextCorp",
  description: "A modern demo website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header className="bg-white shadow-md sticky top-0 z-10">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold text-blue-600">NextCorp</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/about" className="hover:text-blue-500">About</Link>
              <Link href="/shop" className="hover:text-blue-500">Shop</Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="container mx-auto p-6 min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6 mt-10 border-t">
          <p>© 2025 NextCorp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
