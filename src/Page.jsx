import { Outlet } from 'react-router';
import NavContext from './context/NavContext';
import BaseLayouts from "./layouts/BaseLayouts";

const Page = () => {
    return (
        <NavContext>
            <BaseLayouts>
                <Outlet />
            </BaseLayouts>
        </NavContext>
    );
};

export default Page;