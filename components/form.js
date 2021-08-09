import React, { useState, useEffect } from "react";
import { insertLead } from "../controllers/postData";
import { inputValidator } from "../helpMethods/validator";
import { useRouter } from "next/router";
import Obrigado from "./obrigado";

const Form = ({ campaignAndUTMdata, formType, context }) => {
  const [showObrigado, setShowObrigado] = useState(false);
  const router = useRouter();
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [souCliente, setSouCliente] = useState(null);
  const [termosEcondicoes, setTermosEcondicoes] = useState(false);
  const [errorMessages, setErrorMessage] = useState({});

  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "phoneNumber") {
      setPhoneNumber(event.target.value);
    } else if (event.target.name === "termosEcondicoes") {
      setTermosEcondicoes(!termosEcondicoes);
    }
  };
  const callInsertLead = (event) => {
    setTriedToSubmit(true);
    let ErrorMessageOnSubmit = inputValidator({
      phoneNumber,
      termosEcondicoes,
      name,
    });

    event.preventDefault();
    if (
      ErrorMessageOnSubmit.phoneNumber === "" &&
      ErrorMessageOnSubmit.termosEcondicoes === "" &&
      ErrorMessageOnSubmit.name === ""
    ) {
      insertLead(
        campaignAndUTMdata,
        { name, phoneNumber, termosEcondicoes, formType, context },
        router
      );
      // setShowObrigado(true);

      return;
    }
  };

  useEffect(() => {
    if (triedToSubmit) {
      setErrorMessage(
        inputValidator({
          name,
          phoneNumber,
          termosEcondicoes,
        })
      );
    }
    return () => {};
  }, [name, phoneNumber, termosEcondicoes, triedToSubmit]);

  return (
    <div className="iframe">
      {showObrigado ? (
        <Obrigado></Obrigado>
      ) : (
        <div>
          Quer aderir à Endesa
          <form method="post" name="formBox">
            <div className="inputField">
              {errorMessages && errorMessages.name && (
                <div className="tooltip_error" style={{ display: "block" }}>
                  {" "}
                  <span>{errorMessages.name}</span>{" "}
                </div>
              )}
              <input
                id="formBox_name"
                value={name}
                type="text"
                name="name"
                maxLength="100"
                placeholder="Nombre"
                onChange={handleInputChange}
              />
            </div>

            <div className="inputField">
              {errorMessages && errorMessages.phoneNumber && (
                <div className="tooltip_error" style={{ display: "block" }}>
                  {" "}
                  <span ng-message="required">
                    {errorMessages.phoneNumber}
                  </span>{" "}
                </div>
              )}
              <input
                id="formBox_telefone"
                name="phoneNumber"
                value={phoneNumber}
                maxLength="9"
                placeholder="Telefóno"
                onChange={handleInputChange}
                inputMode="numeric"
                pattern="[0-9]*"
                // type="number"
              />
            </div>
            {/* <div className="inputField">
          <input
            id="formBox_email"
            type="text"
            name="email"
            value={email}
            maxLength="100"
            placeholder="E-mail"
            onChange={handleInputChange}
          />
        </div> */}

            <div className=" disclaimer termos-condicoes">
              {errorMessages && errorMessages.termosEcondicoes && (
                <div className="tooltip_error" style={{ display: "block" }}>
                  {" "}
                  <span>{errorMessages.termosEcondicoes}</span>{" "}
                </div>
              )}
              <input
                type="checkbox"
                checked={termosEcondicoes}
                name="termosEcondicoes"
                onChange={handleInputChange}
              />{" "}
              Li e aceito a Politica de Privacidade
            </div>

            <div className="formButton">
              <button
                onClick={callInsertLead}
                type="submit"
                id="enviar_form"
                className="btn_enviar capture_event"
              >
                {" "}
                Liguem-me gratuitamente{" "}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
