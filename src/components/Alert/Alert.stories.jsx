import { Alert } from '../../lib/tropikux-library.js';

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["Medium", "Small"],
    },
    type: {
      control: "select",
      options: ["Default", "TitleText"],
    },
    status: {
      control: "select",
      options: ["Success", "Informative", "Warning", "Danger"],
    },
    alertText: { control: "text" },
    iconWeight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
  },
};

export const Success = {
  args: {
    size: "Medium",
    type: "Default",
    status: "Success",
    alertText: "This is an alert message",
    iconWeight: "fill",
  },
};

export const SuccessConLista = {
  args: {
    ...Success.args,
    type: "TitleText",
    bulletTexts: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Facilisi neque",
    ],
  },
};

export const TodosLosStatus = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "320px",
      }}
    >
      <Alert status="Success" alertText="This is an alert message" />
      <Alert status="Informative" alertText="This is an alert message" />
      <Alert status="Warning" alertText="This is an alert message" />
      <Alert status="Danger" alertText="This is an alert message" />
    </div>
  ),
};

export const TodosLosStatusConTexto = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "24px",
      }}
    >
      <Alert
        status="Success"
        type="TitleText"
        alertText="This is an alert message"
      />
      <Alert
        status="Informative"
        type="TitleText"
        alertText="This is an alert message"
      />
      <Alert
        status="Warning"
        type="TitleText"
        alertText="This is an alert message"
      />
      <Alert
        status="Danger"
        type="TitleText"
        alertText="This is an alert message"
      />
    </div>
  ),
};
