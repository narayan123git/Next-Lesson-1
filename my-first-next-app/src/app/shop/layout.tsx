// app/shop/layout.tsx
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-green-400 rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold text-green-600">Shop Section</h2>
      {children}
    </div>
  );
}
