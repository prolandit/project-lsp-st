import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import routes from './common/routes';

const App = () => {
    return (
        <BrowserRouter basename='/'>
            <AppRouter routes={routes} />
        </BrowserRouter>
    );
};

export default App;
