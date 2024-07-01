import * as SC from "./styles";

export const PromoCode = ({ promo, addPromo, getPromo }) => (
  <SC.PromoCode>
    <h1>You Have A Promo Code?</h1>
    <SC.Print>
      <SC.TextPromoCode>
        To receive up-to-date promotional codes, subsrcibe to us on social
        networks.
      </SC.TextPromoCode>
      <SC.EnterPromo>
        <input
          placeholder="Enter promo code"
          value={promo}
          onChange={addPromo}
        ></input>
        <button onClick={() => getPromo({ promo })}>&#8594;</button>
      </SC.EnterPromo>
      <SC.Links>
        <p>Find us here:</p>
        <SC.SocialNetwork>
          <p>Fb</p> - <p>tw</p> - <p>ins</p> -<p>pt</p>
        </SC.SocialNetwork>
      </SC.Links>
    </SC.Print>
  </SC.PromoCode>
);
