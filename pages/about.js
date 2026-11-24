import Link from 'next/link'

export default function About() {
  return (
    <div className="font-sans text-gray-900">
      <section className="bg-pink-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
      </section>

      <section className="py-16 px-8 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6">
          At Afaq&apos;s Boutique, we believe fashion should be unique, elegant, and
          expressive. Our curated collection brings you the finest in style and comfort.
        </p>
        <Link href="/shop" legacyBehavior>
          <a className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition">
            Browse the Shop
          </a>
        </Link>
        <div className="mt-10">
          <Link href="/" legacyBehavior>
            <a className="text-pink-500 hover:underline">&larr; Back to home</a>
          </Link>
        </div>
      </section>
    </div>
  )
}
