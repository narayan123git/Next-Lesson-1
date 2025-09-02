// app/page.tsx (Server Component)
import Link from "next/link";
import Image from "next/image";
import Counter from "../app/components/Counter";
export const metadata = {
title: "Home — Next.js Lab",
description: "Learning Next.js hands‑on",
};
export default function Page() {
return (
<main className="mx-auto max-w-screen-md p-6 space-y-6">
<header className="flex items-center gap-4">
<Image src="/avatar.png" width={80} height={80} alt="Avatar"
className="rounded-full" />
<div>
<h1 className="text-3xl font-bold">Welcome to Next.js Lab</h1>
<p className="text-sm opacity-80">Server Components by default;
client only where needed.</p>
</div>
</header>
<section className="space-y-2">
<p>
Try the dynamic route: <Link className="underline" href="/hello/
Sonai">/hello/Sonai</Link>
</p>
<Counter />
</section>
</main>
);
}