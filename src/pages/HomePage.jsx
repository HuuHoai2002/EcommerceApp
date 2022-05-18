import { Banner } from "../layouts/banner";
import { Preview } from "../layouts/preview";
import { ProductList } from "../layouts/product";

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Preview>
        <ProductList></ProductList>
      </Preview>
    </div>
  );
};

export default HomePage;
