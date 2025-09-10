import StickyNavbar from "./Nav";

export default function BaseLayouts({children}) {
    return (
        <div className="min-h-screen flex flex-col">
            <StickyNavbar />
            <div className="grow-1">
                { children }
            </div>

            {/* footer?? */}
        </div>
    );
}
