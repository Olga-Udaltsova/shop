import { SocialNetworks } from "../../../components/ui/SocialNetworks/SocialNetworks";
import * as SC from "./styles";

export const Contacts = () => (
  <SC.Contacts>
    <SC.Contact>
      <span>Contacts:</span>{" "}
      <div>
        <p className="phone">+1 888-444-777 </p>
        <p>sitename@gmail.com</p>
      </div>
    </SC.Contact>
    <SC.Contact>
      <span>Location:</span>
      <p>27 Division St, New York, NY 10002, USA</p>
    </SC.Contact>
    <SC.Contact>
      <span>Find us:</span>
      <SocialNetworks />
    </SC.Contact>
  </SC.Contacts>
);
