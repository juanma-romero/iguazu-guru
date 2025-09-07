import AttractionLayout from '../components/AttractionLayout'
import AttractionCard from '../components/AttractionCard'
import cataratasBrasil from '../data/resultado_cataratas_brasil.json'

export default function CataratasBrasilPage() {
  // Obtener la primera atracción del array
  const attraction = cataratasBrasil.atracciones[0]

  return (
    <AttractionLayout title="Cataratas do Iguaçu - Brasil">
      <div className="max-w-4xl mx-auto">
        <AttractionCard attraction={attraction} />
      </div>
    </AttractionLayout>
  )
}
