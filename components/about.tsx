import { CheckCircle2 } from "lucide-react"

const features = [
  "Todas as atividades reunidas em um único espaço",
  "Salas e ambientes especializados para cada modalidade",
  "Atendimento personalizado com profissionais qualificados",
  "Estrutura completa e moderna",
  "Ambiente acolhedor e motivador",
  "Acompanhamento individual do seu progresso",
]

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Sobre a Academia</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Sua transformação começa aqui
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              A FabianoFisio Esporte e Saúde foi criada com a missão de oferecer um espaço completo 
              onde saúde, bem-estar e esporte se encontram. Nossa estrutura é cuidadosamente dividida 
              em salas e ambientes especializados, garantindo a melhor experiência em cada modalidade.
            </p>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              Contamos com uma equipe de profissionais dedicados que acompanham sua evolução, 
              oferecendo atendimento personalizado e suporte em cada etapa da sua jornada.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">FF</span>
                  </div>
                  <p className="text-muted-foreground text-lg">Estrutura Completa</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">+10</div>
                <div className="text-xs text-muted-foreground">Anos de<br/>experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
