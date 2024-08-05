import { Flex } from "@mantine/core";
import classes from "./Screen.module.css";

export function Screen() {
  return (
    <Flex align="flex-end" className={classes.screen} justify="flex-end" p="md">
      Screen
    </Flex>
  );
}
