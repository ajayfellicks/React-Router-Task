import React from "react";
import Card from "../Components/Card/Card";
import "./Page.css";
const CyberSecurity = ({ data }) => {
  const csdata = data.filter((element) => element.Article === "Cyber Security");
  return (
    <div className="page-container">
      <div className="page">
        {csdata.map((element, index) => {
          return <Card element={element} index={index} />;
        })}
      </div>
    </div>
  );
};

export default CyberSecurity;
