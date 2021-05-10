import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    const { pathname } = useRouter();

    return (
        <div
            className={`flex flex-col items-center w-full min-h-screen relative ${
                pathname === "/" ? "overflow-hidden h-screen" : ""
            }`}
        >
            {pathname === "/" && (
                <video
                    className="bg-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/videos/background-video-small.webm"
                />
            )}
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
