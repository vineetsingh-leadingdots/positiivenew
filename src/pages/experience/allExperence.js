import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PlusIcon2 } from "../../commonComponents/commonSvg";
import TabsFile from "../../commonComponents/tabs";
import ExperiencesItems from "./allExp";


const AllExperence = () => {
    const [toggleState2, setToggleState2] = useState("Overdetail");
    const toggleTab2 = (index) => {
        setToggleState2(index);
    };
    const [toggleState3, setToggleState3] = useState("750ML");
    const toggleTab3 = (index) => {
        setToggleState3(index);
    };

    const [toggleState4, setToggleState4] = useState("experiencesAll");
    const toggleTab4 = (index) => {
        setToggleState4(index);
    };
    const [deleteShow, setDeleteShow] = useState(false);
    const handleClick = () => setDeleteShow(!deleteShow);
    return (
        <>
  <HelmetProvider>
        <Helmet>
          <title>Positiive | Experiences </title>
        </Helmet>
      </HelmetProvider>
            <div className="breadcrumb">
                <Link to="/order-history" className="flex items-center">
                    <span>
                        <img src="/images/home2.svg" />
                    </span>

                </Link>
            </div>
            <div className="headingH">
                <h2>Experiences </h2>
            </div>
            <div className="content w-full Experiences">
                <div className="w-full ">
                    <div className="card p-6 ">
                        <div className="productTabArea mt0">
                            <div className="tabsExperiences ">
                                <button
                                    className=" btn-save btnSm createAlbum">
                                    <PlusIcon2 />
                                    Create Album
                                </button>
                                <div className="tabArea experinceTabs">
                                    <TabsFile items={ExperiencesItems} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllExperence;
