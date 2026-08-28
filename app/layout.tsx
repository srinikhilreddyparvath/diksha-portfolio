import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500", "600"] });
const manrope = Manrope({ variable: "--font-ui", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Diksha Venugopal | Public Health & Clinical Research",
  description: "Physician, public health researcher and clinical research professional working across clinical medicine, epidemiology, biostatistics, clinical studies and health education.",
  openGraph: {
    title: "Dr. Diksha Venugopal | Public Health & Clinical Research",
    description: "Physician, public health researcher and clinical research professional working across clinical medicine, epidemiology, biostatistics, clinical studies and health education.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}><body>{children}</body></html>;
}
