import React from "react";

import { H1, H2, H3, H4, H5, P } from "./typography.styles";

const Typography = props => {
  return (
    <React.Fragment>
      {props.type === "h1" ? (
        <H1>{props.children}</H1>
      ) : props.type === "h2" ? (
        <H2>{props.children}</H2>
      ) : props.type === "h3" ? (
        <H3>{props.children}</H3>
      ) : props.type === "h4" ? (
        <H4>{props.children}</H4>
      ) : props.type === "h5" ? (
        <H5>{props.children}</H5>
      ) : props.type === "normall" ? (
        <P>{props.children}</P>
      ) : null}
    </React.Fragment>
  );
};

export default Typography;
