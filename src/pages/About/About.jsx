import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { Link } from "../../components/ui/Link/Link";
import { Container } from "../../components/Container/Container";

export const About = () => {
  return (
    <>
      <FirstScreen title="About">
        <Link to="/about" className="btnLink">
          About
        </Link>
      </FirstScreen>
      <Container></Container>
    </>
  );
};
