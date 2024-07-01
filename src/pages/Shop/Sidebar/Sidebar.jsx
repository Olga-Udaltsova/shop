import { Review } from "./Review/Review";
import { Banner } from "./Banner/Banner";
import { Search } from "./Search/Search";
import { Filters } from "./Filters/Filters";
import * as SC from "./styles";

export const Sidebar = () => (
  <SC.Sidebar>
    <Search />
    <SC.Filters>
      <Filters />
      <Review />
      <Banner />
    </SC.Filters>
  </SC.Sidebar>
);
