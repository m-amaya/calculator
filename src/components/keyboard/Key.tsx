import { Tooltip, UnstyledButton } from "@mantine/core";
import { KeyVariant } from "@src/tokens/keys";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import classes from "./Key.module.css";

type KeyProps = {
  children: ReactNode;
  label?: string;
  variant: KeyVariant;
};

export function Key({ children, label, variant }: KeyProps) {
  const [isPressed, pressKey] = useState(false);

  return (
    <Tooltip label={label} disabled={!label}>
      <UnstyledButton
        aria-label={label}
        className={clsx(classes.button, classes[`button-${variant}`], {
          [`${classes.pressed}`]: isPressed
        })}
        onMouseDown={() => pressKey(true)}
        onMouseUp={() => pressKey(false)}
      >
        {children}
      </UnstyledButton>
    </Tooltip>
  );
}
