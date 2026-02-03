import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Rahul Khandke | Digital Architect",
    description: "Personal portfolio of Rahul Khandke, a Full-Stack MERN developer creating high-performance interactive experiences.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="https://fav.farm/👨‍💻" />
            </head>
            <body className={`${inter.className} antialiased selection:bg-accent selection:text-white bg-background text-foreground custom-cursor-active`}>
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
