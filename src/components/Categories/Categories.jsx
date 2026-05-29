import { categorieName } from "../../const";
import { Tag } from "./Categories.styled";

function Categories({ onCategorySelect, selectedCategory }) {
  const isInteractive = typeof onCategorySelect === "function";

  return (
    <>
      {categorieName.map((item) => (
        <Tag
          key={item.id}
          as={isInteractive ? "button" : "span"}
          type={isInteractive ? "button" : undefined}
          onClick={isInteractive ? () => onCategorySelect(item.value) : undefined}
          $isSelected={selectedCategory === item.value}
          $isInteractive={isInteractive}
        >
          <img src={item.srcIcon.default} alt="" /> {item.name}
        </Tag>
      ))}
    </>
  );
}

export default Categories;
