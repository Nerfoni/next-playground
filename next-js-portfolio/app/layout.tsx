import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/context/providers";
import ColorModeButton from "@/components/ColorMode";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Sampo Riikkilä - Web Developer",
  description: "Sampo Riikkilä Portfolio",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="sticky top-0 z-10 border-b bg-white dark:bg-black">
            <div style={{ marginLeft: "auto", marginRight: "auto" }} className="flex h-14 max-w-7xl items-center">
              <p className="mr-4">Sampo Riikkilä</p>
              <Link href="/" className={buttonVariants({ variant: "ghost" })}>
                Home
              </Link>
              <Link href="/experience" className={buttonVariants({ variant: "ghost" })}>
                Experience
              </Link>
              <Link href="/projects" className={buttonVariants({ variant: "ghost" })}>
                Projects
              </Link>

              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <ColorModeButton />
              </div>
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export { metadata };
