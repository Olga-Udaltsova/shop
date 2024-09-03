import { Container } from "../../../components/Container/Container";
import brand1 from "../../../images/brand 1.svg";
import brand2 from "../../../images/brand 2.svg";
import brand3 from "../../../images/brand 3.svg";
import brand4 from "../../../images/brand 4.svg";
import brand5 from "../../../images/brand 5.svg";
import * as SC from "./styles";

export const Brands = () => (
  <Container>
    <SC.Brands>
      <img src={brand1} alt="Olivia & James" />
      <img src={brand2} alt="R" />
      <img src={brand3} alt="Helen & John" />
      <img src={brand4} alt="Amelia & Jacob" />
      <img src={brand5} alt="Cara & James" />
    </SC.Brands>
  </Container>
);
