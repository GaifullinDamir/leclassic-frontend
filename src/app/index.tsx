import './index.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { NOT_FOUND } from '../shared/lib/utils/consts';


const App = () => {
    const isAuth = true;

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => {
                return <Route path={path} key={path} element={<Component/>}/>
            })}
            {isAuth && authRoutes.map(({path, Component}) => {
                return <Route path={path} key={path} element={<Component/>}/>
            })}
            <Route path="*" element={<Navigate to={NOT_FOUND}/>}/>
        </Routes>
    );
};

export default App;