import { Check, MessageCircle } from 'lucide-react'
import { WA_LINKS } from '../constants'

const EXPRESS_FEATURES = [
  'Landing 4–5 secciones',
  'Redacción comercial',
  'Optimización móvil',
  'Botón de WhatsApp',
  'Hosting incluido',
]

const PREMIUM_FEATURES = [
  'Secciones ilimitadas',
  'Componentes interactivos',
  'Formularios avanzados',
  'Píxel de Meta + Analytics',
  'Soporte 30 días',
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

export default function Packages() {
  return (
    <section id="paquetes" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Paquetes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Express */}
          <div className="rounded-2xl p-7 flex flex-col" style={{ border: '0.5px solid #EEF0F2' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Express</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold text-brand">$450.000</span>
            </div>
            <p className="text-gray-500 text-sm mb-7">COP · Pago único</p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {EXPRESS_FEATURES.map((f) => <FeatureItem key={f} text={f} />)}
            </ul>
            <a
              href={WA_LINKS.express}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-brand text-brand px-5 py-3 rounded-xl font-semibold text-sm hover:bg-brand hover:text-white transition-colors"
            >
              <MessageCircle size={16} />
              Cotizar Express
            </a>
          </div>

          {/* Premium */}
          <div className="bg-aqua-50 rounded-2xl p-7 flex flex-col relative" style={{ border: '2px solid #2B6478' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-aqua-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                ⭐ Recomendado
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 mt-3">Premium</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold text-brand">$650.000</span>
            </div>
            <p className="text-gray-500 text-sm mb-7">COP · Pago único</p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {PREMIUM_FEATURES.map((f) => <FeatureItem key={f} text={f} />)}
            </ul>
            <a
              href={WA_LINKS.premium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-brand-dark transition-colors"
            >
              <MessageCircle size={16} />
              Cotizar Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
