import { ButtonLink } from '../../lib/tropikux-library.js';
import {
  ArrowLeft,
  ArrowRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    label: { control: "text" },
    showText: { control: "boolean" },
    showLeadingIcon: { control: "boolean" },
    showTrailingIcon: { control: "boolean" },
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

export const Default = {
  args: {
    size: "Medium",
    color: "primary",
    label: "Button text",
    showText: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIconWeight: "regular",
    trailingIconWeight: "regular",
  },
};

export const TodosLosColores = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ButtonLink color="primary" label="Button text" />
      <ButtonLink color="secondary" label="Button text" />
      <ButtonLink color="tertiary" label="Button text" />
    </div>
  ),
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ButtonLink size="XLarge" label="Button text" />
      <ButtonLink size="Large" label="Button text" />
      <ButtonLink size="Medium" label="Button text" />
      <ButtonLink size="Small" label="Button text" />
    </div>
  ),
};
