import React, { useState } from "react";
import { connect } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Breadcrumb from "../../components/common/elements/Breadcrumb/Breadcrum";
import Card from "../../components/common/elements/Card/Card";
import { getUniqueValues } from "../../utils/helper";
import "./productPage.scss";

const ProductPage = ({ products }) => {
  let categories = getUniqueValues(products, "categories");
  const [category, setCategory] = useState("all");

  let filteredproduct =
    category === "all"
      ? products
      : products.filter((item) => item.categories === category);
  console.log(filteredproduct);

  return (
    <React.Fragment>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-12">
            <Breadcrumb title="products" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ul className="list-group">
              {categories.map((c, index) => (
                <li
                  key={index}
                  className={`${
                    category === c.toLowerCase()
                      ? "list-group-item active"
                      : "list-group-item"
                  }`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="range-filter">
              <label for="customRange1" className="form-label">
                Price
              </label>
              <input
                type="range"
                className="form-range"
                min="50"
                max="500"
              ></input>
            </div>
          </div>
          <div className="col-lg-9 p-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Banner />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <h3>Ladies Wear</h3>
                </div>
                <div className="col-lg-8">
                  <div className="btn-group">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      sort by | Popularity
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      show | 12 per page
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row justify-content-around">
                {filteredproduct.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </div>
            <div className="pagination">
              <nav aria-label="Page navigation example ">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductPage);
