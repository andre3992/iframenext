import { useState, useEffect } from "react";
import { defaultData } from "../config";
import Form from "../components/form";
import callcenter from "../public/callcenter.png";
export default function Home() {
  const [campaignData, setCampaignData] = useState(defaultData);
  const [params, setParams] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function openForm() {
    setShowForm(!showForm);
  }

  return (
    <div>
      {!showForm && (
        <div className="c2c" onClick={openForm}>
          <div className="c2cTop">
            <img src={callcenter} width="50px" />
            <br />
            Quer aderir à Endesa?
          </div>
          <div className="c2cBottom"> LIGAMOS GRÁTIS!</div>
        </div>
      )}
      {showForm && (
        <Form
          campaignAndUTMdata={{
            campaignData: campaignData,
            params: params,
          }}
          formType="c2c"
          context="c2c"
          openForm={openForm}
        ></Form>
      )}{" "}
    </div>
  );
}
