import { LazyLoadImage } from "react-lazy-load-image-component";
import Gallery from "react-grid-gallery";
import image from "next/image";
import LazyLoad from "react-lazyload";

import styles from "../../../styles/Portfolio/photos.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const Grid = ({ col1, col2, col3 }) => {
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
                            <LazyLoad offset={100} once>
                                <img
                                    src={`/portfolio/photos/${image.src}`}
                                    className="transition-all duration-200"
                                />
                            </LazyLoad>
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
                            <LazyLoad offset={100} once>
                                <img
                                    src={`/portfolio/photos/${image.src}`}
                                    className="transition-all duration-200 animate-fade-in-up"
                                />
                            </LazyLoad>
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
                            <LazyLoad offset={100} once>
                                <img
                                    src={`/portfolio/photos/${image.src}`}
                                    className="transition-all duration-200 animate-fade-in-up"
                                />
                            </LazyLoad>
                        </ScrollAnimation>
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;
