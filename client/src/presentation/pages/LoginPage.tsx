import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { LoginValues } from '../../common/types';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayout';

const LoginPage = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const [isLoading, setIsLoading] = useState(false);

    const onLogin = async (payload: LoginValues) => {
        navigate('/');
        console.log(payload);
        // setIsLoading(true);

        // try {
        //     const token = await AuthRemoteDataSource.login(payload);
        //     localStorage.setItem('token', token);
        //     const user = await UserRemoteDataSource.getLoggedUser(token);
        //     dispatch(setUser(user));
        //     navigate('/');
        // } catch (error) {
        //     toast.error((error as Error).message, {
        //         position: 'top-center',
        //         hideProgressBar: true,
        //     });
        // } finally {
        //     setIsLoading(false);
        // }
    };

    return (
        <>
            <AuthLayout
                title='Masuk'
                subtitle='Jika anda belum memiliki akun'
                navigationTitle='Daftar disini ?'
                navigateTo='/register'
            >
                <FormLogin onLogin={onLogin} />
            </AuthLayout>
            {/* <LoadingSpinner show={isLoading} /> */}
        </>
    );
};

export default LoginPage;
