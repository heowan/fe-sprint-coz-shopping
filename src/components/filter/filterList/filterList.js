import FilterItem from "../fiterItem/filterItem";
import { useState } from "react";
import { filterArr } from "../../../data/filterData";
import { FilterListContainer } from "./filterListStyle";

export default function FilterList({ currentTab, setCurrentTab }) {
  return (
    <FilterListContainer>
      <ul>
        {filterArr.map((el, index) => {
          return (
            <FilterItem
              key={el.id}
              filterImg={el.filterImg}
              filterTitle={el.filterTitle}
              index={index}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            ></FilterItem>
          );
        })}
      </ul>
    </FilterListContainer>
  );
}
