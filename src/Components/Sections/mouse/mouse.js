import React from "react";
import "./mouse.css";
import Icon from "@mdi/react";
import { mdiCheckboxBlankCircle } from "@mdi/js";
import styled, { keyframes } from "styled-components";
import { fadeOutDown } from "react-animations";

const bounceAnimation = keyframes`${fadeOutDown}`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation} infinite;
`;

const Mouse = () => {
  return (
    <div className="Mouse">
      <BouncyDiv>
        <Icon className="wheel" path={mdiCheckboxBlankCircle} size={0.5} color="#6F65EC" />
      </BouncyDiv>
    </div>
  );
};
export default Mouse;