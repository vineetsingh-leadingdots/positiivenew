import { Col, Row } from 'antd';
import { Link } from "react-router-dom";
import DisplayProduct from "../../commonComponents/displayProduct";
import SearchFilter from "./searchFilter";

import SelectProductPopup from "./selectProductPopup";
const Search = () => {
  
  const products = [
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "1",
      cashImg: "/images/cash.webp",
    },
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "2",
      cashImg:"/images/cash.webp"
    },
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "3",
      cashImg:"/images/cash.webp",
    }, {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "4",
      cashImg:"/images/cash.webp",
    },
  ];
  return (
    <>
    <div className="breadcrumb">
        <Link to="/order-history" className="flex items-center">
          <span>
            <img src="/images/Search.webp" />
          </span>
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Search
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Jameson Irish Whiskey
        </Link>
      </div>
      <div className="headingH">
        <h2>Search</h2>
      </div>
      <div className='content orderSearch'>
     
        <Col className="filterProduct mb-5 flex items-center justify-between">
          <div>
            <div className="heading">
              <h3>Filter Products</h3>
            </div>
            <p>3 total filters applied: Price, Type, Category, Division </p>
            <Col className="filterTags ">
              <button className="ftagBtn mr-2">
                $12 - $24
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Spirits
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Tequila
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Coastal Pacific
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Emerald
                <img src="/images/close-circle.webp" />
              </button>
            </Col>
          </div>
          <div className=" searchFilterSec">
            <div className="filter" >
              <SearchFilter />
            </div>
         
            <SelectProductPopup/>
          </div>
        </Col>
        <Row gutter={[16, 16]}  >
          {products.map((product, index) => (
            <Col key={index} className="gutter-row" xs={24} md={12} lg={8}>
              <DisplayProduct
                productImg={product.productImg}
                productName={product.productName}
                productLocation={product.productLocation}
                purchaseText={product.purchaseText}
                purchasePrice={product.purchasePrice}
                productDeal={product.productDeal}
                checkboxId={product.checkboxId}
                cashImg={product.cashImg}
              />
            </Col>
          ))}
        </Row>
      </div>



    </>
  );
};

export default Search;
