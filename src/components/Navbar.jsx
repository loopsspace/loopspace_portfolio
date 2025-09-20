import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const GlassmorphismNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { 
            name: 'Products', 
            href: '#',
            dropdown: ['Web Apps', 'Mobile Apps', 'AI Solutions', 'Cloud Services']
        },
        { 
            name: 'Services', 
            href: '#',
            dropdown: ['Development', 'Consulting', 'Design', 'Support']
        },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[95%] max-w-4xl rounded-[60px] ${
            isScrolled 
                ? 'backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl' 
                : 'backdrop-blur-md bg-white/5 border border-white/10'
        }`}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img src="/Frame17.svg" alt="Logo" className="h-48 w-48 object-contain" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <button
                                    className="flex items-center space-x-1 px-4 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 ease-out font-medium"
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <span>{item.name}</span>
                                    {item.dropdown && (
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                            activeDropdown === index ? 'rotate-180' : ''
                                        }`} />
                                    )}
                                </button>
                                
                                {/* Dropdown Menu */}
                                {item.dropdown && (
                                    <div className={`absolute top-full left-0 mt-2 w-48 rounded-2xl backdrop-blur-2xl backdrop-saturate-150 bg-black border border-white/20 shadow-2xl shadow-black/10 transition-all duration-300 ease-out transform ${
                                        activeDropdown === index 
                                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                                            : 'opacity-0 translate-y-2 pointer-events-none'
                                    }`}
                                    onMouseEnter={() => setActiveDropdown(index)}
                                    onMouseLeave={() => setActiveDropdown(null)}>
                                        <div className="p-2">
                                            {item.dropdown.map((dropdownItem, dropIndex) => (
                                                <a
                                                    key={dropIndex}
                                                    href="#"
                                                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium"
                                                >
                                                    {dropdownItem}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        
                        
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Separate Floating Menu */}
            <div className={`lg:hidden fixed left-1/2 -translate-x-1/2 w-[90%] top-28 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
                <div className="p-4 rounded-[30px] backdrop-blur-2xl backdrop-saturate-150 bg-black border border-white/20 mt-[-20px]">
                    {navItems.map((item, index) => (
                        <div key={index} className="mb-2">
                            <button
                                className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-[20px] transition-all duration-200 font-medium text-sm"
                                onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                            >
                                <span>{item.name}</span>
                                {item.dropdown && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                        activeDropdown === index ? 'rotate-180' : ''
                                    }`} />
                                )}
                            </button>
                            
                            {item.dropdown && (
                                <div className={`mt-1 space-y-0.5 transition-all duration-200 ${
                                    activeDropdown === index ? 'block' : 'hidden'
                                }`}>
                                    {item.dropdown.map((dropdownItem, dropIndex) => (
                                        <a
                                            key={dropIndex}
                                            href="#"
                                            className="block px-4 py-2.5 ml-2 text-white/70 hover:text-white hover:bg-white/10 rounded-[16px] transition-all duration-200 text-sm"
                                        >
                                            {dropdownItem}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default GlassmorphismNavbar;