export function Hero() {
  return (
    <section className="relative flex items-start justify-center overflow-hidden pt-26 pb-16 lg:pt-45 lg:pb-24">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-card" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> */}
            <span className="text-sm text-primary font-medium">Academia completa em São Pedro de Alcântara</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            Saúde e Esporte em um só lugar
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Estrutura completa com hidroginástica, natação, pilates, fisioterapia, musculação e 
            muaythai. Tudo em um único espaço projetado para sua saúde.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-16 gap-y-8 sm:gap-x-24">
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
    </section>
  )
}
