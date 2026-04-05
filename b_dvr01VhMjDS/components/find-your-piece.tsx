"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Check, ArrowRight } from "lucide-react"

const mosaicImages = [
  "/images/quiz-mosaic-1.jpg",
  "/images/quiz-mosaic-2.jpg",
  "/images/quiz-mosaic-3.jpg",
  "/images/quiz-mosaic-4.jpg",
  "/images/quiz-mosaic-5.jpg",
  "/images/quiz-mosaic-6.jpg",
  "/images/quiz-mosaic-7.jpg",
  "/images/quiz-mosaic-8.jpg",
]

const quizQuestions = [
  {
    question: "What is this piece for?",
    options: [
      "A Proposal",
      "Our Anniversary",
      "A Self-Gift",
      "An Inheritance Piece",
      "A Wedding Gift",
      "A Milestone Birthday",
    ],
  },
  {
    question: "How does she wear her jewellery?",
    options: [
      "Minimal — one piece at a time",
      "Layered and curated",
      "A single statement piece",
      "She rarely wears jewellery",
    ],
  },
  {
    question: "What draws you to a diamond?",
    options: [
      "Its flawless clarity",
      "Its rare colour",
      "The cut and its brilliance",
      "The story of where it came from",
      "Its size and presence",
    ],
  },
  {
    question: "The piece should feel...",
    options: ["Understated", "Statement", "Romantic", "Architectural", "Heirloom", "Modern"],
  },
]

function QuizModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null, null])
  const [showResult, setShowResult] = useState(false)

  const handleSelectAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers([null, null, null, null])
    setShowResult(false)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setCurrentStep(0)
      setAnswers([null, null, null, null])
      setShowResult(false)
    }, 400)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/60"
        onClick={handleClose}
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 400ms ease" }}
      />

      {/* Modal */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 h-[90vh] w-full"
        style={{
          backgroundColor: "#0A1628",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-8 top-8 transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.4)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Content */}
        <div className="flex h-full items-center justify-center px-6">
          <div className="w-full max-w-[560px] text-center">
            {!showResult ? (
              <>
                {/* Step Indicator */}
                <p
                  className="mb-2 font-sans text-[10px] uppercase"
                  style={{ letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}
                >
                  {String(currentStep + 1).padStart(2, "0")} / 04
                </p>

                {/* Progress Bar */}
                <div className="relative mb-12 h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <div
                    className="absolute left-0 top-0 h-full"
                    style={{
                      backgroundColor: "#1B3A8C",
                      width: `${((currentStep + 1) / 4) * 100}%`,
                      transition: "width 400ms ease",
                    }}
                  />
                </div>

                {/* Question */}
                <h3
                  className="mb-9 font-serif text-4xl italic font-light text-white"
                  style={{ lineHeight: 1.1 }}
                >
                  {quizQuestions[currentStep].question}
                </h3>

                {/* Answer Options */}
                <div className="flex flex-wrap justify-center gap-2.5">
                  {quizQuestions[currentStep].options.map((option) => {
                    const isSelected = answers[currentStep] === option
                    return (
                      <button
                        key={option}
                        onClick={() => handleSelectAnswer(option)}
                        className="flex h-12 items-center gap-2 px-7 transition-all duration-200"
                        style={{
                          backgroundColor: isSelected ? "#1B3A8C" : "rgba(255,255,255,0.05)",
                          border: isSelected ? "1px solid #1B3A8C" : "1px solid rgba(255,255,255,0.15)",
                          color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"
                            e.currentTarget.style.color = "#FFFFFF"
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"
                            e.currentTarget.style.color = "rgba(255,255,255,0.6)"
                          }
                        }}
                      >
                        {isSelected && <Check size={14} strokeWidth={1.5} />}
                        <span
                          className="font-sans text-xs font-light"
                          style={{ letterSpacing: "0.08em" }}
                        >
                          {option}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={!answers[currentStep]}
                  className="mt-9 font-sans text-[11px] uppercase transition-opacity duration-200"
                  style={{
                    letterSpacing: "0.14em",
                    color: "#FFFFFF",
                    opacity: answers[currentStep] ? 1 : 0.4,
                    cursor: answers[currentStep] ? "pointer" : "default",
                  }}
                >
                  Next
                </button>
              </>
            ) : (
              /* Result Screen */
              <>
                {/* Diamond Mark */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1B3A8C"
                  strokeWidth="1"
                  className="mx-auto mb-5"
                >
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" />
                </svg>

                {/* Collection Label */}
                <p
                  className="mb-3 font-sans text-[10px] uppercase"
                  style={{ letterSpacing: "0.22em", color: "#1B3A8C" }}
                >
                  Your Collection
                </p>

                {/* Result Heading */}
                <h3
                  className="mb-5 font-serif text-[32px] italic font-light text-white"
                  style={{ lineHeight: 1.2 }}
                >
                  The Luminary Collection was made for this moment.
                </h3>

                {/* Result Description */}
                <p
                  className="mx-auto mb-10 max-w-md font-sans text-sm font-light"
                  style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}
                >
                  Based on your answers, we believe you will find your piece in our Luminary Series — flawless white
                  diamonds in architectural settings, designed for moments that endure.
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center gap-3">
                  <button
                    className="h-[52px] px-10 font-sans text-[11px] uppercase text-white transition-colors duration-200"
                    style={{ letterSpacing: "0.14em", backgroundColor: "#1B3A8C" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#142E6E")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B3A8C")}
                  >
                    Explore the Luminary Collection
                  </button>

                  <button
                    className="h-[52px] px-10 font-sans text-[11px] uppercase text-white transition-colors duration-200"
                    style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                  >
                    Request a Private Consultation
                  </button>
                </div>

                {/* Restart Link */}
                <button
                  onClick={handleRestart}
                  className="mt-6 font-sans text-[10px] transition-all duration-200 hover:underline"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Restart the quiz
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export function FindYourPiece() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
        {/* Fixed Mosaic Background */}
        <div className="absolute inset-0">
          <div className="grid h-full w-full grid-cols-4 grid-rows-2">
            {mosaicImages.map((src, index) => (
              <div key={index} className="relative h-full w-full">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.8)" }}
                />
              </div>
            ))}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.82)" }} />
        </div>

        {/* Content Layer */}
        <div className="relative flex min-h-screen items-center justify-center px-6 py-24">
          <div className="max-w-[680px] text-center">
            {/* Eyebrow */}
            <p
              className="mb-5 font-sans text-[10px] uppercase"
              style={{ letterSpacing: "0.26em", color: "#1B3A8C" }}
            >
              Personalised Discovery
            </p>

            {/* Ornamental Line 1 */}
            <div className="mx-auto mb-5 h-px w-12" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

            {/* Main Heading */}
            <h2 className="mb-6 font-serif text-6xl font-light text-white" style={{ lineHeight: 1.05, letterSpacing: "0.02em" }}>
              Find Your{" "}
              <span className="italic">Perfect Piece.</span>
            </h2>

            {/* Supporting Copy */}
            <p
              className="mx-auto mb-16 max-w-[44ch] font-sans text-base font-light"
              style={{ color: "rgba(255,255,255,0.5)", lineHeight: 2 }}
            >
              Answer four questions about the moment, the feeling, and the stone — and we will show you the pieces from
              our collection that were made for exactly this.
            </p>

            {/* Ornamental Line 2 */}
            <div className="mx-auto mb-16 h-px w-12" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

            {/* CTA Button */}
            <button
              onClick={() => setIsQuizOpen(true)}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="h-16 px-16 font-serif text-lg italic font-light text-white transition-all duration-200"
              style={{
                backgroundColor: isButtonHovered ? "#142E6E" : "#1B3A8C",
                letterSpacing: "0.1em",
                boxShadow: isButtonHovered ? "0 0 32px rgba(27,58,140,0.4)" : "none",
              }}
            >
              <span className="flex items-center gap-3">
                Take the Quiz
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  style={{
                    transform: isButtonHovered ? "translateX(4px)" : "translateX(0)",
                    transition: "transform 200ms ease",
                  }}
                />
              </span>
            </button>

            {/* Micro-copy */}
            <p
              className="mt-4 font-sans text-[10px] font-light"
              style={{ letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)" }}
            >
              4 questions · 2 minutes · No sign-up required
            </p>
          </div>
        </div>
      </section>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  )
}
