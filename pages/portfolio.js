import Link from "next/link";
import { useState } from "react";
import TypeLink from "../components/portfolio/TypeLink";

const Portfolio = () => {
    return (
        <div className="flex flex-auto w-11/12 lg:w-3/4 flex-col mt-3 mb-6">
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
