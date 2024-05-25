/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3gWycSxjXPE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Bricolage_Grotesque } from 'next/font/google'
import { Syne } from 'next/font/google'

bricolage_grotesque({
  subsets: ['latin'],
  display: 'swap',
})

syne({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import About from "./about";
import Delivery from "./delivery";
import ProductsGrid from "./product-grid";

export function Main() {
  return (
    <main className="flex-1 py-12 px-6">
      <section className="mb-12" id="products">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <ProductsGrid />
      </section>
      <Delivery />
      <About />
    </main>
  );
}
