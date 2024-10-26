import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Test3-Ironman",
  description: "Aplicacion en NextJs para el test3 tema Iroman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="antialiased h-full"
      >
        {children}
      </body>
    </html>
  );
}
