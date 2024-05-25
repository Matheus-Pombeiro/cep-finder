import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
    return (
        <header className="h-16 w-full p-3 bg-white drop-shadow-md flex justify-between items-center dark:bg-neutral-700">
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