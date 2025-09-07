import AttractionLayout from '../components/AttractionLayout'
import AttractionCard from '../components/AttractionCard'
import parqueDasAves from '../data/resultado_parque_das_aves.json'

export default function ParqueDasAvesPage() {
  // Obtener la primera atracción del array
  const attraction = parqueDasAves.atracciones[0]

  return (
    <AttractionLayout title="Parque das Aves">
      <div className="max-w-4xl mx-auto">
        <AttractionCard attraction={attraction} />
      </div>
    </AttractionLayout>
  )
}
