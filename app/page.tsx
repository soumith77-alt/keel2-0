// // app/page.tsx
// "use client"

// import React from "react"
// import { CalProvider } from "@/components/cal-provider"
// import { Navbar } from "@/components/navbar"
// import { Hero } from "@/components/hero"
// import { LogoStrip } from "@/components/logo-strip"
// import { HowItWorks } from "@/components/how-it-works"
// import { AudioDemo as AudioDemoSection } from "@/components/audio-demo"
// import { Features } from "@/components/features"
// import { Industries } from "@/components/industries"
// import { Comparison } from "@/components/comparison"
// import { Pricing } from "@/components/pricing"
// import { Resources } from "@/components/resources"
// import { ContactForm } from "@/components/contact-form"
// import { Footer } from "@/components/footer"
// import { Confetti, type ConfettiRef } from "@/components/confetti"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"

// const CAL_URL =
//   "https://cal.com/soumith-reddy-9xbbzl/30min?embed=1&theme=light"

// export default function Home() {
//   const [open, setOpen] = React.useState(false)
//   const confettiRef = React.useRef<ConfettiRef>(null)
//   React.useEffect(() => {
//   const handler = (event: MessageEvent) => {
//     const d = event.data as any
//     // console.log("CAL MESSAGE", d)

//     const isFromCal = d?.originator === "CAL"

//     const isBookingDone =
//       d?.type === "bookingSuccessful" ||
//       d?.type === "bookingSuccessfulV2" ||
//       d?.fullType === "CAL:1:bookingSuccessful" ||
//       d?.fullType === "CAL:1:bookingSuccessfulV2"

//     if (isFromCal && isBookingDone) {
//       console.log("✅ booking detected, firing confetti")

//       confettiRef.current?.fire?.({
//         spread: 100,
//         particleCount: 140,
//         origin: { y: 0.3 },
//       })

//       setOpen(false)
//     }
//   }

//   window.addEventListener("message", handler)
//   return () => window.removeEventListener("message", handler)
// }, [])


//   // listen for messages from cal.com to fire confetti
//   // React.useEffect(() => {
//   //   const handler = (event: MessageEvent) => {
//   //     // cal.com posts to parent; we can log to see exact payload
//   //     console.log("cal message", event.data)
//   //     if (
//   //       typeof event.data === "object" &&
//   //       event.data &&
//   //       (event.data.event === "bookingSuccessful" ||
//   //         event.data.type === "cal:bookings:created")
//   //     ) {
//   //       confettiRef.current?.fire({
//   //         spread: 100,
//   //         particleCount: 140,
//   //         origin: { y: 0.3 },
//   //       })
//   //       setOpen(false)
//   //     }
//   //   }
//   //   window.addEventListener("message", handler)
//   //   return () => window.removeEventListener("message", handler)
//   // }, [])

//   return (
//     <CalProvider>
//       {/* global confetti canvas */}
//       <Confetti
//         ref={confettiRef}
//         manualstart
//         className="pointer-events-none fixed inset-0 z-[10050]"
//       />

//       <main className="min-h-screen bg-slate-50">
//         <Navbar />
//         <Hero onBookDemo={() => setOpen(true)} />
//         <LogoStrip />
//         <HowItWorks />
//         <AudioDemoSection />
//         <Features />
//         <Industries />
//         <Comparison />
//         <Pricing />
//         <Resources />
//         <ContactForm />
//         <Footer />
//       </main>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="max-w-3xl">
//           <DialogHeader>
//             <DialogTitle>Book a demo</DialogTitle>
//           </DialogHeader>
//           <div className="h-[620px] w-full overflow-hidden rounded-md">
//             <iframe
//               src={CAL_URL}
//               className="h-full w-full"
//               frameBorder="0"
//               // important for postMessage
//               allow="camera;microphone;clipboard-read;clipboard-write"
//             />
//           </div>
//         </DialogContent>
//       </Dialog>
//     </CalProvider>
//   )
// }


// app/page.tsx
"use client"

import React from "react"
import { CalProvider } from "@/components/cal-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
// import { LogoStrip } from "@/components/logo-strip"
import { HowItWorks } from "@/components/how-it-works"
import { AudioDemo as AudioDemoSection } from "@/components/audio-demo"
import { Features } from "@/components/features"
import { Industries } from "@/components/industries"
import { Comparison } from "@/components/comparison"
// import { Pricing } from "@/components/pricing"
import { Resources } from "@/components/resources"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Confetti, type ConfettiRef } from "@/components/confetti"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import confetti from "canvas-confetti" // ✅ fallback straight from here

// your actual link as iframe
const CAL_URL =
  "https://cal.com/soumith-reddy-9xbbzl/30min?embed=1&theme=light"

export default function Home() {
  const [open, setOpen] = React.useState(false)
  const confettiRef = React.useRef<ConfettiRef>(null)

  // React.useEffect(() => {
  //   const handler = (event: MessageEvent) => {
  //     const d = event.data as any
  //     // console.log("CAL MESSAGE", d)

  //     const isFromCal = d?.originator === "CAL"

  //     // these are the ones your console showed
  //     const isBookingDone =
  //       d?.type === "bookingSuccessful" ||
  //       d?.type === "bookingSuccessfulV2" ||
  //       d?.fullType === "CAL:1:bookingSuccessful" ||
  //       d?.fullType === "CAL:1:bookingSuccessfulV2"

  //     if (isFromCal && isBookingDone) {
  //       console.log("✅ booking detected, firing confetti. ref =", confettiRef.current)

  //       // 1) try confetti component via ref
  //       confettiRef.current?.fire?.({
  //         spread: 100,
  //         particleCount: 140,
  //         origin: { y: 0.3 },
  //       })

  //       // 2) hard fallback: fire directly
  //       confetti({
  //         spread: 90,
  //         particleCount: 160,
  //         origin: { y: 0.3 },
  //       })

  //       setOpen(false)
  //     }
  //   }

  //   window.addEventListener("message", handler)
  //   return () => window.removeEventListener("message", handler)
  // }, [])
React.useEffect(() => {
  const handler = (event: MessageEvent) => {
    const d = event.data as any

    const isFromCal = d?.originator === "CAL"
    const isBookingDone =
      d?.type === "bookingSuccessful" ||
      d?.type === "bookingSuccessfulV2" ||
      d?.fullType === "CAL:1:bookingSuccessful" ||
      d?.fullType === "CAL:1:bookingSuccessfulV2"

    if (isFromCal && isBookingDone) {
      console.log("✅ booking detected, firing confetti (with delay close)")

      // 1) main big burst from center-top
      confettiRef.current?.fire?.({
        particleCount: 200,
        spread: 120,
        startVelocity: 45,
        origin: { x: 0.5, y: 0.25 }, // center-ish
        scalar: 1.1,
      })

      // 2) fallback + second burst
      setTimeout(() => {
        confetti({
          particleCount: 160,
          spread: 110,
          startVelocity: 40,
          origin: { x: 0.5, y: 0.2 },
        })
      }, 300)

      // 3) optional 3rd small burst
      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { x: 0.5, y: 0.3 },
        })
      }, 650)

      // 4) now wait 2 seconds so user can actually SEE Cal's "This meeting is scheduled"
      setTimeout(() => {
        setOpen(false)
      }, 2000)
    }
  }

  window.addEventListener("message", handler)
  return () => window.removeEventListener("message", handler)
}, [])

  return (
    <CalProvider>
      {/* raise z-index so it's ABOVE the dialog */}
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none fixed inset-0 z-[11000]"
      />

      <main className="min-h-screen bg-slate-50">
        {/* <Navbar onBookDemo={() => setOpen(true)} /> */}
        <Hero onBookDemo={() => setOpen(true)} />
          
        {/* <LogoStrip /> */}
        <HowItWorks onBookDemo={() => setOpen(true)} />
        {/* <AudioDemoSection /> */}
        <Features />
        <Industries />
        <Comparison />
        {/* <Pricing /> */}
        {/* <Resources /> */}
        <ContactForm />
        <Footer />
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Book a demo</DialogTitle>
          </DialogHeader>
          <div className="h-[620px] w-full overflow-hidden rounded-md">
            <iframe
              src={CAL_URL}
              className="h-full w-full"
              frameBorder="0"
              allow="camera;microphone;clipboard-read;clipboard-write"
            />
          </div>
        </DialogContent>
      </Dialog>
    </CalProvider>
  )
}
