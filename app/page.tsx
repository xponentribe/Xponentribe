import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Xponent Tribe",
};

export default function Home() {
  return (
    <>
      <div className="w-screen">
        <Hero />
      </div>
    </>
  );
}
