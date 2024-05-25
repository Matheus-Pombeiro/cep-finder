import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
    return (
        <header className="h-16 w-full p-3 bg-white drop-shadow-md flex justify-between items-center dark:bg-neutral-700">
            <img 
                src="/assets/cep-finder-logo.png" 
                alt="CEP Finder Logo" 
                title="CEP Finder Logo" 
                className="h-14"
            />

            <nav className="flex justify-between items-center">
                <ThemeSwitcher />
            </nav>
        </header>
    );
};

export default Header;