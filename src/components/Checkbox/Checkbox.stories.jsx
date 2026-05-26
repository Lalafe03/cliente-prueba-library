import { Checkbox } from '../../lib/tropikux-library.js';

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small"],
    },
    status: {
      control: "select",
      options: [
        "Selected",
        "Selected-Disabled",
        "Deselected",
        "Deselected-Disabled",
        "PartialSelected",
      ],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    iconWeight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
    label: { control: "text" },
    showLabel: { control: "boolean" },
  },
};

export const Selected = {
  args: {
    size: "Medium",
    status: "Selected",
    color: "primary",
    label: "Checkbox text",
    showLabel: true,
    iconWeight: "regular",
  },
};

export const TodosLosStatus = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox status="Selected" label="Selected" />
      <Checkbox status="Selected-Disabled" label="Selected Disabled" />
      <Checkbox status="Deselected" label="Deselected" />
      <Checkbox status="Deselected-Disabled" label="Deselected Disabled" />
      <Checkbox status="PartialSelected" label="Partial Selected" />
    </div>
  ),
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox size="XLarge" status="Selected" label="XLarge" />
      <Checkbox size="Large" status="Selected" label="Large" />
      <Checkbox size="Medium" status="Selected" label="Medium" />
      <Checkbox size="Small" status="Selected" label="Small" />
    </div>
  ),
};

export const TodosLosColores = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox color="primary" status="Selected" label="Primary" />
      <Checkbox color="secondary" status="Selected" label="Secondary" />
      <Checkbox color="tertiary" status="Selected" label="Tertiary" />
    </div>
  ),
};
