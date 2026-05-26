import { Asset } from '../../lib/tropikux-library.js';

export default {
  title: "Components/Asset",
  component: Asset,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["2XLarge", "XLarge", "Large", "Medium", "Small", "XSmall"],
    },
    type: {
      control: "select",
      options: ["Icon", "Initials", "Photo"],
    },
    iconWeight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
    firstLetter: { control: "text" },
    secondLetter: { control: "text" },
    photo: { control: "text" },
  },
};

export const Icono = {
  args: {
    size: "Medium",
    type: "Icon",
    iconWeight: "fill",
    firstLetter: "A",
    secondLetter: "B",
  },
};

export const Iniciales = {
  args: { ...Icono.args, type: "Initials" },
};

export const Foto = {
  args: {
    ...Icono.args,
    type: "Photo",
    photo: "https://i.pravatar.cc/150",
  },
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Asset size="2XLarge" />
      <Asset size="XLarge" />
      <Asset size="Large" />
      <Asset size="Medium" />
      <Asset size="Small" />
      <Asset size="XSmall" />
    </div>
  ),
};

export const TodosLosTipos = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Asset type="Icon" />
      <Asset type="Initials" firstLetter="A" secondLetter="B" />
      <Asset type="Photo" photo="https://i.pravatar.cc/150" />
    </div>
  ),
};
