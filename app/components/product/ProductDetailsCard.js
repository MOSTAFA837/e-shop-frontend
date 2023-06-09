"use client";

import styles from "@/app/styles/styles";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export default function ProductDetailsCard({ product, setOpenCart }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {};

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-[#0000004b] z-50"
        onClick={() => setOpenCart(false)}
      ></div>

      <div className="fixed [&::-webkit-scrollbar]:hidden p-5 top-[50%] left-[50%] h-[80%] -translate-y-2/4 w-[70%] -translate-x-2/4 rounded-lg overflow-y-scroll bg-white z-50 flex flex-col md:flex-row md:justify-between justify-center items-center shadow-sm">
        <div className="hidden md:flex flex-col justify-between">
          <img
            src={product.image_Url[0].url}
            className="w-[300px] md:h-[300px] m-auto"
            alt=""
          />

          <div className="justify-between flex">
            <Link href={`/shop/preview/`} className="flex items-center gap-2">
              <img
                src={product.shop.shop_avatar.url}
                alt=""
                className="w-[50px] h-[50px] rounded-full mr-2"
              />

              <div>
                <span className={`${styles.shop_name}`}>
                  {product.shop.name}
                </span>
                <span className="pb-3 text-[15px] ml-4">
                  ({product.shop.ratings}) Ratings
                </span>
              </div>
            </Link>
          </div>

          <div
            className={`${styles.button} bg-[#000] rounded-[4px] h-8`}
            onClick={handleMessageSubmit}
          >
            <span className="text-[#fff] text-[12px] flex items-center">
              Send Message <AiOutlineMessage className="ml-1" />
            </span>
          </div>

          <h5 className="text-[16px] text-[red]">
            ({product.total_sell}) Sold out
          </h5>
        </div>

        <div className="w-full md:w-[50%] pt-5 pl-[5px] pr-[5px]">
          <h1 className={`${styles.productTitle} text-[20px] mb-3`}>
            {product.name}
          </h1>

          <p>{product.description}</p>

          <div className="flex pt-3">
            {product.discount_price > 0 ? (
              <>
                <h4 className={`${styles.productDiscountPrice}`}>
                  {product.discount_price}$
                </h4>

                <h3 className={`${styles.price}`}>
                  {product.price ? product.price + "$" : null}
                </h3>
              </>
            ) : (
              <h4 className={`${styles.productDiscountPrice}`}>
                {product.price}$
              </h4>
            )}
          </div>

          <div className="flex items-center mt-12 justify-between pr-3">
            <div>
              <button
                className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                onClick={decrementCount}
              >
                -
              </button>

              <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                {count}
              </span>

              <button
                className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                onClick={incrementCount}
              >
                +
              </button>
            </div>

            <div>
              {click ? (
                <AiFillHeart
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setClick(!click)}
                  color={click ? "red" : "#333"}
                  title="Remove from wishlist"
                />
              ) : (
                <AiOutlineHeart
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setClick(!click)}
                  title="Add to wishlist"
                />
              )}
            </div>
          </div>

          <div
            className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
          >
            <span className="text-[#fff] flex items-center">
              Add to cart <AiOutlineShoppingCart className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
