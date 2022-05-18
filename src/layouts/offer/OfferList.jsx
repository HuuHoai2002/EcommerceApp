import { Heading } from "../../components/heading";
import { Offeritems } from "../../utils";
import { Grid } from "../components/grid";
import { Layout } from "../components/layout";
import OfferCard from "./OfferCard";

const OfferList = () => {
  return (
    <Layout>
      <Heading title="What Shopex Offer!" className="mt-[50px] pb-10" />
      <Grid>
        {Offeritems &&
          Offeritems.map((item) => <OfferCard key={item.id} data={item} />)}
      </Grid>
    </Layout>
  );
};

export default OfferList;
