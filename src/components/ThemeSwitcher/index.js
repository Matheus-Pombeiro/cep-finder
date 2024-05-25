const ThemeSwitcher = () => {
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
                title="theme"
                className="switcher-btn"
            />
        </button>
    );
};

export default ThemeSwitcher;