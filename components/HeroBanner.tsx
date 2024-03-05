import React from "react";
import Link from "next/link";
import { BannerData } from "@/models/models";
import { urlFor } from "@/lib/client";

interface HeroBannerProps {
  heroBanner: BannerData;
}
const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-container-flex">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image) as string}
          alt="headphones"
          className="hero-banner-image"
        />
        <div className="shop-now-button">
          <button type="button">{heroBanner.buttonText}!</button>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
