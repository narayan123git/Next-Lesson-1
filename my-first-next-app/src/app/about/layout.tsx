// app/about/layout.tsx
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-blue-400 rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">About Section</h2>
      {children}
    </div>
  );
}
