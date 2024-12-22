import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation links - easy to modify
    const navLinks = [
        { title: 'About', href: '#about' },
        { title: 'Portfolio', href: '#portfolio' },
        { title: 'Services', href: '#services' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <nav className='bg-color30/90 text-color60'>
            <div className='max-w-5xl mx-auto px-8 w450:px-6 py-6'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <a href="#" className='text-2xl font-bold'>
                        Cezars Palace
                    </a>

                    {/* Desktop Navigation */}
                    <div className='flex w750:hidden items-center gap-8'>
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className='hover:text-color10a transition-colors'
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='hidden w750:flex'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className='pt-4'>
                        <div className='flex flex-col gap-4'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className='hover:text-color10a transition-colors'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
