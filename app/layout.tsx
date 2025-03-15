import "@/styles/globals.css";
import tahoma from "../config/fonts/tahoma";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={tahoma.variable}>
      <head />
      <body className="justify-self-center max-w-[1440px] max-h-[900px] w-screen h-screen font-tahoma">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
