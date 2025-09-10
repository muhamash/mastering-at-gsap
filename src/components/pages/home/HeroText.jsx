import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Lorem ipsum 
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                sit
                <div className='h-[7vw] w-[16vw] rounded-full mx-5 overflow-hidden flex items-center justify-center mt-1 '>
                    <Video />
                </div>
                onsectetur 
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                adipisicing elit. Dignissimos, sequi!
            </div>
        </div>
    )
}

export default HomeHeroText