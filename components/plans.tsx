"use client"

const WHATSAPP_NUMBER = "5548996580677"

type PlanCategory = "hidroginastica" | "natacao" | "pilates" | "fisioterapia" | "musculacao"

interface PlanOption {
  frequency: string
  price: string
  note?: string
}

interface PlanData {
  id: PlanCategory
  name: string
  description: string
  options: PlanOption[]
  extra?: string
}

const plans: PlanData[] = [
  {
    id: "hidroginastica",
    name: "Hidroginástica",
    description: "Exercícios aquáticos de baixo impacto, ideais para todas as idades e condicionamentos físicos.",
    options: [
      { frequency: "2x", price: "240" },
      { frequency: "3x", price: "300" },
    ],
  },
  {
    id: "natacao",
    name: "Natação Infantil",
    description: "Aulas especializadas para crianças, desenvolvendo habilidades aquáticas de forma segura e divertida.",
    options: [
      { frequency: "2x", price: "220" },
      { frequency: "3x", price: "280" },
    ],
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Fortalecimento do core, flexibilidade e postura com acompanhamento profissional especializado.",
    options: [
      { frequency: "2x", price: "220" },
      { frequency: "3x", price: "280" },
    ],
    extra: "Atendimento domiciliar a combinar.",
  },
  {
    id: "fisioterapia",
    name: "Fisioterapia",
    description: "Tratamentos personalizados para reabilitação, prevenção e melhora da qualidade de vida.",
    options: [
      { frequency: "Pacote 10", price: "550", note: "Sessões" },
      { frequency: "Sessão", price: "80", note: "Única" },
    ],
  },
  {
    id: "musculacao",
    name: "Musculação",
    description: "Treinos orientados para ganho de força, condicionamento físico e melhoria da saúde com acompanhamento profissional.",
    options: [
      { frequency: "Individual", price: "150", note: "Mensal" },
      { frequency: "Casal Família", price: "130", note: "Mensal" },
    ],
  },
]

function PlanCard({ plan }: { plan: PlanData }) {
  const isMusculacao = plan.id === "musculacao"
  const whatsappMessage = `Olá, escolhi o ${plan.name} pelo site, quando posso começar?`
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="mx-auto flex h-auto w-full max-w-sm flex-col rounded-2xl border border-border bg-card p-4 text-center sm:mx-0 sm:h-full sm:max-w-none sm:p-6 xl:p-5">
      <h3 className="mb-2 text-xl font-bold text-foreground sm:mb-3 sm:text-2xl">
        {plan.name}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground sm:mb-6 sm:min-h-[84px]">{plan.description}</p>

      <div className="space-y-4 sm:space-y-6">
        {plan.options.map((option, index) => (
          <div key={index} className="flex items-stretch justify-center gap-4 sm:min-h-[92px]">
            <div className="flex flex-col justify-center text-right">
              <span
                className={`text-primary font-bold italic leading-tight ${
                  isMusculacao ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                }`}
              >
                {option.frequency}
              </span>
              {option.note ? (
                <span className="block text-foreground text-base">{option.note}</span>
              ) : (
                <span className="block text-foreground text-base">na<br />semana</span>
              )}
            </div>
            <div className="w-px self-stretch bg-primary" />
            <div className="flex flex-col justify-center text-left">
              <span className="text-muted-foreground text-lg align-top">R$</span>
              <span className="text-foreground text-4xl sm:text-5xl font-bold">
                {option.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {plan.extra && (
        <p className="mt-4 text-sm text-muted-foreground sm:mt-6">
          {plan.extra}
        </p>
      )}

      <div className="mt-auto flex justify-center pt-4 sm:block sm:pt-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 w-auto items-center justify-center rounded-xl bg-primary px-10 py-4 text-sm font-semibold leading-normal text-primary-foreground transition-colors hover:bg-primary/90 sm:w-full sm:min-h-10 sm:px-4 sm:py-3.5"
        >
          Escolher este
        </a>
      </div>
    </div>
  )
}

export function Plans() {
  return (
    <section id="planos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Escolha o plano ideal para você
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
