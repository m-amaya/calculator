import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {},
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Inter Variable', sans-serif"
  },
  primaryColor: "blue"
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
