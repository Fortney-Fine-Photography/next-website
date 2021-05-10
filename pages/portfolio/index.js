import Head from "next/head";
import TypeLink from "../../components/portfolio/TypeLink";

const Portfolio = () => {
    return (
        <div className="flex flex-auto w-11/12 lg:w-3/4 flex-col mt-3 mb-6 animate-fade-in-up">
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
            <TypeLink
                href="360"
                title="360 Tours"
                imgsrc="/portfolio/photos-thumbnail.jpg"
            />
            <TypeLink
                href="photos"
                title="Photos"
                imgsrc="/portfolio/photos-thumbnail.jpg"
                isMiddle={true}
            />
            <TypeLink
                href="videos"
                title="Videos"
                imgsrc="/portfolio/photos-thumbnail.jpg"
            />
        </div>
    );
};

export default Portfolio;
