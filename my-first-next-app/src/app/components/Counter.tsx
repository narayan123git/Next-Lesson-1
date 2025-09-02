// app/components/Counter.tsx
"use client";
import { useState } from "react";
export default function Counter() {
const [count, setCount] = useState(0);
return (
<div className="inline-flex items-center gap-3 rounded-2xl border px-4
py-2">
<button className="rounded-xl border px-3 py-1" onClick={() =>
setCount((c) => c + 1)}>+1</button>
<span className="tabular-nums">{count}</span>
<button className="rounded-xl border px-3 py-1" onClick={() =>
setCount(0)}>reset</button>
</div>
);
}