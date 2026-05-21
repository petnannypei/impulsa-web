import { useRef, useState, useEffect, useCallback } from 'react'

function WaIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.855L.059 23.245a.75.75 0 00.696 1.03l5.526-1.447A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 01-5.063-1.374l-.363-.217-3.768.987.999-3.664-.236-.375A9.955 9.955 0 012 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z" />
    </svg>
  )
}

function PhoneFrame({ children }) {
  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ background: '#1c1c1e', padding: '6px 8px 8px' }}
    >
      {/* Dynamic island */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
        <div style={{ width: 36, height: 7, background: '#000', borderRadius: 10 }} />
      </div>
      {/* Screen */}
      <div
        className="flex-1 bg-white overflow-hidden flex flex-col"
        style={{ borderRadius: 15 }}
      >
        {children}
      </div>
      {/* Home indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        <div style={{ width: 28, height: 3, background: '#555', borderRadius: 10 }} />
      </div>
    </div>
  )
}

function InstagramMockup() {
  return (
    <PhoneFrame>
      {/* Top bar */}
      <div
        className="flex-shrink-0 flex items-center justify-between"
        style={{ padding: '8px 12px 7px', borderBottom: '1px solid #efefef' }}
      >
        <span style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, color: '#262626' }}>
          tu.negocio
        </span>
        <div style={{ display: 'flex', gap: 14 }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#262626" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#262626" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>

      {/* Profile section */}
      <div className="flex-shrink-0" style={{ padding: '10px 12px 0' }}>
        {/* Avatar + stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div
            style={{
              padding: 2,
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
              flexShrink: 0,
            }}
          >
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#d1d5db', border: '2px solid white' }} />
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
            {[['12', 'posts'], ['487', 'seguid.'], ['231', 'siguien.']].map(([n, l]) => (
              <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#262626', lineHeight: 1.3 }}>{n}</span>
                <span style={{ fontSize: 9, color: '#8e8e8e', lineHeight: 1.3 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Name + bio — sin referencias a ciudad */}
        <p style={{ fontSize: 11, fontWeight: 700, color: '#262626', marginBottom: 2 }}>
          Tu Negocio
        </p>
        <p style={{ fontSize: 10, color: '#262626', lineHeight: 1.55, marginBottom: 7 }}>
          Servicios varios | Link en bio ↓
        </p>

        {/* Editar perfil */}
        <div
          style={{
            border: '1px solid #dbdbdb',
            borderRadius: 7,
            textAlign: 'center',
            padding: '4px 0',
            fontSize: 11,
            fontWeight: 600,
            color: '#262626',
            marginBottom: 10,
          }}
        >
          Editar perfil
        </div>

        {/* Highlights */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 6 }}>
          {['Promo', 'Info', 'Nuevo'].map((label) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '1.5px solid #dbdbdb',
                  background: '#f3f4f6',
                }}
              />
              <span style={{ fontSize: 9, color: '#262626' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid tab */}
      <div
        className="flex-shrink-0"
        style={{ borderTop: '1px solid #dbdbdb', display: 'flex', justifyContent: 'center', padding: '6px 0' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#262626">
          <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
        </svg>
      </div>

      {/* Post grid — 6 cuadros con opacidad variada para look desordenado */}
      <div
        className="flex-1 grid grid-cols-3"
        style={{ gap: 2, background: '#dbdbdb', overflow: 'hidden' }}
      >
        {[0.3, 0.55, 0.22, 0.65, 0.38, 0.5].map((opacity, i) => (
          <div key={i} style={{ background: `rgba(107,114,128,${opacity})` }} />
        ))}
      </div>
    </PhoneFrame>
  )
}

const WHY_ITEMS = [
  {
    bg: '#FEF9C3',
    tc: '#92400E',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: 'Respuesta rápida',
  },
  {
    bg: '#D1FAE5',
    tc: '#065F46',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Garantía incluida',
  },
  {
    bg: '#EDE9FE',
    tc: '#5B21B6',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: 'Bien calificados',
  },
]

function LandingMockup() {
  return (
    <PhoneFrame>
      {/* Header */}
      <div
        className="flex-shrink-0 flex items-center justify-between"
        style={{ padding: '8px 14px', borderBottom: '1px solid #e5e7eb', background: 'white' }}
      >
        <span style={{ fontSize: 13, fontWeight: 800, color: '#1E4D5E', letterSpacing: '-0.3px' }}>
          TuMarca
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 16, height: 1.5, background: '#374151', borderRadius: 2 }} />
          ))}
        </div>
      </div>

      {/* Hero */}
      <div
        className="flex-shrink-0"
        style={{ background: '#E4F3F5', padding: '9px 14px', textAlign: 'center' }}
      >
        {/* Estrellas de calificación en lugar del badge de ciudad */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 6 }}>
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: '#1E4D5E', lineHeight: 1.2, marginBottom: 5 }}>
          Tu servicio estrella
        </h2>
        <p style={{ fontSize: 9.5, color: '#4B6A7A', lineHeight: 1.5, marginBottom: 10 }}>
          Calidad garantizada para tu hogar y negocio
        </p>
        <div
          style={{
            background: '#25D366',
            color: 'white',
            borderRadius: 8,
            padding: '7px 12px',
            fontSize: 10,
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <WaIcon size={11} />
          Cotizar por WhatsApp
        </div>
      </div>

      {/* Servicios */}
      <div className="flex-shrink-0" style={{ padding: '7px 14px 5px' }}>
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: '#1E4D5E',
            marginBottom: 7,
            paddingBottom: 5,
            borderBottom: '1px solid #f0f4f8',
          }}
        >
          Nuestros servicios
        </p>
        {['Servicio premium #1', 'Atención personalizada', 'Resultados garantizados'].map((s) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
            <div
              style={{
                width: 15,
                height: 15,
                borderRadius: '50%',
                background: '#C4E7EC',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#1E4D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: 9.5, color: '#374151' }}>{s}</span>
          </div>
        ))}
      </div>

      {/* ¿Por qué elegirnos? */}
      <div
        className="flex-shrink-0"
        style={{ padding: '6px 14px 7px', background: '#F8FAFC', borderTop: '1px solid #f0f4f8' }}
      >
        <p style={{ fontSize: 10, fontWeight: 700, color: '#1E4D5E', marginBottom: 8 }}>
          ¿Por qué elegirnos?
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          {WHY_ITEMS.map(({ bg, tc, icon, label }) => (
            <div
              key={label}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: bg,
                  color: tc,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </div>
              <span style={{ fontSize: 8, color: '#374151', textAlign: 'center', lineHeight: 1.3 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reseñas */}
      <div
        className="flex-shrink-0"
        style={{ padding: '6px 14px 8px', borderTop: '1px solid #f0f4f8' }}
      >
        <p style={{ fontSize: 10, fontWeight: 700, color: '#1E4D5E', marginBottom: 6 }}>
          Reseñas de clientes
        </p>
        {[
          { text: '"Excelente, muy puntual y profesional"', name: 'Ana G.' },
          { text: '"100% recomendado, resultados reales"', name: 'Carlos M.' },
        ].map(({ text, name }) => (
          <div key={name} style={{ marginBottom: 5 }}>
            <div style={{ display: 'flex', gap: 1.5, marginBottom: 2 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="7" height="7" viewBox="0 0 24 24" fill="#F59E0B">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 8.5, color: '#374151', lineHeight: 1.4, fontStyle: 'italic' }}>{text}</p>
            <p style={{ fontSize: 8, color: '#9CA3AF', marginTop: 1 }}>— {name}</p>
          </div>
        ))}
      </div>

      {/* CTA final WhatsApp */}
      <div className="flex-shrink-0" style={{ padding: '6px 14px 10px' }}>
        <div
          style={{
            background: '#25D366',
            color: 'white',
            borderRadius: 8,
            padding: '9px 0',
            fontSize: 10.5,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <WaIcon size={12} />
          Agendar por WhatsApp
        </div>
      </div>
    </PhoneFrame>
  )
}

export default function BeforeAfterSlider() {
  const containerRef    = useRef(null)
  const dragging        = useRef(false)
  const [position, setPosition]             = useState(50)
  const [containerWidth, setContainerWidth] = useState(560)

  useEffect(() => {
    const obs = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width))
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onUp = () => { dragging.current = false }
    window.addEventListener('mouseup', onUp)
    return () => window.removeEventListener('mouseup', onUp)
  }, [])

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition(Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95))
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 bg-aqua-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Tus clientes llegan con dudas
          </h2>
          <p className="text-lg text-gray-500">¿A dónde los mandas?</p>
        </div>

        {/* Slider con proporción de celular vertical — centrado */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="relative select-none"
            style={{
              width: '100%',
              maxWidth: 560,
              height: 'clamp(560px, 80vh, 640px)',
              borderRadius: 26,
              overflow: 'hidden',
              cursor: 'ew-resize',
              background: '#1c1c1e',
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4)',
            }}
            onMouseMove={(e) => { if (dragging.current) handleMove(e.clientX) }}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            {/* Panel ANTES (izquierda) — teléfono completo anclado a la izquierda */}
            <div
              className="absolute overflow-hidden"
              style={{ top: 0, left: 0, bottom: 0, width: `${position}%` }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `${containerWidth / 2}px` }}>
                <InstagramMockup />
              </div>
            </div>

            {/* Panel DESPUÉS (derecha) — teléfono completo anclado a la derecha */}
            <div
              className="absolute overflow-hidden"
              style={{ top: 0, right: 0, bottom: 0, width: `${100 - position}%` }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: `${containerWidth / 2}px` }}>
                <LandingMockup />
              </div>
            </div>

            {/* Etiquetas siempre visibles sobre ambos paneles */}
            <div
              className="absolute top-3 left-3 z-20 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
              style={{ backgroundColor: '#8494A8' }}
            >
              ANTES
            </div>
            <div
              className="absolute top-3 right-3 z-20 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
              style={{ backgroundColor: '#3A9DA6' }}
            >
              DESPUÉS
            </div>

            {/* Línea divisoria con handle */}
            <div
              className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              onMouseDown={() => { dragging.current = true }}
              onTouchStart={() => {}}
            >
              <div className="w-0.5 h-full bg-white/80 absolute" />
              <div className="relative w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 3L1 7L4 11M10 3L13 7L10 11" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-5 select-none">
          ← Arrastra para comparar →
        </p>
      </div>
    </section>
  )
}
