"use client";

import { brandingData, categoriesData } from "@/app/static/data";
import styles from "@/app/styles/styles";
import { useRouter } from "next/navigation";

export default function Categories() {
  const router = useRouter();

  return (
    <>
      <div className={`hidden sm:block ${styles.section}`}>
        <div
          className={`branding my-12 flex justify-between gap-5 flex-wrap w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((brand, i) => (
              <div className="flex items-start" key={i}>
                {brand.icon}

                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {brand.title}
                  </h3>

                  <p className="text-xs md:text-sm">{brand.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((cat, i) => {
              const handleSubmit = (cat) => {
                router.push(`/products?category=${cat.title}`);
              };

              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(cat)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{cat.title}</h5>
                  <img
                    src={cat.image_Url}
                    className="w-[120px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
