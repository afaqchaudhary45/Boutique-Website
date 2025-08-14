import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-sans text-gray-900">

      {/* Hero Section */}
      <section className="bg-pink-100 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Afaq's Boutique</h1>
        <p className="text-xl mb-6">Unique fashion pieces curated just for you</p>
        <Link href="/shop" className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition">
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded shadow p-4">
            <img src="/products/product1.jpg" alt="Product 1" className="mb-4 w-full h-64 object-cover rounded"/>
            <h3 className="font-bold text-lg mb-2">Elegant Dress</h3>
            <p className="text-gray-700 mb-2">$120</p>
            <Link href="/shop" className="text-pink-500 hover:underline">View Product</Link>
          </div>
          <div className="border rounded shadow p-4">
            <img src="/products/product2.jpg" alt="Product 2" className="mb-4 w-full h-64 object-cover rounded"/>
            <h3 className="font-bold text-lg mb-2">Chic Handbag</h3>
            <p className="text-gray-700 mb-2">$80</p>
            <Link href="/shop" className="text-pink-500 hover:underline">View Product</Link>
          </div>
          <div className="border rounded shadow p-4">
            <img src="/products/product3.jpg" alt="Product 3" className="mb-4 w-full h-64 object-cover rounded"/>
            <h3 className="font-bold text-lg mb-2">Stylish Jacket</h3>
            <p className="text-gray-700 mb-2">$150</p>
            <Link href="/shop" className="text-pink-500 hover:underline">View Product</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg mb-6">
            At Afaq's Boutique, we believe fashion should be unique, elegant, and expressive. 
            Our curated collection brings you the finest in style and comfort.
          </p>
          <Link href="/about" className="text-pink-500 font-semibold hover:underline">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded p-6 text-center">
            <p className="mb-4">"Absolutely love my new dress! Perfect fit and amazing quality."</p>
            <span className="font-bold">- Sarah K.</span>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <p className="mb-4">"The handbag I bought is now my daily go-to. Stylish and practical."</p>
            <span className="font-bold">- Mia L.</span>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <p className="mb-4">"Fantastic boutique! Every piece feels like it was made for me."</p>
            <span className="font-bold">- Emma R.</span>
          </div>
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
          <p>&copy; 2025 Afaq's Boutique. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">Facebook</Link>
            <Link href="#" className="hover:underline">Instagram</Link>
            <Link href="#" className="hover:underline">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
