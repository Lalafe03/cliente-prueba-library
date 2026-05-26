import { Button } from '../../lib/tropikux-library.js';
import { MagnifyingGlass, CaretRight } from "@phosphor-icons/react";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["Filled", "Outline", "NoFilled"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "neutral"],
    },
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small", "XSmall"],
    },
    buttonText: { control: "text" },
    showText: { control: "boolean" },
    showLeadingIcon: { control: "boolean" },
    showTrailingIcon: { control: "boolean" },
    iconWeight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
  },
};

export const Primario = {
  args: {
    variant: "Filled",
    color: "primary",
    size: "Medium",
    buttonText: "Button text",
    showText: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    iconWeight: "regular",
  },
};

export const Secundario = {
  args: { ...Primario.args, color: "secondary" },
};

export const Terciario = {
  args: { ...Primario.args, color: "tertiary" },
};

export const Neutral = {
  args: { ...Primario.args, color: "neutral" },
};

export const IconosPersonalizados = {
  args: {
    ...Primario.args,
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIcon: MagnifyingGlass,
    trailingIcon: CaretRight,
  },
};

export const TodasVariantes = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Button variant="Filled" buttonText="Filled" />
      <Button variant="Outline" buttonText="Outline" />
      <Button variant="NoFilled" buttonText="No filled" />
    </div>
  ),
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Button size="XLarge" buttonText="XLarge" />
      <Button size="Large" buttonText="Large" />
      <Button size="Medium" buttonText="Medium" />
      <Button size="Small" buttonText="Small" />
      <Button size="XSmall" buttonText="XSmall" />
    </div>
  ),
};
