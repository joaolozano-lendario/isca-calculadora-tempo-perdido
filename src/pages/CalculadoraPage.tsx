import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  HelpCircle,
  Users,
  ClipboardList,
  Flame,
  Search,
  ArrowRight,
  ArrowLeft,
  Calculator,
  DollarSign,
  Clock
} from 'lucide-react'
import { activityCategories } from '../data/content'

// Logo SVG component
const LogoDiamante = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
  </svg>
)

const iconMap = {
  helpCircle: HelpCircle,
  users: Users,
  clipboard: ClipboardList,
  flame: Flame,
  search: Search
}

interface CalculatorData {
  proLabore: number
  horasSemanais: number
  atividades: Record<string, number>
}

export default function CalculadoraPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const email = searchParams.get('email') || ''

  const [step, setStep] = useState(1)
  const [data, setData] = useState<CalculatorData>({
    proLabore: 20000,
    horasSemanais: 50,
    atividades: {
      duvidas: 5,
      reunioes: 8,
      tarefas: 6,
      incendios: 4,
      informacao: 3
    }
  })

  const totalHorasOperacionais = Object.values(data.atividades).reduce((a, b) => a + b, 0)
  const valorHora = data.proLabore / (data.horasSemanais * 4)
  const custoAnual = totalHorasOperacionais * valorHora * 4 * 12
  const percentualOperacional = Math.round((totalHorasOperacionais / data.horasSemanais) * 100)

  const handleCalculate = () => {
    // Encode results in URL
    const results = {
      email,
      proLabore: data.proLabore,
      horasSemanais: data.horasSemanais,
      horasOperacionais: totalHorasOperacionais,
      valorHora: Math.round(valorHora),
      custoAnual: Math.round(custoAnual),
      percentual: percentualOperacional,
      atividades: data.atividades
    }
    const encoded = encodeURIComponent(JSON.stringify(results))
    navigate(`/resultado?data=${encoded}`)
  }

  return (
    <div className="min-h-screen bg-white-pure text-black-soft py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <LogoDiamante className="w-12 h-12 mx-auto mb-6 text-black-pure" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white-soft mb-6">
            <Calculator className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              Etapa {step} de 3
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-black-pure">
            {step === 1 && 'Primeiro, o básico'}
            {step === 2 && 'Sua rotina operacional'}
            {step === 3 && 'Confirme os dados'}
          </h1>
          <p className="text-gray-500">
            {step === 1 && 'Informe seus dados financeiros e carga horária'}
            {step === 2 && 'Quanto tempo você gasta em cada tipo de atividade?'}
            {step === 3 && 'Revise antes de calcular'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-100 rounded-full mb-12 overflow-hidden">
          <div
            className="h-full bg-black-pure transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-8 animate-fade-in">
            {/* Pró-labore */}
            <div className="p-6 rounded-lg border border-gray-200 bg-white-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black-deep">Seu pró-labore mensal</h3>
                  <p className="text-sm text-gray-500">Quanto você retira da empresa</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500">Valor</span>
                  <span className="text-2xl font-bold font-mono text-black-pure">
                    R$ {data.proLabore.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={data.proLabore}
                  onChange={(e) => setData({ ...data, proLabore: Number(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>R$ 5.000</span>
                  <span>R$ 100.000</span>
                </div>
              </div>
            </div>

            {/* Horas semanais */}
            <div className="p-6 rounded-lg border border-gray-200 bg-white-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black-deep">Horas trabalhadas por semana</h3>
                  <p className="text-sm text-gray-500">Quantas horas você dedica à empresa</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500">Horas</span>
                  <span className="text-2xl font-bold font-mono text-black-pure">{data.horasSemanais}h</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={data.horasSemanais}
                  onChange={(e) => setData({ ...data, horasSemanais: Number(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>20h</span>
                  <span>80h</span>
                </div>
              </div>
            </div>

            {/* Valor da hora calculado */}
            <div className="p-4 rounded-lg bg-gray-100 border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Valor da sua hora como dono:</span>
                <span className="text-xl font-bold text-black-pure font-mono">
                  R$ {valorHora.toFixed(0)}/hora
                </span>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full group flex items-center justify-center gap-2 px-6 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-all"
            >
              Próximo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Step 2: Activities */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-center text-gray-500 mb-8">
              Arraste o slider para indicar quantas horas por semana você gasta em cada atividade:
            </p>

            {activityCategories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap]
              const hours = data.atividades[category.id]

              return (
                <div
                  key={category.id}
                  className="p-5 rounded-lg border border-gray-200 bg-white-soft"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-black-deep">{category.label}</h3>
                      <p className="text-xs text-gray-400">{category.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold font-mono text-black-pure">{hours}h</span>
                      <span className="text-gray-400 text-sm">/sem</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={hours}
                    onChange={(e) =>
                      setData({
                        ...data,
                        atividades: {
                          ...data.atividades,
                          [category.id]: Number(e.target.value)
                        }
                      })
                    }
                    className="w-full"
                  />
                </div>
              )
            })}

            {/* Running total */}
            <div className={`p-4 rounded-lg border ${
              percentualOperacional > 50
                ? 'bg-gray-100 border-gray-300'
                : 'bg-white-soft border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total em operacional:</span>
                <span className={`text-xl font-bold font-mono ${
                  percentualOperacional > 50 ? 'text-status-danger' : 'text-black-pure'
                }`}>
                  {totalHorasOperacionais}h/semana ({percentualOperacional}%)
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-gray-300 text-black-soft font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 group flex items-center justify-center gap-2 px-6 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-all"
              >
                Próximo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            {/* Summary Card */}
            <div className="p-6 rounded-lg border border-gray-200 bg-white-soft">
              <h3 className="text-lg font-semibold mb-6 text-center text-black-pure">Resumo dos dados</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Pró-labore mensal</span>
                  <span className="font-semibold font-mono text-black-pure">
                    R$ {data.proLabore.toLocaleString('pt-BR')}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Horas por semana</span>
                  <span className="font-semibold font-mono text-black-pure">{data.horasSemanais}h</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Valor da sua hora</span>
                  <span className="font-semibold font-mono text-black-pure">
                    R$ {valorHora.toFixed(0)}/hora
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Horas operacionais/semana</span>
                  <span className={`font-semibold font-mono ${
                    percentualOperacional > 50 ? 'text-status-danger' : 'text-black-pure'
                  }`}>
                    {totalHorasOperacionais}h ({percentualOperacional}%)
                  </span>
                </div>
              </div>

              {/* Activities breakdown */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm text-gray-500 mb-4">Distribuição por atividade:</h4>
                <div className="space-y-2">
                  {activityCategories.map((cat) => {
                    const hours = data.atividades[cat.id]
                    const pct = Math.round((hours / totalHorasOperacionais) * 100) || 0
                    return (
                      <div key={cat.id} className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-black-pure transition-all duration-300"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-500 w-24 truncate">{cat.label.split(' ')[0]}</span>
                        <span className="text-sm font-mono text-black-soft w-8">{hours}h</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Preview of cost */}
            <div className="p-6 rounded-lg bg-black-pure text-white-pure text-center">
              <p className="text-gray-400 mb-2">Custo anual estimado do tempo operacional:</p>
              <p className="text-4xl font-bold font-mono">
                R$ {custoAnual.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Clique para ver a análise completa
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-gray-300 text-black-soft font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </button>
              <button
                onClick={handleCalculate}
                className="flex-1 group flex items-center justify-center gap-2 px-6 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-all"
              >
                <Calculator className="w-5 h-5" />
                Ver Resultado
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
