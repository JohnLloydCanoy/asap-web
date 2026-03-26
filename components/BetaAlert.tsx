"use client"; 

import React, { useState } from 'react';


interface BetaAlertProps {
    supportEmail?: string;
}

const BetaAlert: React.FC<BetaAlertProps> = ({ supportEmail = "support@asap-analytics.com" }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="beta-modal-title"
        >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-100 transform transition-all scale-100 animate-in fade-in zoom-in-95 duration-300">
                
                <div className="flex flex-col items-start text-left mb-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-500 mb-4 border-4 border-amber-100">
                        {/* Caution/Warning Icon */}
                        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 id="beta-modal-title" className="text-2xl font-bold text-gray-950">
                        ASAP is currently in Beta
                    </h2>
                </div>

                {/* Body Content (Removed text-center for better readability) */}
                <div className="mb-8 text-gray-700 text-base leading-relaxed space-y-4">
                    <p>
                        Welcome to the Automated Social Analytics Platform! We are excited to have you here.
                    </p>
                    <p className="font-semibold text-gray-800">
                        ⚠️ Please Note: Since this platform is in active development, you will likely encounter bugs, incomplete features, or performance hiccups.
                    </p>
                    <p>
                        Your feedback is crucial. If you find something broken or have suggestions, please help us improve by reporting it to: 
                    </p>
                    <a 
                        href={`mailto:${supportEmail}`} 
                        className="inline-block font-medium text-blue-700 hover:text-blue-800 hover:underline bg-blue-50 px-3 py-1 rounded-full text-sm"
                    >
                        {supportEmail}
                    </a>
                </div>

                <div className="flex justify-end mt-2">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 transition-all duration-200 shadow-sm hover:shadow-lg"
                    >
                        I Understand, Continue
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BetaAlert;