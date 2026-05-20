import { Eye, MessageCircle, MapPin } from 'lucide-react'
import { WA_LINKS } from '../constants'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Location badge */}
        <div className="inline-flex items-center gap-1.5 bg-aqua-100 text-aqua-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          <MapPin size={13} />
          Pereira · Eje Cafetero
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
          Tu negocio merece más<br className="hidden sm:block" />
          {' '}que un{' '}
          <span className="text-brand">link de Instagram</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Diseñamos landing pages que convierten los clics de tus anuncios
          en clientes reales por WhatsApp.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#portafolio"
            className="inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-brand-dark transition-colors shadow-sm"
          >
            <Eye size={17} />
            Ver caso de éxito
          </a>
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-sm hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            <MessageCircle size={17} />
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
