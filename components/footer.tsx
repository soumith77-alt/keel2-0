
// // import Link from "next/link";
// // import { sourceSerif } from "@/lib/fonts";

// // const BRAND = "#253c80";

// // export function Footer() {
// //   return (
// //     <footer className="border-t border-slate-200 bg-white">
// //       <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
// //         <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
// //           {/* Brand */}
// //           <div>
// //             <span
// //               className={`${sourceSerif.className} select-none text-[30px] leading-none font-semibold tracking-tight`}
// //               style={{ color: BRAND }}
// //             >
// //               keel
// //             </span>
// //           </div>

// //           {/* Socials */}
// //           <div className="flex items-center gap-4">
// //             {/* Instagram */}
// //             <Link
// //               href="https://www.instagram.com/say.keel/"
// //               target="_blank"
// //               rel="noreferrer"
// //               aria-label="Keel on Instagram"
// //               className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-slate-200 transition"
// //             >
// //               {/* glow on hover */}
// //               <span
// //                 className="pointer-events-none absolute -inset-2 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
// //                 style={{ background: `${BRAND}55` }}
// //               />
// //               <span
// //                 className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur group-hover:opacity-40"
// //                 style={{
// //                   background:
// //                     "radial-gradient(60% 60% at 50% 40%, rgba(37,60,128,0.55) 0%, rgba(37,60,128,0.05) 70%)",
// //                 }}
// //               />
// //               <svg
// //                 viewBox="0 0 24 24"
// //                 className="h-5 w-5 transition-transform duration-300 group-hover:scale-[1.08]"
// //                 style={{ color: BRAND }}
// //                 fill="currentColor"
// //               >
// //                 <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 9.5zm5.75-2.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" />
// //               </svg>
// //             </Link>

// //             {/* LinkedIn */}
// //             <Link
// //               href="https://www.linkedin.com/company/saykeel"
// //               target="_blank"
// //               rel="noreferrer"
// //               aria-label="Keel on LinkedIn"
// //               className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-slate-200 transition"
// //             >
// //               <span
// //                 className="pointer-events-none absolute -inset-2 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
// //                 style={{ background: `${BRAND}55` }}
// //               />
// //               <span
// //                 className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur group-hover:opacity-40"
// //                 style={{
// //                   background:
// //                     "radial-gradient(60% 60% at 50% 40%, rgba(37,60,128,0.55) 0%, rgba(37,60,128,0.05) 70%)",
// //                 }}
// //               />
// //               <svg
// //                 viewBox="0 0 24 24"
// //                 className="h-5 w-5 transition-transform duration-300 group-hover:scale-[1.08]"
// //                 style={{ color: BRAND }}
// //                 fill="currentColor"
// //               >
// //                 <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM14.5 9c3.04 0 5.5 2.32 5.5 6.1V21h-4v-5.23c0-1.54-.55-2.6-1.94-2.6-1.06 0-1.7.72-1.98 1.43-.1.25-.13.6-.13.95V21h-4s.05-9.75 0-12h4v1.7c.53-.83 1.49-1.7 3.49-1.7z" />
// //               </svg>
// //             </Link>
// //           </div>
// //         </div>

// //         <div className="mt-8 text-center text-sm text-slate-600">
// //           <p>
// //             keel &copy; {new Date().getFullYear()}, All Rights Reserved.
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// // components/footer.tsx

// // import Link from "next/link";
// // import { sourceSerif } from "@/lib/fonts";

// // const BRAND = "#253c80";

// // export function Footer() {
// //   return (
// //     <footer className="border-t border-slate-200 bg-white">
// //       <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6">
// //         <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
// //           {/* Brand (smaller) */}
// //           <span
// //             className={`${sourceSerif.className} select-none text-[24px] leading-tight font-semibold tracking-tight`}
// //             style={{ color: BRAND }}
// //           >
// //             keel
// //           </span>

// //           {/* Socials (smaller + tighter) */}
          
// //           <div className="flex items-center gap-3">
// //             <Link
// //               href="https://instagram.com/say.keel/"
// //               target="_blank"
// //               rel="noreferrer"
// //               aria-label="Keel on Instagram"
// //               className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-slate-200"
// //             >
// //               <span
// //                 className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60"
// //                 style={{ background: `${BRAND}40` }}
// //               />
// //               <svg viewBox="0 0 24 24" className="h-4 w-4" fill={BRAND}>
// //                 <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 9.5zm5.75-2.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/>
// //               </svg>
// //             </Link>

// //             <Link
// //               href="https://www.linkedin.com/company/saykeel"
// //               target="_blank"
// //               rel="noreferrer"
// //               aria-label="Keel on LinkedIn"
// //               className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-slate-200"
// //             >
// //               <span
// //                 className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60"
// //                 style={{ background: `${BRAND}40` }}
// //               />
// //               <svg viewBox="0 0 24 24" className="h-4 w-4" fill={BRAND}>
// //                 <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM14.5 9c3.04 0 5.5 2.32 5.5 6.1V21h-4v-5.23c0-1.54-.55-2.6-1.94-2.6-1.06 0-1.7.72-1.98 1.43-.1.25-.13.6-.13.95V21h-4c.05-9.75 0-12 0-12h4v1.7c.53-.83 1.49-1.7 3.49-1.7z"/>
// //               </svg>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Copyright (tighter margin) */}
// //         <div className="mt-4 text-center text-xs text-slate-600">
// //           keel &copy; {new Date().getFullYear()}, All Rights Reserved.
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // components/footer.tsx (snippet)
// import Link from "next/link";
// import { sourceSerif } from "@/lib/fonts";

// const BRAND = "#253c80";

// function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" {...props}>
//       {/* rounded square */}
//       <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
//       {/* lens */}
//       <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
//       {/* viewfinder dot */}
//       <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
//     </svg>
//   );
// }

// function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" {...props}>
//       <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
//       {/* "in" */}
//       <rect x="6.2" y="10.2" width="2.2" height="7.6" fill="currentColor" />
//       <circle cx="7.3" cy="7.3" r="1.3" fill="currentColor" />
//       <path
//         d="M12.4 10.2h2.1v1.2c.5-.8 1.3-1.4 2.6-1.4 2.1 0 3.4 1.4 3.4 3.7v4.1h-2.2v-3.6c0-1.4-.6-2.2-1.8-2.2-1.2 0-2 .8-2 2.2v3.6h-2.1v-7.6z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// export function Footer() {
//   return (
//     <footer className="border-t border-slate-200 bg-white">
//       <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6"> {/* tighter spacing */}
//         <div className="flex items-center justify-between">
//           <span
//             className={`${sourceSerif.className} select-none text-[26px] leading-none font-semibold tracking-tight`}
//             style={{ color: BRAND }}
//           >
//             keel
//           </span>

//           {/* social */}
//           <div className="flex items-center gap-3">
//             {/* Instagram */}
//             <Link
//               href="https://instagram.com/say.keel/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="Keel on Instagram"
//               className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 text-[color:var(--brand)]"
//               style={{ ["--brand" as any]: BRAND }}
//             >
//               <span
//                 className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60"
//                 style={{ background: `${BRAND}40` }}
//               />
//               <InstagramIcon className="h-4.5 w-4.5" />
//             </Link>

//             {/* LinkedIn */}
//             <Link
//               href="https://www.linkedin.com/company/saykeel"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="Keel on LinkedIn"
//               className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 text-[color:var(--brand)]"
//               style={{ ["--brand" as any]: BRAND }}
//             >
//               <span
//                 className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60"
//                 style={{ background: `${BRAND}40` }}
//               />
//               <LinkedInIcon className="h-4.5 w-4.5" />
//             </Link>
//           </div>
//         </div>

//         <div className="mt-4 text-center text-[13px] text-slate-600"> {/* tighter */}
//           keel &copy; {new Date().getFullYear()}, All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }


// components/footer.tsx
import Link from "next/link";
import { sourceSerif } from "@/lib/fonts";

const BRAND = "#253c80";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="6.2" y="10.2" width="2.2" height="7.6" fill="currentColor" />
      <circle cx="7.3" cy="7.3" r="1.3" fill="currentColor" />
      <path
        d="M12.4 10.2h2.1v1.2c.5-.8 1.3-1.4 2.6-1.4 2.1 0 3.4 1.4 3.4 3.7v4.1h-2.2v-3.6c0-1.4-.6-2.2-1.8-2.2-1.2 0-2 .8-2 2.2v3.6h-2.1v-7.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
        {/* top row: logo + socials */}
        <div className="flex items-center justify-between gap-4">
          <span
            className={`${sourceSerif.className} select-none text-[26px] leading-none font-semibold tracking-tight`}
            style={{ color: BRAND }}
          >
            keel
          </span>

          <div className="flex items-center gap-3">
            <Link
              href="https://instagram.com/say.keel/"
              target="_blank"
              rel="noreferrer"
              aria-label="Keel on Instagram"
              className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 text-[color:var(--brand)]"
              style={{ ["--brand" as any]: BRAND }}
            >
              <span
                className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: `${BRAND}40` }}
              />
              <InstagramIcon className="h-[18px] w-[18px]" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/saykeel"
              target="_blank"
              rel="noreferrer"
              aria-label="Keel on LinkedIn"
              className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 text-[color:var(--brand)]"
              style={{ ["--brand" as any]: BRAND }}
            >
              <span
                className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: `${BRAND}40` }}
              />
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>

        {/* bottom row: copyright + contact email */}
        <div className="mt-4 flex flex-col items-center justify-between gap-2 text-[13px] text-slate-600 md:flex-row">
          <span>
            keel &copy; {new Date().getFullYear()}, All Rights Reserved.
          </span>

          <a
            href="mailto:hello@saykeel.com"
            className="font-medium text-[#253c80] hover:underline"
          >
            Contact us: hello@saykeel.com
          </a>
        </div>
      </div>
    </footer>
  );
}
