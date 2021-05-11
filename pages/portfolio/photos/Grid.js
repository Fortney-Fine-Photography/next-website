import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import Gallery from "react-grid-gallery";
import image from "next/image";
import LazyLoad from "react-lazyload";

import styles from "../../../styles/Portfolio/photos.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const Grid = ({ scrollPosition }) => {
    const col1 = [
        {
            src: "1.jpg",
        },
        {
            src: "2.jpg",
        },
        {
            src: "3.jpg",
        },
        {
            src: "4.jpg",
        },
        {
            src: "5.jpg",
        },
        {
            src: "6.jpg",
        },
        {
            src: "7.jpg",
        },
        {
            src: "8.jpg",
        },
        {
            src: "9.jpg",
        },
        {
            src: "10.jpg",
        },
        {
            src: "11.jpg",
        },
        {
            src: "12.jpg",
        },
        {
            src: "13.jpg",
        },
        {
            src: "14.jpg",
        },
        {
            src: "15.jpg",
        },
        {
            src: "16.jpg",
        },
        {
            src: "17.jpg",
        },
        {
            src: "18.jpg",
        },
        {
            src: "19.jpg",
        },
        {
            src: "20.jpg",
        },
        {
            src: "21.jpg",
        },
        {
            src: "22.jpg",
        },
        {
            src: "23.jpg",
        },
        {
            src: "24.jpg",
        },
        {
            src: "25.jpg",
        },
        {
            src: "26.jpg",
        },
        {
            src: "27.jpg",
        },
        {
            src: "28.jpg",
        },
        {
            src: "29.jpg",
        },
        {
            src: "30.jpg",
        },
    ];
    const col2 = [
        {
            src: "31.jpg",
        },
        {
            src: "32.jpg",
        },
        {
            src: "33.jpg",
        },
        {
            src: "34.jpg",
        },
        {
            src: "35.jpg",
        },
        {
            src: "36.jpg",
        },
        {
            src: "37.jpg",
        },
        {
            src: "38.jpg",
        },
        {
            src: "39.jpg",
        },
        {
            src: "40.jpg",
        },
        {
            src: "41.jpg",
        },
        {
            src: "42.jpg",
        },
        {
            src: "43.jpg",
        },
        {
            src: "44.jpg",
        },
        {
            src: "45.jpg",
        },
        {
            src: "46.jpg",
        },
        {
            src: "47.jpg",
        },
        {
            src: "48.jpg",
        },
        {
            src: "49.jpg",
        },
        {
            src: "50.jpg",
        },
        {
            src: "51.jpg",
        },
        {
            src: "52.jpg",
        },
        {
            src: "53.jpg",
        },
        {
            src: "54.jpg",
        },
        {
            src: "55.jpg",
        },
        {
            src: "56.jpg",
        },
        {
            src: "57.jpg",
        },
        {
            src: "58.jpg",
        },
        {
            src: "59.jpg",
        },
        {
            src: "60.jpg",
        },
        {
            src: "61.jpg",
        },
        {
            src: "62.jpg",
        },
    ];
    const col3 = [
        {
            src: "63.jpg",
        },
        {
            src: "64.jpg",
        },
        {
            src: "65.jpg",
        },
        {
            src: "66.jpg",
        },
        {
            src: "67.jpg",
        },
        {
            src: "68.jpg",
        },
        {
            src: "69.jpg",
        },
        {
            src: "70.jpg",
        },
        {
            src: "71.jpg",
        },
        {
            src: "72.jpg",
        },
        {
            src: "73.jpg",
        },
        {
            src: "74.jpg",
        },
        {
            src: "75.jpg",
        },
        {
            src: "76.jpg",
        },
        {
            src: "77.jpg",
        },
        {
            src: "78.jpg",
        },
        {
            src: "79.jpg",
        },
        {
            src: "80.jpg",
        },
        {
            src: "81.jpg",
        },
        {
            src: "82.jpg",
        },
        {
            src: "83.jpg",
        },
        {
            src: "84.jpg",
        },
        {
            src: "85.jpg",
        },
        {
            src: "86.jpg",
        },
        {
            src: "87.jpg",
        },
        {
            src: "88.jpg",
        },
        {
            src: "89.jpg",
        },
        {
            src: "90.jpg",
        },
        {
            src: "91.jpg",
        },
        {
            src: "92.jpg",
        },
        {
            src: "93.jpg",
        },
        {
            src: "94.jpg",
        },
        {
            src: "95.jpg",
        },
        {
            src: "96.jpg",
        },
        {
            src: "97.jpg",
        },
    ];

    return (
        <div
            className="flex w-full h-full flex-wrap overflow-x-hidden overflow-y-auto"
            // style={{ maxHeight: "calc(100vh - 311px)" }}
        >
            <div className={`${styles["gallery-column"]} px-1.5`}>
                {col1.map((image) => {
                    return (
                        <ScrollAnimation
                            animateIn="fadeIn"
                            className="flex overflow-hidden mt-3"
                        >
                            <a
                                href={`/portfolio/photos/${image.src}`}
                                target="_blank"
                            >
                                <LazyLoad height={250} once>
                                    <img
                                        src={`/portfolio/photos/${image.src}`}
                                        className="transition-all duration-200"
                                    />
                                </LazyLoad>
                            </a>
                        </ScrollAnimation>
                    );
                })}
            </div>
            <div className={`${styles["gallery-column"]} px-1.5`}>
                {col2.map((image) => {
                    return (
                        <ScrollAnimation
                            animateIn="fadeIn"
                            className="flex overflow-hidden mt-3"
                        >
                            <a
                                href={`/portfolio/photos/${image.src}`}
                                target="_blank"
                            >
                                <LazyLoad height={250} once>
                                    <img
                                        src={`/portfolio/photos/${image.src}`}
                                        className="transition-all duration-200"
                                    />
                                </LazyLoad>
                            </a>
                        </ScrollAnimation>
                    );
                })}
            </div>
            <div className={`${styles["gallery-column"]} px-1.5`}>
                {col3.map((image) => {
                    return (
                        <ScrollAnimation
                            animateIn="fadeIn"
                            className="flex overflow-hidden mt-3"
                        >
                            <a
                                href={`/portfolio/photos/${image.src}`}
                                target="_blank"
                            >
                                <LazyLoad height={250} once>
                                    <img
                                        src={`/portfolio/photos/${image.src}`}
                                        className="transition-all duration-200 animate-fade-in-up"
                                    />
                                </LazyLoad>
                            </a>
                        </ScrollAnimation>
                    );
                })}
            </div>
        </div>
    );
};

export default trackWindowScroll(Grid);
