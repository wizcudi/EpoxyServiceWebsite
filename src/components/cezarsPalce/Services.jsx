import React from 'react'
import { Diamond, Brush, Table, Home, Sparkles, Shield } from 'lucide-react';


export default function Services() {
    const services = [
        {
            icon: <Home className="w-8 h-8" />,
            title: "Epoxy Floors",
            description: "Transform your garage, basement, or commercial space with our premium epoxy flooring solutions. Durable, stunning, and easy to maintain."
        },
        {
            icon: <Table className="w-8 h-8" />,
            title: "Custom Tables",
            description: "Unique epoxy table designs that become the centerpiece of your space. From dining tables to coffee tables, each piece is crafted to perfection."
        },
        {
            icon: <Brush className="w-8 h-8" />,
            title: "Cabinet Refinishing",
            description: "Breathe new life into your kitchen with our expert cabinet refinishing service. Modern finishes that transform without replacement."
        },
        {
            icon: <Diamond className="w-8 h-8" />,
            title: "Countertops",
            description: "Designer epoxy countertops that combine elegance with durability. Create a unique look for your kitchen or bathroom."
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Decorative Finishes",
            description: "Artistic epoxy applications for unique patterns and designs. Make your space truly one-of-a-kind."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Surface Protection",
            description: "Industrial-grade epoxy coatings that protect while beautifying. Perfect for high-traffic areas and commercial spaces."
        }
    ];

    return (
        <div id='services' className='max-w-5xl mx-auto py-12 px-8 w450:px-6'>
            <div className='space-y-12'>
                <div className='space-y-2'>
                    <h2 className='text-5xl font-bold leading-tight w500:text-4xl w450:text-3xl w350:text-2xl'>
                        Our Services
                    </h2>
                    <p className='text-xl w750:text-lg text-color30/80'>
                        Expert solutions for every surface in your space
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className='cursor-pointer space-y-4 p-6 rounded-lg border-2 border-color30/10 hover:border-color10a transition-colors'
                        >
                            <div className='text-color10a'>
                                {service.icon}
                            </div>
                            <h3 className='text-2xl font-semibold'>
                                {service.title}
                            </h3>
                            <p className='text-color30/80 leading-relaxed'>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
