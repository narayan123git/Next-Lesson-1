// app/about/team/page.tsx
export default function TeamPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Our Team</h1>
      <p>
        Meet the amazing people behind <span className="text-blue-600 font-semibold">NextCorp</span>.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Jane Doe – CEO</li>
        <li>John Smith – Lead Engineer</li>
        <li>Alice Brown – Designer</li>
      </ul>
    </div>
  );
}
