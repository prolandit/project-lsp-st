import Button from '../Button';

type Props = {
    show: boolean;
    onClose: () => void;
    onLogout: () => void;
};

const LogoutModal = ({ show, onClose, onLogout }: Props) => {
    return (
        <div
            className={
                show
                    ? `fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50`
                    : 'hidden'
            }
        >
            <div className='flex flex-col w-full gap-3 p-4 mx-4 bg-white rounded-lg lg:mx-0 lg:w-72'>
                <span className='text-lg font-semibold text-red-500'>
                    Peringatan
                </span>
                <hr />
                <span className='text-base font-medium'>
                    Apakah anda yakin ingin keluar?
                </span>
                <div className='flex flex-row justify-end gap-2 mt-6 lg:mx-0'>
                    <Button
                        type='button'
                        onClick={onClose}
                    >
                        Batal
                    </Button>
                    <Button
                        type='button'
                        className='bg-red-500 hover:bg-red-400'
                        onClick={(e) => {
                            e.preventDefault();
                            onLogout();
                        }}
                    >
                        Keluar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
