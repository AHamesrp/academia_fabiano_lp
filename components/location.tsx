import { MapPin, Mail, Clock, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Vidal João Vieira - Centro \nSão Pedro de Alcântara - SC, 88125-000",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fabianofisiospa",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(48) 99658-0677",
  },
  {
    icon: Clock,
    label: "Horário de Funcionamento",
    value: "Seg a Sex: 06h às 21h\nSábado: 09:30h às 11:30h",
  },
]

export function Location() {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Localização</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Venha nos visitar
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Estamos localizados no coração de São Pedro de Alcântara, com fácil acesso e estacionamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden h-96 lg:h-auto bg-secondary relative">
            <iframe
              src="https://www.google.com/maps?hl=pt-BR&q=Academia+Fabiano,+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+SC&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Academia Fabiano - São Pedro de Alcântara/SC"
              className="rounded-2xl"
            />
          </div>

          <div id="contato" className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Informações de Contato</h3>
            
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">{info.label}</h4>
                  <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
