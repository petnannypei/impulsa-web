const STEPS = [
  {
    num: '01',
    title: 'Nos cuentas tu negocio',
    desc: 'Llenas un formulario corto con tu servicio estrella, tus precios y lo que te diferencia.',
  },
  {
    num: '02',
    title: 'Diseñamos tu landing',
    desc: 'Estructura comercial, redacción que vende, diseño responsive y botón directo a tu WhatsApp.',
  },
  {
    num: '03',
    title: 'Revisas y apruebas',
    desc: 'Te enviamos el enlace de preview. Ajustamos lo que necesites.',
  },
  {
    num: '04',
    title: 'Publicamos y conectamos',
    desc: 'Tu landing queda en vivo con hosting incluido. Solo necesitas tu dominio.',
  },
]

export default function HowItWorks() {
  return (
    <section id="proceso" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Cómo funciona</h2>
          <p className="text-lg text-gray-500">Cuatro pasos. Cero reuniones.</p>
        </div>

        <div className="flex flex-col gap-4">
          {STEPS.map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex items-start gap-5 bg-aqua-50 rounded-2xl p-5 sm:p-6"
              style={{ border: '0.5px solid #C4E7EC' }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-aqua-500 text-white text-sm font-bold rounded-xl flex items-center justify-center">
                {num}
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-1">{title}</h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
