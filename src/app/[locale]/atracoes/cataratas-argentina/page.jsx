import AttractionLayout from '../components/AttractionLayout'
import AttractionCard from '../components/AttractionCard'
import iguazuArgentina from '../data/resultado_iguazu_argentina.json'

export default function CataratasArgentinaPage() {
  // Obtener la primera atracción del array
  const attraction = iguazuArgentina.atracciones[0]

  return (
    <AttractionLayout title="Parque Nacional Iguazú - Argentina">
      <div className="max-w-4xl mx-auto">
        <AttractionCard attraction={attraction} />
      </div>
    </AttractionLayout>
  )
}
