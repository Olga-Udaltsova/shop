import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Button } from "../../components/ui/Button/Button";
import banner from "../../images/background_img.png";
import background from "../../images/background.svg";

import * as SC from "./styles";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <SC.FirstScreen>
        <SC.Banner src={banner} alt="banner" />
        <SC.Background src={background} alt="background" />
        <SC.Text>
          <p>
            <span>new</span> collection
          </p>
          <h2>meet new fashion week</h2>
          <SC.Button>
            <Button onClick={() => navigate("/shop")}>Shop Now</Button>
          </SC.Button>
        </SC.Text>
      </SC.FirstScreen>
    </Container>
  );
}
