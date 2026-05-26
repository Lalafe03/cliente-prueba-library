import { TextLabel } from '../../lib/tropikux-library.js';

export default {
  title: "Components/TextLabel",
  component: TextLabel,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small", "XSmall", "XXSmall"],
    },
    orientation: {
      control: "select",
      options: ["Horizontal", "Vertical"],
    },
    labelText: { control: "text" },
    dataText: { control: "text" },
    supportText: { control: "text" },
    showLabel: { control: "boolean" },
    showSupport: { control: "boolean" },
    showParameter: { control: "boolean" },
  },
};

export const Horizontal = {
  args: {
    size: "Medium",
    orientation: "Horizontal",
    labelText: "Label",
    dataText: "Data text",
    supportText: "Support text",
    showLabel: true,
    showSupport: true,
    showParameter: true,
  },
};

export const Vertical = {
  args: { ...Horizontal.args, orientation: "Vertical" },
};

export const TamañosHorizontal = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextLabel size="XLarge" labelText="Label" dataText="Data text" />
      <TextLabel size="Large" labelText="Label" dataText="Data text" />
      <TextLabel size="Medium" labelText="Label" dataText="Data text" />
      <TextLabel size="Small" labelText="Label" dataText="Data text" />
      <TextLabel size="XSmall" labelText="Label" dataText="Data text" />
      <TextLabel size="XXSmall" labelText="Label" dataText="Data text" />
    </div>
  ),
};

export const TamañosVertical = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextLabel
        size="XLarge"
        orientation="Vertical"
        labelText="Label"
        dataText="Data text"
        supportText="Support text"
      />
      <TextLabel
        size="Large"
        orientation="Vertical"
        labelText="Label"
        dataText="Data text"
        supportText="Support text"
      />
      <TextLabel
        size="Medium"
        orientation="Vertical"
        labelText="Label"
        dataText="Data text"
        supportText="Support text"
      />
      <TextLabel
        size="Small"
        orientation="Vertical"
        labelText="Label"
        dataText="Data text"
        supportText="Support text"
      />
      <TextLabel
        size="XSmall"
        orientation="Vertical"
        labelText="Label"
        dataText="Data text"
        supportText="Support text"
      />
      <TextLabel
        size="XXSmall"
        orientation="Vertical"
        labelText="Label"
        dataText="Data text"
        supportText="Support text"
      />
    </div>
  ),
};
