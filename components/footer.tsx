import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/images/logo.jpg"
              alt="FabianoFisio Esporte e Saúde"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-muted-foreground text-sm max-w-lg">
            Sua academia completa em São Pedro de Alcântara/SC. Saúde, esporte e bem-estar em um só lugar.
          </p>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {new Date().getFullYear()} FabianoFisio Esporte e Saúde. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
