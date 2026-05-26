import { Avatar } from '../../lib/tropikux-library.js';

export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["2XLarge", "XLarge", "Large", "Medium", "Small", "XSmall"],
    },
    direction: {
      control: "select",
      options: ["Row", "Column"],
    },
    alignment: {
      control: "select",
      options: ["Left", "Right", "Default"],
    },
    assetType: {
      control: "select",
      options: ["Icon", "Initials", "Photo"],
    },
    usernameStatus: {
      control: "select",
      options: ["Default", "Active", "MissingOut", "Busy", "Inactive"],
    },
    dotStatus: {
      control: "select",
      options: ["Default", "Active", "Missing", "Busy", "Inactive"],
    },
    dropdownIconWeight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
    nameText: { control: "text" },
    subText: { control: "text" },
    firstLetter: { control: "text" },
    secondLetter: { control: "text" },
    counterLabel: { control: "text" },
    showUsername: { control: "boolean" },
    showStatusDot: { control: "boolean" },
    showCounter: { control: "boolean" },
    showDropdown: { control: "boolean" },
    showUsernameSub: { control: "boolean" },
  },
};

export const AlignmentRight = {
  args: {
    size: "Large",
    direction: "Row",
    alignment: "Right",
    assetType: "Initials",
    firstLetter: "J",
    secondLetter: "D",
    nameText: "Username",
    subText: "Ver perfil",
    usernameStatus: "Default",
    dotStatus: "Default",
    counterLabel: "00",
    showUsername: true,
    showStatusDot: true,
    showCounter: true,
    showDropdown: true,
    showUsernameSub: true,
  },
};

export const AlignmentLeft = {
  args: { ...AlignmentRight.args, alignment: "Left" },
};

export const Column = {
  args: { ...AlignmentRight.args, direction: "Column", alignment: "Default" },
};

export const TodosLosTamaños = {
  render: () => (
    <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
      <Avatar size="2XLarge" firstLetter="J" secondLetter="D" />
      <Avatar size="XLarge" firstLetter="J" secondLetter="D" />
      <Avatar size="Large" firstLetter="J" secondLetter="D" />
      <Avatar size="Medium" firstLetter="J" secondLetter="D" />
      <Avatar size="Small" firstLetter="J" secondLetter="D" />
      <Avatar size="XSmall" firstLetter="J" secondLetter="D" />
    </div>
  ),
};

export const TodosLosTipos = {
  render: () => (
    <div style={{ display: "flex", gap: "80px", alignItems: "center" }}>
      <Avatar
        direction="Row"
        alignment="Right"
        size="XLarge"
        firstLetter="J"
        secondLetter="D"
      />
      <Avatar
        direction="Row"
        alignment="Left"
        size="XLarge"
        firstLetter="J"
        secondLetter="D"
      />
      <Avatar
        direction="Column"
        alignment="Default"
        size="XLarge"
        firstLetter="J"
        secondLetter="D"
      />
    </div>
  ),
};
