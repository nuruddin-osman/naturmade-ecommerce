import React from "react";
import Image from "next/image";
import BlueBarImg from "@/public/image/bluebar.png";

const BlueBar = () => {
  return (
    <div className="w-full">
      <Image src={BlueBarImg} className="w-full" />
    </div>
  );
};

export default BlueBar;
