import { Outlet } from 'react-router';
import BaseLayouts from "./layouts/BaseLayouts";

const Page = () => {
    return (
        <BaseLayouts>
            <Outlet/>
        </BaseLayouts>
    );
};

export default Page;