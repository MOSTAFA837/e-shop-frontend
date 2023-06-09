import { navItems } from "@/app/static/data";
import styles from "@/app/styles/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={`block md:${styles.noramlFlex} `}>
      {navItems.map((item, i) => (
        <div className="flex" key={i}>
          <Link
            href={item.url}
            className={`md:text-[#070707] pb-[30px] md:pb-0 font-[500] px-6 cursor-pointer ml-2 ${
              pathname === item.url && "md:text-[#1d26ac]"
            }`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
