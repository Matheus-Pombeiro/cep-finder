import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
    return (
        <header className="header-container">
            <img 
                src="/assets/cep-finder-logo.png" 
                alt="Logo" 
                title="Logo" 
                className="h-14"
            />

            <nav className="flex justify-between items-center gap-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </nav>
        </header>
    );
};

export default Header;