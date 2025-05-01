"use client";

import React, { useEffect, useContext, useState } from "react";

// import { CrowdFundingContext } from '../contracts';
import { Hero, Card, PopUp } from '../components/index';

const index = () => {
  // const {
  //   titleDate,
  //   getCampaigns,
  //   createCampaign,
  //   donate,
  //   getUserCampaigns,
  //   getDonations
  // } = useContext(CrowdFundingContext);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  return(
    <>
      <Hero titleData={"My Donation"} />
      <Card />
    </>
  )
}

export default index;