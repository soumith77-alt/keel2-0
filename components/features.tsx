import { Phone, PhoneCall, Calendar, MessageSquare, Zap, GitBranch, BarChart3, Voicemail, Users } from "lucide-react"

const BRAND = "#253c80"
export function Features() {
  const features = [
    {
      icon: Phone,
      title: "24/7 AI Call Answering",
      description: "Natural, human-like voice that greets every patient and answers every patient question, address concerns, and provides accurate, friendly support for all clinic needs.",
    },
    // {
    //   icon: PhoneCall,
    //   title: "Missed Call → Instant Callback",
    //   description: "Call back in 30–60 seconds, never lose a hot lead",
    // },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Syncs with your dental calendar — books, reschedules, and confirms instantly.",
    },
    // {
    //   icon: MessageSquare,
    //   title: "Lead Capture & Nurture",
    //   description: "SMS/email follow-up sequences on autopilot",
    // },
    {
      icon: Zap,
      title: "CRM & Tool Integrations",
      description: "Connects with your PMS, CRM, or marketing tool.",
    },
    {
      icon: GitBranch,
      title: "Custom Call Flows",
      description: "Route calls by treatment type, urgency, or location — tailor every patient experience.",
    },
    {
      icon: BarChart3,
      title: "Call Analytics Dashboard",
      description: "See every call, booking, and conversion in one place — track what’s working and where leads drop.",
    },
    // {
    //   icon: Voicemail,
    //   title: "Voicemail to Text / Email",
    //   description: "Automatic transcription and logging of all messages",
    // },
    {
      icon: Users,
      title: "Human Escalation",
      description: " When a call needs personal attention, it transfers seamlessly to your front-desk team.",
    },
  ]

  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">More than just a call bot.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: `${BRAND}14` }}>
                <feature.icon className="h-6 w-6" style={{ color: BRAND }} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Need something custom? We can deploy and integrate with your existing systems.
          </p>
        </div>
      </div>
    </section>
  )
}
