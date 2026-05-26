import { Button, Alert, Avatar } from "/src/lib/tropikux-library.js";

export default {
  title: "Prueba/Componentes de librería",
};

export const BotonPrimario = {
  render: () => (
    <Button
      variant="Filled"
      color="primary"
      size="Medium"
      buttonText="Botón de prueba"
    />
  ),
};

export const AlertaExito = {
  render: () => (
    <Alert
      status="Success"
      alertText="La librería está funcionando correctamente"
    />
  ),
};

export const AvatarPrueba = {
  render: () => (
    <Avatar
      size="Medium"
      direction="Row"
      alignment="Left"
      assetType="Initials"
      firstLetter="T"
      secondLetter="U"
      nameText="Tropikux UI"
      subText="Librería funcionando"
    />
  ),
};
