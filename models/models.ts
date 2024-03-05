export interface BannerData {
  buttonText: string;
  desc: string;
  discount: string;
  image: { type: string; asset: { _ref: string; _type: string } };
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
export interface Products {
  details: string;
  image: {
    _key: string;
    _type: string;
    asset: { ref: string; type: string };
  }[];
  name: string;
  price: number;
  quantity?:number
  slug: { _type: string; current: string };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
