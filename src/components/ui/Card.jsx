import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Card = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <motion.div
            ref={ref}
            className={cn(
                'glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-premium',
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </motion.div>
    );
});

Card.displayName = 'Card';

export default Card;
