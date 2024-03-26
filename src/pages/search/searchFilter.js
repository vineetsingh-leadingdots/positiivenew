
import React, { useState } from "react";
import AccordianArea from "./accordian";
import { Drawer } from 'antd';
const SearchFilter = () => {
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {   
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer

        placement="left"
        
        zIndex={999999}
        onClose={onClose}
        open={open}
        width={331}

      >
        <div className="createNewPopup">
          <div className="createNew searchFilter">
            <div className="w-full">
              <div
                className="close cursor-pointer absolute top-4 right-4"
                onClick={onClose}
              >
                <img src="/images/close-circle.svg" />
              </div>
              <h2>
                Filter <span>Clear all</span>
              </h2>
              <div className="searchSec mt-10 mb-3">
                <input
                  type="text"
                  className="form_control"
                  placeholder="Search products"
                />
                {/* <button>
                 
                </button> */}
              </div>
              <div className="filterList md:py-0 py-3 px-4">
                <AccordianArea />
              </div>

            </div>

          </div>
        </div>
      </Drawer>
      <button className="filterBtn " onClick={showDefaultDrawer}>
        <img src="/images/filter.webp" /> Filter
      </button>


    </>
  );
};

export default SearchFilter;
