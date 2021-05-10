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
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
