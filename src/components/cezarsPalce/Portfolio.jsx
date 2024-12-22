import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Table from '../../assets/cezarsPalace/cezarTable.png'
import HomeGarage from '../../assets/cezarsPalace/cezarHomeGarage.png'
import GarageFloors from '../../assets/cezarsPalace/cezarGarageFloors.png'
import GarageFloor from '../../assets/cezarsPalace/cezarGarage.png'
import EpoxyFloor from '../../assets/cezarsPalace/cezarEpoxyFloor.png'
import Cabinets from '../../assets/cezarsPalace/cezarCabinets.png'

export default function Portfolio() {

    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    
    // Sample images array - replace with your actual images
    const images = [
        Cabinets,
        EpoxyFloor,
        Table,
        HomeGarage,
        GarageFloors,
        GarageFloor,
        
        
    ];

    // Check scroll position
    const checkScrollPosition = () => {
        const element = scrollRef.current;
        if (!element) return;

        // Check if we're at the start
        setIsAtStart(element.scrollLeft <= 0);
        
        // Check if we're at the end
        const isEnd = Math.ceil(element.scrollLeft + element.clientWidth) >= element.scrollWidth;
        setIsAtEnd(isEnd);
    };

    // Handle scroll
    const handleScroll = (direction) => {
        const element = scrollRef.current;
        if (!element) return;

        const scrollAmount = direction === 'left' ? -400 : 400;
        element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            element.addEventListener('scroll', checkScrollPosition);
            // Initial check
            checkScrollPosition();
            return () => element.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    return (
        <div id='portfolio' className='bg-color30/90 py-12 px-8 w450:px-6'>
            <div className='max-w-5xl mx-auto space-y-8 '>
                <div className='space-y-2 text-color60'>
                    <h2 className='text-5xl font-bold leading-tight w500:text-4xl w450:text-3xl w350:text-2xl'>
                        Our Work
                    </h2>
                    <p className='text-xl w750:text-lg '>
                        We use the highest quality materials and equipment to assure you get the perfect finish!
                    </p>
                </div>

                <div className="relative">
                    {!isAtStart && (
                        <button
                            onClick={() => handleScroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-color10a/50 hover:bg-color10a text-color60 p-3 rounded-full z-10 -ml-5"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {images.map((image, index) => (
                            <img 
                                key={index}
                                src={image}
                                alt={`Portfolio item ${index + 1}`}
                                className="w-full max-w-[400px] object-cover rounded-lg flex-shrink-0"
                            />
                        ))}
                    </div>

                    {!isAtEnd && (
                        <button
                            onClick={() => handleScroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-color10a/50 hover:bg-color10a text-color60 p-3 rounded-full z-10 -mr-5"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
