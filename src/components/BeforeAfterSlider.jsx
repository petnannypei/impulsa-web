import { useRef, useState, useEffect, useCallback } from 'react'

function InstagramMockup() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
        <div className="h-2.5 w-24 bg-gray-200 rounded" />
        <div className="flex gap-2">
          <div className="h-2.5 w-5 bg-gray-200 rounded" />
          <div className="h-2.5 w-5 bg-gray-200 rounded" />
        </div>
      </div>
      {/* Profile */}
      <div className="bg-white px-4 pt-4 pb-3 flex-shrink-0">
        <div className="flex items-start gap-4 mb-3">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0 border-2 border-gray-100" />
          <div className="flex-1 pt-1 flex gap-4">
            {['Pubs', 'Seguid.', 'Siguiendo'].map((l) => (
              <div key={l} className="flex flex-col items-center gap-0.5">
                <div className="h-3 w-5 bg-gray-700 rounded" />
                <div className="h-2 w-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
        {/* Bio — confusing */}
        <div className="space-y-1.5 mb-3">
          <div className="h-2.5 w-32 bg-gray-800 rounded" />
          <div className="h-2 w-full bg-gray-200 rounded" />
          <div className="h-2 w-3/4 bg-gray-200 rounded" />
          <div className="h-2 w-1/2 bg-gray-200 rounded" />
          <div className="h-2.5 w-28 bg-blue-200 rounded" />
        </div>
        <div className="h-7 border border-gray-200 rounded-lg bg-gray-50" />
      </div>
      {/* Stories */}
      <div className="bg-white px-3 py-2 flex gap-3 border-t border-gray-100 flex-shrink-0">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className={`w-11 h-11 rounded-full border-2 bg-gray-100 ${i === 1 ? 'border-gray-200' : 'border-pink-200'}`} />
            <div className="h-1.5 w-9 bg-gray-200 rounded" />
          </div>
        ))}
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
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        <div className="h-3 w-24 rounded" style={{ backgroundColor: '#2B6478' }} />
        <div className="h-6 w-20 rounded-md" style={{ backgroundColor: '#2B6478' }} />
      </div>
      {/* Hero */}
      <div className="px-4 py-5 flex flex-col items-center text-center flex-shrink-0" style={{ backgroundColor: '#E4F3F5' }}>
        <div className="h-4 w-28 rounded-full mb-2.5" style={{ backgroundColor: '#C4E7EC' }} />
        <div className="space-y-1.5 mb-3 w-full">
          <div className="h-3.5 w-3/4 mx-auto bg-gray-800 rounded" />
          <div className="h-3.5 w-2/3 mx-auto bg-gray-800 rounded" />
        </div>
        <div className="h-2 w-full bg-gray-300 rounded mb-1" />
        <div className="h-2 w-3/4 bg-gray-300 rounded mb-4" />
        <div className="h-8 w-36 rounded-lg shadow-sm" style={{ backgroundColor: '#2B6478' }} />
      </div>
      {/* Feature list */}
      <div className="px-4 py-4 flex flex-col gap-2.5 flex-shrink-0">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: '#C4E7EC' }} />
            <div className="h-2 flex-1 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="mt-auto px-4 pb-4 pt-2">
        <div className="h-9 w-full rounded-xl" style={{ backgroundColor: '#2B6478' }} />
        <div className="h-2 w-28 mx-auto bg-gray-100 rounded mt-2" />
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
