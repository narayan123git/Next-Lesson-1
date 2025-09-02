import Link from "next/link";
export default function Hello({ params }: { params: { name: string } }) {
const name = decodeURIComponent(params.name);
return (
<main className="mx-auto max-w-screen-md p-6 space-y-4">
<h1 className="text-2xl font-semibold">Hello, {name} 👋</h1>
<p className="opacity-80">This page is statically generated per name (by
default) and streamed.</p>
<Link className="underline" href="/">Back home</Link>
</main>
);
}