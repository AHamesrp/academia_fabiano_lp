import { Card, CardContent } from "@/components/ui/card"

const activities = [
  {
    title: "Hidroginástica",
    description: "Exercícios aquáticos de baixo impacto, ideais para todas as idades e condicionamentos físicos.",
  },
  {
    title: "Natação Infantil",
    description: "Aulas especializadas para crianças, desenvolvendo habilidades aquáticas de forma segura e divertida.",
  },
  {
    title: "Pilates",
    description: "Fortalecimento do core, flexibilidade e postura com acompanhamento profissional especializado.",
  },
  {
    title: "Fisioterapia",
    description: "Tratamentos personalizados para reabilitação, prevenção e melhora da qualidade de vida.",
  },
  {
    title: "Atendimento Personalizado",
    description: "Pilates e fisioterapia com atendimento individual, focado nas suas necessidades específicas.",
  },
  {
    title: "Musculação",
    description: "Academia completa com equipamentos modernos e orientação profissional para seu treino.",
  },
  {
    title: "Muay Thai",
    description: "Arte marcial tailandesa com professores dedicados, para todas as idades e níveis.",
  },
  {
    title: "Odontologia",
    description: "Cuidados odontológicos integrados, completando o ciclo de saúde em um só lugar.",
  },
]

export function Activities() {
  return (
    <section id="atividades" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nossas Atividades</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Oferecemos uma variedade de atividades para atender todas as suas necessidades de saúde, 
            bem-estar e condicionamento físico.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <Card key={activity.title} className="bg-card border-border hover:border-primary/50 transition-all group">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
