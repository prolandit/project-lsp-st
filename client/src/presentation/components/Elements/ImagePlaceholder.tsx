import { FaImage } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

const ImagePlaceholder = ({ className }: Props) => {
    return (
        <div
            className={twMerge(
                'flex flex-col justify-center items-center p-10 bg-gray-200',
                className
            )}
        >
            <FaImage
                size={30}
                className='text-gray-400'
            />
        </div>
    );
};

export default ImagePlaceholder;
