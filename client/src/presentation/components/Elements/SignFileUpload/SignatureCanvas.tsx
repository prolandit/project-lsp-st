import { useEffect, useState } from 'react';
import { IoRefresh } from 'react-icons/io5';
import { useCanvas } from '../../../../common/hooks/useDraw';

type Props = {
    onChange?: (file: File | undefined) => void;
};

const SignatureCanvas = ({ onChange }: Props) => {
    const [canvasRef, _, imageFile] = useCanvas();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)');

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // useEffect(() => {
    //     onChange?.(imageFile);
    // });

    const handleClear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    return (
        <div className='flex flex-col items-center justify-center w-full gap-4 mx-4 lg:h-80 lg:mx-0'>
            <div className='relative'>
                <canvas
                    className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer lg:w-full lg:h-full'
                    ref={canvasRef}
                    width={isMobile ? undefined : 570}
                    height={isMobile ? undefined : 320}
                />
                <IoRefresh
                    className='absolute top-0 right-0 mt-4 text-2xl cursor-pointer me-4'
                    onClick={handleClear}
                />
            </div>
        </div>
    );
};

export default SignatureCanvas;
