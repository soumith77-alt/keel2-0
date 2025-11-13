import { Check, X } from "lucide-react"

const BRAND = "#253c80"

export function Comparison() {
  return (
    <section id="comparison" className="py-20 lg:py-28">
      {/* you don't really need this inner <section>, can be a div too */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
              AI Receptionist vs Hiring Another Front Desk
            </h2>
            <h4 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
              See the Difference in One Glance
            </h4>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Feature
                    </th>
                    <th
                      className="px-6 py-4 text-center text-sm font-semibold"
                      style={{ color: BRAND }}
                    >
                      keel AI
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                      Human Staff
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      Availability
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5" style={{ color: BRAND }} />
                        <span
                          className="font-medium"
                          style={{ color: BRAND }}
                        >
                          24/7 coverage
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-5 w-5 text-slate-400" />
                        <span className="text-slate-600">
                          Limited to office hours
                          <br />
                          missed calls = missed patients
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      Response rate
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5" style={{ color: BRAND }} />
                        <span
                          className="font-medium"
                          style={{ color: BRAND }}
                        >
                          Answers in 2 seconds
                          <br />
                          no hold time or ring delay
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-5 w-5 text-slate-400" />
                        <span className="text-slate-600">
                          Varies
                          <br />
                          busy, away, or juggling multiple calls
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      Follow-ups & reminders
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5" style={{ color: BRAND }} />
                        <span
                          className="font-medium"
                          style={{ color: BRAND }}
                        >
                          Automatic
                          <br />
                          sends confirmations and no-show reminders
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-5 w-5 text-slate-400" />
                        <span className="text-slate-600">
                          Manual
                          <br />
                          time-consuming and easy to miss
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      Training required
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5" style={{ color: BRAND }} />
                        <span
                          className="font-medium"
                          style={{ color: BRAND }}
                        >
                          None
                          <br />
                          ready on day 1
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-5 w-5 text-slate-400" />
                        <span className="text-slate-600">
                          Ongoing
                          <br />
                          hiring, onboarding, retraining
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      Scalability
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5" style={{ color: BRAND }} />
                        <span
                          className="font-medium"
                          style={{ color: BRAND }}
                        >
                          Instant
                          <br />
                          handles multiple calls at once
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-5 w-5 text-slate-400" />
                        <span className="text-slate-600">
                          One call at a time
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
