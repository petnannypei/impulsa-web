import { Monitor, Clock, Server, MapPin } from 'lucide-react'

const CARDS = [
  {
    Icon: Monitor,
    title: '100% digital',
    desc: 'Sin reuniones. Todo por WhatsApp y formulario.',
  },
  {
    Icon: Clock,
    title: 'Entrega en 5 días',
    desc: 'No en semanas ni meses.',
  },
  {
    Icon: Server,
    title: 'Hosting incluido',
    desc: 'Servidores de última generación. $0 mensuales.',
  },
  {
    Icon: MapPin,
    title: 'Hecho en Pereira',
    desc: 'Conocemos el mercado local.',
  },
]

export default function WhyImpulsa() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-aqua-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Por qué Impulsa Web</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CARDS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 flex items-start gap-4"
              style={{ border: '1px solid #C4E7EC' }}
            >
              <div className="w-10 h-10 rounded-xl bg-aqua-100 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-aqua-700" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-base mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
