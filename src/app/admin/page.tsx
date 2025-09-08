export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Payload CMS Admin Panel
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            El panel de administración está configurado pero requiere configuración adicional.
          </p>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Estado Actual:</h3>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li>✅ Payload CMS instalado</li>
                <li>✅ Base de datos configurada</li>
                <li>✅ Usuario admin creado</li>
                <li>⚠️ Panel admin requiere configuración adicional</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Credenciales de Admin:</h3>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Email:</strong> admin@iguazu-guru.com<br />
                <strong>Password:</strong> admin123
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Próximos Pasos:</h3>
              <p className="mt-2 text-sm text-gray-600">
                Para acceder al panel completo, necesitamos configurar el servidor standalone de Payload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
