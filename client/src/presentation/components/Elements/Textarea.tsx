import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={twMerge(
                    'w-full py-3 px-3 text-sm font-medium text-black placeholder-gray-500 bg-gray-100 rounded-md outline-none focus:border-blue-500',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

export default Textarea;
