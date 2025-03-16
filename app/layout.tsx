import { Viewport } from "next";
import { Providers } from "./providers";
import tahoma from "../config/fonts/tahoma";
import "@/styles/globals.css";

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
      <body className="justify-self-center max-w-[1440px] max-h-[900px] w-screen h-screen font-tahoma overflow-hidden">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
