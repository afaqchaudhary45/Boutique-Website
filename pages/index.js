import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-sans text-gray-900">

      {/* Hero Section */}
      <section className="bg-pink-100 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Afaq&apos;s Boutique</h1>
        <p className="text-xl mb-6">Unique fashion pieces curated just for you</p>
        <Link href="/shop" legacyBehavior>
          <a className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition">
            Shop Now
          </a>
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded shadow p-4">
              <Image 
                src={`/products/product${i}.jpg`} 
                alt={`Product ${i}`} 
                width={400} 
                height={400} 
                className="mb-4 w-full h-64 object-cover rounded"
              />
              <h3 className="font-bold text-lg mb-2">
                {i === 1 ? 'Elegant Dress' : i === 2 ? 'Chic Handbag' : 'Stylish Jacket'}
              </h3>
              <p className="text-gray-700 mb-2">{i === 1 ? '$120' : i === 2 ? '$80' : '$150'}</p>
              <Link href="/shop" legacyBehavior>
                <a className="text-pink-500 hover:underline">View Product</a>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg mb-6">
            At Afaq&apos;s Boutique, we believe fashion should be unique, elegant, and expressive. 
            Our curated collection brings you the finest in style and comfort.
          </p>
          <Link href="/about" legacyBehavior>
            <a className="text-pink-500 font-semibold hover:underline">Learn More</a>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            `"Absolutely love my new dress! Perfect fit and amazing quality." - Sarah K.`,
            `"The handbag I bought is now my daily go-to. Stylish and practical." - Mia L.`,
            `"Fantastic boutique! Every piece feels like it was made for me." - Emma R.`
          ].map((t, idx) => (
            <div key={idx} className="bg-white shadow rounded p-6 text-center">
              <p className="mb-4">{t.split(' - ')[0]}</p>
              <span className="font-bold">- {t.split(' - ')[1]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-pink-50 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6 text-gray-700">Get the latest styles and exclusive offers straight to your inbox.</p>
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input type="email" placeholder="Enter your email" className="p-3 rounded border flex-1"/>
          <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">
          <p>&copy; 2025 Afaq&apos;s Boutique. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" legacyBehavior><a className="hover:underline">Facebook</a></Link>
            <Link href="#" legacyBehavior><a className="hover:underline">Instagram</a></Link>
            <Link href="#" legacyBehavior><a className="hover:underline">Twitter</a></Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
