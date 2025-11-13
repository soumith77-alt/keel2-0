// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { sourceSerif } from "@/lib/fonts";

// type NavbarProps = {
//   onBookDemo?: () => void;
// };

// export function Navbar({ onBookDemo }: NavbarProps) {
//   return (
//     // translucent bar with hairline bottom border (Apple-y)
//     <header className="sticky top-0 z-50 supports-[backdrop-filter]:bg-white/70 bg-white/85 backdrop-blur-md border-b border-black/[0.06]">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="flex h-16 items-center justify-between lg:h-[72px]">
//           {/* Brand — elegant, not shouty */}
//           <Link
//             href="/"
//             className={`${sourceSerif.className} select-none text-[45px] leading-none font-semibold tracking-tight text-[#253c80]`}

//             // className="select-none text-[41px] leading-none font-semibold tracking-tight text-[#253c80]"
//           >
//             keel
//           </Link>

//           {/* Centered nav — calm spacing, premium hover underline */}
//           <nav className="hidden md:flex items-center gap-8">
//             {[
//               ["How It Works?", "#call-flow"],
//               ["Industries", "#industries"],
//               ["Pricing", "#pricing"],
//               ["Features", "#solutions"],
//             ].map(([label, href]) => (
//               <a
//                 key={label}
//                 href={href}
//                 className="relative text-[15px] text-slate-700 hover:text-slate-900 transition-colors
//                            after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#253c80]
//                            after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>

//           {/* Actions — quiet link + primary CTA */}
//           <div className="flex items-center gap-3">
//                         {/* Primary: refined pill, subtle shadow, feels native */}
//             <Button
//               size="lg"
//               onClick={onBookDemo}
//               className="rounded-full px-5 h-10 text-[15px] font-medium
//                          bg-[#253c80] text-white shadow-sm hover:bg-[#1e3268] active:scale-[0.99] transition"
//             >
//               Book a demo
//             </Button>
//             <a
//               href="#contact"
//               className="hidden sm:inline-block text-[15px] text-slate-700 hover:text-slate-900 transition-colors"
//             >
//               Talk to us
//             </a>


//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// components/navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sourceSerif } from "@/lib/fonts";

type NavbarProps = { onBookDemo?: () => void };

export function Navbar({ onBookDemo }: NavbarProps) {
  return (
    // fixed bar across the top
    <header className="fixed top-0 inset-x-0 z-[100] supports-[backdrop-filter]:bg-white/70 bg-white/85 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 lg:h-[72px] items-center justify-between">
          <Link
            href="/"
            className={`${sourceSerif.className} select-none text-[45px] leading-none font-semibold tracking-tight text-[#253c80]`}
          >
            keel
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              ["How It Works?", "#call-flow"],
              ["Features", "#solutions"],
              ["Industries", "#industries"],
              ["Why Us ? ", "#comparison"],
              ,
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative text-[15px] text-slate-700 hover:text-slate-900 transition-colors
                           after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#253c80]
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              size="lg"
              onClick={onBookDemo}
              className="rounded-full px-5 h-10 text-[15px] font-medium
                         bg-[#253c80] text-white shadow-sm hover:bg-[#1e3268] active:scale-[0.99] transition"
            >
              Book a demo
            </Button>

            <a
              href="#contact"
              className="hidden sm:inline-block text-[15px] text-slate-700 hover:text-slate-900 transition-colors"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
