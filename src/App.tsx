import { AppShell, Container } from "@mantine/core";
import { Heading } from "@src/components/heading";
import { Keyboard } from "@src/components/keyboard";
import { Screen } from "@src/components/screen";

export function App() {
  return (
    <AppShell header={{ height: 60 }}>
      <Heading />
      <AppShell.Main>
        <Container p="md" size="sm" style={{ height: "calc(100dvh - 60px)" }}>
          <Screen />
          <Keyboard />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
