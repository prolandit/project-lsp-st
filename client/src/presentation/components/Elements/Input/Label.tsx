import React from 'react';

type Props = {
    htmlFor: string;
    children: React.ReactNode;
};

const Label = (props: Props): React.JSX.Element => {
    const { htmlFor, children } = props;

    return (
        <label
            htmlFor={htmlFor}
            className='text-xs text-black font-medium'
        >
            {children}
        </label>
    );
};

export default Label;
