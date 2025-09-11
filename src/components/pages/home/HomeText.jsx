import { Link } from 'react-router';

const HomeBottomText = () => {

    return (
        <div className='font-[font2] flex items-center justify-center gap-2 md:py-10'>

            <div className='lg:border-3 border-2 hover:border-[#50fd84] hover:text-[#000000] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase bg-[#c650fd] hover:bg-transparent transition-all duration-200 ease-in-out'>
                <Link className='text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
            </div>
      
            <div className='lg:border-3 border-2 hover:border-[#508afd] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase hover:bg-sky-500 transition-all duration-200 ease-in-out'>
                <Link className='text-[6vw] lg:mt-6' to='/agency'>agency</Link>
            </div>
        </div>
    );
}

export default HomeBottomText