export const inputValidator = ({
  name,
  phoneNumber,
  termosEcondicoes,
  email,
}) => {
  const errorMessages = {
    name: "",
    phoneNumber: "",
    termosEcondicoes: "",
    email: "",
  };
  //nome não pode estar vazios
  if (name === "") {
    errorMessages.name = "Rellene el nombre";
  } else {
    errorMessages.name = "";
  }

  //regex número

  const phoneNumberRegex = /[6|7|8|9][0-9]{8}/;
  if (phoneNumber === "") {
    errorMessages.phoneNumber = "Rellene el teléfono";
  } else if (!phoneNumberRegex.test(phoneNumber)) {
    errorMessages.phoneNumber = "El número debe contener 9 dígitos.";
  } else {
    errorMessages.phoneNumber = "";
  }
  //

  //verificar email
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email) && email !== "") {
    errorMessages.email = "Complete con un email válido";
  } else {
    errorMessages.email = "";
  }

  //termos e condições têm que estar seleccionados
  if (termosEcondicoes === false) {
    errorMessages.termosEcondicoes = "Seleccione el campo";
  } else {
    errorMessages.termosEcondicoes = "";
  }
  return errorMessages;
};
