// // components/book-demo-button.tsx
// "use client";

// import { Button, type ButtonProps } from "@/components/ui/button";
// import { useCal } from "@/components/cal-provider";

// const CAL_SLUG = "soumith-reddy-9xbbzl/30min";

// export function BookDemoButton(props: ButtonProps) {
//   const { open } = useCal();

//   return (
//     <Button
//       {...props}
//       onClick={() => open(CAL_SLUG)}
//     >
//       {props.children ?? "Book a demo"}
//     </Button>
//   );
// }
