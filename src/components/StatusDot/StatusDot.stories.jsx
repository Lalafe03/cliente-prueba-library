import { StatusDot } from '../../lib/tropikux-library.js';

export default {
  title: "Components/StatusDot",
  component: StatusDot,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small", "XSmall"],
    },
    status: {
      control: "select",
      options: ["Default", "Active", "Missing", "Busy", "Inactive"],
    },
  },
};

export const Default = {
  args: {
    size: "XLarge",
    status: "Default",
  },
};

export const TodosLosStatus = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StatusDot status="Default" />
      <StatusDot status="Active" />
      <StatusDot status="Missing" />
      <StatusDot status="Busy" />
      <StatusDot status="Inactive" />
    </div>
  ),
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StatusDot size="XLarge" />
      <StatusDot size="Large" />
      <StatusDot size="Medium" />
      <StatusDot size="Small" />
      <StatusDot size="XSmall" />
    </div>
  ),
};
