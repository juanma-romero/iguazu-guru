import AttractionLayout from '../components/AttractionLayout'
import AttractionCard from '../components/AttractionCard'
import marcoTresFronteiras from '../data/resultado_marco_tres_fronteiras.json'

export default function MarcoTresFronteirasPage() {
  // Obtener la primera atracción del array
  const attraction = marcoTresFronteiras.atracciones[0]

  return (
    <AttractionLayout title="Marco das Três Fronteiras">
      <div className="max-w-4xl mx-auto">
        <AttractionCard attraction={attraction} />
      </div>
    </AttractionLayout>
  )
}
