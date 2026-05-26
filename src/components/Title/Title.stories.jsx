import { Title } from '../../lib/tropikux-library.js';
import { Bug, Leaf, Star, Heart } from "@phosphor-icons/react";

export default {
  title: "Components/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [
        "3XLarge",
        "2XLarge",
        "XLarge",
        "Large",
        "Medium",
        "Small",
        "XSmall",
        "XXSmall",
      ],
    },
    orientation: {
      control: "select",
      options: ["Horizontal", "Vertical"],
    },
    titleText: { control: "text" },
    subtitleText: { control: "text" },
    showSubtitle: { control: "boolean" },
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

export const Horizontal = {
  args: {
    size: "Medium",
    orientation: "Horizontal",
    titleText: "Title text",
    subtitleText: "Subtitle",
    showSubtitle: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIconWeight: "regular",
    trailingIconWeight: "regular",
  },
};

export const Vertical = {
  args: { ...Horizontal.args, orientation: "Vertical" },
};

export const TamañosHorizontal = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Title size="3XLarge" titleText="3XLarge" subtitleText="Subtitle" />
      <Title size="2XLarge" titleText="2XLarge" subtitleText="Subtitle" />
      <Title size="XLarge" titleText="XLarge" subtitleText="Subtitle" />
      <Title size="Large" titleText="Large" subtitleText="Subtitle" />
      <Title size="Medium" titleText="Medium" subtitleText="Subtitle" />
      <Title size="Small" titleText="Small" subtitleText="Subtitle" />
      <Title size="XSmall" titleText="XSmall" subtitleText="Subtitle" />
      <Title size="XXSmall" titleText="XXSmall" subtitleText="Subtitle" />
    </div>
  ),
};

export const TamañosVertical = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Title
        size="3XLarge"
        orientation="Vertical"
        titleText="3XLarge"
        subtitleText="Subtitle"
      />
      <Title
        size="2XLarge"
        orientation="Vertical"
        titleText="2XLarge"
        subtitleText="Subtitle"
      />
      <Title
        size="XLarge"
        orientation="Vertical"
        titleText="XLarge"
        subtitleText="Subtitle"
      />
      <Title
        size="Large"
        orientation="Vertical"
        titleText="Large"
        subtitleText="Subtitle"
      />
      <Title
        size="Medium"
        orientation="Vertical"
        titleText="Medium"
        subtitleText="Subtitle"
      />
      <Title
        size="Small"
        orientation="Vertical"
        titleText="Small"
        subtitleText="Subtitle"
      />
      <Title
        size="XSmall"
        orientation="Vertical"
        titleText="XSmall"
        subtitleText="Subtitle"
      />
      <Title
        size="XXSmall"
        orientation="Vertical"
        titleText="XXSmall"
        subtitleText="Subtitle"
      />
    </div>
  ),
};
