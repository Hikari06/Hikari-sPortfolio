import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center py-8">
      <div className="bg-white rounded-3xl shadow-xl max-w-2xl w-full p-8">
        {/* Menu Superior */}
        <nav className="flex justify-between items-center mb-8">
          <div className="font-serif text-2xl">Sakura</div>
          <ul className="flex gap-12 font-light text-lg list-none">
            <li>
              <a href="#home" className="hover:underline text-black px-2 py-1 rounded transition hover:bg-pink-100">
                Menu
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline text-black px-2 py-1 rounded transition hover:bg-pink-100">
                Gallery
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-black px-2 py-1 rounded transition hover:bg-pink-100">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-black px-2 py-1 rounded transition hover:bg-pink-100">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Sakura */}
        <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Sakura" className="rounded-xl w-full object-cover h-48" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="relative mb-4">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-32 bg-pink-200 rounded-full opacity-60"></div>
              <span className="relative font-serif text-5xl tracking-wide">Sakura</span>
            </div>
            <p className="text-gray-600 mt-8">Veja nossa seleção de pratos, drinks e experiências inspiradas na beleza das flores de cerejeira.</p>
          </div>
        </section>

        {/* Menu */}
        <section id="home" className="mb-12">
          <h2 className="font-serif text-3xl mb-4">Menu</h2>
          <div className="grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c" alt="Prato" className="rounded-lg object-cover h-32 w-full" />
            <img src="https://images.unsplash.com/photo-1464306076886-debede6b2b24" alt="Drink" className="rounded-lg object-cover h-32 w-full" />
          </div>
          <p className="mt-4 text-gray-600">Pratos e drinks exclusivos para você experimentar.</p>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mb-12">
          <h2 className="font-serif text-3xl mb-4">Gallery</h2>
          <div className="grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Gallery 1" className="rounded-lg object-cover h-32 w-full" />
            <img src="https://images.unsplash.com/photo-1464306076886-debede6b2b24" alt="Gallery 2" className="rounded-lg object-cover h-32 w-full" />
          </div>
        </section>

        {/* Sobre */}
        <section id="about" className="mb-12">
          <h2 className="font-serif text-3xl mb-4">Sobre</h2>
          <p className="text-gray-600">Inspirado na cultura japonesa, nosso espaço celebra a delicadeza e beleza do Sakura.</p>
        </section>

        {/* Contato */}
        <section id="contact">
          <h2 className="font-serif text-3xl mb-4">Contato</h2>
          <p className="text-gray-600">Entre em contato para reservas ou dúvidas.</p>
        </section>
      </div>
    </div>
  )
}

export default App