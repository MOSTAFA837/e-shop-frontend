import React from "react";

export default function Cart({ setOpenCart }) {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-[#0000004b]"
        onClick={() => setOpenCart(false)}
      ></div>

      <div className="fixed top-0 right-0 h-full w-[80%] overflow-y-scroll md:w-[25%] bg-white flex flex-col justify-between shadow-sm">
        Cart
      </div>
    </>
  );
}
