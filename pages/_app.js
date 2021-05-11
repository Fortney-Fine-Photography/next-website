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
                <link
                    rel="preload"
                    href="/fonts/ArchitypeRenner-Bold.otf"
                    as="font"
                    type="font/opentype"
                />
                <link
                    rel="preload"
                    href="/fonts/ArchitypeRenner-Regular.otf"
                    as="font"
                    type="font/opentype"
                />

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
                <link rel="icon" href="/favicon.ico" />

                <meta
                    content="Highest quality photography, video, and 360 virtual tours for your real estate property in Washington DC, Maryland, or Virginia. With our 24 hour turn around times and unbranded links, you can have your property listed on the MLS, embedded on your website, and under contact as soon as possible!"
                    property="og:description"
                />
                <meta
                    name="description"
                    content="Highest quality photography, video, and 360 virtual tours for your real estate property in Washington DC, Maryland, or Virginia. With our 24 hour turn around times and unbranded links, you can have your property listed on the MLS, embedded on your website, and under contact as soon as possible!"
                    name="description"
                />
            </Head>
            {pathname === "/" && (
                <video
                    className="bg-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    // poster="/portfolio/photos-thumbnail.jpg"
                >
                    <source
                        src="/videos/background-video-xsmall.mp4"
                        type="video/mp4"
                    ></source>
                </video>
            )}
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
