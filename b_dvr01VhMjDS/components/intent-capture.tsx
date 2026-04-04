"use client"

import { useState } from "react"

// SVG Icons - stroke only, 40x40, royal blue
const BookIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1B3A8C"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h10c2.2 0 4 1.8 4 4v22c0-1.7-1.3-3-3-3H4V6z" />
    <path d="M36 6H26c-2.2 0-4 1.8-4 4v22c0-1.7 1.3-3 3-3h11V6z" />
    <path d="M12 12h-4" />
    <path d="M12 17h-4" />
    <path d="M28 12h4" />
    <path d="M28 17h4" />
  </svg>
)

const DiamondChatIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1B3A8C"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8h28v20c0 1.1-.9 2-2 2H14l-6 6v-6H8c-1.1 0-2-.9-2-2V8z" />
    <path d="M20 14l3 4-3 4-3-4 3-4z" />
  </svg>
)

const CalendarIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1B3A8C"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="8" width="28" height="26" rx="0" />
    <path d="M6 16h28" />
    <path d="M14 4v6" />
    <path d="M26 4v6" />
    <circle cx="20" cy="24" r="2" fill="#1B3A8C" stroke="none" />
  </svg>
)

const CoBrowseIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1B3A8C"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="6" width="32" height="24" rx="0" />
    <path d="M4 30h32" />
    <path d="M16 34h8" />
    <path d="M14 16l4 5-2 1 4 4" />
    <path d="M26 14l-4 5 2 1-4 4" />
  </svg>
)

const DiamondMark = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#1B3A8C"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 2l6 6-6 10-6-10 6-6z" />
  </svg>
)

const intentCards = [
  {
    icon: BookIcon,
    heading: "Request the Lookbook",
    description:
      "Receive our full collection catalogue — every piece, every detail, every story — delivered digitally within 4 hours.",
    cta: "Request Lookbook",
  },
  {
    icon: DiamondChatIcon,
    heading: "Talk to a Diamond Expert",
    description:
      "Speak directly with one of our GIA-trained advisors. Video or voice — at a time that suits you.",
    cta: "Speak to an Expert",
  },
  {
    icon: CalendarIcon,
    heading: "Book a Private Appointment",
    description:
      "Schedule a one-hour private consultation — in-person at our atelier or via a personal video call.",
    cta: "Book Appointment",
  },
  {
    icon: CoBrowseIcon,
    heading: "Browse Together, Live",
    description:
      "Let our advisor guide you through the collection in real time — on your screen, at your pace, with no obligation.",
    cta: "Start Co-Browsing",
  },
]

const benefits = [
  {
    title: "First Access",
    detail:
      "New collections presented to Inner Circle members 72 hours before public release",
  },
  {
    title: "Private Events",
    detail:
      "Invitations to LUMIÈRE preview evenings in Paris, Milan, and Mumbai",
  },
  {
    title: "A Dedicated Advisor",
    detail:
      "One named advisor. Always available. Knows your collection and your story.",
  },
]

export function IntentCapture() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      className="relative w-full"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A1628",
      }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/intent-consultation.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "saturate(0.85)",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(10,22,40,0.86)",
        }}
      />

      {/* Content Layer */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1080px",
          padding: "96px 24px",
        }}
      >
        {/* Section Header */}
        <div className="text-center">
          {/* Eyebrow */}
          <p
            className="font-sans uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.26em",
              color: "#1B3A8C",
              marginBottom: "16px",
            }}
          >
            The Next Step
          </p>

          {/* Ornamental Line */}
          <div
            className="mx-auto"
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.2)",
              marginBottom: "16px",
            }}
          />

          {/* Heading */}
          <h2
            className="font-serif"
            style={{
              fontSize: "56px",
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              marginBottom: "16px",
            }}
          >
            How would you like to{" "}
            <span className="italic">begin?</span>
          </h2>

          {/* Subheading */}
          <p
            className="mx-auto font-sans font-light"
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.9,
              marginBottom: "72px",
            }}
          >
            Every LUMIÈRE journey starts with a conversation.
            <br />
            Choose what feels right.
          </p>
        </div>

        {/* Four Intent Cards */}
        <div
          className="grid grid-cols-4"
          style={{
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        >
          {intentCards.map((card, index) => {
            const Icon = card.icon
            const isHovered = hoveredCard === index

            return (
              <div
                key={index}
                className="flex flex-col transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isHovered
                    ? "rgba(27,58,140,0.15)"
                    : "rgba(255,255,255,0.04)",
                  border: isHovered
                    ? "1px solid rgba(27,58,140,0.4)"
                    : "1px solid rgba(255,255,255,0.1)",
                  padding: "48px 36px",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div style={{ marginBottom: "28px" }}>
                  <Icon />
                </div>

                {/* Heading */}
                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: "26px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    lineHeight: 1.15,
                    marginBottom: "16px",
                  }}
                >
                  {card.heading}
                </h3>

                {/* Description */}
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.9,
                    maxWidth: "28ch",
                  }}
                >
                  {card.description}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    marginTop: "28px",
                    marginBottom: "28px",
                  }}
                />

                {/* CTA */}
                <div
                  className="mt-auto flex items-center font-sans uppercase transition-all duration-300"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    color: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                    minHeight: "44px",
                  }}
                >
                  {card.cta}
                  <span
                    className="ml-2 transition-transform duration-300"
                    style={{
                      transform: isHovered ? "translateX(4px)" : "translateX(0)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Divider between cards and Inner Circle */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
            marginTop: "64px",
          }}
        />

        {/* Transitional Text */}
        <p
          className="text-center font-serif italic"
          style={{
            fontSize: "22px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.35)",
            marginTop: "48px",
            marginBottom: "48px",
          }}
        >
          Or, stay connected for life.
        </p>

        {/* Inner Circle Card */}
        <div
          style={{
            backgroundColor: "rgba(27,58,140,0.12)",
            border: "1px solid rgba(27,58,140,0.3)",
            padding: "48px 56px",
          }}
        >
          <div className="grid grid-cols-12 gap-16">
            {/* Left Column - 7/12 */}
            <div className="col-span-7">
              {/* Diamond Mark */}
              <div style={{ marginBottom: "20px" }}>
                <DiamondMark />
              </div>

              {/* Heading */}
              <h3
                className="font-serif italic"
                style={{
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                The Inner Circle
              </h3>

              {/* Description */}
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.9,
                  maxWidth: "52ch",
                  marginBottom: "32px",
                }}
              >
                LUMIÈRE&apos;s private membership — for those who have chosen us once
                and wish to remain close to what we make next. Early access.
                Private events. A relationship that outlasts any single piece.
              </p>

              {/* CTA Button */}
              <button
                className="font-sans uppercase transition-colors duration-300"
                style={{
                  backgroundColor: "#1B3A8C",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  height: "52px",
                  padding: "0 40px",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#142E6E"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1B3A8C"
                }}
              >
                Join the Inner Circle →
              </button>

              {/* Micro-copy */}
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.2)",
                  marginTop: "14px",
                }}
              >
                No purchase required. Invitation removable at any time.
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="col-span-5 flex flex-col justify-center">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <div style={{ paddingTop: index === 0 ? 0 : "24px" }}>
                    {/* Benefit Title */}
                    <p
                      className="font-serif"
                      style={{
                        fontSize: "17px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        marginBottom: "4px",
                      }}
                    >
                      {benefit.title}
                    </p>

                    {/* Benefit Detail */}
                    <p
                      className="font-sans font-light"
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                      }}
                    >
                      {benefit.detail}
                    </p>
                  </div>

                  {/* Divider - except last */}
                  {index < benefits.length - 1 && (
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        marginTop: "24px",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
