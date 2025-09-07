import AttractionCard from './components/AttractionCard'
import iguazuArgentina from './data/resultado_iguazu_argentina.json'
import marcoTresFronteiras from './data/resultado_marco_tres_fronteiras.json'
import cataratasBrasil from './data/resultado_cataratas_brasil.json'
import parqueDasAves from './data/resultado_parque_das_aves.json'

function App() {
  // Combine all attractions from different sources
  const allAttractions = [
    ...iguazuArgentina.atracciones,
    ...marcoTresFronteiras.atracciones,
    ...cataratasBrasil.atracciones,
    ...parqueDasAves.atracciones
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">
            🌿 Atracciones Turísticas de Iguazú
          </h1>
          <p className="text-center text-blue-100">
            Descubre las maravillas naturales y culturales de la región de las Cataratas del Iguazú
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {allAttractions.map((attraction, index) => (
            <AttractionCard key={index} attraction={attraction} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Información turística de las Cataratas del Iguazú - Argentina y Brasil
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
