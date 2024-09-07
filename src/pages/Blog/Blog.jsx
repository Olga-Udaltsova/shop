import { Container } from "../../components/Container/Container";
import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { Link } from "../../components/ui/Link/Link";
import { Post } from "./Post/Post";

import * as SC from "./styles";

export default function Blog() {
  const mock = [
    {
      id: 1,
      title: "Fashion trends in 2020: style, colors, accessories",
      data: "Aug 02, 2020",
    },
    {
      id: 2,
      title: "The most popular brand that people use in USA",
      data: "Aug 02, 2020",
    },
    {
      id: 3,
      title: "Updating the wardrobe: what clothes to buy first",
      data: "Aug 02, 2020",
    },
    {
      id: 4,
      title: "The main clothing trends fall-winter 2020",
      data: "Aug 02, 2020",
    },
    {
      id: 5,
      title: "How to choose a dress for a special occasion?",
      data: "Aug 02, 2020",
    },
    {
      id: 6,
      title: "Women's fashion: how not to dress in 2020",
      data: "Aug 02, 2020",
    },
  ];
  return (
    <>
      <FirstScreen title="Blog">
        <Link to="/blog" className="btnLink">
          Blog
        </Link>
      </FirstScreen>
      <Container>
        <SC.Content>
          {mock.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </SC.Content>
      </Container>
    </>
  );
}
