import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        // default: blue border with light blue background and darker text
        default:
          "border-blue-500 bg-blue-50 text-blue-700 [a&]:hover:bg-blue-100",
        // secondary: green border with light green background
        secondary:
          "border-green-500 bg-green-50 text-green-700 [a&]:hover:bg-green-100",
        // destructive: red border with light red/pink background
        destructive:
          "border-red-500 bg-red-50 text-red-700 [a&]:hover:bg-red-100 focus-visible:ring-red-200 dark:focus-visible:ring-red-400",
        // outline: transparent background with a subtle gray border
        outline:
          "border-gray-300 bg-transparent text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
