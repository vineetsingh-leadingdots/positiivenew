import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomerExperience = () => {
  const [toggleState5, setToggleState5] = useState("experienceAll");
  const toggleTab5 = (index) => {
    setToggleState5(index);
  };
  const [deleteShow, setDeleteShow] = useState(false);
  const handleClick = () => setDeleteShow(!deleteShow);
  return (
    <> 
    <div className="px-2 pt-1 pb-4 Experiences">
    <div className="productTabArea">
      <div className="tabsSec ">
        <div className=" w-full">
          <div className="galleryTab">
            <ul>
              <li>
                <Link
                  onClick={() => toggleTab5("experienceAll")}
                  className={
                    toggleState5 === "experienceAll" ? " active" : "  "
                  }
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toggleTab5("expFavorites")}
                  className={
                    toggleState5 === "expFavorites" ? " active" : "  "
                  }
                >
                  Favorites
                </Link>
              </li>
            </ul>
            <div className="tabArea">
              <div
                className={
                  toggleState5 === "experienceAll"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                <div className="md:mt-10 mt-4 flex flex-wrap ">
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button onClick={handleClick}><img src="/images/dots-v.svg" />     <div className={deleteShow ? "deletePopup show" : "deletePopup"}>
                          Delete
                        </div></button>


                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full  mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full  mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full  mb-3">
                    <Link to="/experience/view" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/Star.svg" /></button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState5 === "expFavorites"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                <div className="mt-10 flex flex-wrap ">
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>

                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full  mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full  mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full md:pr-3 mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full  mb-3">
                    <Link to="" className="experienceCard">
                      <div className="flex justify-between items-baseline">
                        <div className="heading">
                          <h6>A great Tequila experience</h6>
                          <p>Mar 10, 2023</p>
                        </div>
                        <button><img src="/images/dots-v.svg" /></button>
                      </div>
                      <p>4 Types of tequila from Jalico Mexico all priced below $50 front line price.</p>
                      <div className="flex justify-between experiencesDiv">
                        <p>Experiences <span>4</span></p>
                        <button><img src="/images/star-fill.svg" /></button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default CustomerExperience