import Head from "next/head";
import { useEffect } from "react";
import Grid from "./Grid";

const Photos = () => {
    return (
        <div className="flex flex-auto w-11/12 lg:w-3/4 flex-col items-center justify-start mb-6">
            <Head>
                <title>
                    Fortney Fine Photography - Portfolio | High Quality Real
                    Estate Photography, Video, and 360 Virtual Tours
                </title>
                <meta
                    content="Fortney Fine Photography - Portfolio | High Quality Real Estate
                    Photography, Video, and 360 Virtual Tours"
                    property="og:title"
                />
            </Head>
            <h1 className="text-black font-archi-bold text-5xl self-start">
                Photos
            </h1>
            <Grid />
        </div>
    );
};

export default Photos;
