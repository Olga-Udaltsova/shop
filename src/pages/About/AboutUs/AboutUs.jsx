import * as SC from "./styles";
import background from "../../../images/background.svg";

export const AboutUs = () => (
  <SC.Div>
    <div>
      <h2>all about company</h2>
      <p>
        Official representative of the world-famous clothing brand Fashionee in
        Europe and the world.
      </p>
    </div>
    <SC.Content>
      <div>
        <SC.Text>
          <h3>the beginning of our journey</h3>
          <div>
            <p>2010</p>
            <p>
              In 2010, our company celebrated its 10th anniversary - these are
              the years of acquired experience of trading around the world. Join
              us among our clients! You can buy only original things from us. We
              offer products of your favorite brands - clothes, shoes,
              accessories, textiles and much more - quality products for every
              taste and age from Europe.
            </p>
          </div>
        </SC.Text>
        <SC.Quantity>
          <img src={background} alt="background" />
          <p>
            <span>5649 +</span>
            <br />
            <br />
            Satisfied clients
          </p>
        </SC.Quantity>
      </div>
      <div>
        <SC.Quantity>
          <img src={background} alt="background" />
          <p>
            <span>2587 +</span>
            <br />
            <br />
            Products for you
          </p>
        </SC.Quantity>

        <SC.Text>
          <h3>who are we now?</h3>
          <div>
            <p>2020</p>
            <p>
              We now have a team of more than 1,000 skilled workers and about
              167 clothing brands that cooperate with us. Ordering in our store
              is a saving of time and effort to find what you need; assistance
              of experienced consultants in choosing a model. Our specialists
              will help you specify your European size, tell you about fabrics
              and materials.
            </p>
          </div>
        </SC.Text>
      </div>
    </SC.Content>
  </SC.Div>
);
