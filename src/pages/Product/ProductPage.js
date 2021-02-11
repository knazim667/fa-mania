import React from "react";
import Banner from "../../components/Banner/Banner";

const ProductPage = () => {
  return (
    <React.Fragment>
      <div className="container">
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
          <div className="col-lg-4">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                An active item
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="col-lg-8">
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
