import PageTransition from "./PageTransitionComponent";

export default function BaseLayouts({children}) {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">

            <PageTransition>
                {children}
            </PageTransition>

            {/* footer?? */}
        </div>
    );
}
