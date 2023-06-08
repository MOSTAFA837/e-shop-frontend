import { categoriesData, productData } from "@/app/static/data";
import styles from "@/app/styles/styles";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Dropdown from "./Dropdown";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term == "") return;

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filteredProducts);
  };

  const handleMouseLeave = () => {
    setSearchData(null);
  };

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-0 w-full h-full transition-all ${
          dropdown && "bg-[#9e9e9e29]"
        }`}
        onClick={() => setDropdown(false)}
      ></div>

      <div className={`${styles.section}`}>
        <div
          className="h-[50px] my-[20px] flex items-center justify-between"
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>

          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#969696] focus:border-[#0d0e11] border-[2px] rounded-md"
              onMouseEnter={handleSearchChange}
            />

            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />

            {searchData && searchData.length !== 0 ? (
              <div className="absolute h-auto w-full bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((product, index) => {
                    const d = product.name;
                    const product_name = d.replace(/\s+/g, "-");

                    return (
                      <Link href={`/product/${product_name}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            className="w-[48px] h-[40px] mr-[10px]"
                            src={product.image_Url[0].url}
                            alt=""
                          />
                          <h1>{product.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link href={`/seller"}`}>
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden md:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div onClick={() => setDropdown(!dropdown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden lg:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />

              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>

              {dropdown ? (
                <IoIosArrowDown
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                />
              ) : (
                <IoIosArrowForward
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                />
              )}

              {dropdown && (
                <Dropdown
                  categoriesdata={categoriesData}
                  setDropdown={setDropdown}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
