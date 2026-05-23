import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: '¿Qué es una landing page y por qué la necesito?',
    a: 'Es una página web diseñada exclusivamente para que el visitante tome una acción: escribirte por WhatsApp, registrarse o cotizar. A diferencia de un sitio web tradicional, no distrae con menús ni páginas extras. Si ya pagas publicidad en Instagram o Facebook, necesitas una landing para que esos clics no se pierdan.',
  },
  {
    q: '¿Reemplaza mi página de Instagram?',
    a: 'No. Tu Instagram sigue siendo tu vitrina social. La landing es el destino al que apuntan tus anuncios. En vez de mandar la gente a un perfil desordenado, los mandas a una página que explica tu servicio en segundos y los lleva directo a tu WhatsApp.',
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'Nada. Tú solo llenas un formulario con la información de tu negocio y nosotros nos encargamos de todo: diseño, redacción, programación y publicación.',
  },
  {
    q: '¿Qué es un dominio?',
    a: 'Un dominio es el nombre de tu página en internet, tipo www.tunegocio.com. Es como la dirección de tu local pero en internet. Sin dominio tu landing funciona igual de bien, pero la dirección se ve más larga y técnica. Con dominio se ve profesional, tus clientes la recuerdan fácil y genera más confianza. Cuesta unos $100.000 promedio en cualquier proveedor de hosting al año y tú eres el dueño.',
  },
  {
    q: '¿Puedo tener mi propio dominio (.com)?',
    a: 'Sí. Tú compras tu dominio en proveedores como GoDaddy o Namecheap y nosotros te lo conectamos sin costo adicional. Si ya tienes uno, simplemente lo vinculamos a tu landing.',
  },
  {
    q: '¿Qué es un hosting?',
    a: 'El hosting es el espacio donde vive tu página en internet — es lo que hace que esté disponible 24/7 para cualquier persona que entre. Nosotros usamos servidores de última generación que utilizan empresas como Uber y Netflix. Tu landing al ser liviana y optimizada consume muy pocos recursos, por eso el hosting está incluido sin costo mensual.',
  },
  {
    q: '¿Qué incluye el hosting gratis?',
    a: 'Certificado de seguridad SSL, velocidad ultra rápida, disponibilidad global y $0 COP mensuales. Si ya tienes un hosting propio, podemos trabajar con él; si no tienes, nosotros nos encargamos de todo.',
  },
  {
    q: '¿En cuánto tiempo queda lista?',
    a: '5 días hábiles desde que recibimos toda tu información. Proyectos Premium con componentes interactivos pueden tomar hasta 7 días.',
  },
  {
    q: '¿Cómo es el proceso de pago?',
    a: '50% de anticipo para iniciar y 50% contra entrega. Aceptamos Nequi, Daviplata o transferencia Bancolombia.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Preguntas frecuentes</h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-gray-900 font-medium text-sm sm:text-base">{faq.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-aqua-50 flex items-center justify-center">
                    <ChevronDown
                      size={15}
                      className={`text-aqua-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-500 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
