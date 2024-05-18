import React from "react";
import Card from "../Components/Card/Card";
import "./Page.css";
const DataScience = ({ data }) => {
  const dsdata = data.filter((element) => element.Article === "Data Science");
  return (
    <div className="page-container">
      <div className="page">
        {dsdata.map((element, index) => {
          return <Card element={element} index={index} />;
        })}
      </div>
    </div>
  );
};
export default DataScience;
