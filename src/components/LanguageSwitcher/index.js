import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();   // Translation reference

    // Declare an array that contains the laguage options' data
    const languageOptions = [
        {
            name: "English",
            value: "en",
            flag: "/assets/usa-flag.png"
        },
        {
            name: "Portuguese",
            value: "pt",
            flag: "/assets/brazil-flag.png"
        }
    ]

    return (
        <>
            {languageOptions.map(option => (
                <button 
                    key={option.name}
                    onClick={() => {
                        i18n.changeLanguage(option.value)
                    }}
                >
                    <img 
                        src={option.flag}
                        alt={option.name}
                        title={t(option.name)}
                        className="switcher-btn"
                    />
                </button>
            ))}
        </>
    );
};

export default LanguageSwitcher;