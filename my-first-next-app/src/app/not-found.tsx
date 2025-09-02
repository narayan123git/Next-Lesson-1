// app/not-found.tsx
export default function NotFoundPage() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-red-600">404 – Page Not Found</h1>
      <p>Sorry, the page you’re looking for does not exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
