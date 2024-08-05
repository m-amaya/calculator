import { AppShell, Box, Group, Title } from "@mantine/core";
import { ThemeButton } from "@src/components/heading/ThemeButton";
import { FcCalculator } from "react-icons/fc";
import classes from "./Heading.module.css";

export function Heading() {
  return (
    <AppShell.Header className={classes.header}>
      <Group justify="space-between" p="md">
        <Group align="center" gap={8}>
          <FcCalculator size={28} />
          <Title className={classes.title}>Calculator</Title>
        </Group>
        <Box>
          <ThemeButton />
        </Box>
      </Group>
    </AppShell.Header>
  );
}
