import { useGetProductsQuery } from "./features/product/productSlice2";
import CardProduct from "./components/card/card-product";
import SkeletonCardProduct from "./components/card/skeleton-card-product";

function App() {
  const { data, isLoading } = useGetProductsQuery();
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <main className=" mt-20 bg-zinc-50 py-8 antialiased dark:bg-zinc-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <section className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {isLoading &&
              array.map((index) => <SkeletonCardProduct key={index} />)}
            {/* product section */}
            {!isLoading &&
              data?.content.map((p, index) => (
                <CardProduct
                  key={index}
                  thumbnail={p.thumbnail}
                  title={p.name}
                  id={p.uuid}
                />
              ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
