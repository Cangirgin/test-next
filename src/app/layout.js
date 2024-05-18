import { Inter } from "next/font/google";
import "@/styles/global.scss"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Can Girgin Todo App",
  description: "Todo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
