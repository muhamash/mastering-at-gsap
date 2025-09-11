import FullScreenNav from "./GsapNav";
import Navbar from "./Nav";
import PageTransition from "./PageTransitionComponent";

export default function BaseLayouts ( { children } )
{

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar/>
            <FullScreenNav/>
            {/* page transition like loading each page change */}
            <PageTransition>
                {children}
            </PageTransition>

            {/* footer?? */ }
        </div>
    );
}
