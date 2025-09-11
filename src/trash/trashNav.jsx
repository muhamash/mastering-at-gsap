import { useState } from 'react';
import { useNavigate } from 'react-router';

export const NavItem = ({ title, color, handleClose, style }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    // Generate dynamic route based on title
    const getRoute = (title) => {
        const routes = {
            'Projects': '/projects',
            'Agency': '/agency',
            'Home': '/',
            'Blogs': '/blogs'
        };
        return routes[title] || '/';
    };

    return (
        <div
            className="link origin-top relative opacity-0 group cursor-pointer overflow-hidden"
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                navigate(getRoute(title));
                handleClose();
            }}
        >
            {/* Main Title Container with Glass Effect */}
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl mx-4 my-2 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-2xl group-hover:scale-[1.02]">
                
                {/* Gradient Background Overlay */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                    style={{
                        background: `linear-gradient(135deg, ${color}40, ${color}20)`
                    }}
                />
                
                {/* Title */}
                <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.9] py-8 lg:py-12 uppercase tracking-wider relative z-10 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-lg">
                    {title}
                </h1>

                {/* Animated Border */}
                <div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500 rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${color}, ${color}80)`,
                        width: isHovered ? '100%' : '0%'
                    }}
                />
            </div>

            {/* Premium Hover Effect - Sliding Content */}
            <div 
                className="moveLink absolute inset-0 flex items-center overflow-hidden transition-all duration-700 ease-out"
                style={{
                    background: `linear-gradient(135deg, ${color}f0, ${color}d0)`,
                    transform: isHovered ? 'translateX(0%)' : 'translateX(-100%)',
                    borderRadius: '16px',
                    margin: '8px 16px'
                }}
            >
                {/* Animated Content Strip */}
                <div className="flex items-center animate-scroll-x">
                    {[1, 2, 3].map((duplicateIndex) => (
                        <div key={duplicateIndex} className="moveX flex items-center whitespace-nowrap">
                            
                            {/* Enhanced Text with Modern Styling */}
                            <span className="font-[font2] lg:text-[4vw] text-3xl font-bold text-black/90 mx-8 tracking-wide drop-shadow-sm">
                                EXPLORE {title.toUpperCase()}
                            </span>
                            
                            {/* Modern Image with Effects */}
                            <div className="relative mx-6">
                                <img
                                    className="lg:h-28 h-12 lg:w-28 w-12 rounded-full object-cover shadow-2xl border-4 border-white/30 transition-transform duration-300 hover:scale-110"
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="Project showcase"
                                    loading="lazy"
                                />
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-sm scale-110 -z-10" />
                            </div>

                            {/* Accent Symbol */}
                            <div className="mx-6 text-black/70">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="lg:w-12 lg:h-12 w-6 h-6">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>

                            {/* Secondary Text */}
                            <span className="font-[font2] lg:text-[4vw] text-3xl font-bold text-black/90 mx-8 tracking-wide drop-shadow-sm">
                                DISCOVER MORE
                            </span>

                            {/* Another Modern Image */}
                            <div className="relative mx-6">
                                <img
                                    className="lg:h-28 h-12 lg:w-28 w-12 rounded-full object-cover shadow-2xl border-4 border-white/30 transition-transform duration-300 hover:scale-110"
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    alt="Project showcase"
                                    loading="lazy"
                                />
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-sm scale-110 -z-10" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                            style={{
                                left: `${20 + i * 15}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: '3s'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, ${color}40 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${color}30 0%, transparent 50%)`
                    }}
                />
            </div>
        </div>
    );
};

// Add these custom animations to your global CSS or Tailwind config
// @keyframes scroll-x {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }

// @keyframes float {
//   0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
//   50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
// }

// .animate-scroll-x {
//   animation: scroll-x 20s linear infinite;
// }

// .animate-float {
//   animation: float 3s ease-in-out infinite;
// }