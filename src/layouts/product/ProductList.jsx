import { Heading } from "../../components/heading";
import { Grid } from "../components/grid";
import { Layout } from "../components/layout";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <Layout>
      <Heading title="Featured Products" className="mt-20 py-5" />
      <Grid className="gap-x-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Layout>
  );
};

export default ProductList;
