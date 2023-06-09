"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import ProductCard from "../components/product/ProductCard";
import { useSearchParams, useRouter } from "next/navigation";
import { productData } from "../static/data";
import Link from "next/link";

export default function Products() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const params = useSearchParams();
  const searchCategory = params.get("category");
  const searchPrice = params.get("price");

  useEffect(() => {
    if (searchCategory == null) {
      const d =
        productData &&
        productData
          .sort((a, b) => a.total_sell - b.total_sell)
          .sort((a, b) => b.price - a.price);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category == searchCategory);
      setData(d);
    }
  }, [params]);

  return (
    <div className={`${styles.section} mt-5`}>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {data.length > 0 ? (
          data.map((product, i) => <ProductCard key={i} product={product} />)
        ) : (
          <h2 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h2>
        )}
      </div>
    </div>
  );
}
