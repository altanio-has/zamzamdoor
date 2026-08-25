import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Automatic Doors | Zam Zam Automatic Door Repairs",
  description: "Automatic sliding, swinging, and revolving door systems — supply, installation, maintenance, and repair across UAE and GCC.",
};

export default function Page() {
  return <CategoryPage slug="automatic-doors" />;
}
