import Head from "next/head";

const Tours = () => {
    return (
        <div className="flex flex-auto w-11/12 lg:w-3/4 flex-col mt-3 mb-6">
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
            <h2 className="font-archi-bold text-2xl">
                1815 19th St NW, Washington, D.C.
            </h2>
            <iframe
                width="100%"
                height="640"
                style={{
                    width: "100%",
                    height: "640px",
                    border: "none",
                    maxWidth: "100%",
                }}
                frameborder="0"
                allowfullscreen
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                scrolling="no"
                src="https://kuula.co/share/collection/7ljsF?fs=1&vr=0&sd=1&thumbs=1&info=1&logo=1"
            ></iframe>
            <h2 className="font-archi-bold text-2xl mt-8">
                1815 19th St NW, Washington, D.C.
            </h2>
            <iframe
                width="100%"
                height="640"
                style={{
                    width: "100%",
                    height: "640px",
                    border: "none",
                    maxWidth: "100%",
                }}
                frameborder="0"
                allowfullscreen
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                scrolling="no"
                src="https://kuula.co/share/collection/7ljsF?fs=1&vr=0&sd=1&thumbs=1&info=1&logo=1"
            ></iframe>
        </div>
    );
};

export default Tours;
