import { useRef, useState, useEffect, useCallback } from 'react'

function InstagramMockup() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col overflow-hidden text-[0px]">
      {/* Status bar */}
      <div className="bg-white px-3 pt-2 pb-1 flex items-center justify-between flex-shrink-0">
        <div className="h-2 w-6 bg-gray-300 rounded" />
        <div
          className="h-3 w-20 rounded"
          style={{
            background: 'linear-gradient(90deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
          }}
        />
        <div className="flex gap-1.5">
          <div className="h-2 w-3 bg-gray-300 rounded" />
          <div className="h-2 w-3 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Top bar */}
      <div className="bg-white px-3 py-1.5 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="h-2.5 w-3 bg-gray-300 rounded" />
          <div className="h-3 w-20 bg-gray-800 rounded" />
        </div>
        <div className="flex gap-2.5">
          <div className="h-3.5 w-3.5 bg-gray-200 rounded" />
          <div className="h-3.5 w-3.5 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Profile header */}
      <div className="bg-white px-3 pt-3 pb-2 flex-shrink-0">
        <div className="flex items-start gap-3 mb-2">
          {/* Avatar with gradient ring */}
          <div
            className="flex-shrink-0 p-0.5 rounded-full"
            style={{
              background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white" />
          </div>
          {/* Stats */}
          <div className="flex-1 flex gap-2 pt-1">
            {[['47', 'Pubs.'], ['1.2k', 'Seguid.'], ['380', 'Sigue']].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center gap-0.5">
                <div className="h-2.5 w-5 bg-gray-800 rounded" title={n} />
                <div className="h-1.5 w-8 bg-gray-300 rounded" title={l} />
              </div>
            ))}
          </div>
        </div>

        {/* Name + bio */}
        <div className="space-y-1 mb-2">
          <div className="h-2.5 w-28 bg-gray-800 rounded" />
          <div className="h-1.5 w-32 bg-gray-400 rounded" />
          <div className="h-1.5 w-full bg-gray-200 rounded" />
          <div className="h-1.5 w-3/4 bg-gray-200 rounded" />
          <div className="h-1.5 w-1/2 bg-gray-200 rounded" />
          <div className="flex items-center gap-1 mt-0.5">
            <div className="h-2 w-2 bg-blue-300 rounded-full" />
            <div className="h-1.5 w-24 bg-blue-200 rounded" />
          </div>
        </div>

        {/* Editar perfil button */}
        <div className="h-6 border border-gray-200 rounded-lg bg-gray-50 w-full" />
      </div>

      {/* Highlights */}
      <div className="bg-white px-2.5 py-2 flex gap-2.5 border-t border-gray-100 flex-shrink-0 overflow-hidden">
        {['Reseñas', 'Servicios', 'Tips', 'Promo'].map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full border-2 bg-gray-100"
              style={{ borderColor: i === 0 ? '#e5e7eb' : '#fbcfe8' }}
            />
            <div className="h-1.5 w-8 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="bg-white flex border-t border-b border-gray-100 flex-shrink-0">
        <div className="flex-1 flex justify-center py-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#374151"><path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"/></svg>
        </div>
        <div className="flex-1 flex justify-center py-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2"><circle cx="10" cy="10" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-3 gap-px bg-gray-200 flex-1">
        {['#e5e7eb','#d1d5db','#e5e7eb','#d1d5db','#e5e7eb','#d1d5db','#e5e7eb','#d1d5db','#e5e7eb'].map((c, i) => (
          <div key={i} style={{ backgroundColor: c, aspectRatio: '1' }} />
        ))}
      </div>
    </div>
  )
}

function LandingMockup() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden relative">
      {/* Navbar */}
      <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between flex-shrink-0 shadow-sm">
        <div className="h-3 w-20 rounded" style={{ backgroundColor: '#2B6478' }} />
        <div className="flex gap-3">
          <div className="h-2 w-8 bg-gray-200 rounded" />
          <div className="h-2 w-8 bg-gray-200 rounded" />
          <div className="h-2 w-8 bg-gray-200 rounded" />
        </div>
        <div className="h-5 w-14 rounded-md" style={{ backgroundColor: '#2B6478' }} />
      </div>

      {/* Hero */}
      <div
        className="px-4 pt-5 pb-4 flex flex-col items-center text-center flex-shrink-0"
        style={{ backgroundColor: '#E4F3F5' }}
      >
        {/* Badge */}
        <div
          className="h-4 w-28 rounded-full mb-3 flex items-center justify-center"
          style={{ backgroundColor: '#C4E7EC' }}
        >
          <div className="h-1.5 w-20 rounded" style={{ backgroundColor: '#3A9DA6' }} />
        </div>
        {/* Title */}
        <div className="space-y-1.5 mb-2 w-full">
          <div className="h-4 w-4/5 mx-auto rounded" style={{ backgroundColor: '#1E4D5E' }} />
          <div className="h-4 w-3/4 mx-auto rounded" style={{ backgroundColor: '#1E4D5E' }} />
          <div className="h-4 w-2/3 mx-auto rounded" style={{ backgroundColor: '#1E4D5E' }} />
        </div>
        {/* Subtitle */}
        <div className="space-y-1 mb-3 w-full mt-1">
          <div className="h-2 w-full bg-gray-400 rounded" />
          <div className="h-2 w-4/5 mx-auto bg-gray-400 rounded" />
        </div>
        {/* CTA button */}
        <div
          className="h-8 w-36 rounded-lg shadow flex items-center justify-center mb-1"
          style={{ backgroundColor: '#2B6478' }}
        >
          <div className="h-2 w-24 bg-white/60 rounded" />
        </div>
        <div className="h-1.5 w-20 bg-gray-300 rounded" />
      </div>

      {/* Features / Services */}
      <div className="px-3 py-3 flex-shrink-0">
        <div className="h-2.5 w-32 bg-gray-700 rounded mb-2.5" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <div
              className="w-5 h-5 rounded flex-shrink-0"
              style={{ backgroundColor: '#C4E7EC' }}
            />
            <div className="flex-1 space-y-1">
              <div className="h-2 w-3/4 bg-gray-600 rounded" />
              <div className="h-1.5 w-full bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial strip */}
      <div
        className="mx-3 mb-2 rounded-xl px-3 py-2.5 flex-shrink-0"
        style={{ backgroundColor: '#E4F3F5' }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="space-y-0.5">
            <div className="h-2 w-16 bg-gray-600 rounded" />
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <div key={s} className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#F59E0B' }} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-1.5 w-full bg-gray-300 rounded mb-1" />
        <div className="h-1.5 w-4/5 bg-gray-300 rounded" />
      </div>

      {/* Bottom CTA */}
      <div className="px-3 pb-3 pt-1 flex-shrink-0">
        <div
          className="h-8 w-full rounded-xl flex items-center justify-center"
          style={{ backgroundColor: '#2B6478' }}
        >
          <div className="h-2 w-28 bg-white/60 rounded" />
        </div>
      </div>

      {/* WhatsApp floating button */}
      <div
        className="absolute bottom-4 right-3 w-8 h-8 rounded-full shadow-lg flex items-center justify-center"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.855L.059 23.245a.75.75 0 00.696 1.03l5.526-1.447A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 01-5.063-1.374l-.363-.217-3.768.987.999-3.664-.236-.375A9.955 9.955 0 012 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
        </svg>
      </div>
    </div>
  )
}

export default function BeforeAfterSlider() {
  const containerRef   = useRef(null)
  const dragging       = useRef(false)
  const [position, setPosition]           = useState(50)
  const [containerWidth, setContainerWidth] = useState(0)

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

        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden select-none shadow-xl border border-gray-100"
          style={{ height: 'clamp(280px, 65vw, 440px)', cursor: 'ew-resize' }}
          onMouseMove={(e) => { if (dragging.current) handleMove(e.clientX) }}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* AFTER — full width base layer */}
          <div className="absolute inset-0">
            <LandingMockup />
          </div>
          <div className="absolute top-3 right-3 z-20 text-white text-xs font-bold px-3 py-1 rounded-full shadow" style={{ backgroundColor: '#3A9DA6' }}>
            DESPUÉS
          </div>

          {/* BEFORE — clipped overlay */}
          {containerWidth > 0 && (
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <div style={{ width: `${containerWidth}px`, height: '100%' }}>
                <InstagramMockup />
              </div>
            </div>
          )}
          <div
            className="absolute top-3 left-3 z-20 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
            style={{ backgroundColor: '#8494A8' }}
          >
            ANTES
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            onMouseDown={() => { dragging.current = true }}
            onTouchStart={() => {}}
          >
            <div className="w-0.5 h-full bg-white/80 absolute" />
            <div className="relative w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 3L1 7L4 11M10 3L13 7L10 11" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-4 select-none">
          ← Arrastra para comparar →
        </p>
      </div>
    </section>
  )
}
