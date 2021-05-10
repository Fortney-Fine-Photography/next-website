import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
    const { pathname } = useRouter();

    return (
        <div className="flex flex-col items-center justify-center animate-fade-in-up">
            <div className="flex mb-2">
                <Link href="https://www.facebook.com/pages/category/Photography-Videography/Fortney-Fine-Photography-104940874563665/">
                    <a>
                        <img
                            src="/logos/facebook.png"
                            style={{
                                height: "45px",
                                filter:
                                    pathname === "/"
                                        ? "invert(0)"
                                        : "invert(1)",
                            }}
                        />
                    </a>
                </Link>
                <Link href="mailto:fortneyfinephotography@gmail.com">
                    <a>
                        <img
                            src="/logos/gmail.png"
                            className="mx-2"
                            style={{
                                height: "45px",
                                filter:
                                    pathname === "/"
                                        ? "invert(0)"
                                        : "invert(1)",
                            }}
                        />
                    </a>
                </Link>
                <Link href="https://www.instagram.com/fortneyfinephotography/?hl=en">
                    <a>
                        <img
                            src="/logos/instagram.png"
                            style={{
                                height: "45px",
                                filter:
                                    pathname === "/"
                                        ? "invert(0)"
                                        : "invert(1)",
                            }}
                        />
                    </a>
                </Link>
            </div>
            <p
                className={` font-archi-regular text-lg mb-1 ${
                    pathname === "/" ? "text-white" : "text-black"
                }`}
            >
                © 2021 Fortney Fine Photography
            </p>
        </div>
    );
};

export default Footer;
