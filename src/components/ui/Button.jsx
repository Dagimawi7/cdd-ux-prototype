import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
        secondary: "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50 focus:ring-neutral-200",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
