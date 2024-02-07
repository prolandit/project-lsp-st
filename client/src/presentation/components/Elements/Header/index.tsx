import DropdownUser from './DropdownUser';

type Props = {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
};

const Header = ({ sidebarOpen, setSidebarOpen }: Props) => {
    return (
        <header className='sticky top-0 flex w-full bg-white z-999 drop-shadow-1'>
            <div className='flex items-center justify-between flex-grow px-4 py-4 shadow-2 md:px-6 2xl:px-11'>
                <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
                    <button
                        aria-controls='sidebar'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className='z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden'
                    >
                        <span className='relative block w-5 h-5 cursor-pointer'>
                            <span className='absolute right-0 w-full h-full'>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                                        !sidebarOpen && '!w-full delay-300'
                                    }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                                        !sidebarOpen && 'delay-400 !w-full'
                                    }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                                        !sidebarOpen && '!w-full delay-500'
                                    }`}
                                ></span>
                            </span>
                            <span className='absolute right-0 w-full h-full rotate-45'>
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                                        !sidebarOpen && '!h-0 !delay-[0]'
                                    }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                                        !sidebarOpen && '!h-0 !delay-200'
                                    }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                </div>

                <div className='flex flex-row items-center justify-end w-full gap-3 2xsm:gap-7'>
                    <DropdownUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
