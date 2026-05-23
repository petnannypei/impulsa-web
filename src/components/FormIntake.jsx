import { useState } from 'react'

const ENDPOINT = 'https://script.google.com/macros/s/AKfycbz1yJ-NyrS1AtyBnLhtUVnd8m9B5pnXKGwpDrCjhB-7LwUFgCrhJ8iIqrL-8IGnBv8j/exec'

const initialState = {
  nombreNegocio: '',
  queVendes: '',
  servicioEstrella: '',
  clienteIdeal: '',
  queTeDiferencia: '',
  preciosTarifas: '',
  whatsapp: '',
  tieneDominio: '',
  paqueteInteres: '',
}

export default function FormIntake() {
  const [form, setForm] = useState(initialState)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(form),
      })
      setSuccess(true)
      setForm(initialState)
    } catch {
      setError('Hubo un error al enviar. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-gray-100 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-aqua-500 focus:ring-2 focus:ring-aqua-500/20'

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          ¿Listo para arrancar?
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Llena este formulario y te contactamos en menos de 24 horas.
        </p>

        {success ? (
          <div className="rounded-2xl bg-aqua-50 border border-aqua-200 px-6 py-10 text-center">
            <p className="text-aqua-700 font-semibold text-lg">
              ¡Listo! Te contactamos pronto por WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del negocio <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombreNegocio"
                value={form.nombreNegocio}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Tu negocio"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Qué vendes? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="queVendes"
                value={form.queVendes}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Productos, servicios, cursos…"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Cuál es tu servicio estrella? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="servicioEstrella"
                value={form.servicioEstrella}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Lo que más vendes o lo que más te enorgullece"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Quién es tu cliente ideal? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="clienteIdeal"
                value={form.clienteIdeal}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Describe a tu cliente ideal"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Qué te diferencia de la competencia? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="queTeDiferencia"
                value={form.queTeDiferencia}
                onChange={handleChange}
                required
                rows={3}
                className={inputClass}
                placeholder="Tu propuesta de valor única"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Precios o tarifas
              </label>
              <input
                type="text"
                name="preciosTarifas"
                value={form.preciosTarifas}
                onChange={handleChange}
                className={inputClass}
                placeholder="Si prefieres no compartirlo aún, no hay problema"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tu número de WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="+57 300 000 0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Tienes dominio propio? <span className="text-red-500">*</span>
              </label>
              <select
                name="tieneDominio"
                value={form.tieneDominio}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Selecciona una opción</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
                <option value="No sé qué es">No sé qué es</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Paquete de interés <span className="text-red-500">*</span>
              </label>
              <select
                name="paqueteInteres"
                value={form.paqueteInteres}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Selecciona una opción</option>
                <option value="Express $450.000">Express $450.000</option>
                <option value="Premium $650.000">Premium $650.000</option>
                <option value="No estoy seguro">No estoy seguro</option>
              </select>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-2 w-full rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
            >
              {sending ? 'Enviando…' : 'Enviar formulario'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
