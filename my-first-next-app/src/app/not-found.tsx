// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold">404 — Page Not Found</h1>
      <p className="mt-2 opacity-80">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 underline">
        Go back home
      </Link>
    </main>
  );
}
