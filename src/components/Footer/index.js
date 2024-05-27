const Footer = () => {
    // Gets the current year
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="footer-container">
            <p className="text-xl font-medium">
                <a 
                    href="https://www.linkedin.com/in/matheus-pombeiro/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Matheus Pombeiro
                </a> | {year}
            </p>
        </footer>
    );
};

export default Footer;