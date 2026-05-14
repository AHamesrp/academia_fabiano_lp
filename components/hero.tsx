import Image from "next/image"

/** Painel único (logo + texto) — bem transparente */
const heroUnifiedPanel =
  "rounded-2xl border border-white/10 bg-black/18 backdrop-blur-md shadow-sm"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-start justify-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 min-h-[min(58vh,600px)]"
    >

      {/* Véu global um pouco mais leve para combinar com o painel mais transparente */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-background/35 via-background/12 to-background/38" />
      <div className="absolute inset-0 z-1 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`mx-auto w-full max-w-[min(100%,min(1440px,96vw))] p-5 sm:p-6 lg:p-8 ${heroUnifiedPanel}`}
        >
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,560px)_minmax(0,640px)] lg:justify-center lg:gap-8">
            <div className="mx-auto w-full max-w-[560px]">
              <Image
                src="/images/logo.jpg"
                alt="Logo Fabiano Fisio"
                width={720}
                height={720}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="mx-auto w-full max-w-xl text-center lg:max-w-none">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-balance text-white">
                Saúde e Esporte em um só lugar
              </h1>

              <p className="text-base sm:text-lg text-white max-w-xl mx-auto mb-8 text-pretty lg:max-w-2xl">
                Estrutura completa com
                hidroginástica,
                natação,
                pilates,
                fisioterapia,
                musculação,
                muaythai,

                odontologia,
                nutricionista,
                acumputura,
                fonoaudiologia,
                psicologia e terapias alternativas.
                <br />
                <br />Tudo em um único espaço projetado para sua saúde.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-6 sm:gap-x-20">
                {[
                  { number: "500+", label: "Alunos" },
                  { number: "5★", label: "Avaliação" },
                ].map((stat) => (
                  <div key={stat.label} className="w-36 text-center sm:w-40">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
