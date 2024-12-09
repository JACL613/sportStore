'use client'
import { motion } from 'framer-motion'

const products = [
  { id: 1, name: "Zapatillas Runner Pro", price: 89.99, image: "/shoe.jpg", category: "Calzado" },
  { id: 2, name: "Balón de Fútbol Official", price: 29.99, image: "/ball.jpg", category: "Fútbol" },
  { id: 3, name: "Raqueta de Tenis Elite", price: 159.99, image: "/racket.jpg", category: "Tenis" },
  { id: 4, name: "Mancuernas 5kg", price: 49.99, image: "/dumbbell.jpg", category: "Fitness" },
  { id: 5, name: "Camiseta Deportiva", price: 24.99, image: "/shirt.jpg", category: "Ropa" },
  { id: 6, name: "Bicicleta de Montaña", price: 599.99, image: "/bike.jpg", category: "Ciclismo" },
]

export default function Catalog() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro Catálogo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-blue-600 font-bold">${product.price}</p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Ver producto
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

