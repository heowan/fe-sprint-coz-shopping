import { ItemBox } from "./fiterItemStyle";

export default function FilterItem({
  filterImg,
  filterTitle,
  index,
  currentTab,
  setCurrentTab,
}) {
  const onClick = () => {
    setCurrentTab(index);
  };
  return (
    <ItemBox onClick={onClick}>
      <div>
        <img src={filterImg} alt="필터이미지" />
      </div>
      <h3
        className={index === currentTab ? "filterTitle focuse" : "filterTitle"}
      >
        {filterTitle}
      </h3>
    </ItemBox>
  );
}
