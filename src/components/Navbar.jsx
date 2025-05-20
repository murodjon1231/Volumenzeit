import React, { useRef, useEffect } from 'react';
import { User, ShoppingCart } from "lucide-react";

const Navbar = () => {
    const navRef = useRef(null);
    
    // Add horizontal scroll with mouse drag functionality
    useEffect(() => {
        const navElement = navRef.current;
        if (!navElement) return;
        
        let isDown = false;
        let startX;
        let scrollLeft;
        
        const handleMouseDown = (e) => {
            isDown = true;
            navElement.classList.add('scrolling');
            startX = e.pageX - navElement.offsetLeft;
            scrollLeft = navElement.scrollLeft;
        };
        
        const handleMouseLeave = () => {
            isDown = false;
            navElement.classList.remove('scrolling');
        };
        
        const handleMouseUp = () => {
            isDown = false;
            navElement.classList.remove('scrolling');
        };
        
        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - navElement.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            navElement.scrollLeft = scrollLeft - walk;
        };
        
        navElement.addEventListener('mousedown', handleMouseDown);
        navElement.addEventListener('mouseleave', handleMouseLeave);
        navElement.addEventListener('mouseup', handleMouseUp);
        navElement.addEventListener('mousemove', handleMouseMove);
        
        // Touch events for mobile
        navElement.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - navElement.offsetLeft;
            scrollLeft = navElement.scrollLeft;
        });
        
        navElement.addEventListener('touchend', () => {
            isDown = false;
        });
        
        navElement.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - navElement.offsetLeft;
            const walk = (x - startX) * 2;
            navElement.scrollLeft = scrollLeft - walk;
        });
        
        return () => {
            navElement.removeEventListener('mousedown', handleMouseDown);
            navElement.removeEventListener('mouseleave', handleMouseLeave);
            navElement.removeEventListener('mouseup', handleMouseUp);
            navElement.removeEventListener('mousemove', handleMouseMove);
            navElement.removeEventListener('touchstart', handleMouseDown);
            navElement.removeEventListener('touchend', handleMouseUp);
            navElement.removeEventListener('touchmove', handleMouseMove);
        };
    }, []);
    
    return (
        <div>
            <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4">
                <a href="/"><div className="text-xl font-bold mb-3 md:mb-0">VOLUMENZEIT</div></a>
                
                {/* Scrollable nav for mobile */}
                <nav 
                    ref={navRef}
                    className="flex w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    <div className="flex space-x-6 px-1">
                        <a href="/catalog" className="text-sm font-medium whitespace-nowrap">Watches</a>
                        <a href="/" className="text-sm font-medium text-gray-400 whitespace-nowrap">Accessories</a>
                        <a href="/contact" className="text-sm font-medium text-gray-400 whitespace-nowrap">Contact Us</a>
                        <a href="#" className="text-sm font-medium text-gray-400 whitespace-nowrap">Brand</a>
                        <a href="/about" className="text-sm font-medium text-gray-400 whitespace-nowrap">About us</a>
                    </div>
                </nav>
                
                <div className="flex items-center space-x-4 mt-3 md:mt-0">
                    <button className="bg-[#735CFF] text-white text-xs px-4 py-2 rounded">Design your watch</button>
                    <div className="flex items-center space-x-2">
                        <a href="/auth" className="text-gray-600">
                            <User size={18} />
                        </a>
                        <button className="text-gray-600">
                            <ShoppingCart size={18} />
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Add these styles to your CSS file or create a style tag */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                
                .scrolling {
                    cursor: grabbing;
                    user-select: none;
                }
                
                @media (max-width: 600px) {
                    nav {
                        cursor: grab;
                        -webkit-overflow-scrolling: touch;
                    }
                }
            `}</style>
        </div>
    );
};

export default Navbar;