
// "use client"

// import type React from "react"
// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { CALENDAR_LINK } from "@/lib/constants"
// import { Calendar } from "lucide-react"

// const BRAND = "#253c80"

// const selectTriggerClasses =
//   "flex h-11 w-full items-center justify-between rounded-full border border-slate-200 " +
//   "bg-white/80 px-4 text-sm text-slate-900 shadow-sm backdrop-blur-sm " +
//   "transition-all hover:border-slate-300 hover:bg-white " +
//   "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253c80] focus-visible:ring-offset-1"

// const selectContentClasses =
//   "z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl " +
//   "border border-slate-200 bg-white/95 py-1 shadow-xl backdrop-blur-sm"

// const selectItemClasses =
//   "relative flex cursor-pointer select-none items-center px-4 py-2.5 text-sm text-slate-800 " +
//   "outline-none data-[highlighted]:bg-slate-50 data-[highlighted]:text-slate-900 " +
//   "data-[state=checked]:bg-slate-100 data-[state=checked]:font-semibold"

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     business: "",
//     industry: "",
//     callVolume: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setStatus("idle")

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })

//       if (!res.ok) {
//         throw new Error("Failed to send message")
//       }

//       setStatus("success")
//       setFormData({
//         name: "",
//         email: "",
//         business: "",
//         industry: "",
//         callVolume: "",
//         message: "",
//       })
//     } catch (err) {
//       console.error(err)
//       setStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section id="contact" className="bg-slate-50 py-20 lg:py-28">
//       <div className="mx-auto max-w-6xl px-4 lg:px-6">
//         <div className="mb-10 text-center">
//           <h2 className="mb-3 text-4xl font-bold tracking-tight text-slate-900">
//             Talk to us
//           </h2>
//           <p className="text-lg text-slate-600">
//             Share a bit about your clinic and we’ll show you how Keel can help.
//           </p>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-2">
//           {/* Left: Lead form */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
//             <h3 className="mb-1 text-xl font-semibold text-slate-900">
//               Send us a message
//             </h3>
//             <p className="mb-6 text-sm text-slate-500">
//               We’ll get back within one business day with a short Loom or a call.
//             </p>

//             {/* inline status banner instead of alert() */}
//             {status === "success" && (
//               <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
//                 Message sent. We’ll get back to you soon.
//               </div>
//             )}
//             {status === "error" && (
//               <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
//                 Something went wrong while sending your message. Please try again.
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                     id="name"
//                     placeholder="John Doe"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Work email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="john@business.com"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="business">Business name</Label>
//                 <Input
//                   id="business"
//                   placeholder="Sunrise Dental Group"
//                   value={formData.business}
//                   onChange={(e) =>
//                     setFormData({ ...formData, business: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="industry">Industry</Label>
//                   <Select
//                     value={formData.industry}
//                     onValueChange={(value) =>
//                       setFormData({ ...formData, industry: value })
//                     }
//                   >
//                     <SelectTrigger id="industry" className={selectTriggerClasses}>
//                       <SelectValue placeholder="Select industry" />
//                     </SelectTrigger>
//                     <SelectContent
//                       className={selectContentClasses}
//                       position="popper"
//                       sideOffset={6}
//                     >
//                       <SelectItem value="medspa" className={selectItemClasses}>
//                         Med Spa
//                       </SelectItem>
//                       <SelectItem value="dental" className={selectItemClasses}>
//                         Dental / Ortho
//                       </SelectItem>
//                       <SelectItem value="physio" className={selectItemClasses}>
//                         Physiotherapy / Pilates
//                       </SelectItem>
//                       <SelectItem
//                         value="realestate"
//                         className={selectItemClasses}
//                       >
//                         Real Estate
//                       </SelectItem>
//                       <SelectItem value="clinic" className={selectItemClasses}>
//                         Clinic / Aesthetic
//                       </SelectItem>
//                       <SelectItem value="home" className={selectItemClasses}>
//                         Home Services
//                       </SelectItem>
//                       <SelectItem
//                         value="restaurants"
//                         className={selectItemClasses}
//                       >
//                         Restaurants
//                       </SelectItem>
//                       <SelectItem value="other" className={selectItemClasses}>
//                         Other
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="callVolume">Monthly call volume</Label>
//                   <Select
//                     value={formData.callVolume}
//                     onValueChange={(value) =>
//                       setFormData({ ...formData, callVolume: value })
//                     }
//                   >
//                     <SelectTrigger
//                       id="callVolume"
//                       className={selectTriggerClasses}
//                     >
//                       <SelectValue placeholder="Select volume" />
//                     </SelectTrigger>
//                     <SelectContent
//                       className={selectContentClasses}
//                       position="popper"
//                       sideOffset={6}
//                     >
//                       <SelectItem value="0-100" className={selectItemClasses}>
//                         0–100 calls
//                       </SelectItem>
//                       <SelectItem
//                         value="100-300"
//                         className={selectItemClasses}
//                       >
//                         100–300 calls
//                       </SelectItem>
//                       <SelectItem
//                         value="300-500"
//                         className={selectItemClasses}
//                       >
//                         300–500 calls
//                       </SelectItem>
//                       <SelectItem value="500+" className={selectItemClasses}>
//                         500+ calls
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   placeholder="
//                   How can we help?"
//                   rows={4}
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 size="lg"
//                 disabled={isSubmitting}
//                 className="w-full rounded-full font-semibold tracking-tight"
//                 style={{
//                   backgroundColor: BRAND,
//                   borderColor: BRAND,
//                 }}
//               >
//                 {isSubmitting
//                   ? "Sending..."
//                   : status === "success"
//                   ? "Sent ✓"
//                   : "Send to Keel"}
//               </Button>
//             </form>
//           </div>

//           {/* Right: Calendar embed */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
//             <div className="mb-3 flex items-center gap-2">
//               <Calendar className="h-5 w-5" style={{ color: BRAND }} />
//               <h3 className="text-xl font-semibold text-slate-900">
//                 Prefer to pick a time?
//               </h3>
//             </div>
//             <p className="mb-6 text-sm text-slate-600">
//               Book a 30-minute walkthrough. We’ll show live call flows and
//               examples from clinics like yours.
//             </p>

//             <iframe
//               src={CALENDAR_LINK}
//               className="h-[520px] w-full rounded-xl border border-slate-200"
//               loading="lazy"
//               title="Book a demo with Keel"
//             />

//             <p className="mt-3 text-xs text-slate-500">
//               If the calendar doesn&apos;t load,&nbsp;
//               <a
//                 href={CALENDAR_LINK}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="font-medium underline"
//                 style={{ color: BRAND }}
//               >
//                 open it in a new tab
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CALENDAR_LINK } from "@/lib/constants"
import { Calendar, CheckCircle2, AlertCircle } from "lucide-react"

const BRAND = "#253c80"

const selectTriggerClasses =
  "flex h-11 w-full items-center justify-between rounded-full border border-slate-200 " +
  "bg-white/80 px-4 text-sm text-slate-900 shadow-sm backdrop-blur-sm " +
  "transition-all hover:border-slate-300 hover:bg-white " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253c80] focus-visible:ring-offset-1"

const selectContentClasses =
  "z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl " +
  "border border-slate-200 bg-white/95 py-1 shadow-xl backdrop-blur-sm"

const selectItemClasses =
  "relative flex cursor-pointer select-none items-center px-4 py-2.5 text-sm text-slate-800 " +
  "outline-none data-[highlighted]:bg-slate-50 data-[highlighted]:text-slate-900 " +
  "data-[state=checked]:bg-slate-100 data-[state=checked]:font-semibold"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    industry: "",
    callVolume: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // premium-looking popup state
  const [feedback, setFeedback] = useState<null | {
    type: "success" | "error"
    title: string
    message: string
  }>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send message")
      }

      setFormData({
        name: "",
        email: "",
        business: "",
        industry: "",
        callVolume: "",
        message: "",
      })

      // ✅ show premium popup instead of alert
      setFeedback({
        type: "success",
        title: "Message sent",
        message: "We’ll get back to you within one business day.",
      })
    } catch (err) {
      console.error(err)
      setFeedback({
        type: "error",
        title: "Something went wrong",
        message: "Please try again in a moment or email hello@saykeel.com.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-slate-900">
            Talk to us
          </h2>
          <p className="text-lg text-slate-600">
            Share a bit about your clinic and we’ll show you how Keel can help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Lead form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-1 text-xl font-semibold text-slate-900">
              Send us a message
            </h3>
            <p className="mb-6 text-sm text-slate-500">
              We’ll get back within one business day with a short Loom or a call.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@business.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Business name</Label>
                <Input
                  id="business"
                  placeholder="Sunrise Dental Group"
                  value={formData.business}
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) =>
                      setFormData({ ...formData, industry: value })
                    }
                  >
                    <SelectTrigger id="industry" className={selectTriggerClasses}>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent
                      className={selectContentClasses}
                      position="popper"
                      sideOffset={6}
                    >
                      <SelectItem value="medspa" className={selectItemClasses}>
                        Med Spa
                      </SelectItem>
                      <SelectItem value="dental" className={selectItemClasses}>
                        Dental / Ortho
                      </SelectItem>
                      <SelectItem value="physio" className={selectItemClasses}>
                        Physiotherapy / Pilates
                      </SelectItem>
                      <SelectItem
                        value="realestate"
                        className={selectItemClasses}
                      >
                        Real Estate
                      </SelectItem>
                      <SelectItem value="clinic" className={selectItemClasses}>
                        Clinic / Aesthetic
                      </SelectItem>
                      <SelectItem value="home" className={selectItemClasses}>
                        Home Services
                      </SelectItem>
                      <SelectItem
                        value="restaurants"
                        className={selectItemClasses}
                      >
                        Restaurants
                      </SelectItem>
                      <SelectItem value="other" className={selectItemClasses}>
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="callVolume">Monthly call volume</Label>
                  <Select
                    value={formData.callVolume}
                    onValueChange={(value) =>
                      setFormData({ ...formData, callVolume: value })
                    }
                  >
                    <SelectTrigger
                      id="callVolume"
                      className={selectTriggerClasses}
                    >
                      <SelectValue placeholder="Select volume" />
                    </SelectTrigger>
                    <SelectContent
                      className={selectContentClasses}
                      position="popper"
                      sideOffset={6}
                    >
                      <SelectItem value="0-100" className={selectItemClasses}>
                        0–100 calls
                      </SelectItem>
                      <SelectItem
                        value="100-300"
                        className={selectItemClasses}
                      >
                        100–300 calls
                      </SelectItem>
                      <SelectItem
                        value="300-500"
                        className={selectItemClasses}
                      >
                        300–500 calls
                      </SelectItem>
                      <SelectItem value="500+" className={selectItemClasses}>
                        500+ calls
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your call management challenges (missed calls, after-hours volume, no-shows, etc.)..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full font-semibold tracking-tight text-white"
                style={{
                  backgroundColor: BRAND,
                  borderColor: BRAND,
                }}
              >
                {isSubmitting ? "Sending..." : "Send to Keel"}
              </Button>
            </form>
          </div>

          {/* Right: Calendar embed */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5" style={{ color: BRAND }} />
              <h3 className="text-xl font-semibold text-slate-900">
                Prefer to pick a time?
              </h3>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Book a 30-minute walkthrough. We’ll show live call flows and
              examples from clinics like yours.
            </p>

            <iframe
              src={CALENDAR_LINK}
              className="h-[520px] w-full rounded-xl border border-slate-200"
              loading="lazy"
              title="Book a demo with Keel"
            />

            <p className="mt-3 text-xs text-slate-500">
              If the calendar doesn&apos;t load,&nbsp;
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline"
                style={{ color: BRAND }}
              >
                open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Premium popup */}
      {feedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  backgroundColor:
                    feedback.type === "success" ? "#dcfce7" : "#fee2e2",
                }}
              >
                {feedback.type === "success" ? (
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: "#16a34a" }}
                  />
                ) : (
                  <AlertCircle className="h-5 w-5" style={{ color: "#b91c1c" }} />
                )}
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-slate-900">
                  {feedback.title}
                </h4>
                <p className="text-sm text-slate-600">{feedback.message}</p>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <Button
                size="sm"
                className="rounded-full px-4 text-sm font-medium"
                style={{ backgroundColor: BRAND, borderColor: BRAND }}
                onClick={() => setFeedback(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
