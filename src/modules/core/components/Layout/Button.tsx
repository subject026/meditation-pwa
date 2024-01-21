import clsx from "clsx";
import { ReactNode } from "react";
import { Button as ButtonAria, ButtonProps } from "react-aria-components";

export function Button({
  children,
  fullWidth,
  ...props
}: ButtonProps & { children: ReactNode; fullWidth?: boolean }) {
  return (
    <ButtonAria
      className={clsx(
        "px-3 py-1.5 rounded bg-neutral-700 font-bold text-neutral-300 hover:text-neutral-200 hover:bg-neutral-800",
        fullWidth && "w-full"
      )}
      {...props}
    >
      {children}
    </ButtonAria>
  );
}
