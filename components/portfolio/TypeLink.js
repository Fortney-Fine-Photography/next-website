import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const TypeLink = ({ href, title, imgsrc, isMiddle }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Link href={`/portfolio/${href}`}>
            <a
                className={`flex flex-1 w-full relative overflow-hidden rounded-lg shadow-lg ${
                    isMiddle ? "my-4" : ""
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <h1
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-5 font-archi-bold text-white pl-3"
                    style={{ zIndex: 1 }}
                >
                    {title}
                </h1>
                {href === "videos" && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src="/portfolio/videos-thumbnail.mp4"
                        className="rounded-lg w-full h-full object-cover object-center absolute"
                    />
                )}
                {href === "360" && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src="/portfolio/360-thumbnail.mp4"
                        className="rounded-lg w-full h-full object-cover object-center absolute"
                    />
                )}
                {href === "photos" && (
                    <img
                        src={imgsrc}
                        className="w-full h-full object-cover object-center absolute"
                    />
                )}
                <CSSTransition
                    in={isHovering}
                    timeout={150}
                    classNames="fade-light"
                    unmountOnExit
                >
                    <div className="flex absolute w-full h-full bg-black opacity-25" />
                </CSSTransition>
            </a>
        </Link>
    );
};

export default TypeLink;
