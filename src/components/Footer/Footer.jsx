import logo from "../../images/logo.svg";
import background from "../../images/background.svg";
import visa from "../../icons/Visa.svg";
import mastercard from "../../icons/Mastercard.svg";
import paypal from "../../icons/Paypal.svg";
import payonner from "../../icons/Payonner.svg";
import send from "../../icons/send.svg";
import { Container } from "../Container/Container";
import { SocialNetworks } from "../ui/SocialNetworks/SocialNetworks";
import { Link } from "../../components/ui/Link/Link";
import * as SC from "./styles";

export const Footer = () => (
  <Container>
    <SC.Footer>
      <img src={background} alt="background" />
      <SC.Info>
        <SC.BasicInfo>
          <SC.FirstColumnBI>
            <div>
              <img src={logo} alt="logo" />
              <p>
                Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
                nostrud excepteur voluptate.
              </p>
            </div>
            <hr />
            <SC.Links>
              <p>Find us here:</p>
              <SocialNetworks />
            </SC.Links>
          </SC.FirstColumnBI>

          <SC.SecondAndThirdBI>
            <p>About</p>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/">Collections</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </SC.SecondAndThirdBI>

          <SC.SecondAndThirdBI>
            <p>Useful links</p>
            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of use</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/">Shipping details</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
            </ul>
          </SC.SecondAndThirdBI>

          <SC.FourthColumnBI>
            <p>Newsletter</p>
            <p>
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </p>
            <SC.Input>
              <input placeholder="Enter your email"></input>
              <button>
                <img src={send} alt="send" />
              </button>
            </SC.Input>
          </SC.FourthColumnBI>
        </SC.BasicInfo>

        <hr />
        <SC.CopyRight>
          <p>&copy; All right reserved. Fashionee 2020</p>
          <SC.Pay>
            <p>Payment methods:</p>
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={paypal} alt="paypal" />
            <img src={payonner} alt="payonner" />
          </SC.Pay>
        </SC.CopyRight>
      </SC.Info>
      <img src={background} alt="background" />
    </SC.Footer>
  </Container>
);
