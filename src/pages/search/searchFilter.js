import { Link } from "react-router-dom";
import React, { useState } from "react";
import AccordianArea from "./accordian";
import { Button, Drawer, Space } from 'antd';
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
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <g opacity="0.6">
                      <path
                        d="M6.14286 11.2857C8.98318 11.2857 11.2857 8.98318 11.2857 6.14286C11.2857 3.30254 8.98318 1 6.14286 1C3.30254 1 1 3.30254 1 6.14286C1 8.98318 3.30254 11.2857 6.14286 11.2857Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.0001 13.0001L10.4287 10.4287"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
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
