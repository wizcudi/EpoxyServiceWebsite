import React from 'react'
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            name: "Sarah M.",
            location: "Orlando, FL",
            text: "Absolutely thrilled with my new garage floor! The team was professional, punctual, and the finish is better than I imagined. Worth every penny!",
            service: "Epoxy Flooring",
            rating: 5
        },
        {
            name: "Michael R.",
            location: "Winter Park, FL",
            text: "The custom epoxy dining table they created is now the centerpiece of our home. The craftsmanship is outstanding, and they were great to work with.",
            service: "Custom Table",
            rating: 5
        },
        {
            name: "Jennifer K.",
            location: "Tampa, FL",
            text: "My kitchen cabinets look brand new! The refinishing work transformed our space completely. Very happy with the results and their attention to detail.",
            service: "Cabinet Refinishing",
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, index) => (
            <Star key={index} className="w-5 h-5 fill-color10a text-color10a" />
        ));
    };

    return (
        <div className='bg-color30/90'>
            <div className='max-w-5xl mx-auto space-y-8 py-12 px-8 w450:px-6'>
                <div className='space-y-2 text-color60'>
                    <h2 className='text-5xl font-bold leading-tight w500:text-4xl w450:text-3xl w350:text-2xl'>
                        Client Testimonials
                    </h2>
                    <p className='text-xl w750:text-lg'>
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className='bg-color60 rounded-lg p-6 space-y-4 relative'
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-color10a/20" />
                            
                            <div className='flex gap-1'>
                                {renderStars(review.rating)}
                            </div>

                            <p className='text-lg leading-relaxed'>
                                "{review.text}"
                            </p>

                            <div className='space-y-1'>
                                <p className='font-semibold'>{review.name}</p>
                                <p className='text-sm text-color30/60'>{review.location}</p>
                                <p className='text-sm text-color10a'>{review.service}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
