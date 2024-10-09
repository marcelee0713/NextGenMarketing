import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./components/context";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/Inter_18pt-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/inter/Inter_18pt-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/inter/Inter_18pt-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/inter/Inter_18pt-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/inter/Inter_18pt-SemiBold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-inter",
});

const sora = localFont({
  src: [
    {
      path: "../../public/fonts/Sora/Sora-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Sora/Sora-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Sora/Sora-SemiBold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-sora",
});

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "NextGen",
    template: "%s | NextGen",
  },
  description:
    "NextGenMarketing connects content creators and startups, offering tailored promotional services for effective marketing collaboration in the growing creator economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen max-w-full scroll-smooth">
      <body
        className={`w-full h-full ${sora.variable} ${inter.variable} ${montserrat.variable} antialiased bg-secondary`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
