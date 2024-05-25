import ProductsGrid from "@/components/product-grid";

export default function ProductsPage() {
  return (
    <main className="flex-1 py-12 px-6">
      <section className="mb-12" id="products">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <ProductsGrid />
      </section>
    </main>
  );
}
