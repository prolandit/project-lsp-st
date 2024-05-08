import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {
    url: string;
    label: string;
}
const MeetingLink = ({ url, label }: Props) => {
    return (
        <Link
            to={url}
            className='flex flex-row items-center gap-2 text-blue-500'
        >
            {label}
            <FaLink />
        </Link>
    );
};

export default MeetingLink;
