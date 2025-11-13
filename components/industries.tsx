// "use client"

// import { useState } from "react"
// // import { Sparkles, Stethoscope, Dumbbell, Building2, Home, Activity, UtensilsCrossed } from "lucide-react"
// import {
//   Stethoscope,   // Primary Care
//   Syringe,         // Dental
//   Bone,          // Chiropractic
//   Brain,         // Mental Health
//   Microscope,    // Specialty Clinics
//   Ambulance,     // Urgent Care Clinics
//   Sparkles,      // Med Spa
//   Dumbbell
// } from "lucide-react"
// export function Industries() {
//   const [activeIndustry, setActiveIndustry] = useState(0)

//   const industries = [
//     // {
//       {
//     icon: Stethoscope,
//     name: "Primary Care",
//     description: "Screen callers, triage symptoms, and book same-day visits.",
//   },
//   {
//     icon: Syringe,
//     name: "Dental",
//     description: "Auto-send intake forms and book hygiene or treatment slots.",
//   },
//   {
//     icon: Bone,
//     name: "Chiropractic",
//     description: "Capture new patients and schedule adjustments and follow-ups.",
//   },
//   {
//     icon: Brain,
//     name: "Mental Health",
//     description: "Qualify inquiries, match provider availability, and send reminders.",
//   },
//   {
//     icon: Microscope,
//     name: "Specialty Clinics",
//     description: "Route by specialty, collect referral details, and pre-verify info.",
//   },
//   {
//     icon: Ambulance,
//     name: "Urgent Care Clinics",
//     description: "Triage quickly, share wait times, and reserve on-arrival slots.",
//   },
//   {
//     icon: Sparkles,
//     name: "Med Spa",
//     description: "Book consults/packages and upsell add-ons over the call.",
//   },
//      {icon: Dumbbell,
//       name: "Physiotherapy / Pilates",
//       description: "Book sessions and send class schedules automatically.",
//     },
//   ]

//   return (
//     <section id="industries" className="py-20 lg:py-28">
//       <div className="mx-auto max-w-6xl px-4 lg:px-6">
//         <div className="mb-12 text-center">
//           <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
//             Built for high-intent, high-lead businesses.
//           </h2>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3">
//           {industries.map((industry, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndustry(index)}
//               className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all ${
//                 activeIndustry === index
//                   ? "border-teal-500 bg-teal-50 text-teal-700"
//                   : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
//               }`}
//             >
//               <industry.icon className="h-4 w-4" />
//               {industry.name}
//             </button>
//           ))}
//         </div>

//         <div className="mt-8 text-center">
//           <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6">
//             <p className="text-lg font-medium text-slate-900">{industries[activeIndustry].description}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState } from "react"
import {
  Stethoscope,   // Primary Care
  Syringe,       // Dental
  Bone,          // Chiropractic
  Brain,         // Mental Health
  Microscope,    // Specialty Clinics
  Ambulance,     // Urgent Care Clinics
  Sparkles,      // Med Spa
  Dumbbell       // Physio / Pilates
} from "lucide-react"

const BRAND = "#253c80"

export function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      icon: Stethoscope,
      name: "Primary Care",
      description: "keel answers, screens symptoms, and books the right visit in seconds",
    },
    {
      icon: Syringe,
      name: "Dental",
      description: "keel handles new-patient intakes, benefits basics, and chair-time scheduling",
    },
    {
      icon: Bone,
      name: "Chiropractic",
      description: "Intent-based booking for adjustments, evaluations, and follow-ups",
    },
    {
      icon: Brain,
      name: "Mental Health",
      description: "keel collects sensitive intake gently, offers available clinicians, and books consults",
    },
    {
      icon: Microscope,
      name: "Specialty Clinics",
      description: "keel routes by condition and clinic, gathers referral details, and secures slots",
    },
    {
      icon: Ambulance,
      name: "Urgent Care Clinics",
      description: "keel screens symptoms, shares wait times, and books same-day visits or tele-urgent",
    },
    {
      icon: Sparkles,
      name: "Med Spa",
      description: "keel answers pricing / basic FAQs and fills high-margin treatments",
    },
    {
      icon: Dumbbell,
      name: "Physiotherapy / Pilates",
      description: "keel books evals, progress visits, and classes while capturing scripts and goals",
    },
  ]
return (
    <section id="industries" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
            Built for high-intent, high-lead businesses.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {industries.map((industry, index) => {
            const Active = activeIndustry === index
            return (
              <button
                key={industry.name}
                onClick={() => setActiveIndustry(index)}
                className={[
                  "flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all",
                  Active
                    ? "bg-white" // keep basic bg from Tailwind
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                ].join(" ")}
                style={
                  Active
                    ? {
                        borderColor: BRAND,
                        color: BRAND,
                      }
                    : undefined
                }
                aria-pressed={Active}
              >
                <industry.icon
                  className="h-4 w-4"
                  style={Active ? { color: BRAND } : undefined}
                />
                <span className="truncate">{industry.name}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: BRAND, backgroundColor: "#eef2fb" }}
          >
            <p className="text-lg font-medium text-slate-900">
              {industries[activeIndustry].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}