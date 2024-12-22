import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className='max-w-5xl mx-auto py-12 px-8 w450:px-6' id="contact">
            <div className='grid w800:grid-cols-1 grid-cols-[1fr_1.5fr] gap-10'>
                {/* Contact Info Side */}
                <div className='space-y-8'>
                    <div className='space-y-2'>
                        <h2 className='text-4xl font-bold leading-tight w450:text-3xl w350:text-2xl'>
                            Get in Touch
                        </h2>
                        <p className='text-xl w750:text-lg text-color30/80'>
                            Ready to transform your space? We're here to help!
                        </p>
                    </div>

                    <div className='space-y-6'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-color10a/10 p-3 rounded-lg'>
                                <Phone className='w-6 h-6 text-color10a' />
                            </div>
                            <div>
                                <p className='font-medium'>Call Us</p>
                                <a href="tel:+1234567890" className='text-color10a hover:underline'>
                                    (123) 456-7890
                                </a>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-color10a/10 p-3 rounded-lg'>
                                <Mail className='w-6 h-6 text-color10a' />
                            </div>
                            <div>
                                <p className='font-medium'>Email Us</p>
                                <a href="mailto:info@example.com" className='text-color10a hover:underline'>
                                    info@example.com
                                </a>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-color10a/10 p-3 rounded-lg'>
                                <MapPin className='w-6 h-6 text-color10a' />
                            </div>
                            <div>
                                <p className='font-medium'>Service Area</p>
                                <p className='text-color30/80'>Central Florida Area</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                            <label htmlFor="name" className='block font-medium'>
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-lg border-2 border-color30/10 focus:border-color10a outline-none transition-colors'
                                required
                            />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="email" className='block font-medium'>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-lg border-2 border-color30/10 focus:border-color10a outline-none transition-colors'
                                required
                            />
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                            <label htmlFor="phone" className='block font-medium'>
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-lg border-2 border-color30/10 focus:border-color10a outline-none transition-colors'
                            />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="service" className='block font-medium'>
                                Service Interest
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-lg border-2 border-color30/10 focus:border-color10a outline-none transition-colors'
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="epoxy-floors">Epoxy Floors</option>
                                <option value="custom-tables">Custom Tables</option>
                                <option value="cabinet-refinishing">Cabinet Refinishing</option>
                                <option value="countertops">Countertops</option>
                            </select>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor="message" className='block font-medium'>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className='w-full px-4 py-3 rounded-lg border-2 border-color30/10 focus:border-color10a outline-none transition-colors'
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-color30/90 text-color10a hover:bg-color10a hover:text-color30 rounded-lg font-semibold transition-colors"
                    >
                        <Send className='w-5 h-5' />
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
