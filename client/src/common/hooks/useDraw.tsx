import { useEffect, useRef, useState } from 'react';

export const useCanvas = (): [
    React.RefObject<HTMLCanvasElement>,
    File | undefined
] => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [prevPos, setPrevPos] = useState<{ x: number; y: number } | null>(
        null
    );
    const [imageFile, setImageFile] = useState<File | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleMouseDown = (event: MouseEvent | TouchEvent) => {
            event.preventDefault();
            const { offsetX, offsetY } = getEventPosition(event);
            setIsDrawing(true);
            setPrevPos({ x: offsetX, y: offsetY });
        };

        const handleMouseMove = (event: MouseEvent | TouchEvent) => {
            event.preventDefault();

            if (!isDrawing || !prevPos) return;

            const { offsetX, offsetY } = getEventPosition(event);
            ctx.beginPath();
            ctx.moveTo(prevPos.x, prevPos.y);
            ctx.lineTo(offsetX, offsetY);
            ctx.stroke();
            setPrevPos({ x: offsetX, y: offsetY });
        };

        const handleMouseUp = () => {
            setIsDrawing(false);
            convertToImage();
        };

        const getEventPosition = (event: MouseEvent | TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            if (event instanceof MouseEvent) {
                return {
                    offsetX: event.clientX - rect.left,
                    offsetY: event.clientY - rect.top,
                };
            } else if (event.touches[0]) {
                return {
                    offsetX: event.touches[0].clientX - rect.left,
                    offsetY: event.touches[0].clientY - rect.top,
                };
            }
            return { offsetX: 0, offsetY: 0 };
        };

        const convertToImage = () => {
            canvas.toBlob((blob) => {
                if (blob) {
                    const file = new File([blob], 'canvas_image.png', {
                        type: 'image/png',
                    });
                    setImageFile(file);
                }
            });
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('touchstart', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('touchend', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('touchstart', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('touchmove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDrawing, prevPos]);

    return [canvasRef, imageFile];
};
