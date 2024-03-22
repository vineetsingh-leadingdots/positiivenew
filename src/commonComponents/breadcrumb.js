import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = ({ linkTo, imgSrc }) => {
  return (
    <>
      <div className="breadcrumb">
        <Link to={linkTo}>
          <span>
            <img src={imgSrc} />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Breadcrumb;
