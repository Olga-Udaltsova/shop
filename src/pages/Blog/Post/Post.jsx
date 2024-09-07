import banner from "../../../images/background_img.png";
import line from "../../../icons/line.svg";
import post_bg from "../../../images/post-bg.svg";
import * as SC from "./styles";

export const Post = ({ post }) => {
  const { title, data } = post;
  return (
    <SC.Post>
      <img src={banner} alt="banner" />
      <SC.Text>
        <h5>{title}</h5>
        <p>{data}</p>
        <SC.Button>
          <img src={line} alt="line" /> Read More
        </SC.Button>
        <SC.Image src={post_bg} alt="background" />
      </SC.Text>
    </SC.Post>
  );
};
