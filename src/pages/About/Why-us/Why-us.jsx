import { Container } from "../../../components/Container/Container";
import service from "../../../icons/service.svg";
import money from "../../../icons/money.svg";
import shipping from "../../../icons/shipping.svg";
import background from "../../../images/background.svg";
import * as SC from "./styles";

export const WhyUs = () => (
  <Container>
    <SC.IconsBoxes>
      <SC.Box>
        <img src={shipping} />
        <SC.Background>
          <img src={background} alt="background" />
        </SC.Background>
        <div>
          <h4>Free Shipping</h4>
          <p>
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit
          </p>
        </div>
      </SC.Box>
      <SC.Box>
        <img src={service} />
        <SC.Background>
          <img src={background} alt="background" />
        </SC.Background>
        <div>
          <h4>24/7 Customer Service</h4>
          <p>
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit
          </p>
        </div>
      </SC.Box>
      <SC.Box>
        <img src={money} />
        <SC.Background>
          <img src={background} alt="background" />
        </SC.Background>
        <div>
          <h4>Money Back Guarantee</h4>
          <p>
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit
          </p>
        </div>
      </SC.Box>
    </SC.IconsBoxes>
  </Container>
);
