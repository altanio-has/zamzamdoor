import type { Metadata } from "next";
import AutomaticDoorsPage from "@/components/AutomaticDoorsPage";

export const metadata: Metadata = {
  title: "Automatic Doors in UAE | Sliding, Swing, Folding & Revolving | Zam Zam Door",
  description: "Best automatic doors company in UAE. We supply, install, and maintain automatic sliding, swing, folding, revolving, and glass doors across Abu Dhabi, Dubai, Sharjah & GCC. Free site visit.",
  keywords: "automatic doors, automatic doors UAE, automatic doors Dubai, automatic doors Abu Dhabi, automatic sliding doors, automatic swing doors, automatic folding doors, automatic revolving doors, automatic glass doors",
};

export default function Page() {
  return <AutomaticDoorsPage />;
}
