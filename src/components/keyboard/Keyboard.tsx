import { Grid, SegmentedControl } from "@mantine/core";
import { Key } from "@src/components/keyboard/Key";
import { keys } from "@src/tokens/keys";

export function Keyboard() {
  return (
    <Grid columns={7} p="md">
      <Grid.Col span={2}>
        <SegmentedControl fullWidth data={["Rad", "Deg"]} size="lg" />
      </Grid.Col>
      {keys.map((key, idx) => (
        <Grid.Col key={idx} span={1}>
          <Key label={key.label} variant={key.variant}>
            {key.display}
          </Key>
        </Grid.Col>
      ))}
    </Grid>
  );
}
