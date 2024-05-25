import { useTranslation } from "react-i18next";

const ThemeSwitcher = () => {
    const { t } = useTranslation();     // Translation reference

    // Declare a function that change the app's theme from light to dark and from dark to light
    const handleTheme = (e) => {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.contains("dark")
            ? e.target.src = "/assets/moon-white.png"
            : e.target.src = "/assets/sun.png"
    };

    return (
        <button onClick={handleTheme}>
            <img 
                src="/assets/sun.png"
                alt="Theme"
                title={t("Theme")}
                className="switcher-btn"
            />
        </button>
    );
};

export default ThemeSwitcher;