import React from "react";
import Header from "./Header";
// import HeroSection from "./HeroSection";

import { Epilogue } from "@next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

const MainSection = () => {
  return <div>
    <Header fontClass={epilogue.className} />
    {/* <HeroSection fontClass={epilogue.className}  /> */}
  </div>;
};

export default MainSection;
