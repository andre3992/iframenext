import Head from "next/head";
import { useState, useEffect } from "react";
import { defaultData } from "../config";
import { getData, getSearchParams } from "../controllers/fetchData";
import Form from "../components/form";


export default function Home() {
  const [campaignData, setCampaignData] = useState(defaultData);
  const [params, setParams] = useState(null);
  const [fectching, setFetching] = useState(true);

  useEffect(() => {
    getData(
      campaignData,
      setCampaignData,
      getSearchParams(params, setParams),
      setFetching
    )
    return () => {
    };
  }, );



  return (
    <div>
    <Form campaignAndUTMdata={{
              campaignData: campaignData,
              params: params,
            }} formType="c2c" context="c2c"></Form>
    </div>
  );
}
