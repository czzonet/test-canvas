import React from "react";
import styled from "styled-components";
import { CanvasDraw } from "../components/CanvasDraw";
import { Hello } from "../components/Hello";

export const HomePage = () => {
  return (
    <Style>
      {/* <Hello></Hello>
       */}
      <CanvasDraw></CanvasDraw>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
`;
