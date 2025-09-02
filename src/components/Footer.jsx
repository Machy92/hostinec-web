// src/components/Footer.jsx

function Footer() {
    return (
        <footer className="footer bg-darker text-muted py-4">
            <div className="container text-center">
                <p className="mb-1">
                    Hostinec pod Kaštany © {new Date().getFullYear()}
                </p>
                <p className="mb-0">
                    ul. 5. května 29, 403 40 Skorotice | IČ: 05491673 | Tel: 775 291 560
                </p>
            </div>
        </footer>
    );
}

export default Footer;