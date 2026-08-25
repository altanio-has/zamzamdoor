import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Garage Doors | Zam Zam Automatic Door Repairs",
  description: "Residential and commercial garage doors and sectional doors with DoorHan automatic operators, supplied and installed across UAE and GCC.",
};

export default function Page() {
  return <CategoryPage slug="garage-doors" />;
}
