import React from "react";
import Button from "../Button";
import { HeaderContainer } from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>Seat Reservation</div>
      <a
        href="https://github.com/ryharman/seat-reservation"
        rel="noreferrer"
        target="_blank"
      >
        <Button>GitHub</Button>
      </a>
    </HeaderContainer>
  );
};

export default Header;
