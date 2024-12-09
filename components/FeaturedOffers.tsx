'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const offers = [
  { id: 1, name: "Zapatillas Runner Pro", price: 89.99, image: "/shoe.jpg" },
  { id: 2, name: "Balón de Fútbol Official", price: 29.99, image: "/ball.jpg" },
  { id: 3, name: "Raqueta de Tenis Elite", price: 159.99, image: "/racket.jpg" },
]

export default function FeaturedOffers() {
  const [currentOffer, setCurrentOffer] = useState(0)

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % offers.length)
  }

  const prevOffer = () => {
    setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length)
  }

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Ofertas Destacadas</h2>
        <div className="relative">
          <motion.div 
            key={currentOffer}
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img src={offers[currentOffer].image} alt={offers[currentOffer].name} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
            <div className="ml-8">
              <h3 className="text-2xl font-semibold">{offers[currentOffer].name}</h3>
              <p className="text-xl text-blue-600 font-bold mt-2">${offers[currentOffer].price}</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors">
                Ver detalles
              </button>
            </div>
          </motion.div>
          <button onClick={prevOffer} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            ←
          </button>
          <button onClick={nextOffer} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            →
          </button>
        </div>
      </div>
    </section>
  )
}

