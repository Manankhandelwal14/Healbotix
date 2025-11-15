import ViDashboard from "@/components/Dashboard/DashBoard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import HealthDashboard from "@/components/Dashboard/DashBoard";

export const metadata: Metadata = {
  title:
    "Healbotix - Health Dashboard ",
  description: "Healbotix Health Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <HealthDashboard /> 
      </DefaultLayout>
    </>
  );
}
