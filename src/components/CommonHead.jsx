import React from "react";

const CommonHead = ({ content1, content2 }) => {
  return (
    <>
      <h2 className="text-4xl text-primary font-semibold font-pop">
        {content1}
        <span className="text-[#4b5563cc]">{content2}</span>
      </h2>
    </>
  );
};

export default CommonHead;
