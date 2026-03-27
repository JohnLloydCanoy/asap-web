"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// --- TYPE DEFINITIONS ---
type DropdownItem = {
    label: string;
    href: string;
};

type NavItem = {
    label: string;
    href: string;
    dropdown?: DropdownItem[];
};

type CtaItem = {
    label: string;
    href: string;
    desktopClasses: string; 
    mobileClasses: string;
};

// --- THE DATA STRUCTURES ---
const NAV_LINKS: NavItem[] = [
    { label: "Insights AI", href: "/insights-ai" },
    {
        label: "Product",
        href: "/product",
        dropdown: [
            { label: "Analytics", href: "/product/analytics" },
            { label: "Scheduling", href: "/product/scheduling" },
            { label: "Team Collab", href: "/product/team" },
        ]
    },
    {
        label: "Solutions",
        href: "/solutions",
        dropdown: [
            { label: "For Agencies", href: "/solutions/agencies" },
            { label: "For Creators", href: "/solutions/creators" },
            { label: "For Enterprise", href: "/solutions/enterprise" },
        ]
    },
    {
        label: "Resources",
        href: "/resources",
        dropdown: [
            { label: "Blog", href: "/resources/blog" },
            { label: "Documentation", href: "/resources/docs" },
            { label: "Webinars", href: "/resources/webinars" },
        ]
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Enterprise", href: "/enterprise" },
];

const CTA_LINKS: CtaItem[] = [
    { 
        label: "Request Demo", 
        href: "https://asap-frontend-phi.vercel.app/", 
        desktopClasses: "text-blue-700 hover:text-blue-800 font-semibold text-sm",
        mobileClasses: "text-center w-full px-6 py-3 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100"
    },
    { 
        label: "Login", 
        href: "/login", 
        desktopClasses: "px-6 py-2.5 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-colors",
        mobileClasses: "text-center w-full px-6 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100"
    },
    { 
        label: "Sign Up", 
        href: "/signup", 
        desktopClasses: "px-6 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors shadow-sm",
        mobileClasses: "text-center w-full px-6 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 shadow-sm"
    },
];

// --- UI COMPONENT ---
const AsapNavigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 w-full z-50 transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                
                {/* --- Logo --- */}
                                {/* Full name on large screens */}
                <span className="hidden xl:block text-xl font-extrabold text-[#1f2937] tracking-tight whitespace-nowrap">
                    Automated Social <br></br>Analytics Platform
                </span>

                {/* Acronym on smaller screens to save space */}
                <span className="xl:hidden text-2xl font-extrabold text-[#1f2937] tracking-tighter">
                    ASAP
                </span>

                {/* --- Main Contextual Links (Desktop) --- */}
                <div className="hidden lg:flex items-center gap-8 pl-10">
                    {NAV_LINKS.map((item, index) => (
                        <div key={index} className={item.dropdown ? "relative group" : ""}>
                            <Link 
                                href={item.href} 
                                className="group flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
                            >
                                {item.label}
                                {item.dropdown && (
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </Link>

                            {/* Desktop Dropdown Menu Renderer (GAP FIXED) */}
                            {item.dropdown && (
                                <div className="absolute left-0 top-full pt-3 w-48 opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible z-40">
                                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-1.5 overflow-hidden">
                                        {item.dropdown.map((dropItem, dropIndex) => (
                                            <Link 
                                                key={dropIndex} 
                                                href={dropItem.href} 
                                                className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-700 transition-colors"
                                            >
                                                {dropItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- Right Side CTAs (Desktop) --- */}
                <div className="hidden lg:flex items-center gap-4">
                    {CTA_LINKS.map((cta, index) => (
                        <Link key={index} href={cta.href} className={cta.desktopClasses}>
                            {cta.label}
                        </Link>
                    ))}
                </div>

                {/* --- Mobile Hamburger Button --- */}
                <div className="flex lg:hidden items-center">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* --- Mobile Dropdown Menu --- */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 shadow-lg">
                    <div className="flex flex-col space-y-2">
                        
                        {/* Map through main links for mobile */}
                        {NAV_LINKS.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <Link 
                                    href={item.href} 
                                    className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                                
                                {/* Nested mobile dropdowns */}
                                {item.dropdown && (
                                    <div className="pl-6 flex flex-col space-y-1 border-l-2 border-gray-100 ml-4 mt-1">
                                        {item.dropdown.map((dropItem, dropIndex) => (
                                            <Link 
                                                key={dropIndex} 
                                                href={dropItem.href} 
                                                className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {dropItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile CTAs */}
                        <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col space-y-3">
                            {CTA_LINKS.map((cta, index) => (
                                <Link 
                                    key={index} 
                                    href={cta.href} 
                                    className={cta.mobileClasses}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {cta.label}
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default AsapNavigation;