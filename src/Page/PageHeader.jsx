import React from "react";

const PageHeader = (props) => {
  const { headerText, icon } = props;
  return (
    <div className="flex justify-between ">
      <h2 className="text-3xl text-yellow-400">{headerText}</h2>
      <span className=" text-yellow-400">{icon}</span>
    </div>
  );
};

export default PageHeader;
