import React from "react";

import { BannerInfoContainer, BannerInfoBox } from "./banner-info.styles";
import Typography from "../typography/typography.component";

const BannerInfo = () => {
  return (
    <BannerInfoContainer>
      <BannerInfoBox>
        <Typography type="p">Market Cap</Typography>
        <Typography type="h4">$ 117,193,515,285</Typography>
        <Typography type="p">16,973,125 BTC</Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Volume (24h)</Typography>
        <Typography type="h4">$ 7,446,440,000</Typography>
        <Typography type="p">956,733 BTC</Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Circulating Supplyp</Typography>
        <Typography type="h4">16,973,125 BTC</Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Max Supply</Typography>
        <Typography type="h4">21,000,000 BTC</Typography>
      </BannerInfoBox>
    </BannerInfoContainer>
  );
};

export default BannerInfo;
