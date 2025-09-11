export const NavItem = ({ title, color, isLast, style }) => (
    <div 
        className={`link origin-top relative ${isLast ? 'border-y-1' : 'border-t-1'} border-white opacity-0`}
        style={style}
    >
        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>
            {title}
        </h1>
        <div className='moveLink absolute text-black flex top-0' style={{ backgroundColor: color }}>

            {[1, 2].map((duplicateIndex) => (
                <div key={duplicateIndex} className='moveX flex items-center'>
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
            ))}
        </div>
    </div>
)