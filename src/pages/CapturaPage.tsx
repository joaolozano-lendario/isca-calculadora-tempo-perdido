import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, MessageCircle, Flame, UserMinus, ArrowRight, Calculator, User, Mail, Phone, Briefcase, Building2, Loader2, PieChart, Zap } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useLeadCapture, useLocalLeadCapture } from '../hooks/useLeadCapture'
import { heroContent, painPoints, socialProof } from '../data/content'
import { Footer } from '../components/Footer'

const iconMap = {
  clock: Clock,
  messageCircle: MessageCircle,
  flame: Flame,
  userMinus: UserMinus
}

const proofIconMap = {
  pieChart: PieChart,
  clock: Clock,
  zap: Zap
}
// Logo SVG component
const LogoDiamante = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
  </svg>
)

export default function CapturaPage() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [cargo, setCargo] = useState('')
  const [empresa, setEmpresa] = useState('')
  const heroSection = useInView({ threshold: 0.1 })
  const painSection = useInView({ threshold: 0.1 })
  const questionSection = useInView({ threshold: 0.1 })
  const proofSection = useInView({ threshold: 0.1 })
  const ctaSection = useInView({ threshold: 0.1 })

  // Use local capture in dev, real API in production
  const isDev = import.meta.env.DEV
  const { submitLead, loading, error } = isDev
    ? useLocalLeadCapture({
        isca: 'calculadora-tempo',
        onSuccess: () => navigate(`/calculadora?email=${encodeURIComponent(email)}`),
      })
    : useLeadCapture({
        isca: 'calculadora-tempo',
        onSuccess: () => navigate(`/calculadora?email=${encodeURIComponent(email)}`),
      })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && nome) {
      await submitLead({ nome, email, whatsapp, cargo, empresa })
    }
  }

  return (
    <div className="min-h-screen bg-white-pure text-black-soft">
      {/* Hero Section */}
      <section
        ref={heroSection.ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
      >
        <div
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            heroSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo */}
          <LogoDiamante className="w-16 h-16 mx-auto mb-8 text-black-pure" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white-soft mb-8">
            <Calculator className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{heroContent.preHeadline}</span>
          </div>

          {/* Headline with Narrative Arc */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black-pure">
            {heroContent.headline.split('. ')[0]}.
            <br />
            <span className="text-gray-400">{heroContent.headline.split('. ')[1]}</span>
          </h1>

          {/* Tension Line */}
          <p className="text-xl md:text-2xl text-gray-500 mb-4 font-medium">
            {heroContent.tensionLine}
          </p>

          {/* The Big Question */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black-pure mb-8">
            {heroContent.headlineQuestion}
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('captura')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-black-pure text-white-pure text-lg font-semibold rounded-lg hover:bg-black-deep transition-all shadow-lg"
          >
            {heroContent.cta}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section
        ref={painSection.ref}
        className="py-24 px-6 border-t border-gray-100 bg-white-soft"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-4 text-black-pure transition-all duration-700 ${
              painSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Você se reconhece?
          </h2>
          <p
            className={`text-gray-500 text-center mb-16 text-lg transition-all duration-700 delay-100 ${
              painSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Os sintomas de quem virou funcionário da própria empresa
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => {
              const Icon = iconMap[point.icon as keyof typeof iconMap]
              return (
                <div
                  key={point.title}
                  className={`p-6 rounded-lg border border-gray-200 bg-white-pure hover:border-gray-300 transition-all duration-500 ${
                    painSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gray-100 text-gray-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black-deep">{point.title}</h3>
                      <p className="text-gray-500">{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Question Section */}
      <section
        ref={questionSection.ref}
        className="py-24 px-6 bg-white-pure"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-8 text-black-pure transition-all duration-700 ${
              questionSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A pergunta que você nunca fez:
          </h2>

          <blockquote
            className={`text-2xl md:text-3xl font-serif text-gray-600 italic mb-12 quote-text p-6 border-l-4 border-black-pure bg-white-soft text-left transition-all duration-700 delay-200 ${
              questionSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            "Quanto vale a minha hora como dono? E quanto estou gastando dessa hora fazendo trabalho de R$ 20/hora?"
          </blockquote>

          <div
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
              questionSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center p-6 rounded-lg border border-gray-200 bg-white-soft">
              <div className="text-5xl font-bold text-black-pure mb-2">28h</div>
              <div className="text-gray-500">Média semanal em tarefas operacionais</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 bg-white-soft">
              <div className="text-5xl font-bold text-black-pure mb-2">R$ 336k</div>
              <div className="text-gray-500">Custo médio anual do tempo mal usado</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 bg-white-soft">
              <div className="text-5xl font-bold text-black-pure mb-2">1.456h</div>
              <div className="text-gray-500">Horas/ano que poderiam ser estratégicas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Research Stats */}
      <section
        ref={proofSection.ref}
        className="py-24 px-6 border-t border-gray-100 bg-white-soft"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-4 text-black-pure transition-all duration-700 ${
              proofSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {socialProof.headline}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {socialProof.stats.map((stat, index) => {
              const Icon = proofIconMap[stat.icon as keyof typeof proofIconMap]
              return (
                <div
                  key={stat.percentage}
                  className={`p-8 rounded-lg border border-gray-200 bg-white-pure text-center transition-all duration-500 ${
                    proofSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${100 + index * 100}ms` }}
                >
                  <div className="inline-flex p-3 rounded-full bg-gray-100 text-gray-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-5xl font-bold text-black-pure mb-3">{stat.percentage}</div>
                  <p className="text-gray-500">{stat.description}</p>
                </div>
              )
            })}
          </div>

          <p
            className={`text-center text-lg text-gray-600 mt-12 font-medium transition-all duration-700 delay-500 ${
              proofSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {socialProof.conclusion}
          </p>
        </div>
      </section>

      {/* CTA / Capture Form */}
      <section
        id="captura"
        ref={ctaSection.ref}
        className="py-24 px-6 bg-black-pure text-white-pure"
      >
        <div className="max-w-xl mx-auto text-center">
          <LogoDiamante
            className={`w-16 h-16 mx-auto text-white-pure mb-8 transition-all duration-700 ${
              ctaSection.isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />

          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${
              ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Faça a conta que você evitou
          </h2>

          <p
            className={`text-gray-400 mb-8 text-lg transition-all duration-700 delay-200 ${
              ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Em 2 minutos, descubra quanto seu tempo operacional está custando — e quanto você poderia economizar.
          </p>

          <form
            onSubmit={handleSubmit}
            className={`max-w-md mx-auto space-y-3 transition-all duration-700 delay-300 ${
              ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Nome */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white-pure placeholder-gray-400 focus:outline-none focus:border-white-pure transition-colors"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white-pure placeholder-gray-400 focus:outline-none focus:border-white-pure transition-colors"
              />
            </div>

            {/* WhatsApp */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp (opcional)"
                className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white-pure placeholder-gray-400 focus:outline-none focus:border-white-pure transition-colors"
              />
            </div>

            {/* Cargo + Empresa em linha */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  placeholder="Cargo (opcional)"
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white-pure placeholder-gray-400 focus:outline-none focus:border-white-pure transition-colors"
                />
              </div>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Empresa (opcional)"
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white-pure placeholder-gray-400 focus:outline-none focus:border-white-pure transition-colors"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full group px-8 py-4 bg-white-pure text-black-pure font-semibold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  Calcular
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center">
              Seus dados estao seguros. Sem spam, promessa de empresario.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
