import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Xponent Tribe",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
