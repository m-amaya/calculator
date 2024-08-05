import { Text } from "@mantine/core";
import type { ReactNode } from "react";
import {
  PiDivideBold,
  PiEqualsBold,
  PiMinusBold,
  PiPercentBold,
  PiPiBold,
  PiPlusBold,
  PiXBold
} from "react-icons/pi";
import { RiSquareRoot } from "react-icons/ri";

export type KeyVariant = "primary" | "secondary" | "tertiary";

type Key = {
  display: ReactNode;
  label?: string;
  // shortcut: string;
  variant: KeyVariant;
};

export const keys: Key[] = [
  {
    display: "x!",
    label: "Factorial",
    variant: "tertiary"
  },
  {
    display: "(",
    label: "Left Parenthesis",
    variant: "tertiary"
  },
  {
    display: ")",
    label: "Right Parenthesis",
    variant: "tertiary"
  },
  {
    display: <PiPercentBold />,
    label: "Percentage",
    variant: "tertiary"
  },
  {
    display: "AC",
    label: "All Clear",
    variant: "tertiary"
  },
  {
    display: "Inv",
    label: "Inverse",
    variant: "tertiary"
  },
  {
    display: "sin",
    label: "Sine",
    variant: "tertiary"
  },
  {
    display: "ln",
    label: "Natural Logarithm",
    variant: "tertiary"
  },
  {
    display: "7",
    variant: "secondary"
  },
  {
    display: "8",
    variant: "secondary"
  },
  {
    display: "9",
    variant: "secondary"
  },
  {
    display: <PiDivideBold />,
    label: "Divide",
    variant: "tertiary"
  },
  {
    display: <PiPiBold />,
    label: "Pi",
    variant: "tertiary"
  },
  {
    display: "cos",
    label: "Cosine",
    variant: "tertiary"
  },
  {
    display: "log",
    label: "Logarithm",
    variant: "tertiary"
  },
  {
    display: "4",
    variant: "secondary"
  },
  {
    display: "5",
    variant: "secondary"
  },
  {
    display: "6",
    variant: "secondary"
  },
  {
    display: <PiXBold />,
    label: "Multiply",
    variant: "tertiary"
  },
  {
    display: "e",
    label: "Euler's Number",
    variant: "tertiary"
  },
  {
    display: "tan",
    label: "Tangent",
    variant: "tertiary"
  },
  {
    display: <RiSquareRoot />,
    label: "Square Root",
    variant: "tertiary"
  },
  {
    display: "1",
    variant: "secondary"
  },
  {
    display: "2",
    variant: "secondary"
  },
  {
    display: "3",
    variant: "secondary"
  },
  {
    display: <PiMinusBold />,
    label: "Minus",
    variant: "tertiary"
  },
  {
    display: "Ans",
    label: "Answer",
    variant: "tertiary"
  },
  {
    display: "EXP",
    label: "Exponential",
    variant: "tertiary"
  },
  {
    display: (
      <Text>
        x<sup>y</sup>
      </Text>
    ),
    label: "X to the power of Y",
    variant: "tertiary"
  },
  {
    display: "0",
    variant: "secondary"
  },
  {
    display: ".",
    label: "Point",
    variant: "secondary"
  },
  {
    display: <PiEqualsBold />,
    label: "Equals",
    variant: "primary"
  },
  {
    display: <PiPlusBold />,
    label: "Plus",
    variant: "tertiary"
  }
];
