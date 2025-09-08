import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl';

export default function AttractionLayout({ children, title, backUrl = '/atracoes' }) {
  const t = useTranslations();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con navegación */}
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              href={backUrl}
              className="flex items-center text-blue-100 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Atracciones
            </Link>
            <h1 className="text-2xl font-bold text-center flex-1">
              🌿 {title}
            </h1>
            <div className="w-24"></div> {/* Espaciador para centrar el título */}
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer 
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Información turística de las Cataratas del Iguazú - Argentina y Brasil
          </p>
        </div>
      </footer>
      */}
    </div>
  )
}
