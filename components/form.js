import React, { useState, useEffect } from "react";
import { insertLead } from "../controllers/postData";
import { inputValidator } from "../helpMethods/validator";
import { useRouter } from "next/router";
import Obrigado from "./obrigado";
import phone from "../public/phone.png";
import person from "../public/person.png";

const Form = ({ campaignAndUTMdata, formType, context, openForm }) => {
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
    });
    setShowObrigado(true);
    event.preventDefault();
    if (
      ErrorMessageOnSubmit.phoneNumber === "" &&
      ErrorMessageOnSubmit.termosEcondicoes === ""
    ) {
      insertLead(
        campaignAndUTMdata,
        { name, phoneNumber, termosEcondicoes, formType, context },
        router
      );

      return;
    }
  };

  useEffect(() => {
    if (triedToSubmit) {
      setErrorMessage(
        inputValidator({
          phoneNumber,
          termosEcondicoes,
        })
      );
    }
    return () => {};
  }, [phoneNumber, termosEcondicoes, triedToSubmit]);

  return (
    <div className="iframe">
      {showObrigado ? (
        <Obrigado></Obrigado>
      ) : (
        <div className="form">
          <div className="formTop">
            Endesa Portugal <span onClick={openForm}>x</span>
          </div>
          <div className="topText">
            <div className="textTop">Quer aderir à Endesa?</div>
            <div className="secondTextTop">Ligamos-lhe gratuitamente!</div>
            <div className="thirdTextTop">
              Por favor, indique os seus dados para entrarmos em contacto
              consigo!
            </div>
          </div>
          <form method="post" name="formBox">
            <div className="inputField">
              <i className="icon">
                <img src={person} width="12px" />
              </i>
              <input
                id="formBox_name"
                value={name}
                type="text"
                name="name"
                maxLength="100"
                placeholder="Nome"
                onChange={handleInputChange}
                className="inputClass"
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
              <i className="icon">
                <img src={phone} width="12px" />
              </i>
              <input
                className="inputClass"
                id="formBox_telefone"
                name="phoneNumber"
                value={phoneNumber}
                maxLength="9"
                placeholder="Telefone *"
                onChange={handleInputChange}
                inputMode="numeric"
                pattern="[0-9]*"
                // type="number"
              />
            </div>
            <div className="topText">
              {" "}
              <div>Se preferir, ligue-nos grátis! </div>{" "}
              <div className="thirdTextTop">
                Se não for cliente, ligue <span>800 110 148.</span>
              </div>{" "}
              <div className="thirdTextTop">
                Se for cliente, ligue <span>800 10 10 33.</span>
              </div>
            </div>
            <div className="topText">
              {errorMessages && errorMessages.termosEcondicoes && (
                <div className="tooltip_error" style={{ display: "block" }}>
                  {" "}
                  <span>{errorMessages.termosEcondicoes}</span>{" "}
                </div>
              )}
              <div className="round">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={termosEcondicoes}
                  name="termosEcondicoes"
                  onChange={handleInputChange}
                />
                <label for="checkbox" />
                <div className="privacidade">
                  Li e aceito a Politica de Privacidade
                </div>
              </div>{" "}
            </div>
            <div className="obrigatorio">
              *Campos de preenchimento obrigatório
            </div>
            <div className="formButton">
              <button onClick={callInsertLead} type="submit" className="btn">
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
