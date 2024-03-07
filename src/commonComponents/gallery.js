import { Col, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import UploadPopUp from "../pages/chooseCustomer/uploadPopUp";

const Gallery = () => {

  const [toggleState4, setToggleState4] = useState("galleryAll");
  const toggleTab4 = (index) => {
    setToggleState4(index);
  };
  return (
    <>
      <div className="tabsSec pt-7">
        <div className="flex w-full justify-end">
          <UploadPopUp/>
          <div className="sortBy">
            <select className="form_control"><option>Most recent</option></select>
          </div>
        </div>
        <div className="galleryTab">
          <ul>
            <li>
              <Link
                onClick={() => toggleTab4("galleryAll")}
                className={
                  toggleState4 === "galleryAll" ? " active" : "  "
                }
              >
                All
              </Link>
            </li>
            <li>
              <Link
                onClick={() => toggleTab4("Favorites")}
                className={
                  toggleState4 === "Favorites" ? " active" : "  "
                }
              >
                Favorites
              </Link>
            </li>
          </ul>
          <div className="tabArea">
            <div
              className={
                toggleState4 === "galleryAll"
                  ? "tabContent tabContentActive"
                  : "tabContent"
              }
            >
              <Row className="mt-9 gallerySec  " gutter={[36, 16]}>
                <Col xs={24} sm={12} md={8} xl={6}>
                  <div className="galleryItem ">
                    <div className="galleryImage">
                      <img src="/images/image69.webp" />
                      <div className="video">
                        <img src="/images/play.webp" />
                      </div>
                    </div>
                    <div className="galleryContent">
                      <h3>Making Makers Mark</h3>
                      <p>Take an in depth look at the production of a bottle of Jameson </p>
                      <button className="btnPhoto videoBtn">Video</button>
                    </div>
                  </div>
                </Col>
                <Col  xs={24}  sm={12} md={8} xl={6}>
                  <div className="galleryItem ">
                    <div className="galleryImage">
                      <img src="/images/g1.webp" />
                      <div className="video">
                        <img src="/images/play.webp" />
                      </div>
                    </div>
                    <div className="galleryContent">
                      <h3>Billboard in Brooklyn</h3>
                      <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                      <button className="btnPhoto videoBtn">Video</button>
                    </div>
                  </div>
                </Col>
                <Col  xs={24}  sm={12} md={8} xl={6}>
                  <div className="galleryItem ">
                    <div className="galleryImage">
                      <img src="/images/g1.webp" />
                    </div>
                    <div className="galleryContent">
                      <h3>Billboard in Brooklyn</h3>
                      <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                      <button className="btnPhoto document_btn">Document</button>
                    </div>
                  </div>
                </Col>
                <Col  xs={24}  sm={12} md={8} xl={6}>
                  <div className="galleryItem  ">
                    <div className="galleryImage">
                      <img src="/images/g1.webp" />
                    </div>
                    <div className="galleryContent">
                      <h3>Billboard in Brooklyn</h3>
                      <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                      <button className="btnPhoto videoBtn">Video</button>
                    </div>
                  </div>
                </Col>
                <Col  xs={24}  sm={12} md={8} xl={6}>
                  <div className="galleryItem ">
                    <div className="galleryImage">
                      <img src="/images/document.webp" />
                    </div>
                    <div className="galleryContent">
                      <h3>Billboard in Brooklyn</h3>
                      <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                      <button className="btnPhoto document_btn">Document</button>
                    </div>
                  </div>
                </Col>
                <Col  xs={24}  sm={12} md={8} xl={6}>
                  <div className="galleryItem  ">
                    <div className="galleryImage">
                      <img src="/images/g1.webp" />
                    </div>
                    <div className="galleryContent">
                      <h3>Billboard in Brooklyn</h3>
                      <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                      <button className="btnPhoto videoBtn">Video</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className={
                toggleState4 === "Favorites"
                  ? "tabContent tabContentActive"
                  : "tabContent"
              }
            >
              Favorites
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery