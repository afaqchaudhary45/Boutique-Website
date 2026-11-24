import Link from 'next/link'
import Image from 'next/image'

const products = [
  { id: 1, name: 'Elegant Dress', price: 120, image: '/products/product1.jpg' },
  { id: 2, name: 'Chic Handbag', price: 80, image: '/products/product2.jpg' },
  { id: 3, name: 'Stylish Jacket', price: 150, image: '/products/product3.jpg' },
]

export default function Shop() {
  return (
    <div className="font-sans text-gray-900">
      <section className="bg-pink-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Shop</h1>
        <p className="text-lg text-gray-700">Browse our latest collection</p>
      </section>

      <section className="py-16 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="border rounded shadow p-4">
              <Image
                src={p.image}
                alt={p.name}
                width={400}
                height={400}
                className="mb-4 w-full h-64 object-cover rounded"
              />
              <h2 className="font-bold text-lg mb-2">{p.name}</h2>
              <p className="text-gray-700 mb-4">${p.price}</p>
              <button
                type="button"
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" legacyBehavior>
            <a className="text-pink-500 hover:underline">&larr; Back to home</a>
          </Link>
        </div>
      </section>
    </div>
  )
}
