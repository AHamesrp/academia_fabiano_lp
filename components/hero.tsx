import Image from "next/image"

import heroBg from "@/image_dentro/hero.png"

/** Mesmo enquadramento em mobile e desktop (evita letterbox e crop diferente). */
const heroBgImageClass =
  "object-cover object-[center_38%] scale-[1.03]"

/** Painel único (logo + texto) — bem transparente */
const heroUnifiedPanel =
  //"rounded-2xl border border-white/10 bg-black/18 shadow-sm backdrop-blur-sm sm:backdrop-blur-md"
  "rounded-2xl border border-white/10 bg-black/18 shadow-sm backdrop-blur-[1.5px] sm:backdrop-blur-md"


export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+4.25rem))] pb-8 sm:min-h-[min(56vh,580px)] sm:items-start sm:justify-start sm:pb-12 lg:min-h-[min(52vh,640px)] lg:pt-32 lg:pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-zinc-950"
        aria-hidden
      >
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
          className={heroBgImageClass}
        />
      </div>

      {/* Véu global um pouco mais leve para combinar com o painel mais transparente */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-background/35 via-background/12 to-background/38" />
      <div className="pointer-events-none absolute inset-0 z-1 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`mx-auto w-full max-w-[min(100%,28rem)] p-8 sm:max-w-[min(100%,min(1440px,96vw))] sm:p-6 lg:p-8 ${heroUnifiedPanel}`}
        >
          <div className="grid items-center gap-2 sm:gap-6 lg:grid-cols-[minmax(0,560px)_minmax(0,640px)] lg:justify-center lg:gap-8">
            <div className="mx-auto w-full max-w-[330px] sm:max-w-[560px]">
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
              <h1 className="mb-3 text-[clamp(1.5rem,4.8vw,2.25rem)] font-bold leading-snug text-balance text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
                Saúde e Esporte em um só lugar
              </h1>

              <p className="mx-auto mb-5 max-w-xl text-pretty text-sm text-white sm:mb-8 sm:text-lg lg:max-w-2xl">
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

              <div className="mx-auto mt-6 grid max-w-[16rem] grid-cols-2 gap-x-1 sm:mt-10 sm:max-w-none sm:flex sm:justify-center sm:gap-x-12 lg:gap-x-16">
                {[
                  { number: "500+", label: "Alunos" },
                  { number: "5★", label: "Avaliação" },
                ].map((stat) => (
                  <div key={stat.label} className="px-0.5 text-center sm:w-40 sm:px-0">
                    <div className="mb-0.5 text-3xl font-bold text-primary sm:mb-1 sm:text-4xl">{stat.number}</div>
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
