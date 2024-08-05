import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { FaPalette as PaletteIcon } from "react-icons/fa6";
import classes from "./ThemeButton.module.css";

export function ThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true
  });
  const isLight = colorScheme === "light";

  return (
    <Tooltip label={isLight ? "Cherry Theme" : "Grape Theme"}>
      <ActionIcon
        classNames={{
          root: classes.ai
        }}
        onClick={() => toggleColorScheme()}
        radius="xl"
        size="xl"
        variant="subtle"
      >
        {<PaletteIcon size={20} />}
      </ActionIcon>
    </Tooltip>
  );
}
