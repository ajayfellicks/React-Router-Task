import React from "react";
import Card from "../Components/Card/Card";
import "./Page.css";

const All = ({ data }) => {
  return (
    <div className="page-container">
      <div className="page">
        {data.map((element, index) => {
          return <Card element={element} index={index} />;
        })}
      </div>
    </div>
  );
};

export default All;
