import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metrics } from "../constants";
import { goldenRatio } from "../utils";

export const AppContainer = styled.div`
  padding: 2em 5em;
  font-family: "Work Sans", sans-serif;
  font-size: ${Metrics.fontSizeDefault}px;
  color: #313131;
`;

export const PageTitle = styled.h1`
  font-size: ${goldenRatio(4)}em;
  letter-spacing: 0.04em;
  margin: 0;
  margin-bottom: 0.2em;
`;

export const PageSubTitle = styled.strong`
  font-size: ${goldenRatio(1)}em;
  margin: 0;
`;

export const Text = styled.span``;
export const TextP = styled.p``;

export const Icon = ({ name }) => <FontAwesomeIcon icon={["fas", name]} />;
export const IconBrand = ({ name }) => <FontAwesomeIcon icon={["fab", name]} />;
