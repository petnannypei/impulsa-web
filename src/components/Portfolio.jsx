import { useRef, useEffect } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function DeviceMockup() {
  return (
    <div className="relative flex items-end justify-start pl-3" style={{ height: '152px' }}>
      {/* Desktop frame */}
      <div
        className="rounded-t-lg overflow-hidden"
        style={{ width: '66%', height: '136px', backgroundColor: '#1E4D5E' }}
      >
        <div className="p-3 space-y-1.5">
          <div className="h-1.5 w-1/3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.35)' }} />
          <div className="h-7 w-full rounded mt-1" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          <div className="h-1.5 w-3/4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="h-1.5 w-2/3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="h-5 w-20 rounded-md mt-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.28)' }} />
        </div>
      </div>
      {/* Mobile frame */}
      <div
        className="absolute right-3 bottom-0 rounded-xl overflow-hidden"
        style={{
          width: '29%',
          height: '116px',
          backgroundColor: '#2B6478',
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: '-4px 6px 16px rgba(0,0,0,0.35)',
        }}
      >
        <div className="p-1.5 space-y-1">
          <div className="h-1.5 w-full rounded" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }} />
          <div className="h-1.5 w-3/4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }} />
          <div className="h-4 w-full rounded mt-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }} />
          <div className="h-1.5 w-full rounded" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="h-4 w-full rounded-md" style={{ backgroundColor: 'rgba(255,255,255,0.28)' }} />
        </div>
      </div>
    </div>
  )
}

const PROJECTS = [
  {
    id: 'petNanny',
    title: 'Pet Nanny Pereira',
    description:
      'Landing con formulario inteligente de 7 pasos, slider interactivo antes/después, simulador PetFit Check y conexión directa a WhatsApp.',
    tags: ['Mascotas', 'Formulario', 'Interactiva', 'Google Sheets'],
    url: 'https://pet-nanny-pereira.vercel.app/',
    sector: 'Cuidado de mascotas a domicilio',
  },
  {
    id: 'qccs',
    title: 'QCCS — Quality Control Consultants',
    description:
      'Landing profesional para consultoría en control de calidad en construcción. Certificación US Army Corps of Engineers, dos divisiones de servicio y conexión a WhatsApp.',
    tags: ['Construcción', 'Consultoría', 'Profesional', 'Certificaciones'],
    url: 'https://qualitycontrolconsultants.pro/',
    sector: 'Consultoría técnica en construcción',
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
              {/* Device mockup */}
              <div className="p-5" style={{ backgroundColor: '#1E4D5E' }}>
                <DeviceMockup />
              </div>
              {/* Card content */}
              <div className="p-5">
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
