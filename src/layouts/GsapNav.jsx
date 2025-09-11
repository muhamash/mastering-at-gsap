import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useCallback, useContext, useRef } from 'react'
import { NavbarContext } from '../context/NavContext'
import { NavItem } from './NavItems'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const timelineRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)

    // Memoized close handler
    const handleClose = useCallback(() => {
        setNavOpen(false)
    }, [setNavOpen])

    // Single timeline instance with optimized animations
    const createTimeline = useCallback(() => {
        if (timelineRef.current) {
            timelineRef.current.kill()
        }

        const tl = gsap.timeline({
            paused: true,
            defaults: {
                ease: "power2.inOut"
            }
        })

        // Set initial states without animation (more performant)
        gsap.set('.fullscreennav', { 
            display: 'block',
            visibility: 'visible'
        })
        
        gsap.set('.stairing', { 
            height: 0,
            transformOrigin: 'bottom'
        })
        
        gsap.set('.link', { 
            opacity: 0, 
            rotateX: 90,
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d'
        })
        
        gsap.set('.navlink', { opacity: 0 })

        // Opening animation
        tl.to('.stairing', {
            height: '100%',
            duration: 0.6,
            stagger: {
                amount: 0.3,
                from: "start"
            }
        })
        .to('.link', {
            opacity: 1,
            rotateX: 0,
            duration: 0.5,
            stagger: {
                amount: 0.3,
                from: "start"
            }
        }, "-=0.3")
        .to('.navlink', {
            opacity: 1,
            duration: 0.3
        }, "-=0.4")

        timelineRef.current = tl
        return tl
    }, [])

    // Optimized reverse animation
    const reverseAnimation = useCallback(() => {
        if (!timelineRef.current) return

        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        })

        tl.to('.navlink', {
            opacity: 0,
            duration: 0.2
        })
        .to('.link', {
            opacity: 0,
            rotateX: 90,
            duration: 0.4,
            stagger: {
                amount: 0.15,
                from: "end"
            }
        }, "-=0.1")
        .to('.stairing', {
            height: 0,
            duration: 0.5,
            stagger: {
                amount: 0.15,
                from: "end"
            }
        }, "-=0.3")
        .set('.fullscreennav', {
            display: 'none',
            visibility: 'hidden'
        })

        return tl
    }, [])

    // gsap
    useGSAP(() => {
        if (navOpen) {
            const timeline = createTimeline()
            timeline.play()
        } else {
            reverseAnimation()
        }

        // Cleanup function
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill()
            }
        }
    }, [navOpen, createTimeline, reverseAnimation])

    // Performance: Add will-change CSS for animated elements
    const animatedStyles = {
        // Force hardware acceleration
        transform: 'translateZ(0)', 
        willChange: 'transform, opacity'
    }

    return (
        <div 
            ref={fullScreenRef} 
            id='fullscreennav' 
            className='fullscreennav invisible text-white overflow-hidden h-screen w-full z-50 absolute'
            style={animatedStyles}
        >
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    {/* Using map for better performance and maintainability */}
                    {[...Array(5)].map((_, index) => (
                        <div 
                            key={index}
                            className='stairing h-0 w-1/5 bg-black' 
                            style={animatedStyles}
                        />
                    ))}
                </div>
            </div>
            
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start opacity-0">
                    <div className=''>
                        <div className='lg:w-36 w-24'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div 
                        onClick={handleClose} 
                        className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer hover:scale-110 transition-transform duration-200'
                        role="button"
                        aria-label="Close navigation"
                    >
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#fd50ef]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#fd50fa]'></div>
                    </div>
                </div>
                
                <div className='py-36'>
                    {/* Navigation Items */}
                    {[
                        { title: 'Projects', color: '#50e0fd' },
                        { title: 'Agency', color: '#fd8c50' },
                        { title: 'Home', color: '#fd5073' },
                        { title: 'Blogs', color: '#D3FD50' }
                    ].map((item, index) => (
                        <NavItem 
                            key={item.title}
                            title={item.title}
                            color={item.color}
                            isLast={index === 3}
                            style={animatedStyles}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default FullScreenNav