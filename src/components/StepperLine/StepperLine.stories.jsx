import { StepperLine } from '../../lib/tropikux-library.js';

export default {
  title: "Components/StepperLine",
  component: StepperLine,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "80px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    status: {
      control: "select",
      options: ["Activated", "Inactive"],
    },
  },
};

export const Default = {
  args: { status: "Activated" },
};

export const AmbosTipos = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", width: "80px" }}>
      <StepperLine status="Activated" />
      <StepperLine status="Inactive" />
    </div>
  ),
};
