'use client';

import { useState, useEffect, useRef } from "react";
import MenuLink from "./MenuLink";



const UserNav = () => {
    const [menuOpen, setMenuOpen] = useState(false); //state for menu button
    const menuRef = useRef<HTMLDivElement>(null); //reference to the menu element

    // Effect to handle clicks outside of the menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) { //checks if menuRef pointing to valied element, checks if click event's target is outside the referenced menu element
                setMenuOpen(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside); //calling the handlClickOutside function on a mousedown event
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); //cleanup to remove handleClickOutside function for mousedown event
        };
    }, [menuRef]);

    return (
        <div className="p-2 flex space-x-6 relative incline-block rounded-full">
            <button 
                className="flex items-center hover:scale-125 duration-200"
                onClick={() => setMenuOpen(!menuOpen)} //if menuOpen false, it will be set to true
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {menuOpen && (
                <div ref={menuRef} className="w-[220px] absolute top-[65px] right-0 bg-custom1 rounded-xl shadow-nd flex flex-col cursor-pointer">
                    <MenuLink 
                        label='Home'
                        href='/'
                        onClick={() => 
                            setMenuOpen(false)
                        }
                    />
                    <MenuLink 
                        label='About'
                        href="/about"
                        onClick={() => 
                            setMenuOpen(false)
                        }
                    />
                </div>
            )}
        </div>
    )
}

export default UserNav;