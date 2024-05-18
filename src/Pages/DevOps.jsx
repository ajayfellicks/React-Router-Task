import React from "react";
import Card from "../Components/Card/Card";
import "./Page.css";
const DevOps = ({ data }) => {
  const devopsdata = data.filter((element) => element.Article === "DevOps");
  return (
    <div className="page-container">
      <div className="page">
        {devopsdata.map((element, index) => {
          return <Card element={element} index={index} />;
        })}
      </div>
    </div>
  );
};

export default DevOps;
