import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-72 lg:mt-0  text-center py-10 md:py-50'>
            <div className='lg:text-[9.5vw] text-[10vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Lorem ipsum 
            </div>
            <div className='lg:text-[9.5vw] text-[10vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                sit
                <div className='h-[7vw] w-[16vw] rounded-full mx-5 overflow-hidden flex items-center justify-center py-1 mb-3 '>
                    <Video />
                </div>
                onsectetur 
            </div>
            <div className='lg:text-[9.5vw] text-[10vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                adipisicing elit. Dignissimos, sequi!
            </div>
        </div>
    )
}

export default HomeHeroText