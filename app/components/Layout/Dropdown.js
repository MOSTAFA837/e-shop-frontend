import styles from "@/app/styles/styles";
import { useRouter } from "next/navigation";

export default function Dropdown({ categoriesdata, setDropdown }) {
  const router = useRouter();

  const handleSubmit = (cat) => {
    const slug = cat.title.toLowerCase().replaceAll(" ", "-");

    router.push(`/products?category=${cat.title}`);
    setDropdown(false);
  };

  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesdata &&
        categoriesdata.map((cat, i) => (
          <div
            className={`${styles.noramlFlex}`}
            onClick={() => handleSubmit(cat)}
            key={i}
          >
            <img
              src={cat.image_Url}
              alt=""
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
            />

            <h3 className="m-3 cursor-pointer select-none">{cat.title}</h3>
          </div>
        ))}
    </div>
  );
}
