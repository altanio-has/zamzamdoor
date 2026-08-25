import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Security Gates | Zam Zam Automatic Door Repairs",
  description: "Automatic gates, boom barriers, and turnstile access control solutions, designed and installed for reliable security across UAE and GCC.",
};

export default function Page() {
  return <CategoryPage slug="security-gates" />;
}
