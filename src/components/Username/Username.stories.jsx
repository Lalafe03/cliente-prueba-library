import { Username } from '../../lib/tropikux-library.js';

export default {
  title: "Components/Username",
  component: Username,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small", "XSmall"],
    },
    status: {
      control: "select",
      options: ["Default", "Active", "MissingOut", "Busy", "Inactive"],
    },
    showSub: { control: "boolean" },
    nameText: { control: "text" },
    subText: { control: "text" },
  },
};

export const Default = {
  args: {
    size: "XLarge",
    status: "Default",
    showSub: true,
    nameText: "Username",
    subText: "Ver perfil",
  },
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Username size="XLarge" />
      <Username size="Large" />
      <Username size="Medium" />
      <Username size="Small" />
      <Username size="XSmall" />
    </div>
  ),
};

export const TodosLosStatus = {
  render: () => (
    <div style={{ display: "flex", gap: "32px" }}>
      <Username status="Default" />
      <Username status="Active" />
      <Username status="MissingOut" />
      <Username status="Busy" />
      <Username status="Inactive" />
    </div>
  ),
};
