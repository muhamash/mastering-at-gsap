import { useNavigate } from 'react-router';

export const NavItem = ({ title, color, handleClose, style }) => {
    const navigate = useNavigate();

    return (
        <div
            className="link origin-top relative opacity-0 cursor-pointer group overflow-hidden"
            style={ style }
            onClick={ () =>
            {
                navigate( `/` )
                handleClose();
            } }
        >
            {/* Modern Container with Aesthetic Border */ }
            <div className="relative mx-6 my-4">
                
                {/* Decorative Corner Elements */ }
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-white/40 transition-all duration-300 group-hover:border-white/80 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-white/40 transition-all duration-300 group-hover:border-white/80 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-white/40 transition-all duration-300 group-hover:border-white/80 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-white/40 transition-all duration-300 group-hover:border-white/80 group-hover:w-12 group-hover:h-12"></div>
                
                {/* Subtle Grid Pattern Background */ }
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="w-full h-full"
                        style={ {
                            backgroundImage: `
                                linear-gradient(white 1px, transparent 1px),
                                linear-gradient(90deg, white 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px'
                        } }
                    />
                </div>
                
                {/* Gradient Border Effect */ }
                <div
                    className="absolute inset-0 p-[1px] rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={ {
                        background: `linear-gradient(45deg, ${color}60, transparent, ${color}60)`
                    } }
                >
                    <div className="w-full h-full bg-black/20 backdrop-blur-sm rounded-lg"></div>
                </div>
                
                {/* Main Title */ }
                <div className="relative z-10 px-8 py-6">
                    <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] uppercase tracking-widest relative">
                        {/* Text Shadow Effect */ }
                        <span className="absolute inset-0 text-white/20 blur-sm">{ title }</span>
                        <span className="relative text-white drop-shadow-lg">{ title }</span>
                        
                        {/* Underline Accent */ }
                        <div
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r transition-all duration-500 group-hover:w-full w-0"
                            style={ {
                                background: `linear-gradient(90deg, transparent, ${color}, transparent)`
                            } }
                        />
                    </h1>
                    
                    {/* Floating Accent Dots */ }
                    <div className="absolute top-4 right-4 flex space-x-1">
                        <div
                            className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"
                            style={ { backgroundColor: color } }
                        />
                        <div
                            className="w-2 h-2 rounded-full opacity-40 group-hover:opacity-80 transition-all duration-500 delay-100"
                            style={ { backgroundColor: color } }
                        />
                        <div
                            className="w-2 h-2 rounded-full opacity-20 group-hover:opacity-60 transition-all duration-700 delay-200"
                            style={ { backgroundColor: color } }
                        />
                    </div>
                </div>
                
                {/* Side Accent Lines */ }
                <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 group-hover:h-full transition-all duration-500 rounded-full"
                    style={ { backgroundColor: color } }
                />
                <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-0 group-hover:h-full transition-all duration-500 delay-100 rounded-full"
                    style={ { backgroundColor: color } }
                />
            </div>

            {/* Original Hover Effect */ }
            <div className="moveLink absolute z-20 text-black flex top-0 
             bg-white/10 backdrop-blur-lg rounded-xl shadow-lg" >
                { [ 1, 2 ].map( ( duplicateIndex ) => (
                    <div key={ duplicateIndex } className='moveX flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>
                            Pour Tout voir
                        </h2>
                        <img
                            className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover'
                            src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                            alt="Project thumbnail"
                            loading="lazy"
                        />
                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>
                            Pour Tout voir
                        </h2>
                        <img
                            className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover'
                            src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                            alt="Project thumbnail"
                            loading="lazy"
                        />
                    </div>
                ) ) }
            </div>
        </div>
    );
};