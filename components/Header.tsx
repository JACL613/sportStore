'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header 
      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          SportStore
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="hover:text-blue-200 transition-colors">Inicio</Link></li>
            <li><Link href="#" className="hover:text-blue-200 transition-colors">Catálogo</Link></li>
            <li><Link href="#" className="hover:text-blue-200 transition-colors">Ofertas</Link></li>
            <li><Link href="#" className="hover:text-blue-200 transition-colors">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

