import { CounterDot } from '../../lib/tropikux-library.js';

export default {
  title: "Components/CounterDot",
  component: CounterDot,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small", "XSmall"],
    },
    label: { control: "text" },
  },
};

export const Default = {
  args: {
    size: "Medium",
    label: "00",
  },
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <CounterDot size="XLarge" label="00" />
      <CounterDot size="Large" label="00" />
      <CounterDot size="Medium" label="00" />
      <CounterDot size="Small" />
      <CounterDot size="XSmall" />
    </div>
  ),
};
