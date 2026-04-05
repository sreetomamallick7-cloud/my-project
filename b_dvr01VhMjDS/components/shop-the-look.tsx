"use client"

import Image from "next/image"
import Link from "next/link"

const looks = [
  {
    id: "look-01",
    number: "Look 01",
    collection: "The Luminary Collection",
    name: "Le Soleil Diamond Necklace",
    details: "2.4ct · 18k White Gold · GIA Certified",
    image: "/images/shop-look-model-1.jpg",
    href: "/pieces/le-soleil-necklace",
  },
  {
    id: "look-02",
    number: "Look 02",
    collection: "Eternelle Bridal",
    name: "Eternelle Pavé Ring",
    details: "1.8ct · Platinum · GIA Certified",
    image: "/images/shop-look-model-2.jpg",
    href: "/pieces/eternelle-ring",
  },
]

function LookCard({ look }: { look: (typeof looks)[0] }) {
  return (
    <div className="w-1/2 flex-shrink-0">
      {/* Image Container with overflow hidden for hover effect */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={look.image}
          alt={look.name}
          fill
          className="object-cover object-top transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
          sizes="50vw"
        />
      </div>

      {/* Look Information */}
      <div className="mt-6">
        {/* Line 1: Look label + Collection */}
        <div className="flex items-center gap-4">
          <span
            className="font-sans text-[9px] uppercase tracking-[0.18em]"
            style={{ color: "#A8B2C0" }}
          >
            {look.number}
          </span>
          <span
            className="font-sans text-[9px] uppercase tracking-[0.18em]"
            style={{ color: "#1B3A8C" }}
          >
            {look.collection}
          </span>
        </div>

        {/* Line 2: Piece name */}
        <h3
          className="font-serif text-[24px] font-normal tracking-[0.02em] mt-2"
          style={{ color: "#0A1628" }}
        >
          {look.name}
        </h3>

        {/* Line 3: Material details */}
        <p
          className="font-sans text-[12px] font-light tracking-[0.06em] mt-1.5"
          style={{ color: "#5A6478" }}
        >
          {look.details}
        </p>

        {/* Line 4: CTA Link */}
        <Link
          href={look.href}
          className="group inline-flex items-center gap-1 mt-3.5 min-h-[44px] font-sans text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 hover:underline hover:decoration-lumiere-royal"
          style={{ color: "#0A1628" }}
        >
          <span>View Piece</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  )
}

export function ShopTheLook() {
  return (
    <section className="bg-white py-24 px-20 max-lg:px-8">
      {/* Section Header - Left Aligned */}
      <div className="mb-14">
        <span
          className="block font-sans text-[10px] uppercase tracking-[0.22em] mb-3"
          style={{ color: "#1B3A8C" }}
        >
          Editorial
        </span>
        <h2
          className="font-serif text-[48px] font-light tracking-[0.02em]"
          style={{ color: "#0A1628" }}
        >
          Shop the Look
        </h2>
      </div>

      {/* Two Model Image Layout - 2px gap */}
      <div className="flex gap-[2px]">
        {looks.map((look) => (
          <LookCard key={look.id} look={look} />
        ))}
      </div>
    </section>
  )
}
