"use client"

import { useState } from "react"

// Lookbook Icon - Open book with fanning pages and bookmark ribbon
function LookbookIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-250"
    >
      <style>
        {`
          .book-stroke {
            stroke-dasharray: 200;
            stroke-dashoffset: ${isHovered ? 0 : 0};
            animation: ${isHovered ? 'drawBook 600ms ease-out' : 'none'};
          }
          @keyframes drawBook {
            0% { stroke-dashoffset: 200; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 0; }
          }
        `}
      </style>
      {/* Book spine */}
      <path
        d="M28 12V44"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="book-stroke transition-colors duration-250"
      />
      {/* Left page */}
      <path
        d="M28 14C28 14 22 12 14 12C12 12 10 13 10 15V40C10 42 12 43 14 43C22 43 28 44 28 44"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="book-stroke transition-colors duration-250"
        fill="none"
      />
      {/* Right page */}
      <path
        d="M28 14C28 14 34 12 42 12C44 12 46 13 46 15V40C46 42 44 43 42 43C34 43 28 44 28 44"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="book-stroke transition-colors duration-250"
        fill="none"
      />
      {/* Inner page lines left */}
      <path
        d="M14 18C20 18 25 19 28 20"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1"
        opacity="0.4"
        className="book-stroke transition-colors duration-250"
      />
      <path
        d="M14 24C20 24 25 25 28 26"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1"
        opacity="0.4"
        className="book-stroke transition-colors duration-250"
      />
      {/* Inner page lines right */}
      <path
        d="M42 18C36 18 31 19 28 20"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1"
        opacity="0.4"
        className="book-stroke transition-colors duration-250"
      />
      <path
        d="M42 24C36 24 31 25 28 26"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1"
        opacity="0.4"
        className="book-stroke transition-colors duration-250"
      />
      {/* Bookmark ribbon */}
      <path
        d="M32 12V8L34 10L36 8V14"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="book-stroke transition-colors duration-250"
        fill="none"
      />
    </svg>
  )
}

// Diamond Expert Icon - Diamond with speech arc
function DiamondExpertIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-250"
    >
      <style>
        {`
          .diamond-stroke {
            stroke-dasharray: 200;
            stroke-dashoffset: ${isHovered ? 0 : 0};
            animation: ${isHovered ? 'drawDiamond 600ms ease-out' : 'none'};
          }
          @keyframes drawDiamond {
            0% { stroke-dashoffset: 200; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 0; }
          }
        `}
      </style>
      {/* Octagon diamond shape */}
      <path
        d="M28 8L38 14L44 24L44 32L38 42L28 48L18 42L12 32L12 24L18 14Z"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="diamond-stroke transition-colors duration-250"
        fill="none"
      />
      {/* Facet lines from center */}
      <path d="M28 28L28 8" stroke={isHovered ? "#1B3A8C" : "#0A1628"} strokeWidth="1" opacity="0.3" className="diamond-stroke transition-colors duration-250" />
      <path d="M28 28L38 14" stroke={isHovered ? "#1B3A8C" : "#0A1628"} strokeWidth="1" opacity="0.3" className="diamond-stroke transition-colors duration-250" />
      <path d="M28 28L44 24" stroke={isHovered ? "#1B3A8C" : "#0A1628"} strokeWidth="1" opacity="0.3" className="diamond-stroke transition-colors duration-250" />
      <path d="M28 28L44 32" stroke={isHovered ? "#1B3A8C" : "#0A1628"} strokeWidth="1" opacity="0.3" className="diamond-stroke transition-colors duration-250" />
      <path d="M28 28L18 14" stroke={isHovered ? "#1B3A8C" : "#0A1628"} strokeWidth="1" opacity="0.3" className="diamond-stroke transition-colors duration-250" />
      <path d="M28 28L12 24" stroke={isHovered ? "#1B3A8C" : "#0A1628"} strokeWidth="1" opacity="0.3" className="diamond-stroke transition-colors duration-250" />
      <path d="M28 28L12 32" stroke={isHovered ? "#1B3A8C" : "#0A1628"} strokeWidth="1" opacity="0.3" className="diamond-stroke transition-colors duration-250" />
      {/* Speech arc */}
      <path
        d="M42 38C46 38 50 42 50 46C50 48 48 50 46 50L44 50L42 54L40 50C36 50 34 48 34 46"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="diamond-stroke transition-colors duration-250"
        fill="none"
      />
    </svg>
  )
}

// Co-Browsing Icon - Two cursors
function CoBrowsingIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-250"
    >
      <style>
        {`
          .cursor-stroke {
            stroke-dasharray: 150;
            stroke-dashoffset: ${isHovered ? 0 : 0};
            animation: ${isHovered ? 'drawCursor 600ms ease-out' : 'none'};
          }
          @keyframes drawCursor {
            0% { stroke-dashoffset: 150; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 0; }
          }
        `}
      </style>
      {/* Larger leading cursor */}
      <path
        d="M10 10L10 36L18 28L26 28L10 10Z"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="cursor-stroke transition-colors duration-250"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Smaller following cursor */}
      <path
        d="M28 24L28 44L34 38L40 38L28 24Z"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1.5"
        className="cursor-stroke transition-colors duration-250"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Connection point hint */}
      <circle
        cx="24"
        cy="30"
        r="2"
        stroke={isHovered ? "#1B3A8C" : "#0A1628"}
        strokeWidth="1"
        opacity="0.4"
        className="cursor-stroke transition-colors duration-250"
        fill="none"
      />
    </svg>
  )
}

// Diamond mark for Inner Circle
function DiamondMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2L20 11L11 20L2 11Z"
        stroke="#1B3A8C"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

interface IntentCardProps {
  iconComponent: (isHovered: boolean) => React.ReactNode
  heading: string
  description: string
  cta: string
}

function IntentCard({ iconComponent, heading, description, cta }: IntentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white border transition-colors duration-250 p-12 flex flex-col h-full"
      style={{
        borderColor: isHovered ? "#1B3A8C" : "rgba(10,22,40,0.1)",
        padding: "48px 40px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="mb-8">
        {iconComponent(isHovered)}
      </div>

      {/* Heading */}
      <h3
        className="font-serif italic font-light mb-4"
        style={{
          fontSize: "28px",
          color: "#0A1628",
          lineHeight: 1.15,
        }}
      >
        {heading}
      </h3>

      {/* Description */}
      <p
        className="font-sans font-light flex-grow"
        style={{
          fontSize: "13px",
          color: "#5A6478",
          lineHeight: 1.9,
          maxWidth: "30ch",
        }}
      >
        {description}
      </p>

      {/* Divider */}
      <div
        className="w-full my-8"
        style={{
          height: "1px",
          backgroundColor: "rgba(10,22,40,0.07)",
        }}
      />

      {/* CTA */}
      <button
        className="font-sans uppercase text-left flex items-center gap-2 min-h-[44px] transition-colors duration-200"
        style={{
          fontSize: "11px",
          letterSpacing: "0.16em",
          color: isHovered ? "#1B3A8C" : "#5A6478",
        }}
      >
        <span>{cta}</span>
        <span
          className="transition-transform duration-200"
          style={{
            transform: isHovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </button>
    </div>
  )
}

const benefits = [
  {
    title: "First Access",
    detail: "New collections presented to Inner Circle members 72 hours before public release",
  },
  {
    title: "Private Events",
    detail: "Invitations to LUMIÈRE preview evenings in Paris, Milan, and Mumbai",
  },
  {
    title: "A Dedicated Advisor",
    detail: "One named advisor. Always available. Knows your collection and your story.",
  },
]

export function IntentCapture() {
  const [ctaHovered, setCtaHovered] = useState(false)

  return (
    <section>
      {/* ZONE 1 — Three Intent Cards */}
      <div
        className="w-full"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "96px 80px",
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header - Left Aligned */}
          <div className="mb-16">
            {/* Eyebrow */}
            <p
              className="font-sans uppercase mb-4"
              style={{
                fontSize: "10px",
                letterSpacing: "0.26em",
                color: "#1B3A8C",
              }}
            >
              The Next Step
            </p>

            {/* Ornamental line */}
            <div
              className="mb-4"
              style={{
                width: "48px",
                height: "1px",
                backgroundColor: "rgba(10,22,40,0.2)",
              }}
            />

            {/* Heading */}
            <h2
              className="font-serif font-light mb-4"
              style={{
                fontSize: "56px",
                color: "#0A1628",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
              }}
            >
              How would you like<br />
              to <span className="italic">begin?</span>
            </h2>

            {/* Subheading */}
            <p
              className="font-sans font-light"
              style={{
                fontSize: "15px",
                color: "#5A6478",
                lineHeight: 1.9,
              }}
            >
              Every LUMIÈRE journey starts<br />
              with a conversation.<br />
              Choose what feels right.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IntentCard
              iconComponent={(isHovered) => <LookbookIcon isHovered={isHovered} />}
              heading="Request the Lookbook"
              description="Our full collection catalogue — every piece, every detail, every story — delivered digitally within 4 hours."
              cta="Request Lookbook"
            />
            <IntentCard
              iconComponent={(isHovered) => <DiamondExpertIcon isHovered={isHovered} />}
              heading="Talk to a Diamond Expert"
              description="Speak directly with one of our GIA-trained advisors. Video or voice — at a time that suits you entirely."
              cta="Speak to an Expert"
            />
            <IntentCard
              iconComponent={(isHovered) => <CoBrowsingIcon isHovered={isHovered} />}
              heading="Browse Together, Live"
              description="Let our advisor guide you through the collection in real time — on your screen, at your pace, with no obligation."
              cta="Start Co-Browsing"
            />
          </div>
        </div>
      </div>

      {/* ZONE 2 — The Inner Circle */}
      <div
        className="w-full relative"
        style={{
          backgroundColor: "#0A1628",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/inner-circle-consultation.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "saturate(0.9)",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(10,22,40,0.80)",
          }}
        />

        {/* Content */}
        <div
          className="relative"
          style={{
            padding: "96px 80px",
          }}
        >
          <div className="max-w-[1080px] mx-auto">
            {/* Transition divider */}
            <div
              className="w-full mb-16"
              style={{
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            />

            {/* Transition text */}
            <p
              className="font-serif italic font-light text-center mb-16"
              style={{
                fontSize: "22px",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              Or, stay connected for life.
            </p>

            {/* Inner Circle Card */}
            <div
              className="w-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "56px 64px",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                {/* Left Column - 7/12 */}
                <div className="lg:col-span-7">
                  {/* Diamond mark */}
                  <div className="mb-6">
                    <DiamondMark />
                  </div>

                  {/* Heading */}
                  <h3
                    className="font-serif italic font-light mb-4"
                    style={{
                      fontSize: "40px",
                      color: "#FFFFFF",
                      letterSpacing: "0.02em",
                    }}
                  >
                    The Inner Circle
                  </h3>

                  {/* Description */}
                  <p
                    className="font-sans font-light mb-10"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.9,
                      maxWidth: "48ch",
                    }}
                  >
                    LUMIÈRE&apos;s private membership — for those who have chosen us once and wish to remain close to what we make next. Early access. Private events. A relationship that outlasts any single piece.
                  </p>

                  {/* CTA Button */}
                  <button
                    className="font-sans uppercase flex items-center gap-2 transition-colors duration-200"
                    style={{
                      backgroundColor: ctaHovered ? "#142E6E" : "#1B3A8C",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      letterSpacing: "0.16em",
                      height: "52px",
                      padding: "0 44px",
                    }}
                    onMouseEnter={() => setCtaHovered(true)}
                    onMouseLeave={() => setCtaHovered(false)}
                  >
                    <span>Join the Inner Circle</span>
                    <span
                      className="transition-transform duration-200"
                      style={{
                        transform: ctaHovered ? "translateX(4px)" : "translateX(0)",
                      }}
                    >
                      →
                    </span>
                  </button>

                  {/* Micro-copy */}
                  <p
                    className="font-sans font-light mt-4"
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.18)",
                    }}
                  >
                    No purchase required. Invitation removable at any time.
                  </p>
                </div>

                {/* Right Column - 5/12 */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title}>
                      <div className="py-5">
                        <h4
                          className="font-serif font-normal mb-1.5"
                          style={{
                            fontSize: "17px",
                            color: "#FFFFFF",
                          }}
                        >
                          {benefit.title}
                        </h4>
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
                      {index < benefits.length - 1 && (
                        <div
                          style={{
                            height: "1px",
                            backgroundColor: "rgba(255,255,255,0.06)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
