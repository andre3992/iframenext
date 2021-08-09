export const insertLead = (campaignData, formData, router) => {
  let fullData = { ...campaignData };
  fullData.formData = formData;

  let dataToSend = {};
  dataToSend.name = fullData.formData.name ? fullData.formData.name : "";
  dataToSend.phone = fullData.formData.phoneNumber
    ? fullData.formData.phoneNumber
    : "";
  dataToSend.condicoes = fullData.formData.termosEcondicoes
    ? fullData.formData.termosEcondicoes
    : "";
  dataToSend.type = fullData.formData.formType
    ? fullData.formData.formType
    : "";

  dataToSend.context = fullData.formData.context
    ? fullData.formData.context
    : "";
  for (const utm in fullData.params) {
    dataToSend[utm] = fullData.params[utm];
  }

  dataToSend.ip = fullData.campaignData.defaultCampaignData.ip;
  dataToSend.source = fullData.campaignData.defaultCampaignData.source;
  dataToSend.secret = process.env.NEXT_PUBLIC_API_SECRET;
  console.log(dataToSend);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  };
  {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/insert`, options)
      .then((result) => {
        /*router.push(
          `/gracias/?convtype=${dataToSend.tsource}${
            dataToSend.convcode !== "" ? "&conv=" + dataToSend.convcode : ""
          }`
        );*/
        return true;
      })
      .catch((err) => {
        router.push("/404");
        return false;
      });
  }
};
