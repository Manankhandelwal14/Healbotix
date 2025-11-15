import { Metadata } from "next";
import React from "react";
import HeroPage from "@/components/Home/HeroPage";

export const metadata: Metadata = {
  title:
    "Healbotix",
  description: "",
};

export default function Home() {
  return (
    <>
    
    <HeroPage />
      
    </>
  );
}
