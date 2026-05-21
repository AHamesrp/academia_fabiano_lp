import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

import sobreBg from "@/image_dentro/sobre.png"

const aboutBgImageClass = "object-cover object-center scale-[1.03]"

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
    <section id="sobre" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950" aria-hidden>
        <Image
          src={sobreBg}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className={aboutBgImageClass}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-card/78 backdrop-blur-[0px] supports-backdrop-filter:bg-card/75"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4">
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
            <div className="aspect-4/3 rounded-2xl overflow-hidden relative lg:aspect-5/4">
              <Image
                src="/images/about-fachada.png"
                alt="Fachada da FabianoFisio Esporte e Saude"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-background/72 via-background/24 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background/80 via-background/30 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background/60 via-background/20 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background/60 via-background/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-background/14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
