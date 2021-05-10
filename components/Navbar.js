import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const { pathname } = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className="flex items-center w-11/12 lg:w-3/4 mt-6 animate-fade-in-up"
            style={{ height: "130px" }}
        >
            <div
                className={`flex-1 hidden md:flex justify-start items-center text-xl lg:text-2xl font-archi-bold ${
                    pathname === "/" ? "text-white" : "text-black"
                }`}
            >
                <Link href="/portfolio">
                    <a
                        className={`mr-4 relative hover:opacity-75 transition-opacity ${
                            styles["navLink"]
                        } ${
                            pathname === "/" ? "" : `${styles["black-navLink"]}`
                        } ${
                            pathname.includes("/portfolio")
                                ? `${styles["active"]}`
                                : ""
                        }`}
                    >
                        Portfolio
                    </a>
                </Link>
                <Link href="/services">
                    <a
                        className={`mr-4 relative hover:opacity-75 transition-opacity ${
                            styles["navLink"]
                        } ${
                            pathname === "/" ? "" : `${styles["black-navLink"]}`
                        } ${
                            pathname === "/services"
                                ? `${styles["active"]}`
                                : ""
                        }`}
                    >
                        Services
                    </a>
                </Link>
                <Link href="/about">
                    <a
                        className={`hover:opacity-75 relative transition-opacity ${
                            styles["navLink"]
                        } ${
                            pathname === "/" ? "" : `${styles["black-navLink"]}`
                        } ${
                            pathname === "/about" ? `${styles["active"]}` : ""
                        }`}
                    >
                        About
                    </a>
                </Link>
            </div>
            <div className="flex justify-center items-center z-10">
                <Link href="/">
                    <a onClick={() => setMenuOpen(false)}>
                        <img
                            src="/logos/ffp-white.png"
                            style={{
                                height: "120px",
                                minHeight: "120px",
                                width: "126px",
                                minWidth: "126px",
                                filter:
                                    pathname === "/"
                                        ? `${
                                              menuOpen
                                                  ? `invert(1)`
                                                  : "invert(0)"
                                          }`
                                        : "invert(1)",
                            }}
                            className={`hover:opacity-75 transition-opacity flex-none ${
                                menuOpen ? `${styles["black-homeLink"]}` : ""
                            }`}
                        />
                    </a>
                </Link>
            </div>
            <div
                className={`flex-1 hidden md:flex justify-end items-center text-xl lg:text-2xl font-archi-bold ${
                    pathname === "/" ? "text-white" : "text-black"
                }`}
            >
                <Link href="tel:7032017026">
                    <a
                        className={`mr-4 relative hover:opacity-75 transition-opacity ${
                            styles["navLink"]
                        } ${
                            pathname === "/" ? "" : `${styles["black-navLink"]}`
                        }`}
                    >
                        (703)-201-7026
                    </a>
                </Link>
                <Link href="/bookings">
                    <a
                        className={`border-2 py-2 px-2 ${
                            pathname === "/" ? "border-white" : "border-black"
                        }`}
                    >
                        Book now!
                    </a>
                </Link>
            </div>
            <div className="flex md:hidden ml-auto z-10">
                <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`${styles["menu-icon"]} ${
                        menuOpen ? `${styles["open"]}` : ""
                    } ${pathname === "/" ? "" : `${styles["black"]}`}`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <CSSTransition
                in={menuOpen}
                unmountOnExit
                timeout={200}
                classNames="openMenu"
            >
                <div
                    className="absolute top-0 right-0 bg-white w-screen h-screen justify-end flex flex-col"
                    style={{ zIndex: 2 }}
                >
                    <div
                        className="flex flex-col items-center justify-around text-4xl font-archi-bold"
                        style={{ height: "calc(100% - 130px" }}
                    >
                        <Link href="/portfolio">
                            <a
                                onClick={() => setMenuOpen(false)}
                                className={`relative hover:opacity-75 transition-opacity ${styles["navLink"]} ${styles["black-navLink"]}`}
                            >
                                Portfolio
                            </a>
                        </Link>
                        <Link href="/services">
                            <a
                                onClick={() => setMenuOpen(false)}
                                className={`relative hover:opacity-75 transition-opacity ${styles["navLink"]} ${styles["black-navLink"]}`}
                            >
                                Services
                            </a>
                        </Link>
                        <Link href="/about">
                            <a
                                onClick={() => setMenuOpen(false)}
                                className={`hover:opacity-75 relative transition-opacity ${styles["navLink"]} ${styles["black-navLink"]}`}
                            >
                                About
                            </a>
                        </Link>
                        <Link href="tel:7032017026">
                            <a
                                onClick={() => setMenuOpen(false)}
                                className={`relative hover:opacity-75 transition-opacity ${styles["navLink"]} ${styles["black-navLink"]}`}
                            >
                                (703)-201-7026
                            </a>
                        </Link>
                        <Link href="/bookings">
                            <a
                                onClick={() => setMenuOpen(false)}
                                className="border-black border-2 py-2 px-2"
                            >
                                Book now!
                            </a>
                        </Link>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Navbar;
