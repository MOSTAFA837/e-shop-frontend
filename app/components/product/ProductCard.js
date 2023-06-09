"use client";

import styles from "@/app/styles/styles";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductDetailsCard from "./ProductDetailsCard";

export default function ProductCard({ product }) {
  const [click, setClick] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const d = product.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <div className="relative w-full h-[370px] bg-white rounded-lg shadow-sm p-3">
      <div className="flex justify-end"></div>

      <Link href={`/product/${product_name}`}>
        <img
          src={product.image_Url[0].url}
          alt=""
          className="w-full h-[170px] object-contain"
        />
      </Link>

      <Link href={`/product/${product_name}`}>
        <h5 className={styles.shop_name}>{product.shop.name}</h5>
      </Link>

      <Link href={`/product/${product_name}`}>
        <h4 className="pb-3 font-[500]">
          {product.name.length > 40
            ? product.name.slice(0, 40) + "..."
            : product.name}
        </h4>

        <div className="flex">
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="#f6ba00"
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="#f6ba00"
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="#f6ba00"
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="#f6ba00"
          />
          <AiOutlineStar
            className="mr-2 cursor-pointer"
            size={20}
            color="#f6ba00"
          />
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {product.discount_price !== 0
                ? product.discount_price
                : product.price}{" "}
              $
            </h5>

            <h4 className={`${styles.price}`}>
              {product.discount_price !== 0 && product.price + "$"}
            </h4>
          </div>

          <span className="font-[400] text-[17px] text-[#68d284]">
            {product.total_sell} sold
          </span>
        </div>
      </Link>

      {/* side options */}
      <div>
        {click ? (
          <AiFillHeart
            size={22}
            className="absolute cursor-pointer right-2 top-5"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="absolute cursor-pointer right-2 top-5"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}

        <AiOutlineEye
          size={22}
          className="absolute cursor-pointer right-2 top-14"
          onClick={() => setOpenCart(!openCart)}
          color="#333"
          title="Quick view"
        />

        <AiOutlineShoppingCart
          size={22}
          className="absolute cursor-pointer right-2 top-24"
          onClick={() => setOpenCart(!openCart)}
          color="#444"
          title="Add to cart"
        />

        {openCart && (
          <ProductDetailsCard product={product} setOpenCart={setOpenCart} />
        )}
      </div>
    </div>
  );
}
