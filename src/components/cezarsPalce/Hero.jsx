import React from 'react'
import { Phone, MessageSquare, Diamond, Brush, Table, Home } from 'lucide-react';
import Head from '../../assets/cezarsPalace/epoxyHero.png'

export default function Hero() {
    return (
        <div className='max-w-5xl mx-auto py-10 px-8 w450:px-6'>
            <div className="">
                
                <div className='space-y-8 w750:space-y-5'>

                    <h1 className='italic text-6xl w750:text-5xl w500:text-4xl w450:text-3xl w350:text-2xl font-bold leading-tight'>
                        <span className='text-color10a '>Transform</span> Your Space with <span className='text-color10a '>Premium Epoxy</span> Solutions
                    </h1>

                    <div 
                        className="
                            grid grid-cols-[57%_40%]
                            w750:grid-cols-1 
                            gap-5
                            gap-y-10
                            
                        "
                    >
                        <div 
                            className='
                            flex flex-col justify-between 
                            space-y-10 w750:space-y-8
                            '
                        >

                            <p className='text-2xl w900:text-xl max-w-[600px] w750:text-lg w400:text-base'>
                                Elevate your home with custom epoxy floors, stunning countertops, and artistic tables. Professional craftsmanship that lasts.
                            </p>

                            <div 
                                className="
                                    grid grid-cols-2
                                    w350:grid-cols-1
                                    gap-y-6 gap-x-5 text-xl 
                                    w900:text-lg w500:text-sm
                                    w750:max-w-[500px]
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <Diamond className="text-color10a" />
                                    <span>Premium Finishes</span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Table className="text-color10a" />
                                    <span>Custom Tables</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Brush className="text-color10a" />
                                    <span>Cabinet Refinishing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Home className="text-color10a" />
                                    <span>Epoxy Floors</span>
                                </div>
                            </div>

                            <div className="
                                flex flex-col w750:flex-row w500:flex-col gap-2
                            ">
                                <a
                                    href="tel:+1234567890"
                                    className="
                                        w750:w-[250px]
                                        w500:w-full
                                        flex items-center justify-center
                                        px-8 py-4 gap-2 rounded-lg
                                        text-color10a font-semibold
                                        hover:text-color30 
                                        bg-color30/90 
                                        hover:bg-color10a
                                        hover:border-2 hover:border-color30 
                                        transition-colors
                                    "
                                >
                                    <Phone size={20} />
                                    Call Now
                                </a>
                                <a
                                    href="#contact"
                                    className="
                                        w750:w-[250px]
                                        w500:w-full
                                        flex items-center justify-center
                                        px-8 py-4 gap-2 rounded-lg
                                        text-color30 font-semibold
                                        hover:text-color30 
                                        bg-color60 border-2 border-color30 
                                        hover:bg-color10a 
                                        transition-colors
                                    "
                                >
                                    <MessageSquare size={20} />
                                    Get Quote
                                </a>
                            </div>

                        </div>

                        <div
                            className="
                                w900:max-w-[400px]
                            "
                        >
                            <img
                                className="w-full h-full object-cover" 
                                src={Head} 
                                alt="" 
                            />
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
