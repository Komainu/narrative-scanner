export const metadata = {
  title: "Narrative Scanner",
  description: "Visualize topic narratives without conclusions",
  openGraph: {
    title: "Narrative Scanner",
    description: "Visualize topic narratives",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        {children}
      </body>
    </html>
  );
}
