import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#EC4899] text-white hover:bg-[#BE185D] hover:shadow-lg hover:shadow-pink-500/20",
        destructive:
          "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
        outline:
          "border border-[#F9A8D4] bg-transparent text-[#EC4899] hover:bg-[#FCE7F3] hover:text-[#BE185D]",
        secondary:
          "bg-[#FCE7F3] text-[#BE185D] hover:bg-[#F9A8D4]/80",
        ghost: "hover:bg-[#FCE7F3] hover:text-[#EC4899] text-slate-700",
        link: "text-[#EC4899] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
