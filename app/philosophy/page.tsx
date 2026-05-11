import Philosophy from "@/components/Philosophy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Philosophy | Xponent Tribe",
};

const page = () => {
  return (
    <div>
      <Philosophy />
    </div>
  );
};

export default page;
