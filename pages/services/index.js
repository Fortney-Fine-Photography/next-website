import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";

const Services = () => {
    return (
        <div className="flex flex-auto w-11/12 lg:w-3/4 flex-col">
            <Head>
                <title>
                    Fortney Fine Photography - Services | High Quality Real
                    Estate Photography, Video, and 360 Virtual Tours
                </title>
                <meta
                    content="Fortney Fine Photography - Services | High Quality Real Estate
                    Photography, Video, and 360 Virtual Tours"
                    property="og:title"
                />
            </Head>
            <ScrollAnimation
                animateIn="fadeIn"
                className="flex flex-col flex-auto"
                style={{ height: "calc(100vh - 154px)" }}
            >
                <div className="flex flex-auto items-center">
                    <div className="w-1/2 flex justify-centyer items-start flex-col">
                        <h1 className="font-archi-bold text-4xl">
                            Unmatched Quality
                        </h1>
                        <h2 className="w-10/12 font-archi-regular text-2xl leading-tight">
                            We use only the most modern equipment, in order to
                            deliver a product whose quality is unmatched. Our
                            custom photography processes are guaranteed to
                            produce higher quality
                        </h2>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img
                            className="min-h-0 object-cover w-full h-full 2xl:w-10/12 2xl:h-10/12"
                            src="/assets/sonya7iii-small.png"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center items-center mb-4">
                    <svg
                        onClick={() =>
                            document
                                .querySelector("#section2")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="h-10 w-10 text-black animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="fadeIn"
                className="flex flex-col flex-auto"
                style={{ height: "calc(100vh - 0px)" }}
            >
                <div className="flex flex-auto items-center" id="section2">
                    <div className="w-1/2 flex justify-centyer items-start flex-col">
                        <h1 className="font-archi-bold text-4xl">
                            Unmatched Quality
                        </h1>
                        <h2 className="w-10/12 font-archi-regular text-2xl leading-tight">
                            We use only the most modern equipment, in order to
                            deliver a product whose quality is unmatched. Our
                            custom photography processes are guaranteed to
                        </h2>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img
                            className="min-h-0 object-cover w-full h-full 2xl:w-10/12 2xl:h-10/12"
                            src="/assets/sonya7iii-small.png"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center items-center mb-4">
                    <svg
                        onClick={() =>
                            document
                                .querySelector("#section3")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="h-10 w-10 text-black animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="fadeIn"
                className="flex flex-col flex-auto"
                style={{ height: "calc(100vh - 0px)" }}
            >
                <div className="flex flex-auto items-center" id="section3">
                    <div className="w-1/2 flex justify-centyer items-start flex-col">
                        <h1 className="font-archi-bold text-4xl">
                            Unmatched Quality
                        </h1>
                        <h2 className="w-10/12 font-archi-regular text-2xl leading-tight">
                            We use only the most modern equipment, in order to
                            deliver a product whose quality is unmatched. Our
                            custom photography processes are guaranteed to
                        </h2>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img
                            className="min-h-0 object-cover w-full h-full 2xl:w-10/12 2xl:h-10/12"
                            src="/assets/sonya7iii-small.png"
                        />
                    </div>
                </div>
                {/* <div className="flex w-full justify-center items-center mb-4">
                    <svg
                        className="h-10 w-10 text-black animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div> */}
            </ScrollAnimation>
        </div>
    );
};

export default Services;
