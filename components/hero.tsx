// // components/hero.tsx
// "use client"
// import { Navbar } from "@/components/navbar"
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Phone, Calendar, TrendingUp, Clock } from "lucide-react";
// import { KeelWebGL } from "@/components/keel-webgl";
// import { WavyStrip } from "@/components/wavy-strip";
// // import { BookDemoButton } from "@/components/book-demo-button"; // you may not need this now

// const CAL_SLUG = "soumith-reddy-9xbbzl/30min";

// type HeroProps = {
//   onBookDemo?: () => void;
// };

// export function Hero({ onBookDemo }: HeroProps) {
//   return (
//     <section className="relative overflow-hidden bg-slate-950 min-h-screen " >
//        {/* OVERLAY NAVBAR */}
//       <Navbar onBookDemo={onBookDemo} />
//       <KeelWebGL variant="graph" accent="#253c80" />

//       <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:px-6 lg:py-32">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
//           <div className="flex flex-col justify-center">
//             {/* <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border 
//             border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur">
//               AI Receptionist for service businesses · 24/7 coverage
//             </div> */}
//             <div
//           className="
//             mb-6 inline-flex w-fit items-center gap-2
//             rounded-full border border-white/10 bg-white/5 backdrop-blur
//             px-5 py-2.5
//             text-[10px] sm:text-[10px] lg:text-[19px]

//             font-semibold text-white/90
//             leading-none
//           "
//         >
//           AI Receptionist · 24/7 coverage
//         </div>

//             <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
//               Turn every missed call into a booked client.
//             </h1>
//             <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
//               Keel answers in 2 seconds, speaks in your tone, books to your calendar, and sends SMS/email confirmations
//               — without hiring another person.
//             </p>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               {/* instead of data-cal-link, call parent */}
//               {/* <Button
//                 size="lg"
//                 // className="bg-teal-500 text-base hover:bg-teal-600"
//                 className = "border-white/20 bg-white/10 text-white hover:bg-white/10"
//                 // className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-slate-950 font-semibold hover:opacity-90"
//                 onClick={onBookDemo}
//               >
//                 Book a demo
//               </Button> */}

//               {/* <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="border-white/20 bg-white/5 text-white hover:bg-white/10"
//                 // className="border-white/20 bg-white/5 text-base text-white hover:bg-white/10"
//               >
//                 <a href="#call-flow">See call flow</a>
//               </Button> */}
//             </div>

//             {/* ...rest of your hero unchanged */}
//           </div>

//           {/* right side unchanged */}

//           {/* ... your existing right column ... */}
//           <div className="relative flex items-center justify-center">
//             <div className="relative w-full">
//               {/* Glass card with ring and blur */}
//               <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
//                 {/* Live call card */}
//                 <div className="mb-4 rounded-lg border border-teal-500/20 bg-teal-500/10 p-4 backdrop-blur">
//                   <div className="mb-3 flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
//                         <Phone className="h-4 w-4 text-white" />
//                       </div>
//                       <div>
//                         <div className="text-xs font-semibold uppercase tracking-wide text-teal-400">Incoming call</div>
//                         <div className="text-sm text-slate-300">(555) 123-4567</div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <div className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
//                       <span className="text-xs font-medium text-teal-400">Live</span>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <div className="flex items-start gap-2">
//                       <div className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
//                       <div className="text-sm text-slate-300">"Hi, I'd like to book a consultation"</div>
//                     </div>
//                     <div className="flex items-start gap-2">
//                       <div className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
//                       <div className="text-sm font-medium text-white">"I can help with that. What day works best?"</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Booking confirmation */}
//                 <div className="mb-4 flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500">
//                     <Calendar className="h-5 w-5 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-sm font-semibold text-white">Booked: 3:30 PM</div>
//                     <div className="text-xs text-slate-400">with confirmation note</div>
//                   </div>
//                 </div>

//                 {/* Mini stats row */}
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
//                     <div className="flex items-center gap-2">
//                       <TrendingUp className="h-4 w-4 text-teal-400" />
//                       <div className="text-xs font-medium text-slate-400">Conversion</div>
//                     </div>
//                     <div className="mt-1 text-xl font-bold text-white">87%</div>
//                   </div>
//                   <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-4 w-4 text-teal-400" />
//                       <div className="text-xs font-medium text-slate-400">Response</div>
//                     </div>
//                     <div className="mt-1 text-xl font-bold text-white">2s</div>
//                   </div>
//                 </div>

//                 {/* Secondary link button */}
//                 <div className="mt-4 text-center">
//                   <a href="#contact" className="text-sm font-medium text-teal-400 hover:text-teal-300">
//                     Send to my CRM →
//                   </a>
//                 </div>
//               </div>

//               {/* Glow effect */}
//               <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-teal-500/20 to-transparent blur-3xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <WavyStrip height={260} waveOpacity={0.55} /> */}
//       <WavyStrip height={260} waveOpacity={0.55} />
//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950" />

//       {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50" /> */}
//     </section>
//   );
// }


// components/hero.tsx
"use client";

import { Navbar } from "@/components/navbar";
import { ArrowRight, Phone, Calendar, TrendingUp, Clock } from "lucide-react";
import { KeelWebGL } from "@/components/keel-webgl";
import { WavyStrip } from "@/components/wavy-strip";

type HeroProps = {
  onBookDemo?: () => void;
};
const BRAND = "#253c80";

export function Hero({ onBookDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* OVERLAY NAVBAR */}
      <Navbar onBookDemo={onBookDemo} variant="over-hero" />

      <KeelWebGL variant="graph" accent="#253c80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:px-6 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div
              className="
                mb-6 inline-flex w-fit items-center gap-2
                rounded-full border border-white/10 bg-white/5 backdrop-blur
                px-5 py-2.5 text-[10px] sm:text-[10px] lg:text-[19px]
                font-semibold text-white/90 leading-none
              "
            >
              AI Receptionist · 24/7 coverage
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn every missed call into a booked client.
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
              Keel answers in 2 seconds, speaks in your tone, books to your calendar, and sends SMS/email confirmations
              — without hiring another person.
            </p>

            {/* ✅ Stats trio (added) */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                 <div className="text-2xl sm:text-3xl font-bold text-white
                    filter drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]
                    transition will-change-transform">+40%</div>
                <div className="text-xs text-slate-400 sm:text-sm">More Appointments Captured</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white
                    filter drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]
                    transition will-change-transform">24/7</div>
                <div className="text-xs text-slate-400 sm:text-sm">Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white
                    filter drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]
                    transition will-change-transform">18%</div>
                <div className="text-xs text-slate-400 sm:text-sm">Fewer no-shows</div>
              </div>
            </div>
          </div>

          {/* Right column: glass demo card */}
{/* Right column: glass demo card (brand navy + glow) */}

{/* Right column: premium glass demo card */}
<div className="relative flex items-center justify-center">
  <div className="relative w-full max-w-xl mx-auto">
    {/* Outer neon aura */}
    <div
      className="absolute -inset-6 -z-20 blur-2xl rounded-[28px] opacity-70"
      style={{
        background:
          "radial-gradient(60% 80% at 70% 20%, rgba(37,60,128,0.45) 0%, rgba(37,60,128,0.15) 40%, transparent 70%)",
      }}
    />
    {/* Subtle back glow */}
    <div
      className="absolute -inset-10 -z-10 blur-3xl rounded-[32px] opacity-60"
      style={{
        background:
          "radial-gradient(55% 55% at 50% 40%, rgba(37,60,128,0.25) 0%, transparent 70%)",
      }}
    />

    {/* Card shell with neon ring */}
    <div
      className="relative rounded-3xl p-[2px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(37,60,128,0.85) 0%, rgba(37,60,128,0.25) 100%)",
        boxShadow:
          "0 0 0 1px rgba(37,60,128,0.45), 0 20px 50px -20px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Inner canvas (glass) */}
      <div
        className="relative rounded-[22px] backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,16,28,0.55) 0%, rgba(10,16,28,0.35) 100%)",
        }}
      >
        {/* top specular highlight */}
        <div className="pointer-events-none absolute inset-x-0 -top-px h-8 rounded-t-[22px]"
             style={{background:"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)"}}/>

        <div className="p-5 sm:p-6 lg:p-7 space-y-4">
          {/* Live call tile */}
          <div
            className="rounded-xl p-4 sm:p-5"
            style={{
              background:
                "linear-gradient(180deg, rgba(37,60,128,0.24) 0%, rgba(37,60,128,0.14) 100%)",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.06), 0 10px 24px -10px rgba(37,60,128,0.35)",
            }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#253c80]">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M6.6 10.8a14.7 14.7 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.22c1.2.5 2.6.8 4 .8a1 1 0 011 1v3.5a1 1 0 01-1 1A18.5 18.5 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.4.3 2.8.8 4a1 1 0 01-.2 1.1L6.6 10.8z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[.12em] text-white/70">Incoming call</div>
                  <div className="text-sm text-white/80">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#66a0ff] animate-pulse" />
                <span className="text-xs font-medium text-[#8fb3ff]">Live</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                <p className="text-[13px] text-white/80">“Hi, I'd like to book a consultation”</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8fb3ff]" />
                <p className="text-[13px] font-medium text-white">
                  “I can help with that. What day works best?”
                </p>
              </div>
            </div>
          </div>

          {/* Booking tile */}
          <div
            className="rounded-xl p-4 sm:p-5 flex items-start gap-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(37,60,128,0.2) 0%, rgba(37,60,128,0.1) 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#253c80]">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v2H4V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 10h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8zm4 3h6v2H8v-2z"/></svg>
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-semibold text-white">Booked: 3:30 PM</div>
              <div className="text-xs text-white/60">with confirmation note</div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="rounded-lg p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(37,60,128,0.18) 0%, rgba(37,60,128,0.08) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 text-white/65 text-xs">
                <svg className="h-4 w-4 text-[#8fb3ff]" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17l6-6 4 4 7-7v5h2V4h-9v2h5l-6 6-4-4L1 15l2 2z"/></svg>
                Conversion
              </div>
              <div className="mt-1 text-[22px] font-bold text-white">87%</div>
            </div>

            <div
              className="rounded-lg p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(37,60,128,0.18) 0%, rgba(37,60,128,0.08) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 text-white/65 text-xs">
                <svg className="h-4 w-4 text-[#8fb3ff]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm1-6h-2v3h2V2zm7.07 3.93l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM22 11h-3v2h3v-2zM5.05 4.64L2.93 6.76l2.12 2.12 1.41-1.41L5.05 4.64zM5 11H2v2h3v-2zm2.05 6.36l-1.41 1.41 2.12 2.12 1.41-1.41-2.12-2.12zm11.02 0l-2.12 2.12 1.41 1.41 2.12-2.12-1.41-1.41z"/></svg>
                Response
              </div>
              <div className="mt-1 text-[22px] font-bold text-white">2s</div>
            </div>
          </div>

          {/* CTA link */}
          <div className="pt-1 text-center">
            <a
              href="#contact"
              className="text-[13px] font-medium text-[#8fb3ff] hover:text-white transition"
            >
              Send to my CRM →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      <WavyStrip height={260} waveOpacity={0.55} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
