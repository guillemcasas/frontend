import "@evn/ui/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

const RootLayout: React.FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
