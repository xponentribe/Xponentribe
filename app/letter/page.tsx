import Letter from "@/components/Letter";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Letters | Xponent Tribe",
};

const page = () => {
  return (
    <div>
      <Letter />
    </div>
  );
};

export default page;
