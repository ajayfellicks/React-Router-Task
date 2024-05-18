import React from "react";
import Card from "../Components/Card/Card";
import "./Page.css";
const FullStackDevelopment = ({ data }) => {
  const fsddata = data.filter(
    (element) => element.Article === "Full Stack Development"
  );
  return (
    <div className="page-container">
      <div className="page">
        {fsddata.map((element, index) => {
          return <Card element={element} index={index} />;
        })}
      </div>
    </div>
  );
};

export default FullStackDevelopment;
