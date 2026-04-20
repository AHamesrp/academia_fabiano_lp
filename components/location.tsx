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
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(48) 99999-0000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@fabianofisio.com.br",
  },
  {
    icon: Clock,
    label: "Horário de Funcionamento",
    value: "Seg a Sex: 06h às 22h\nSábado: 08h às 14h",
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
            Estamos localizados no coração de Antônio Carlos, com fácil acesso e estacionamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden h-96 lg:h-auto bg-secondary relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14190.516951645845!2d-48.77532455!3d-27.517861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273f90c3e4e3c3%3A0x7b02e68f27cb5a23!2sAnt%C3%B4nio%20Carlos%2C%20SC%2C%2088180-000!5e0!3m2!1spt-BR!2sbr!4v1713544800000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização FabianoFisio - Antônio Carlos/SC"
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

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Link>
              </Button>
              <Button asChild size="lg" className="flex-1">
                <Link 
                  href="https://wa.me/5548999990000?text=Olá! Gostaria de saber mais sobre a academia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
