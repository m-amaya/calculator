import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
  rgba,
  SegmentedControl,
  Tooltip
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    aqua: [
      "#dfffff",
      "#caffff",
      "#9afefe",
      "#66fdfd",
      "#3ffcfc",
      "#28fcfc",
      "#0cfcfc",
      "#00e0e0",
      "#00c8c8",
      "#00adad"
    ],
    cherry: [
      "#ffe9f1",
      "#ffd1e0",
      "#faa1bd",
      "#f66e99",
      "#f2437a",
      "#f02866",
      "#f0185c",
      "#d6094d",
      "#c00043",
      "#a90039"
    ],
    lime: [
      "#eeffe5",
      "#dffdcf",
      "#bff9a1",
      "#9df66e",
      "#81f344",
      "#6ef129",
      "#64f018",
      "#53d509",
      "#46bd00",
      "#36a400"
    ],
    pink: [
      "#ffe9ff",
      "#fed1fd",
      "#faa1f7",
      "#f66ef1",
      "#f243eb",
      "#f028e8",
      "#f018e8",
      "#d609cf",
      "#bf00b9",
      "#a700a1"
    ],
    violet: [
      "#f6e9ff",
      "#e6cfff",
      "#c89cff",
      "#aa64ff",
      "#9037fe",
      "#7f19fe",
      "#7709ff",
      "#6500e4",
      "#5a00cc",
      "#4d00b3"
    ],
    yellow: [
      "#ffffe2",
      "#fefccc",
      "#fef99c",
      "#fdf566",
      "#fcf23b",
      "#fcf11f",
      "#fcf00c",
      "#e0d500",
      "#c7bd00",
      "#aba300"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Source Code Pro Variable', monospace",
  headings: {
    fontFamily: "'Source Code Pro Variable', monospace"
  },
  primaryColor: "lime",
  components: {
    SegmentedControl: SegmentedControl.extend({
      styles: {
        root: {
          "--sc-color": "var(--mantine-segmented-control-indicator)",
          backgroundColor: "var(--mantine-segmented-control-bg)"
        },
        label: {
          color: "white"
        }
      }
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        offset: 10
      },
      styles: (theme) => ({
        tooltip: {
          "--tooltip-bg": theme.colors.gray[9],
          "--tooltip-color": theme.white
        }
      })
    })
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--mantine-ai-color": theme.colors.lime[8],
    "--mantine-ai-hover": rgba(theme.white, 0.1),
    "--mantine-ai-hover-color": theme.colors.lime[6],
    "--mantine-color-body": `linear-gradient(to right, ${theme.colors.violet[4]}, ${theme.colors.violet[9]})`,
    "--mantine-color-text": theme.white,
    "--mantine-key-border-color": theme.colors.lime[8],
    "--mantine-key-primary-bg": theme.colors.lime[7],
    "--mantine-key-primary-hover-bg": theme.colors.lime[6],
    "--mantine-key-secondary-bg": rgba(theme.white, 0.3),
    "--mantine-key-secondary-hover-bg": rgba(theme.white, 0.4),
    "--mantine-key-tertiary-bg": rgba(theme.white, 0.1),
    "--mantine-key-tertiary-hover-bg": rgba(theme.white, 0.2),
    "--mantine-segmented-control-bg": rgba(theme.white, 0.1),
    "--mantine-segmented-control-indicator": rgba(theme.white, 0.2),
    "--mantine-screen-bg": rgba(theme.white, 0.1)
  },
  dark: {
    "--mantine-ai-color": theme.colors.aqua[8],
    "--mantine-ai-hover": rgba(theme.white, 0.1),
    "--mantine-ai-hover-color": theme.colors.aqua[6],
    "--mantine-color-body": `linear-gradient(to right, ${theme.colors.cherry[4]}, ${theme.colors.cherry[9]})`,
    "--mantine-color-text": theme.white,
    "--mantine-key-border-color": theme.colors.aqua[9],
    "--mantine-key-primary-bg": theme.colors.aqua[8],
    "--mantine-key-primary-hover-bg": theme.colors.aqua[7],
    "--mantine-key-secondary-bg": rgba(theme.white, 0.3),
    "--mantine-key-secondary-hover-bg": rgba(theme.white, 0.4),
    "--mantine-key-tertiary-bg": rgba(theme.white, 0.1),
    "--mantine-key-tertiary-hover-bg": rgba(theme.white, 0.2),
    "--mantine-segmented-control-bg": rgba(theme.white, 0.1),
    "--mantine-segmented-control-indicator": rgba(theme.white, 0.2),
    "--mantine-screen-bg": rgba(theme.white, 0.1)
  }
});
