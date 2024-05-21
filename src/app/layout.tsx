import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./components/NavBar";

//import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi App con NextJS",
  description: "Soy Full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <NavBar />

        <div className="container border">
          <div className="row justify-content-md-center mt-5">
            <div className="col col-lg-2">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
