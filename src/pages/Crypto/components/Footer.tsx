import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-slate-900/80 to-slate-950/80 border-t border-slate-800">
            <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
                <p className="mb-2">Copyright © {new Date().getFullYear()} Trading With Sidhant. All Rights Reserved.</p>
                <p className="text-xs text-slate-500">
                    This site is for educational purposes only. Cryptocurrency trading is subject to market risk.
                    Please trade responsibly and consult a financial advisor. We are not SEBI registered.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://tradingwithsidhant.com/legal/privacy-policy" className="hover:text-white" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <a href="https://tradingwithsidhant.com/legal/terms" className="hover:text-white" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                    <a href="https://tradingwithsidhant.com/contact-us" className="hover:text-white" target="_blank" rel="noopener noreferrer">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 