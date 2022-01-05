import React from "react";

export const SortPage = (props) => {
  const SortFilter = (e) => {
    let currentValue = e.target.value;

    let filterdata_ = props.product.filter((item) =>
      item.publishDate.toLowerCase().includes(currentValue.toLowerCase())
    );

    console.log("___seach filter", filterdata_);
    props.sortData(filterdata_);
  };

  return (
    <>
      <select onChange={SortFilter} className="form-select">
        <option>Sort Filter</option>
        {props.product.map((item) => {
          return (
            <option key={item.id} value={item.publishDate}>
              {item.publishDate}
            </option>
          );
        })}
      </select>
    </>
  );
};
