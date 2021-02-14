import React from "react";
import { connect } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/common/elements/Card/Card";

const ProductPage = ({ products }) => {
  return (
    <React.Fragment>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                Ladies
              </li>
              <li className="list-group-item">Jeans</li>
              <li className="list-group-item">Shirts</li>
              <li className="list-group-item">Dress</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
            <div>
              <label for="customRange1" class="form-label">
                Example range
              </label>
              <input type="range" class="form-range" id="customRange1"></input>
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
                {products.map((item, index) => (
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
