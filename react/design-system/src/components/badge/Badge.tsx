import { ComponentProps, forwardRef, ReactNode } from "react";

/* COLOR CLASSES */
const colorClasses = {
  neutral: "bg-gray-50 border-neutral-200 text-neutral-600",
  error: "bg-red-50 border-red-200 text-red-600",
  warning: "bg-amber-50 border-amber-200 text-amber-700",
  success: "bg-green-50 border-green-200 text-green-700",
  brand: "bg-indigo-50 border-indigo-200 text-indigo-700",
};

/* SIZE CLASSES */
const sizeClasses = {
  sm: "text-xs px-1.5 py-0.5",
  md: "text-sm px-2 py-0.5",
  lg: "text-sm px-2.5 py-1",
};

/* PROPS FOR BADGE COMPONENTS */
export interface BadgeProps extends ComponentProps<"span"> {
  /* Default sm */
  size?: "sm" | "md" | "lg";

  /* Default neutral */
  color?: "neutral" | "error" | "warning" | "success" | "brand";
  children: ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  props,
  ref
) {
  const { children, color = "neutral", size = "sm", ...restProps } = props;
  const className = `rounded-full border border-solid w-fit ${sizeClasses[size]} ${colorClasses[color]}`;

  return (
    <span ref={ref} className={className} {...restProps}>
      {children}
    </span>
  );
});

export default Badge;
