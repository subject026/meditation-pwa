import { ReactNode } from "react";
import { Button as ButtonAria, ButtonProps } from "react-aria-components";

export function Button({
  children,
  ...props
}: ButtonProps & { children: ReactNode }) {
  return (
    <ButtonAria
      className="px-3 py-1.5 rounded bg-neutral-700 font-bold text-neutral-300 hover:text-neutral-200 hover:bg-neutral-800"
      {...props}
    >
      {children}
    </ButtonAria>
  );
}
