import React from "react";
import "./BuyerInfo.css";

const BuyerInfo = () => {
  return (
    <>
      <div>
        <div className="pain-container">
          {/* Stated Pain Points */}
          <div className="pain-section">
            <h4>Stated pain points</h4>
            <p>
              Source <a href="#">Discover call transcript, AE calls</a>
            </p>
            <div className="pain-section-content">
              <table className="list-table">
                <tbody>
                  {/* Info 1 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="user-info">
                          <div className="user-image">
                            <img src="https://placehold.co/400" alt="User 1" />
                          </div>
                          <div className="pain-text">
                            <p className="top">Communication tracking</p>
                            <p className="bottom">Director - Product</p>
                          </div>
                        </div>
                        <div className="severity-tag">
                          <div className="severity">
                            <p>Minor</p>
                          </div>
                          <div
                            className="tag"
                            style={{ backgroundColor: "#01c37e" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 2 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="user-info">
                          <div className="user-image">
                            <img src="https://placehold.co/400" alt="User 1" />
                          </div>
                          <div className="pain-text">
                            <p className="top">Campaign ROI</p>
                            <p className="bottom">Manager - Marketing</p>
                          </div>
                        </div>
                        <div className="severity-tag">
                          <div className="severity">
                            <p>Major</p>
                          </div>
                          <div
                            className="tag"
                            style={{ backgroundColor: "#f29f43" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 3 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="user-info">
                          <div className="user-image">
                            <img src="https://placehold.co/400" alt="User 1" />
                          </div>
                          <div className="pain-text">
                            <p className="top">Communication tracking</p>
                            <p className="bottom">Director - Engineering</p>
                          </div>
                        </div>
                        <div className="severity-tag">
                          <div className="severity">
                            <p>Minor</p>
                          </div>
                          <div
                            className="tag"
                            style={{ backgroundColor: "#01c37e" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Derived Pain Points */}
          <div className="pain-section">
            <h4>Derived pain points</h4>
            <p>
              Source <a href="#">Discover call transcript, AE calls</a>
            </p>
            <div className="pain-section-content">
              <table className="list-table">
                <tbody>
                  {/* Info 1 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="user-info">
                          <div className="user-image">
                            <img src="https://placehold.co/400" alt="User 1" />
                          </div>
                          <div className="pain-text">
                            <p className="top">Manual SEO management</p>
                            <p className="bottom">Director - Engineering</p>
                          </div>
                        </div>
                        <div className="severity-tag">
                          <div className="severity">
                            <p>Major</p>
                          </div>
                          <div
                            className="tag"
                            style={{ backgroundColor: "#f29f43" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 2 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="user-info">
                          <div className="user-image">
                            <img src="https://placehold.co/400" alt="User 1" />
                          </div>
                          <div className="pain-text">
                            <p className="top">Web page management</p>
                            <p className="bottom">Director - Engineering</p>
                          </div>
                        </div>
                        <div className="severity-tag">
                          <div className="severity">
                            <p>Minor</p>
                          </div>
                          <div
                            className="tag"
                            style={{ backgroundColor: "#01c37e" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 3 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="user-info">
                          <div className="user-image">
                            <img src="https://placehold.co/400" alt="User 1" />
                          </div>
                          <div className="pain-text">
                            <p className="top">Manual Ad management</p>
                            <p className="bottom">Director - Product</p>
                          </div>
                        </div>
                        <div className="severity-tag">
                          <div className="severity">
                            <p>Critical</p>
                          </div>
                          <div
                            className="tag"
                            style={{ backgroundColor: "#eb4747" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="pain-container">
          {/* Business Initiatives */}
          <div className="business-initiatives">
            <h4>Business initiatives</h4>
            <p>
              Source <a href="#">Discover call transcript, AE calls</a>
            </p>
            <div className="pain-section-content">
              <table className="list-table">
                <tbody>
                  {/* Info 1 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="severity-tag">
                          <div
                            className="tag"
                            style={{ backgroundColor: "#29c7d6" }}
                          ></div>
                          <div className="pain-text">
                            <p className="top">Placeholder list item</p>
                            <p className="bottom">Director - Product</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 2 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="severity-tag">
                          <div
                            className="tag"
                            style={{ backgroundColor: "#29c7d6" }}
                          ></div>
                          <div className="pain-text">
                            <p className="top">Dummy Placeholder</p>
                            <p className="bottom">Manager - Marketing</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 3 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="severity-tag">
                          <div
                            className="tag"
                            style={{ backgroundColor: "#29c7d6" }}
                          ></div>
                          <div className="pain-text">
                            <p className="top">Placeholder list item</p>
                            <p className="bottom">Director - Product</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="pain-container">
          {/* Buying criteria */}
          <div className="business-criteria">
            <h4>Buying criteria</h4>
            <p>
              Source <a href="#">Discover call transcript, AE calls</a>
            </p>
            <div className="pain-section-content">
              <table className="list-table">
                <tbody>
                  {/* Info 1 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="severity-tag">
                          <div
                            className="tag"
                            style={{ backgroundColor: "#29c7d6" }}
                          ></div>
                          <div className="pain-text">
                            <p className="top">Item dummy name</p>
                            <p className="bottom">Director - Product</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 2 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="severity-tag">
                          <div
                            className="tag"
                            style={{ backgroundColor: "#29c7d6" }}
                          ></div>
                          <div className="pain-text">
                            <p className="top">Placeholder list item</p>
                            <p className="bottom">Manager - Marketing</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Info 3 */}
                  <tr>
                    <td>
                      <div className="table-content">
                        <div className="severity-tag">
                          <div
                            className="tag"
                            style={{ backgroundColor: "#29c7d6" }}
                          ></div>
                          <div className="pain-text">
                            <p className="top">Communication tracking</p>
                            <p className="bottom">Director - Engineering</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerInfo;
