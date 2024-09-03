import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { Link } from "../../components/ui/Link/Link";
import { Container } from "../../components/Container/Container";
import { AboutUs } from "./AboutUs/AboutUs";
import { News } from "../../components/News/News";
import { MultiBrand } from "./Multi-brand/Multi-Brand";
import { WhyUs } from "./Why-us/Why-us";
import { Brands } from "./Brands/Brands";

export const About = () => (
  <>
    <FirstScreen title="About">
      <Link to="/about" className="btnLink">
        About
      </Link>
    </FirstScreen>
    <Container>
      <AboutUs />
      <MultiBrand />
      <WhyUs />
      <News />
      <Brands />
    </Container>
  </>
);
