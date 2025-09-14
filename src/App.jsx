import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  Gift,
  Sparkles,
  Users
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState(0)

  const products = [
    {
      id: 1,
      name: "Colorful Keytags",
      price: "LKR 150",
      image: "/api/placeholder/300/300",
      description: "Handmade colorful keytags with custom designs",
      category: "Keytags"
    },
    {
      id: 2,
      name: "Hair Bows Set",
      price: "LKR 250",
      image: "/api/placeholder/300/300",
      description: "Beautiful handmade hair bows in various colors",
      category: "Hair Bows"
    },
    {
      id: 3,
      name: "Mini Craft Collection",
      price: "LKR 300",
      image: "/api/placeholder/300/300",
      description: "Assorted small crafts perfect for gifts",
      category: "Small Crafts"
    },
    {
      id: 4,
      name: "Custom Keytags",
      price: "LKR 200",
      image: "/api/placeholder/300/300",
      description: "Personalized keytags with your name or message",
      category: "Keytags"
    },
    {
      id: 5,
      name: "Elegant Hair Bows",
      price: "LKR 180",
      image: "/api/placeholder/300/300",
      description: "Premium quality hair bows for special occasions",
      category: "Hair Bows"
    },
    {
      id: 6,
      name: "Decorative Crafts",
      price: "LKR 120",
      image: "/api/placeholder/300/300",
      description: "Small decorative items for home and office",
      category: "Small Crafts"
    }
  ]

  const addToCart = () => {
    setCartItems(cartItems + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="M&S Crafts" className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold text-purple-800">M&S Crafts</h1>
                <p className="text-sm text-gray-600">Handmade with Love</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition-colors">Gallery</a>
              <a href="#store" className="text-gray-700 hover:text-purple-600 transition-colors">Store</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
                <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition-colors">Gallery</a>
                <a href="#store" className="text-gray-700 hover:text-purple-600 transition-colors">Store</a>
                <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Handmade Crafts with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Love</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover beautiful handmade keytags, hair bows, and small crafts created with passion in Sri Lanka. 
              Each piece is unique and made with the finest attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Gift className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Sparkles className="mr-2 h-5 w-5" />
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Handmade with Love</h3>
              <p className="text-gray-600">Every item is carefully crafted by hand with attention to detail and love.</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">We use only the finest materials to ensure durability and beauty.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Sri Lankan</h3>
              <p className="text-gray-600">Supporting local craftsmanship and serving customers across Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Craft Gallery</h2>
            <p className="text-xl text-gray-600">Explore our beautiful collection of handmade items</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-purple-600 opacity-50" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Store</h2>
            <p className="text-xl text-gray-600">Browse our collection of handmade crafts</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg flex items-center justify-center">
                    <Gift className="h-16 w-16 text-purple-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <CardDescription className="mb-4">{product.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    <Button onClick={addToCart} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span>info@mscrafts.lk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span>Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Facebook className="h-5 w-5 text-purple-600" />
                  <a href="#" className="text-purple-600 hover:underline">Follow us on Facebook</a>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone Number" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.svg" alt="M&S Crafts" className="h-8 w-8" />
                <h3 className="text-xl font-bold">M&S Crafts</h3>
              </div>
              <p className="text-gray-400">
                Creating beautiful handmade crafts with love and passion. 
                Serving customers across Sri Lanka with quality and care.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#store" className="hover:text-white transition-colors">Store</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-gray-400 mt-4">
                Stay updated with our latest creations and special offers!
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 M&S Crafts. All rights reserved. Made with ❤️ in Sri Lanka.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

