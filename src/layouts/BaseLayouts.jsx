import PageTransition from "./PageTransitionComponent";

export default function BaseLayouts ( { children } )
{

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">

            {/* page transition like loading each page change */}
            <PageTransition>
                {children}
            </PageTransition>
            
            {/* rest page */}
            {/* <div ref={ pageRef } className="grow-1">
                { children }
            </div> */}

            {/* footer?? */ }
        </div>
    );
}
