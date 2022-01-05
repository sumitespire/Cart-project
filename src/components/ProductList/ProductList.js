import React from "react";
import PropTypes from "prop-types";
import Product from "../../containers/Product";
import { SearchPage } from "../../components/SearchPage";
import { SortPage } from "../../components/SortPage";

const ProductList = ({ products, user, loginUser }) => {
  let [proData, SetData] = React.useState(products);
  const SearchData = (event) => {
    SetData(event);
  };
  const SortData = (event) => {
    SetData(event);
  };
  return (
    <div>
      <h3>Products</h3>

      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <SearchPage product={products} searchData={SearchData} />
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <SortPage product={products} sortData={SortData} />
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>
            <th scope="col">PublishDate</th>
            <th scope="col">Duration</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {proData.length > 0 ? (
            proData.map((product) => (
              <tr key={product.id} className="product-list__item">
                <Product {...product} user={user} loginUser={loginUser} />
              </tr>
            ))
          ) : (
            <tr className="product-list__item text-danger">
              <td colSpan="6">No Course Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
