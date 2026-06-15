const WA_NUMBER = '573171184978'
const WA_BASE = `https://wa.me/${WA_NUMBER}`
const enc = (t) => encodeURIComponent(t)

export const WA_LINKS = {
  general: `${WA_BASE}?text=${enc('Hola, vi la página de Impulsa Web y quiero cotizar una landing para mi negocio')}`,
  express: `${WA_BASE}?text=${enc('Hola, quiero cotizar el paquete Express de Impulsa Web')}`,
  premium: `${WA_BASE}?text=${enc('Hola, quiero cotizar el paquete Premium de Impulsa Web')}`,
  final:   `${WA_BASE}?text=${enc('Hola, quiero cotizar mi landing page con Impulsa Web')}`,
  mensual: `${WA_BASE}?text=${enc('Hola, quiero contratar el plan de mantenimiento mensual de Impulsa Web')}`,
  demanda: `${WA_BASE}?text=${enc('Hola, necesito un cambio puntual en mi landing')}`,
  anual:   `${WA_BASE}?text=${enc('Hola, quiero contratar el paquete anual de Impulsa Web')}`,
}
