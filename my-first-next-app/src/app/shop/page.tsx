// app/shop/page.tsx
export const metadata = {
  title: "Shop | NextCorp",
  description: "Browse our amazing products.",
};

export default function ShopPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to the Shop</h1>
      <p>Find the best products for your needs.</p>
      <a
        href="/shop/cart"
        className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Go to Cart
      </a>
    </div>
  );
}
