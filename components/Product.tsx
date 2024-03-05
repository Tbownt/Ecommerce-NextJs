import Link from "next/link";
import { urlFor } from "@/lib/client";
import { Products } from "@/models/models";
interface ProductProps {
  product: Products;
}

const Product = ({ product: { image, name, slug, price } }: ProductProps) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0]) as string}
            width={250}
            height={250}
            alt="product-img"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
