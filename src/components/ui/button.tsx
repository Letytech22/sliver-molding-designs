import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 font-display text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ember: "bg-ember text-ink hover:bg-ember-soft",
        light: "bg-paper text-ink hover:bg-ice",
        outline: "border border-current/25 bg-transparent hover:border-current/70",
        ghost: "bg-transparent px-2 hover:text-ember",
      },
      size: {
        default: "min-h-11 px-5 py-3",
        sm: "min-h-9 px-3 py-2 text-xs",
        lg: "min-h-12 px-7 py-3.5",
        icon: "size-10 min-h-10 p-0",
      },
    },
    defaultVariants: { variant: "ember", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ asChild, className, variant, size, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
