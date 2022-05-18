import { Banner } from "../layouts/banner";
import OfferList from "../layouts/offer/OfferList";
import { Preview } from "../layouts/preview";
import { ProductList } from "../layouts/product";

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Preview>
        <ProductList></ProductList>
      </Preview>
      <Preview>
        <OfferList />
      </Preview>
    </div>
  );
};

export default HomePage;
