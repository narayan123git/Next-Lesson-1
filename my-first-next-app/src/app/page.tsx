// app/page.tsx
export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-blue-600">Welcome to NextCorp 🚀</h1>
      <p className="text-lg text-gray-700">
        Building modern web apps with <span className="font-semibold">Next.js</span>.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Learn More
        </a>
        <a
          href="/shop"
          className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Visit Shop
        </a>
      </div>
    </div>
  );
}
