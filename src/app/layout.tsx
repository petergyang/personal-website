import type { Metadata } from "next";
import { Crimson_Pro, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["500"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Peter Yang",
  description: "Product leader and creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme === 'dark' || (!theme && prefersDark);
                  var root = document.documentElement;
                  if (isDark) {
                    root.classList.add('dark');
                    root.style.setProperty('--background', '#1a1a1a');
                    root.style.setProperty('--foreground', '#f0f0f0');
                    root.style.setProperty('--accent', '#ff4444');
                  } else {
                    root.style.setProperty('--background', '#F5F5F5');
                    root.style.setProperty('--foreground', '#000000');
                    root.style.setProperty('--accent', '#D30800');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${crimsonPro.variable} ${manrope.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
