"use client"

import Image from "next/image"

const events = [
  {
    city: "Paris",
    eventName: "Haute Joaillerie Paris 2024",
    dateLocation: "October 2024 · Grand Palais, Paris",
    collection: "The Luminary Collection",
    image: "/images/event-paris.jpg",
  },
  {
    city: "Milan",
    eventName: "Milano Gioiello 2024",
    dateLocation: "September 2024 · Palazzo Reale, Milan",
    collection: "Eternelle Bridal",
    image: "/images/event-milan.jpg",
  },
  {
    city: "Los Angeles",
    eventName: "The Luxury Collection Show LA 2024",
    dateLocation: "November 2024 · Hauser & Wirth, LA",
    collection: "Eclipse",
    image: "/images/event-la.jpg",
  },
]

export function EventsSection() {
  return (
    <section className="bg-white py-24 px-20">
      {/* Section Header - Left Aligned */}
      <div className="mb-16">
        <p
          className="font-sans uppercase text-[10px] tracking-[0.22em] mb-3"
          style={{ color: "#1B3A8C" }}
        >
          As Seen At
        </p>
        <h2
          className="font-serif font-light italic text-5xl tracking-[0.02em] mb-3"
          style={{ color: "#0A1628" }}
        >
          On the World Stage.
        </h2>
        <p
          className="font-sans font-light text-[15px] leading-[1.9] max-w-[52ch]"
          style={{ color: "#5A6478" }}
        >
          LUMIÈRE has been presented at three of the world&apos;s most celebrated 
          jewellery and fashion events — each a stage for the rarest pieces 
          in our collection.
        </p>
      </div>

      {/* Three Event Banners */}
      <div className="flex gap-4">
        {events.map((event) => (
          <div key={event.city} className="flex-1 flex flex-col">
            {/* Banner Card */}
            <div 
              className="relative overflow-hidden group"
              style={{ aspectRatio: "2/5" }}
            >
              {/* Image */}
              <Image
                src={event.image}
                alt={`LUMIÈRE at ${event.city}`}
                fill
                className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(10,22,40,0.80) 0%, transparent 45%)"
                }}
              />

              {/* Event Info Overlay */}
              <div className="absolute bottom-0 left-0 p-7">
                <h3
                  className="font-serif italic font-light text-[32px] tracking-[0.04em] text-white"
                >
                  {event.city}
                </h3>
                <p
                  className="font-sans uppercase text-[9px] tracking-[0.2em] mt-1.5"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {event.eventName}
                </p>
                <div 
                  className="w-8 h-px mt-3"
                  style={{ backgroundColor: "#1B3A8C" }}
                />
              </div>
            </div>

            {/* Caption Below Banner */}
            <div className="mt-5">
              <p
                className="font-sans uppercase text-[10px] tracking-[0.16em]"
                style={{ color: "#A8B2C0" }}
              >
                {event.dateLocation}
              </p>
              <p
                className="font-serif font-normal text-lg mt-1.5"
                style={{ color: "#0A1628" }}
              >
                {event.collection}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 font-sans uppercase text-[11px] tracking-[0.14em] mt-2.5 min-h-[44px] group/link transition-colors duration-200 hover:text-[#1B3A8C] hover:underline underline-offset-4"
                style={{ color: "#0A1628" }}
              >
                View the Collection
                <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Section Footer Row */}
      <div className="flex items-center mt-16">
        {/* Left Half - Quote */}
        <div className="flex-1 pr-8">
          <p
            className="font-serif italic font-light text-[22px]"
            style={{ color: "#0A1628" }}
          >
            &ldquo;The jewellery stopped the room.&rdquo;
          </p>
          <p
            className="font-sans uppercase text-[10px] tracking-[0.14em] mt-2"
            style={{ color: "#A8B2C0" }}
          >
            — Vogue India, October 2024
          </p>
        </div>

        {/* Vertical Divider */}
        <div 
          className="w-px h-12 mx-8"
          style={{ backgroundColor: "#C8D0DC" }}
        />

        {/* Right Half - CTA */}
        <div className="flex-1 flex justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans uppercase text-[11px] tracking-[0.16em] h-[52px] px-10 border transition-all duration-200 group/cta"
            style={{ 
              borderColor: "#C8D0DC",
              color: "#0A1628"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#1B3A8C"
              e.currentTarget.style.color = "#1B3A8C"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#C8D0DC"
              e.currentTarget.style.color = "#0A1628"
            }}
          >
            View All Events
            <span className="inline-block transition-transform duration-200 group-hover/cta:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
