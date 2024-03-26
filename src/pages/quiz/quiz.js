import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import { QuizColumn, QuizData } from "../../commonComponents/tableData";

const Quiz = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Quiz </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Quiz</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/quiz/add" btnText="Add Quiz" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={QuizData} columns={QuizColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
