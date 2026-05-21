import { useRef, useEffect } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: 'petNanny',
    title: 'Pet Nanny Pereira',
    description:
      'Landing con formulario inteligente de 7 pasos, slider interactivo antes/después, simulador PetFit Check y conexión directa a WhatsApp.',
    tags: ['Mascotas', 'Formulario', 'Interactiva', 'Google Sheets'],
    url: 'https://pet-nanny-pereira.vercel.app/',
    sector: 'Cuidado de mascotas a domicilio',
    logo: '/LOGOS/pet-nanny-logo.png',
  },
  {
    id: 'qccs',
    title: 'QCCS — Quality Control Consultants',
    description:
      'Landing profesional para consultoría en control de calidad en construcción. Certificación US Army Corps of Engineers, dos divisiones de servicio y conexión a WhatsApp.',
    tags: ['Construcción', 'Consultoría', 'Profesional', 'Certificaciones'],
    url: 'https://qualitycontrolconsultants.pro/',
    sector: 'Consultoría técnica en construcción',
    logo: '/LOGOS/QCCS-logo.jpg',
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const scrollRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-card',
        { opacity: 0, x: 48 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section id="portafolio" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Portafolio</h2>
            <p className="text-gray-500 text-lg">Trabajos reales para negocios en el Eje Cafetero</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-aqua-200 hover:text-aqua-500 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-aqua-200 hover:text-aqua-500 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="portfolio-card flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl border border-gray-100 overflow-hidden snap-start"
            >
              {/* iframe preview */}
              <div
                className="relative overflow-hidden rounded-t-2xl"
                style={{ aspectRatio: '16 / 9', background: '#f1f5f9' }}
              >
                <iframe
                  src={project.url}
                  title={project.title}
                  loading="lazy"
                  style={{
                    width: '200%',
                    height: '200%',
                    transform: 'scale(0.5)',
                    transformOrigin: 'top left',
                    border: 'none',
                    pointerEvents: 'none',
                  }}
                  tabIndex="-1"
                  aria-hidden="true"
                />
              </div>
              {/* Card content */}
              <div className="p-5">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`Logo ${project.title}`}
                    className="h-8 w-auto object-contain mb-3"
                  />
                )}
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  {project.sector}
                </p>
                <h3 className="text-gray-900 font-bold text-lg leading-snug mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-aqua-100 text-aqua-700 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm hover:text-brand-dark transition-colors"
                >
                  Ver sitio
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
