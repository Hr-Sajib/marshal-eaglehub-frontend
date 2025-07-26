"use client";

import Home from "@/component/home/Home";
import RedShadow from "@/component/shared/RedShadow";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <RedShadow />

      <Home />
    </div>
  );
};

export default page;
