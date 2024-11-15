import { ComponentProps, forwardRef, ReactNode } from "react";

const colorClasses = {
  primary:
    "bg-indigo-700 text-white hover:bg-indigo-800 focus:bg-indigo-800 focus:ring focus:ring-indigo-800 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed",
  secondary:
    "bg-white shadow-md border-[0.5px] border-neutral-200 hover:bg-neutral-50 focus:ring focus:ring-indigo-100 text-neutral-900 disabled:bg-neutral-100",
  tertiary:
    "bg-none  border-[0.5px] border-neutral-200 hover:bg-neutral-50 focus:ring focus:ring-indigo-100  text-indigo-700",
  linkColor: "text-indigo-700 focus:ring focus:ring-indigo-100",
  linkGray:
    "bg-none text-neutral-600 hover:text-neutral-900 focus:ring focus:ring-indigo-100",
  destructive:
    "bg-red-600 border-none hover:bg-red-700 focus:ring focus:ring-red-100 text-white disabled:bg-transparent",
};

const sizeClasses = {
  md: "h-10 gap-1.5 py-2.5 px-3.5 text-sm leading-5",
  lg: "h-11 gap-2 py-2.5 px-3.5 text-base leading-6",
  xl: "h-12 gap-2 py-3 px-5 text-base leading-6",
  xxl: "h-[60px] gap-3 py-4 px-6 text-lg leading-7",
  mdIcon: "h-10 p-2.5",
  lgIcon: "h-11 p-3",
  xlIcon: "h-12 p-3.5",
  xxlIcon: "h-14 p-4",
  mdLink: "text-sm font-medium",
  lgLink: "text-base font-medium",
  xlLink: "text-base font-medium",
  xxlLink: "text-lg font-medium",
};

export interface ButtonProps extends ComponentProps<"button"> {
  size?:
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "mdIcon"
    | "lgIcon"
    | "xlIcon"
    | "xxlIcon"
    | "mdLink"
    | "lgLink"
    | "xlLink"
    | "xxlLink";

  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "linkColor"
    | "linkGray"
    | "destructive";

  children: ReactNode;

  iconPosition?: "start" | "end";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const {
    children,
    color = "primary",
    size = "md",
    iconPosition,
    leftIcon,
    rightIcon,
    ...restProps
  } = props;
  const className = `inline-flex w-fit items-center justify-center rounded-[4px] gap-1 font-medium border-none bg-none outline-inherit p-0 cursor-pointer ${sizeClasses[size]} ${colorClasses[color]}`;

  return (
    <button ref={ref} className={className} {...restProps}>
      {iconPosition === "start" && (
        <label className="inline-flex text-inherit ">{leftIcon}</label>
      )}
      {children}
      {iconPosition === "end" && (
        <label className="inline-flex text-inherit">{rightIcon}</label>
      )}
    </button>
  );
});

export default Button;
