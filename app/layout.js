import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Rizki Anwar Syaifullah | Data Science & AI Portfolio",
    template: "%s | Rizki Anwar Syaifullah",
  },
  description:
    "Portfolio of Rizki Anwar Syaifullah, a Business Analytics graduate student focused on applied AI, financial machine learning, risk modeling, RAG systems, and data science products.",
  keywords: [
    "Rizki Anwar Syaifullah",
    "Data Science",
    "AI Portfolio",
    "Machine Learning",
    "Financial Machine Learning",
    "Credit Risk",
    "RAG System",
    "Business Analytics",
    "Ajou University",
  ],
  authors: [{ name: "Rizki Anwar Syaifullah" }],
  creator: "Rizki Anwar Syaifullah",
  openGraph: {
    title: "Rizki Anwar Syaifullah | Data Science & AI Portfolio",
    description:
      "Applied AI, financial machine learning, risk modeling, RAG systems, and data science portfolio.",
    url: "https://rizki-portfolio-tau.vercel.app",
    siteName: "Rizki Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}