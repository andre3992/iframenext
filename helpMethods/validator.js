export const inputValidator = ({ name, phoneNumber, termosEcondicoes }) => {
  const errorMessages = {
    name: "",
    phoneNumber: "",
    termosEcondicoes: "",
  };
  //nome não pode estar vazios
  if (name === "") {
    errorMessages.name = "Preencha o nome";
  } else {
    errorMessages.name = "";
  }

  //regex número

  const phoneNumberRegex = /[6|7|8|9][0-9]{8}/;
  if (phoneNumber === "") {
    errorMessages.phoneNumber = "Preencha o telefone";
  } else if (!phoneNumberRegex.test(phoneNumber)) {
    errorMessages.phoneNumber = "Insira um número válido";
  } else {
    errorMessages.phoneNumber = "";
  }
  //

  //termos e condições têm que estar seleccionados
  if (termosEcondicoes === false) {
    errorMessages.termosEcondicoes = "Selecione a opção";
  } else {
    errorMessages.termosEcondicoes = "";
  }
  return errorMessages;
};
