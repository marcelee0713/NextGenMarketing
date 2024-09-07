import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      weight: "700",
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
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} antialiased bg-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
