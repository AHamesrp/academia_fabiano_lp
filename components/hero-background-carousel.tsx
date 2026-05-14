"use client"

import type { StaticImageData } from "next/image"
import Image from "next/image"

import adu from "@/image_dentro/adu.png"
import alta from "@/image_dentro/alta.png"
import crucifixo from "@/image_dentro/crucifixo.png"
import desen from "@/image_dentro/desen.png"
import hack from "@/image_dentro/hack.png"
import halter from "@/image_dentro/halter.png"
import leg from "@/image_dentro/leg.png"
import remada from "@/image_dentro/remada.png"
import supino from "@/image_dentro/supino.png"

const HERO_CAROUSEL_IMAGES: { src: StaticImageData; alt: string }[] = [
  { src: alta, alt: "Treino na academia" },
  { src: supino, alt: "Exercício com barra" },
  { src: halter, alt: "Treino com halteres" },
  { src: remada, alt: "Remada no aparelho" },
  { src: crucifixo, alt: "Crucifixo" },
  { src: hack, alt: "Leg press" },
  { src: leg, alt: "Treino de pernas" },
  { src: adu, alt: "Exercício guiado" },
  { src: desen, alt: "Alongamento e mobilidade" },
]

type HeroBackgroundCarouselProps = {
  className?: string
  /** Altura mínima do trilho (ex.: hero compacto vs. viewport cheia) */
  minTrackHeightClass?: string
}

export function HeroBackgroundCarousel({
  className = "",
  minTrackHeightClass = "min-h-[min(58vh,600px)]",
}: HeroBackgroundCarouselProps) {
  const loop = [...HERO_CAROUSEL_IMAGES, ...HERO_CAROUSEL_IMAGES]

  return (
    <div
      className={`relative h-full w-full overflow-hidden pointer-events-none select-none bg-zinc-950 ${className}`}
      aria-hidden
    >
      {/* Fundo contínuo: se algum pixel falhar no canto, não vira “buraco” no body */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-zinc-950 to-black" />
      <div className="absolute inset-0 flex items-stretch justify-center">
        <div
          className={`hero-bg-carousel__track relative z-1 flex h-full ${minTrackHeightClass} w-max items-stretch shrink-0`}
        >
          {loop.map((item, index) => (
            <div
              key={`${item.alt}-${index}`}
              className={`relative h-full ${minTrackHeightClass} w-[clamp(210px,20vw,520px)] shrink-0 overflow-hidden`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 520px"
                className="object-cover object-center scale-[1.12] min-h-full min-w-full"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
