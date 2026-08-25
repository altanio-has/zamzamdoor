import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Industrial Doors | Zam Zam Automatic Door Repairs",
  description: "Roller shutters, high-speed doors, and loading dock equipment for warehouses and industrial facilities across UAE and GCC.",
};

export default function Page() {
  return <CategoryPage slug="industrial-doors" />;
}
