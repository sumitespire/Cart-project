import React, { useState } from "react";

export const SearchPage = (props) => {
  let [valuedata, upatevalue] = useState("");

  const FilterValidation = (e) => {
    let currentValue = e.target.value;
    upatevalue(currentValue);

    let filterdata_ = props.product.filter((item) =>
      item.name.toLowerCase().includes(currentValue.toLowerCase())
    );

    console.log("___seach filter", filterdata_);
    props.searchData(filterdata_);
  };

  // console.log('____search page', props);

  return (
    <section className="mb-2 mt-">
      <input
        type="text"
        placeholder="Search Item"
        value={valuedata}
        onChange={FilterValidation}
        className="form-control"
      ></input>
    </section>
  );
};
