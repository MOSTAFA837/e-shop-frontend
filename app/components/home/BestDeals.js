"use client";

import { productData } from "@/app/static/data";
import styles from "@/app/styles/styles";
import { useEffect, useState } from "react";
import ProductCard from "../product/ProductCard";

export default function BestDeals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData &&
      productData.sort((a, b) => b.total_sell - a.total_sell).slice(0, 5);

    setData(d);
  }, []);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data &&
            data.length > 0 &&
            data.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
