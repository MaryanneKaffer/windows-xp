import { Viewport } from "next";
import tahoma from "../config/fonts/tahoma";
import "@/styles/globals.css";
import { Providers } from "./providers";
import logoIcon from "@/public/logo/logoIcon.png";
import Head from "next/head";
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
      <Head>    
        <title>Windows XP</title>
        <link rel="icon" href={logoIcon.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="justify-self-center bg-black lg:w-[1440px] lg:min-h-[900px] h-[100dvh] w-full no-drag font-tahoma overflow-hidden">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
