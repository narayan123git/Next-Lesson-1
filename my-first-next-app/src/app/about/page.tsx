// app/about/page.tsx
export const metadata = {
  title: "About Us | NextCorp",
  description: "Learn more about NextCorp and our amazing team.",
};

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>
        NextCorp is a forward-thinking company that builds web applications
        with <strong>Next.js</strong>. Our mission is to empower developers.
      </p>
    </div>
  );
}
