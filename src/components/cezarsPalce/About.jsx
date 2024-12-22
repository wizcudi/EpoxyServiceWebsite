import React from 'react'

export default function About() {
    return (
        <div id='about' className='max-w-5xl mx-auto py-12 px-8 w450:px-6'>
            <div className='space-y-6'>
                <div className='space-y-4'>
                    <h2 className='text-5xl font-bold leading-tight w500:text-4xl w450:text-3xl w350:text-2xl'>
                        Crafting <span className='text-color10a'>Excellence</span> in Every Project
                    </h2>
                    <p className='text-xl w750:text-lg text-color30/80'>
                        Central Florida's Premier Epoxy and Cabinet Refinishing Specialists
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg w750:text-base'>
                    <p className='leading-relaxed'>
                        At Cezars Palace, we transform spaces with premium epoxy solutions and expert cabinet refinishing. Our commitment goes beyond mere renovation—we create lasting beauty that fits your vision and budget.
                    </p>
                    <p className='leading-relaxed'>
                        Every project receives our signature attention to detail, ensuring exceptional craftsmanship delivered on time. From residential floors to commercial spaces, we're your trusted partner in Central Florida for premium surface solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}
