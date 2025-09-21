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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { name: 'Get Started', href: '#', scrollTo: 'enquiry' },
        { name: 'Team', href: '#', scrollTo: 'team' },
        { name: 'Services', href: '#', scrollTo: 'services' },
        { name: 'About', href: '#', scrollTo: 'about' },
        { name: 'Contact', href: 'mailto:hello@loopsspace.com' }
    ];

    return (
        <>
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
                                <button
                                     key={index}
                                     className="px-4 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 ease-out font-medium"
                                     onClick={() => {
                                         if (item.scrollTo) {
                                             scrollToSection(item.scrollTo);
                                         } else if (item.href.startsWith('mailto:')) {
                                             window.location.href = item.href;
                                         }
                                     }}
                                 >
                                     {item.name}
                                </button>
                        ))}
                    </div>

                         {/* Mobile menu button */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                 className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors duration-200 relative z-[55]"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            </nav>

             {/* Mobile Menu Overlay */}
             <div className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
                 isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
             }`}>
                 {/* Background overlay */}
                 <div 
                     className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                     onClick={() => setIsMobileMenuOpen(false)}
                 />
                 
                 {/* Sidebar */}
                 <div className={`fixed top-0 right-0 h-full w-full max-w-[100vw] transform transition-transform duration-300 ease-out z-[70] ${
                     isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                 }`}>
                    <div className="h-full backdrop-blur-2xl backdrop-saturate-150 bg-gradient-to-b from-black/90 to-black/95 border-l border-white/20">
                        
                        {/* Sidebar Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="flex items-center space-x-3">
                                <img src="/infinity.svg" alt="Logo" className="h-8 w-8 object-contain" />
                                <span className="text-white font-semibold text-lg">Menu</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                         {/* Navigation Items */}
                         <div className="flex flex-col p-6 space-y-2">
                    {navItems.map((item, index) => (
                            <button
                                     key={index}
                                     className="flex items-center w-full px-4 py-4 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-200 font-medium text-base group"
                                     onClick={() => {
                                         if (item.scrollTo) {
                                             scrollToSection(item.scrollTo);
                                         } else if (item.href.startsWith('mailto:')) {
                                             window.location.href = item.href;
                                         }
                                     }}
                                 >
                                     <span className="text-left">{item.name}</span>
                            </button>
                             ))}
                         </div>

                        {/* Footer/Social Section */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                            <div className="text-center">
                                <h3 className="text-sm font-medium text-white/60 mb-4">Connect with us</h3>
                                <div className="flex justify-center gap-4">
                                    <a 
                                        href="https://linkedin.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 hover:text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://instagram.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-pink-600/20 border border-pink-500/30 rounded-xl flex items-center justify-center text-pink-400 hover:text-pink-300 hover:border-pink-400/50 hover:bg-pink-500/30 transition-all duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://wa.me/+923365950900" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400 hover:text-green-300 hover:border-green-400/50 hover:bg-green-500/30 transition-all duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                                </div>
                        </div>
                </div>
            </div>

            
        </>
    );
};

export default GlassmorphismNavbar;