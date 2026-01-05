export default function Navbar() {
    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Get in Touch' },
    ];

    return (
        <nav className="fixed gap-2 bottom-4 right-4 w-fit h-fit z-50">
            <div className="container mx-auto px-4 py-4">
                <ul className="flex flex-col gap-2 justify-center text-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="text-black hover:text-red-600 hover:font-semibold transition-colors"
                            // Smooth scroll behavior can be added via CSS
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}