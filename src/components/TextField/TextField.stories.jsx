import { TextField } from '../../lib/tropikux-library.js';
import { MagnifyingGlass } from "@phosphor-icons/react";

export default {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["Large", "Medium", "Small", "XSmall"],
    },
    placeholder: { control: "text" },
    labelText: { control: "text" },
    helperText: { control: "text" },
    showLabel: { control: "boolean" },
    showHelperText: { control: "boolean" },
    showLeadingIcon: { control: "boolean" },
    showTrailingIcon: { control: "boolean" },
    isError: { control: "boolean" },
    isDisabled: { control: "boolean" },
    leadingIconWeight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
    trailingIconWeight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
  },
};

export const Activated = {
  args: {
    size: "Large",
    placeholder: "Placeholder",
    labelText: "Label",
    helperText: "Helper text",
    showLabel: true,
    showHelperText: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    isError: false,
    isDisabled: false,
  },
};

export const Error = {
  args: { ...Activated.args, isError: true },
};

export const Disabled = {
  args: { ...Activated.args, isDisabled: true },
};

export const TodosLosTamaños = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "300px",
      }}
    >
      <TextField size="Large" labelText="Label" placeholder="Large" />
      <TextField size="Medium" labelText="Label" placeholder="Medium" />
      <TextField size="Small" labelText="Label" placeholder="Small" />
      <TextField size="XSmall" placeholder="XSmall" />
    </div>
  ),
};

export const TodosLosEstados = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "300px",
      }}
    >
      <TextField labelText="Label" placeholder="Default" />
      <TextField
        labelText="Label"
        placeholder="Error"
        isError={true}
        helperText="Este campo tiene un error"
      />
      <TextField labelText="Label" placeholder="Disabled" isDisabled={true} />
    </div>
  ),
};
