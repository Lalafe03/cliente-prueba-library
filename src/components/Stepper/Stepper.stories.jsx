import { Stepper } from '../../lib/tropikux-library.js';

export default {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "80px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    totalSteps: {
      control: { type: "number", min: 1, max: 20 },
    },
    currentStep: {
      control: { type: "number", min: 0, max: 20 },
    },
    label: { control: "text" },
  },
};

export const Default = {
  args: {
    totalSteps: 5,
    currentStep: 1,
    label: "Paso 1 de 5",
  },
};

export const MuchosSteps = {
  args: {
    totalSteps: 7,
    currentStep: 3,
    label: "Paso 3 de 7",
  },
};
