import { Banner } from "@/components/Banner";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="top-0 sticky z-10">
                <Banner />
                <Header />
            </div>
            {children}
            <Footer />
        </>
    )
}
