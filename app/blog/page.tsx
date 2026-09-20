import type { Metadata } from "next";
import BlogListPage from "@/components/BlogListPage";

export const metadata: Metadata = {
  title: "Blog | Zam Zam Automatic Door Repairs",
  description: "Guides and tips on automatic doors, automatic sliding doors, automatic garage doors, gate barriers, automatic rolling shutters, and automatic access control in UAE.",
};

export default function Page() {
  return <BlogListPage />;
}
