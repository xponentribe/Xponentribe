import Team from "@/components/Team";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Team | Xponent Tribe",
};

const page = () => {
  return (
    <div>
      <Team />
    </div>
  );
};

export default page;
