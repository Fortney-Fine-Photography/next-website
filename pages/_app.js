import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    const { pathname } = useRouter();

    return (
        <div
            className={`flex flex-col items-center w-full min-h-screen relative ${
                pathname === "/" ? "overflow-hidden h-screen" : ""
            }`}
        >
            <Head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-3JX2NW74XK"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag()
                        {dataLayer.push(arguments);}
                        gtag('js', new Date()); gtag('config', 'G-3JX2NW74XK');`,
                    }}
                />
            </Head>
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
