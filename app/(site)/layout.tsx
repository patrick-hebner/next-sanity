import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 5;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "My awesome site",
  description: "With next and sanity"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-950"}>
        <header className="px-10 h-10 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-rose-400"
          >
            PH
          </Link>
          <nav className="text-white flex gap-4">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
