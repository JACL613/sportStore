export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">SportStore</h3>
          <p>Tu destino para equipamiento deportivo de alta calidad.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Enlaces rápidos</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Catálogo</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Ofertas</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-semibold mb-4">Contáctanos</h4>
          <p>Email: info@sportstore.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Deportiva 123, Ciudad Atleta</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 SportStore. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

