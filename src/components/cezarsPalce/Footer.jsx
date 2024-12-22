import React from 'react'
import { Instagram, Phone, Mail, Clock } from 'lucide-react';


export default function Footer() {
    const currentYear = new Date().getFullYear();


    return (
        <footer className='bg-color30/90 text-color60'>
            <div className='max-w-5xl mx-auto py-12 px-8 w450:px-6'>
                {/* Main Footer Content */}
                <div className='grid md:grid-cols-3 gap-12 pb-8'>
                    {/* Company Info */}
                    <div className='space-y-4'>
                        <h3 className='text-2xl font-bold text-color10a'>Cezars Palace</h3>
                        <p className='text-color60/80'>
                            Central Florida's premier epoxy and cabinet refinishing specialists. Quality craftsmanship for every project.
                        </p>
                        <a 
                            href="https://instagram.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 text-color10a hover:underline'
                        >
                            <Instagram className='w-5 h-5' />
                            Follow us on Instagram
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold'>Quick Links</h3>
                        <nav className='space-y-2'>
                            <a href="#services" className='block hover:text-color10a transition-colors'>Services</a>
                            <a href="#portfolio" className='block hover:text-color10a transition-colors'>Portfolio</a>
                            <a href="#about" className='block hover:text-color10a transition-colors'>About Us</a>
                            <a href="#contact" className='block hover:text-color10a transition-colors'>Contact</a>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold'>Contact Info</h3>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-2'>
                                <Phone className='w-5 h-5 text-color10a' />
                                <a href="tel:+1234567890" className='hover:text-color10a transition-colors'>
                                    (123) 456-7890
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Mail className='w-5 h-5 text-color10a' />
                                <a href="mailto:info@example.com" className='hover:text-color10a transition-colors'>
                                    info@example.com
                                </a>
                            </div>
                            <div className='flex items-start gap-2'>
                                <Clock className='w-5 h-5 text-color10a' />
                                <div>
                                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                    <p>Sat: 9:00 AM - 4:00 PM</p>
                                    <p>Sun: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className='pt-8 border-t border-color60/30 text-center text-sm text-color60/60'>
                    <p>© {currentYear} Cezars Palace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
