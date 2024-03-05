import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
import { BannerData, Products } from "@/models/models";

interface HomeProps {
  products: Products[];
  bannerData: BannerData[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
};
export const getServerSideProps = async () => {
  const query: string = `*[_type == "product"]`;
  const products: Products[] = await client.fetch(query);

  const bannerQuery: string = `*[_type == "banner"]`;
  const bannerData: BannerData[] = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};

export default Home;
