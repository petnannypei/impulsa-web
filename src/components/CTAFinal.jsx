import { MessageCircle } from 'lucide-react'
import { WA_LINKS } from '../constants'

export default function CTAFinal() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-brand rounded-2xl px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          ¿Listo para que tus anuncios<br className="hidden sm:block" />
          {' '}dejen de perder plata?
        </h2>
        <p className="text-steel text-lg mb-10">
          Cotiza tu landing en menos de 2 minutos.
        </p>
        <a
          href={WA_LINKS.final}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-aqua-100 text-aqua-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-aqua-200 transition-colors shadow-sm"
        >
          <MessageCircle size={20} />
          Cotizar mi landing por WhatsApp
        </a>
      </div>
    </section>
  )
}
