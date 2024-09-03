import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container/Container";
import { Button } from "../../../components/ui/Button/Button";
import banner from "../../../images/background_img.png";
import * as SC from "./styles";

export const MultiBrand = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <SC.Content>
        <img src={banner} alt="banner" />

        <SC.Text>
          <p>
            <span>deal</span> of the week
          </p>
          <h2>multi-brand store of clothes</h2>
          <p>
            We follow fashion trends and have been working for you for more than
            20 years. A selection of the best, interesting, and most
            importantly, boring outfits for different occasions.
          </p>
          <SC.Button>
            <Button onClick={() => navigate("/shop")}>Shop Now</Button>
          </SC.Button>
        </SC.Text>
      </SC.Content>
    </Container>
  );
};
