import { Container } from "../../components/Container/Container";
import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { Link } from "../../components/ui/Link/Link";
import banner from "../../images/background_img.png";
import background from "../../images/background.svg";
import * as SC from "./styles";

export default function Page404() {
  return (
    <>
      <FirstScreen title="Oops!">
        <Link to="/404" className="btnLine">
          404
        </Link>
      </FirstScreen>
      <Container>
        <SC.Div>
          <SC.Content>
            <h2>404</h2>
            <p>Page not found</p>
            <SC.Text>
              It looks like nothing was found at this location.{" "}
            </SC.Text>
          </SC.Content>
          <SC.Images>
            <img src={banner} alt="banner" />
            <img src={background} alt="background" />
          </SC.Images>
        </SC.Div>
      </Container>
    </>
  );
}
