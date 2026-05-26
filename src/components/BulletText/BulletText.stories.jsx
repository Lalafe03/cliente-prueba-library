import { BulletText } from '../../lib/tropikux-library.js';

export default {
  title: "Components/BulletText",
  component: BulletText,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["XLarge", "Large", "Medium", "Small", "XSmall"],
    },
    text: { control: "text" },
  },
};

export const Default = {
  args: {
    size: "Medium",
    text: "Lorem ipsum dolor sit amet consectetur. Sem volutpat.",
  },
};

export const TodosLosTamaños = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        maxWidth: "320px",
      }}
    >
      <BulletText
        size="XLarge"
        text="Lorem ipsum dolor sit amet consectetur. Sem volutpat."
      />
      <BulletText
        size="Large"
        text="Lorem ipsum dolor sit amet consectetur. Sem volutpat."
      />
      <BulletText
        size="Medium"
        text="Lorem ipsum dolor sit amet consectetur. Sem volutpat."
      />
      <BulletText
        size="Small"
        text="Lorem ipsum dolor sit amet consectetur. Sem volutpat."
      />
      <BulletText
        size="XSmall"
        text="Lorem ipsum dolor sit amet consectetur. Sem volutpat."
      />
    </div>
  ),
};
