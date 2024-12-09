'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      className="w-full h-[60vh] bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h2 
          className="text-5xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Alcanza tu máximo potencial
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Equipamiento deportivo de alta calidad para atletas apasionados
        </motion.p>
        <motion.button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explora el catálogo
        </motion.button>
      </div>
    </motion.section>
  )
}

