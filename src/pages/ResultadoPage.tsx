import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  DollarSign,
  Target,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Users,
  Flame,
  Brain,
  Zap,
  Calendar
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { insights, framework, cta } from '../data/content'

interface ResultData {
  email: string
  proLabore: number
  horasSemanais: number
  horasOperacionais: number
  valorHora: number
  custoAnual: number
  percentual: number
  atividades: Record<string, number>
}

// Logo SVG component
const LogoDiamante = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
  </svg>
)

export default function ResultadoPage() {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<ResultData | null>(null)
  const [animatedCost, setAnimatedCost] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  const heroSection = useInView({ threshold: 0.1 })
  const breakdownSection = useInView({ threshold: 0.1 })
  const impactSection = useInView({ threshold: 0.1 })
  const frameworkSection = useInView({ threshold: 0.1 })
  const actionSection = useInView({ threshold: 0.1 })

  useEffect(() => {
    const dataParam = searchParams.get('data')
    if (dataParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(dataParam))
        setData(parsed)
      } catch {
        console.error('Failed to parse data')
      }
    }
  }, [searchParams])

  // Animate cost number
  useEffect(() => {
    if (data && heroSection.isInView) {
      const duration = 2000
      const steps = 60
      const increment = data.custoAnual / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= data.custoAnual) {
          setAnimatedCost(data.custoAnual)
          clearInterval(timer)
        } else {
          setAnimatedCost(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [data, heroSection.isInView])

  if (!data) {
    return (
      <div className="min-h-screen bg-white-pure text-black-soft flex items-center justify-center">
        <p className="text-gray-500">Carregando resultados...</p>
      </div>
    )
  }

  // Determine insight level
  const getInsightLevel = (): 'low' | 'medium' | 'high' => {
    if (data.percentual <= 30) return 'low'
    if (data.percentual <= 50) return 'medium'
    return 'high'
  }

  const insightLevel = getInsightLevel()
  const insight = insights[insightLevel]

  // Calculate savings scenarios
  const savings50 = Math.round(data.custoAnual * 0.5)
  const horasRecuperadas = Math.round(data.horasOperacionais * 0.5 * 52)
  const diasRecuperados = Math.round(horasRecuperadas / 8)

  // Activity labels
  const activityLabels: Record<string, string> = {
    duvidas: 'Respondendo dúvidas',
    reunioes: 'Reuniões de alinhamento',
    tarefas: 'Tarefas delegáveis',
    incendios: 'Apagando incêndios',
    informacao: 'Buscando informações'
  }

  // Framework icons mapping
  const frameworkIcons = [HelpCircle, Users, Brain, Flame]

  return (
    <div className="min-h-screen bg-white-pure text-black-soft">
      {/* Hero - The Big Number */}
      <section
        ref={heroSection.ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
      >
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Alert badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white-soft mb-8 transition-all duration-700 ${
              heroSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${
              insightLevel === 'high' ? 'border-status-danger text-status-danger' :
              insightLevel === 'medium' ? 'border-status-warning text-status-warning' :
              'border-gray-300 text-gray-600'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Nível de Desperdício: {insight.level}</span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-3xl md:text-4xl font-bold mb-8 text-black-pure transition-all duration-700 delay-100 ${
              heroSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Seu tempo operacional custa
          </h1>

          {/* The big animated number */}
          <div
            className={`mb-8 transition-all duration-1000 delay-300 ${
              heroSection.isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <span className="text-6xl md:text-8xl font-bold font-mono text-black-pure">
              R$ {animatedCost.toLocaleString('pt-BR')}
            </span>
            <span className="block text-xl text-gray-500 mt-2">por ano</span>
          </div>

          {/* Summary stats */}
          <div
            className={`grid grid-cols-3 gap-6 max-w-xl mx-auto transition-all duration-700 delay-500 ${
              heroSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black-deep">{data.horasOperacionais}h</div>
              <div className="text-sm text-gray-500">por semana</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${
                insightLevel === 'high' ? 'text-status-danger' :
                insightLevel === 'medium' ? 'text-status-warning' :
                'text-black-deep'
              }`}>
                {data.percentual}%
              </div>
              <div className="text-sm text-gray-500">do seu tempo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black-deep">
                R$ {data.valorHora}
              </div>
              <div className="text-sm text-gray-500">sua hora vale</div>
            </div>
          </div>

          {/* Insight message */}
          <div
            className={`mt-12 p-6 rounded-lg border-l-4 bg-white-soft text-left transition-all duration-700 delay-700 ${
              heroSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${
              insightLevel === 'high' ? 'border-l-status-danger' :
              insightLevel === 'medium' ? 'border-l-status-warning' :
              'border-l-black-pure'
            }`}
          >
            <h2 className="text-xl font-bold mb-2 text-black-pure">
              {insight.title}
            </h2>
            <p className="text-gray-600">{insight.description}</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Breakdown Section */}
      <section
        ref={breakdownSection.ref}
        className="py-24 px-6 border-t border-gray-100 bg-white-soft"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-4 text-black-pure transition-all duration-700 ${
              breakdownSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Onde está vazando seu tempo
          </h2>
          <p
            className={`text-gray-500 text-center mb-12 transition-all duration-700 delay-100 ${
              breakdownSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Detalhamento por tipo de atividade operacional
          </p>

          <div className="space-y-4">
            {Object.entries(data.atividades)
              .sort(([, a], [, b]) => b - a)
              .map(([key, hours], index) => {
                const pct = Math.round((hours / data.horasOperacionais) * 100) || 0
                const cost = Math.round(hours * data.valorHora * 4 * 12)

                return (
                  <div
                    key={key}
                    className={`p-5 rounded-lg border border-gray-200 bg-white-pure transition-all duration-500 ${
                      breakdownSection.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <TrendingDown className="w-5 h-5 text-gray-500" />
                        <span className="font-medium text-black-deep">{activityLabels[key]}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold font-mono text-black-pure">{hours}h</span>
                        <span className="text-gray-500 text-sm">/semana</span>
                      </div>
                    </div>

                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-black-pure transition-all duration-1000"
                        style={{ width: breakdownSection.isInView ? `${pct}%` : '0%' }}
                      />
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{pct}% do tempo operacional</span>
                      <span className="text-black-soft font-mono">
                        R$ {cost.toLocaleString('pt-BR')}/ano
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      {/* Impact Section - What you could gain */}
      <section
        ref={impactSection.ref}
        className="py-24 px-6 bg-white-pure"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-4 text-black-pure transition-all duration-700 ${
              impactSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Se você recuperasse 50% desse tempo...
          </h2>
          <p
            className={`text-gray-500 text-center mb-12 transition-all duration-700 delay-100 ${
              impactSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Cenário conservador de otimização
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className={`p-6 rounded-lg border border-gray-200 bg-white-soft text-center transition-all duration-500 ${
                impactSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <DollarSign className="w-10 h-10 text-black-pure mx-auto mb-4" />
              <div className="text-3xl font-bold text-black-pure font-mono mb-2">
                R$ {savings50.toLocaleString('pt-BR')}
              </div>
              <div className="text-gray-500">Economia por ano</div>
            </div>

            <div
              className={`p-6 rounded-lg border border-gray-200 bg-white-soft text-center transition-all duration-500 ${
                impactSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Clock className="w-10 h-10 text-black-pure mx-auto mb-4" />
              <div className="text-3xl font-bold text-black-pure font-mono mb-2">
                {horasRecuperadas.toLocaleString('pt-BR')}h
              </div>
              <div className="text-gray-500">Horas recuperadas/ano</div>
            </div>

            <div
              className={`p-6 rounded-lg border border-gray-200 bg-white-soft text-center transition-all duration-500 ${
                impactSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Calendar className="w-10 h-10 text-black-pure mx-auto mb-4" />
              <div className="text-3xl font-bold text-black-pure font-mono mb-2">
                {diasRecuperados}
              </div>
              <div className="text-gray-500">Dias inteiros de volta</div>
            </div>
          </div>

          <p
            className={`text-center text-gray-600 mt-8 text-lg transition-all duration-700 delay-500 ${
              impactSection.isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Isso são <span className="text-black-pure font-bold">{diasRecuperados} dias</span> que
            você poderia investir em estratégia, família ou descanso.
          </p>
        </div>
      </section>

      {/* Framework Section */}
      <section
        ref={frameworkSection.ref}
        className="py-24 px-6 border-t border-gray-100 bg-white-soft"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-4 text-black-pure transition-all duration-700 ${
              frameworkSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {framework.title}
          </h2>
          <p
            className={`text-gray-500 text-center mb-12 transition-all duration-700 delay-100 ${
              frameworkSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {framework.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {framework.ralos.map((ralo, index) => {
              const Icon = frameworkIcons[index] || HelpCircle
              return (
                <div
                  key={ralo.number}
                  className={`p-6 rounded-lg border border-gray-200 bg-white-pure transition-all duration-500 ${
                    frameworkSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-black-pure text-white-pure flex items-center justify-center font-bold flex-shrink-0">
                      {ralo.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-gray-500" />
                        <h3 className="font-semibold text-black-deep">{ralo.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{ralo.problem}</p>
                      <p className="text-sm text-gray-400 mb-3">{ralo.cost}</p>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-white-soft border border-gray-100">
                        <Zap className="w-4 h-4 text-black-pure mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-black-soft">{ralo.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 px-6 bg-white-pure">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-black-pure">
            <Target className="w-6 h-6" />
            Recomendações para você
          </h3>

          <div className="space-y-3">
            {insight.recommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white-soft"
              >
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-black-pure" />
                <span className="text-gray-600">{rec}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-6 text-sm text-gray-400 hover:text-black-pure transition-colors"
          >
            {showDetails ? 'Ocultar detalhes técnicos' : 'Ver detalhes técnicos da análise'}
          </button>

          {showDetails && (
            <div className="mt-4 p-4 rounded-lg bg-gray-100 font-mono text-sm text-gray-600">
              <p>Pró-labore: R$ {data.proLabore.toLocaleString('pt-BR')}/mês</p>
              <p>Carga horária: {data.horasSemanais}h/semana</p>
              <p>Valor/hora: R$ {data.valorHora.toFixed(2)}</p>
              <p>Horas operacionais: {data.horasOperacionais}h/semana</p>
              <p>Fórmula: {data.horasOperacionais}h × R$ {data.valorHora} × 4 sem × 12 meses</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={actionSection.ref}
        className="py-24 px-6 bg-black-pure text-white-pure"
      >
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            actionSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <LogoDiamante className="w-16 h-16 mx-auto mb-8 text-white-pure" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="text-gray-400 mb-8 text-lg">{cta.description}</p>

          <a
            href={cta.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white-pure text-black-pure font-semibold rounded-lg hover:bg-gray-100 transition-all"
          >
            {cta.buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-sm text-gray-500 mt-6">
            Resultado salvo para: {data.email}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 text-center bg-white-pure">
        <div className="flex items-center justify-center gap-2 mb-2">
          <LogoDiamante className="w-6 h-6 text-black-pure" />
          <span className="text-sm font-medium text-black-deep">Academia Lendár[IA]</span>
        </div>
        <p className="text-sm text-gray-400">
          Transformando empresários em lendas.
        </p>
      </footer>
    </div>
  )
}
