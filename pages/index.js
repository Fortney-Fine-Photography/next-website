import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="flex flex-auto justify-center w-11/12 lg:w-3/4 flex-col">
            <Head>
                <title>
                    Fortney Fine Photography | High Quality Real Estate
                    Photography, Video, and 360 Virtual Tours
                </title>
                <meta
                    content="Fortney Fine Photography | High Quality Real Estate
                    Photography, Video, and 360 Virtual Tours"
                    property="og:title"
                />
            </Head>
            <div className="flex flex-col justify-end">
                <h1
                    className={`mb-2 md:mb-3 font-archi-bold text-white ${styles["main-title"]}`}
                    style={{ lineHeight: 0.9 }}
                >
                    Quality First
                </h1>
            </div>
            <h1 className="font-archi-regular text-3xl text-white">
                Real Estate Photography
            </h1>
        </div>
    );
}
