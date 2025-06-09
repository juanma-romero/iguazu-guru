# Versiones del Home - Iguazu.guru

## Resumen

Se han creado dos versiones del home para Iguazu.guru:

1. **Home Original** (Mobile-first) - `/es` 
2. **Home Alternativo** (Desktop-friendly) - `/es/home-alternative`

## Home Original (Actual)

**Ubicación:** `src/app/[locale]/page.tsx` → `src/app/[locale]/components/Main.tsx`

**Características:**
- Diseño mobile-first con carrusel
- Una ciudad visible a la vez
- Navegación con botones anterior/siguiente
- Categorías verticales en el lateral izquierdo
- Optimizado para dispositivos móviles

**URL de acceso:** `http://localhost:3001/es`

## Home Alternativo (Nuevo)

**Ubicación:** `src/app/[locale]/home-alternative/page.tsx` → `src/app/[locale]/components/AlternativeHome.tsx`

**Características:**
- Diseño desktop-friendly con grid de 3 columnas
- Las tres ciudades visibles simultáneamente
- Pestañas integradas en cada tarjeta de ciudad
- Mejor aprovechamiento del espacio en pantallas grandes
- Diseño más atractivo y "user-friendly"
- Responsivo (se adapta a móviles con columnas apiladas)

**URL de acceso:** `http://localhost:3001/es/home-alternative`

### Funcionalidades del Home Alternativo

#### Ciudades Incluidas:
1. **Foz do Iguaçu** (Brasil) - Tarjeta verde
2. **Puerto Iguazú** (Argentina) - Tarjeta azul  
3. **Ciudad del Este** (Paraguay) - Tarjeta roja

#### Categorías por Ciudad:
- **Adonde ir:** Atracciones turísticas
- **Hospedaje:** Opciones de alojamiento
- **Que hacer:** Gastronomía y actividades

#### Datos Actuales:

**Foz do Iguaçu:**
- Adonde ir: Cataratas do Iguaçu, Parque das Aves
- Hospedaje: Hotel Belmond Das Cataratas
- Que hacer: Restaurante Porto Canoas

**Puerto Iguazú:**
- Adonde ir: Cataratas del Iguazu, Hito Tres Fronteras
- Hospedaje: Hotel Casino Acaray
- Que hacer: Restaurant El Rodizio

**Ciudad del Este:**
- Adonde ir: Saltos del Monday, Shopping China
- Hospedaje: Gran Nobile Hotel
- Que hacer: Voraz

## Tecnologías Utilizadas

- **React** con hooks (useState)
- **Next.js 15** con App Router
- **Tailwind CSS** para estilos
- **next-intl** para internacionalización
- **TypeScript** para tipado

## Cómo Cambiar al Home Alternativo como Principal

Si decides usar el home alternativo como página principal, puedes:

### Opción 1: Reemplazar el contenido
```typescript
// En src/app/[locale]/page.tsx
import AlternativeHome from './components/AlternativeHome';
 
export default function HomePage() {
  return (        
      <AlternativeHome />     
  )
}
```

### Opción 2: Lógica condicional
```typescript
// En src/app/[locale]/page.tsx
import Main from './components/Main';
import AlternativeHome from './components/AlternativeHome';

export default function HomePage() {
  const useAlternativeHome = true; // o basado en variable de entorno
  
  return useAlternativeHome ? <AlternativeHome /> : <Main />;
}
```

## Próximos Pasos

1. **Integración con APIs:** Los datos están hardcodeados actualmente. Se pueden conectar a APIs de Booking u otras plataformas.

2. **Imágenes específicas:** Cada ciudad podría tener su propia imagen representativa.

3. **Enlaces funcionales:** Los botones "Ver más" pueden conectarse a las páginas específicas de cada ciudad (`/puerto`, `/foz`, `/cde`).

4. **Optimizaciones:** Añadir lazy loading, optimización de imágenes, etc.

## Comandos para Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Acceder al home original
http://localhost:3001/es

# Acceder al home alternativo
http://localhost:3001/es/home-alternative
