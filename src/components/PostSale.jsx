import { Check } from 'lucide-react'
import { WA_LINKS } from '../constants'

const CARDS = [
  {
    id: 'mensual',
    title: 'Mantenimiento Mensual',
    badge: 'Recomendado',
    price: '$60.000',
    freq: 'COP / mes',
    features: [
      'Hasta 3 cambios menores por mes (textos, fotos, precios)',
      'Monitoreo de que tu página esté en vivo',
      'Soporte por WhatsApp en horario laboral',
      'Renovación de certificado SSL',
    ],
    cta: 'Contratar plan mensual',
    href: WA_LINKS.mensual,
    highlighted: true,
  },
  {
    id: 'demanda',
    title: 'Cambios por Demanda',
    badge: null,
    price: '$80.000',
    freq: 'COP / por cambio · Después de aprobada y lanzada tu landing',
    features: [
      'Modificación de textos, fotos o precios',
      'Sin compromiso mensual',
      'Entrega en 24–48 horas',
      'Soporte puntual por WhatsApp',
    ],
    cta: 'Solicitar cambio',
    href: WA_LINKS.demanda,
    highlighted: false,
  },
  {
    id: 'anual',
    title: 'Paquete Anual',
    badge: null,
    price: '$400.000',
    freq: 'COP / año',
    features: [
      'Los cambios que necesites',
      'Soporte técnico prioritario',
      'Actualización de dependencias y seguridad',
      'Monitoreo permanente',
    ],
    cta: 'Contratar plan anual',
    href: WA_LINKS.anual,
    highlighted: false,
  },
]

function FeatureItem({ text }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-5 h-5 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0">
        <Check size={10} className="text-aqua-700" strokeWidth={3} />
      </span>
      <span className="text-gray-600 text-sm">{text}</span>
    </li>
  )
}

function Card({ card }) {
  const { title, badge, price, freq, features, cta, href, highlighted } = card

  return (
    <div
      className={`rounded-2xl p-7 flex flex-col relative ${
        highlighted ? 'bg-aqua-50' : 'bg-white'
      }`}
      style={{ border: highlighted ? '2px solid #2B6478' : '0.5px solid #EEF0F2' }}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-aqua-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
            {badge}
          </span>
        </div>
      )}

      <h3 className={`text-xl font-bold text-gray-900 mb-1 ${badge ? 'mt-3' : ''}`}>
        {title}
      </h3>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-4xl font-bold text-brand">{price}</span>
      </div>
      <p className="text-gray-500 text-sm mb-7">{freq}</p>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((f) => (
          <FeatureItem key={f} text={f} />
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors ${
          highlighted
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : 'border-2 border-brand text-brand hover:bg-brand hover:text-white'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}

export default function PostSale() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Servicios Posventa
          </h2>
          <p className="text-gray-500 text-lg">
            Tu landing siempre actualizada y funcionando. Elige el plan que mejor se adapte a ti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {CARDS.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
