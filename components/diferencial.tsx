import { QrCode, Play, CheckCircle2, Smartphone } from "lucide-react"

const steps = [
  {
    icon: QrCode,
    title: "Escaneie o QR Code",
    description: "Encontre o QR Code no equipamento ou área de exercício.",
  },
  {
    icon: Smartphone,
    title: "Acesse o Site",
    description: "Seja direcionado automaticamente para nossa plataforma de vídeos.",
  },
  {
    icon: Play,
    title: "Escolha o Exercício",
    description: "Navegue pelas categorias e selecione o exercício desejado.",
  },
  {
    icon: CheckCircle2,
    title: "Aprenda a Executar",
    description: "Assista vídeos curtos de 10-15s com a execução correta.",
  },
]

export function Diferencial() {
  return (
    <section id="diferencial" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl bg-secondary overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-2xl bg-background border-2 border-primary/20 mx-auto mb-6 flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">Sistema de Vídeos Instrutivos</p>
                  <p className="text-muted-foreground text-sm mt-2">Escaneie e aprenda</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-secondary border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center shrink-0">
                  <div className="w-12 h-12 rounded bg-foreground/10 border border-border flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-sm" />
                  </div>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">Vídeos com Anatomia Ilustrada</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Animações com boneco branco, linhas pretas e músculos destacados em vermelho 
                    (primário) e vermelho claro (secundário).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Nosso Diferencial</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Tecnologia a favor do seu treino
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              Desenvolvemos um sistema inovador de vídeos instrutivos que garante autonomia na 
              execução correta dos exercícios. Através de QR Codes espalhados pela academia, 
              você acessa vídeos curtos e objetivos que demonstram a técnica perfeita.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative">
                    <step.icon className="w-6 h-6 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-foreground text-sm">
                <strong>Benefício:</strong> Maior autonomia para você e melhor suporte dos nossos 
                profissionais, que podem focar no acompanhamento personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
