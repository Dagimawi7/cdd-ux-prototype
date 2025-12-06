import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'default',
    children,
    isLoading,
    disabled,
    ...props
}, ref) => {

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20',
        secondary: 'bg-secondary text-white hover:bg-secondary-hover shadow-lg shadow-secondary/20',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5',
        ghost: 'text-primary hover:bg-primary/5',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const sizes = {
        sm: 'h-9 px-3 text-sm',
        default: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10 p-2',
    };

    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white active:scale-95 transition-transform duration-100',
                variants[variant],
                sizes[size],
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
