module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            "archi-bold": ["ArchitypeRenner-Bold"],
            "archi-demi": ["ArchitypeRenner-Demi"],
            "archi-medium": ["ArchitypeRenner-Medium"],
            "archi-regular": ["ArchitypeRenner-Regular"],
        },
        keyframes: {
            "fade-in-up": {
                "0%": {
                    opacity: "0",
                    transform: "translateY(10px)",
                },
                "100%": {
                    opacity: "1",
                    transform: "translateY(0)",
                },
            },
        },
        animation: {
            "fade-in-up": "fade-in-up 0.4s ease-out",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
