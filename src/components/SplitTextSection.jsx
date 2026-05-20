import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PHRASE    = 'Diseñamos páginas que venden desde el primer día.'
const HIGHLIGHT = 'venden'

export default function SplitTextSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-word]',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          {PHRASE.split(' ').map((word, i) => {
            const clean = word.replace(/[.,!?]/g, '')
            return (
              <span key={i} className="inline-block mr-[0.22em]">
                <span
                  data-word
                  className={`inline-block ${
                    clean === HIGHLIGHT ? 'text-aqua-500' : 'text-gray-900'
                  }`}
                >
                  {word}
                </span>
              </span>
            )
          })}
        </p>
      </div>
    </section>
  )
}
