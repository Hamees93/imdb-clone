import React from "react";

const HeaderMenuItem = ({ Icon, Name }) => {
  return (
    <div className="mx-4 flex flex-col items-center cursor-pointer hover:text-white lg:mx-6">
      <Icon className="text-2xl" />
      <span className="my-2 text-sm">{Name}</span>
    </div>
  );
};

export default HeaderMenuItem;
