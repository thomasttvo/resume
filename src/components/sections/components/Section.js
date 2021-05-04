import React from "react";
import styled from "styled-components";

const Title = styled.h2``;
export const Section = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};
