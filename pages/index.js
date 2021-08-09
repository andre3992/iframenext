import { useState, useEffect } from "react";
import { defaultData } from "../config";
import Form from "../components/form";
export default function Home() {
  const [campaignData, setCampaignData] = useState(defaultData);
  const [params, setParams] = useState(null);

  return (
    <div>
      <Form
        campaignAndUTMdata={{
          campaignData: campaignData,
          params: params,
        }}
        formType="c2c"
        context="c2c"
      ></Form>
    </div>
  );
}
