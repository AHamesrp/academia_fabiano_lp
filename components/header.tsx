"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/5548996580677?text=Olá! Gostaria de me matricular na academia."

const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#diferencial", label: "Diferencial" },
  { href: "/#planos", label: "Planos" },
  { href: "/#contato", label: "Contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-1 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="relative z-10 flex shrink-0 items-center">
            <Image
              src="/images/logo2.jpg"
              alt="FabianoFisio Esporte e Saúde"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center">
            <nav className="pointer-events-auto flex items-center gap-15">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Matricule-se Agora
              </Link>
            </Button>
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 sm:hidden">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                Matricule-se Agora
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
