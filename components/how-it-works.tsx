// import { Phone, Bot, Calendar, Zap } from "lucide-react"
// import { CALENDAR_LINK } from "@/lib/constants"

// export function HowItWorks() {
//   return (
//     <section id="call-flow" className="bg-white py-20 lg:py-28">
//       <div className="mx-auto max-w-6xl px-4 lg:px-6">
//         <div className="mb-4 text-center">
//           <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">How keel plugs into your business</h2>
//           <p className="text-lg text-slate-600">
//             Every patient call answered in your tone, booked, and synced seamlessly across your systems.
//           </p>
//         </div>

//         {/* Top-right link */}
//         <div className="mb-8 text-right">
//           <a
//             href={CALENDAR_LINK}
//             target="_blank"
//             rel="noreferrer"
//             className="text-sm font-medium text-teal-600 hover:text-teal-700"
//           >
//             Book a setup call →
//           </a>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Step 1 */}
//           <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
//               1
//             </div>
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
//               <Phone className="h-6 w-6 text-slate-700" />
//             </div>
//             <h3 className="mb-2 font-bold text-slate-900"> Never miss a patient again</h3>
//             <p className="text-sm text-slate-600"> Answers instantly — even after hours or on weekends.</p>
//           </div>

//           {/* Step 2 */}
//           <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
//               2
//             </div>
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
//               <Bot className="h-6 w-6 text-teal-600" />
//             </div>
//             <h3 className="mb-2 font-bold text-slate-900">Speaks like your front desk</h3>
//             <p className="text-sm text-slate-600">Under 2-seconds responds to every call—new patient inquiries, urgent issues, or routine requests</p>
//           </div>

//           {/* Step 3 */}
//           <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
//               3
//             </div>
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
//               <Calendar className="h-6 w-6 text-slate-700" />
//             </div>
//             <h3 className="mb-2 font-bold text-slate-900">Books and reminds automatically
// </h3>
//             <p className="text-sm text-slate-600">Adds to your calendar, reduces no-shows, and hands off when needed.
// </p>
//           </div>

//           {/* Step 4 */}
//           <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
//               4
//             </div>
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
//               <Zap className="h-6 w-6 text-slate-700" />
//             </div>
//             <h3 className="mb-2 font-bold text-slate-900">Secure and fully connected
// </h3>
//             <p className="text-sm text-slate-600"> Syncs patient info across your PMS, CRM, and tools </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Phone, Bot, Calendar, Zap } from "lucide-react"
import { sourceSerif } from "@/lib/fonts";

const BRAND = "#253c80"

type HowItWorksProps = {
  onBookDemo?: () => void; // 👈 pass your modal opener
}

export function HowItWorks({ onBookDemo }: HowItWorksProps) {
  return (
    <section id="call-flow" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">

        {/* Heading + desktop CTA */}
        <div className="mb-4 flex items-end justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl md:text-5xl font-semibold leading-tight tracking-[-0.01em] text-slate-900">
                How{" "}
                <span className={`${sourceSerif.className} text-[#253c80]`}>
                  keel
                </span>{" "}
                plugs into your business
            </h2>

            {/* <h2 className="mb-3 text-4xl font-bold tracking-tight text-slate-900">
              How <span className="text-[color:var(--brand)]" style={{ ["--brand" as any]: BRAND }}>Keel</span> plugs into your business
            </h2> */}
            <p className="text-lg text-slate-600 mb-8 md:mb-10">
              Every patient call answered in your tone, booked, and synced seamlessly across your systems.
            </p>

            {/* <p className="text-lg text-slate-600">
              Every patient call answered in your tone, booked, and synced seamlessly across your systems.
            </p> */}
          </div>

          {/* Desktop: open modal, not a link */}
          <div className="hidden md:block mb-8 md:mb-10" >
            <button
              type="button"
              onClick={onBookDemo}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:shadow-sm"
              style={{
                color: BRAND,
                borderColor: `${BRAND}33`, // ~20% opacity
                background: "white",
              }}
            >
              Book a setup call <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: BRAND }}>
              1
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: `${BRAND}14` }}>
              <Phone className="h-6 w-6" style={{ color: BRAND }} />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">Never miss a patient again</h3>
            <p className="text-sm text-slate-600">Answers instantly — even after hours or on weekends.</p>
          </div>

          {/* 2 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: BRAND }}>
              2
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: `${BRAND}14` }}>
              <Bot className="h-6 w-6" style={{ color: BRAND }} />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">Speaks like your front desk</h3>
            <p className="text-sm text-slate-600">
              Responds in under 2 seconds to new inquiries, urgent issues, and routine requests.
            </p>
          </div>

          {/* 3 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: BRAND }}>
              3
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: `${BRAND}14` }}>
              <Calendar className="h-6 w-6" style={{ color: BRAND }} />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">Books and reminds automatically</h3>
            <p className="text-sm text-slate-600">
              Adds to your calendar, reduces no-shows, and hands off to humans when needed.
            </p>
          </div>

          {/* 4 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: BRAND }}>
              4
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: `${BRAND}14` }}>
              <Zap className="h-6 w-6" style={{ color: BRAND }} />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">Secure and fully connected</h3>
            <p className="text-sm text-slate-600">Syncs patient info across your PMS, CRM, and tools.</p>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <button
            type="button"
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:shadow-sm"
            style={{
              color: BRAND,
              borderColor: `${BRAND}33`,
              background: "white",
            }}
          >
            Book a setup call <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
