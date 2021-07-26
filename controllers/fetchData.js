export const getData = (campaignData, setCampaignData, params, setFetching) => {
  if (params[""]) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        params,
        secret: process.env.NEXT_PUBLIC_API_SECRET,
      }),
    };
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/campaign/${campaignData.campaign}`,
      options
    )
      .then((result) => result.json())
      .then((final) => {
        let campaignDataCopy = { ...campaignData };
        campaignDataCopy.defaultCampaignData = final;

        setCampaignData(campaignDataCopy);
        setFetching(false);
        return;
      })
      .catch((err) => {
        //console.log("erro", err);
        setFetching(false);
        return;
      });
  } else {
    params.secret = process.env.NEXT_PUBLIC_API_SECRET;

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/campaign/${campaignData.campaign}`,
      options
    )
      .then((result) => result.json())
      .then((final) => {
        let campaignDataCopy = { ...campaignData };
        campaignDataCopy.defaultCampaignData = final;
        setCampaignData(campaignDataCopy);
        setFetching(false);
        return;
      })
      .catch((err) => {
        //console.log("erro", err);
        setFetching(false);
        return;
      });
  }
};

export const getSearchParams = (params, setParams) => {
  const querySearchParams = window.location.search.substring(1).split("&");

  const searchParams = {};

  querySearchParams.map((param) => {
    param = param.split("=");

    searchParams[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
  });

  //can return correct searchParams with utm_source, adgroup etc,
  //or it may return and empty object with a property that has undefined value {"": "undefined"}

  setParams(searchParams);
  return searchParams;
};
