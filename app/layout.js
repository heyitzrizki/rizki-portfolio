export const metadata = {
  title: "Rizki Portfolio",
  description: "AI, Finance, and Data Science Portfolio",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}