"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/5548996580677?text=Olá! Gostaria de obter mais informações sobre a FabianoFisio."

const navLinkClass =
  "text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  // { href: "/#diferencial", label: "Diferencial" },
  { href: "/#planos", label: "Planos" },
  { href: "/#contato", label: "Informações" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-border bg-background">
      {/* safe-area movido para cá dentro, fora do isolate */}
      <div className="relative bg-background/95 backdrop-blur-md pt-[env(safe-area-inset-top,0px)]">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <button
              type="button"
              className="relative z-350 flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-md text-foreground active:bg-muted/60 pointer-events-auto"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-nav-menu"
              aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>

            <Button asChild className="relative z-110 shrink-0 text-xs sm:text-sm max-w-[160px]">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Contate-nos
              </Link>
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="site-nav-menu"
            className="absolute inset-x-0 top-full z-200 border-t border-border bg-background shadow-lg"
            aria-label="Navegação principal"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${navLinkClass} rounded-md px-2 py-3 active:bg-muted/50`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}