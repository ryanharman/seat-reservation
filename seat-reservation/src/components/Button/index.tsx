import React from "react";
import styled from "styled-components";

const Button: React.FC = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #000;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #000;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    color: #000;
    background-color: rgba(59, 130, 246, 0.5);
  }
`;

export default Button;
