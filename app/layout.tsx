import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Narrative Scanner",
  description: "Visualizes how a topic is being discussed.",
  other: {
    "base:app_id": "6971e49288e3bac59cf3d32e",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
