import React from "react";
import { HashLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div data-testid="loader" className="w-full flex justify-center items-center">
      <HashLoader color="#000000" />
    </div>
  );
};

export default PageLoader;
